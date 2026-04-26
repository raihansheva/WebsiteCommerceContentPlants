import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { router } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, MoreVertical } from 'lucide-react';
import { ArrowUpDown } from 'lucide-react';
import { toast } from 'sonner';

export type Tanaman = {
    id: number;
    kategori_id: number;
    nama_tanaman: string;
    deskripsi_tanaman: string;
    asal_tanaman: string;
    harga: number;
    stok: number;
    status: string;
    musim: string;
    foto: string;
    kategori?: {
        id: number;
        nama_kategori: string;
    };
};

export const columns = (
    onEdit: (tanaman: Tanaman) => void,
): ColumnDef<Tanaman>[] => [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'no',
        header: 'No',
        cell: ({ row }) => {
            return row.index + 1;
        },
    },
    {
        accessorKey: 'kategori.nama_kategori',
        header: 'Nama Kategori',
    },
    {
        accessorKey: 'nama_tanaman',
        header: 'Nama Tanaman',
    },
    {
        accessorKey: 'asal_tanaman',
        header: 'Asal Tanaman',
    },
    {
        accessorKey: 'deskripsi_tanaman',
        header: 'Deskripsi Tanaman',
    },
    {
        accessorKey: 'harga',
        header: 'Harga',
    },
    {
        accessorKey: 'stok',
        header: 'Stok',
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const status = row.original.status;
            return (
                <Badge
                    variant={status === 'tersedia' ? 'default' : 'destructive'}
                >
                    {status}
                </Badge>
            );
        },
    },
    {
        accessorKey: 'musim',
        header: 'Musim',
    },
    {
        accessorKey: 'foto',
        header: 'Foto',
        cell: ({ row }) => {
            const foto = row.original.foto;

            return (
                <img
                    src={`/storage/${foto}`}
                    alt="Foto Tanaman"
                    className="h-16 w-16 rounded object-cover"
                />
            );
        },
    },
    {
        accessorKey: 'action',
        header: 'Action',
        cell: ({ row }) => {
            const tanaman = row.original;

            const handleDelete = () => {
                router.delete(`/tanaman/${tanaman.id}`, {
                    preserveScroll: true,
                });
                toast.success('Floratify.', {
                    description: 'Data tanaman telah berhasil dihapus.',
                    position: 'top-center',
                });
            };

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="h-8 w-8 cursor-pointer p-0"
                        >
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuItem
                                onClick={() => onEdit(tanaman)}
                                className="cursor-pointer"
                            >
                                Edit
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <DropdownMenuItem
                                        onSelect={(e) => e.preventDefault()}
                                        variant="destructive"
                                        className="cursor-pointer"
                                    >
                                        Hapus
                                    </DropdownMenuItem>
                                </AlertDialogTrigger>

                                <AlertDialogContent className="max-w-sm">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            Yakin ingin menghapus?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Data tanaman "{tanaman.nama_tanaman}
                                            " akan dihapus secara permanen.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>

                                    <AlertDialogFooter>
                                        <AlertDialogCancel className='cursor-pointer'>
                                            Batal
                                        </AlertDialogCancel>
                                        <AlertDialogAction
                                            onClick={handleDelete}
                                            className="bg-red-600 hover:bg-red-700 cursor-pointer"
                                        >
                                            Hapus
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
