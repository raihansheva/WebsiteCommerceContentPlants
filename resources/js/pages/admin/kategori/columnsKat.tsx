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

export type Kategori = {
    id: number;
    nama_kategori: string;
    deskripsi: string;
};

export const columns = (
    onEdit: (kategori: Kategori) => void,
): ColumnDef<Kategori>[] => [
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
        accessorKey: 'nama_kategori',
        header: 'Nama Kategori',
    },
    {
        accessorKey: 'deskripsi',
        header: 'Deskripsi',
    },
    {
        accessorKey: 'action',
        header: 'Action',
        cell: ({ row }) => {
            const kategori = row.original;

            const handleDelete = () => {
                router.delete(`/kategori/${kategori.id}`, {
                    preserveScroll: true,
                });
                toast.success('Floratify.', {
                    description: 'Data kategori telah berhasil dihapus.',
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
                                onClick={() => onEdit(kategori)}
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
                                            Data kategori "
                                            {kategori.nama_kategori}" " akan
                                            dihapus secara permanen.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>

                                    <AlertDialogFooter>
                                        <AlertDialogCancel className='cursor-pointer'>
                                            Batal
                                        </AlertDialogCancel >
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
