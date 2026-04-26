import { Head, useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogClose,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/layouts/app/tableData/data-table';
import { columns, Tanaman } from '@/pages/admin/tanaman/columnsTan';
import { useEffect, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

type Kategori = {
    id: number;
    nama_kategori: string;
};

export default function InputData() {
    const { flash, kategoris, tanamans } = usePage<{
        flash?: { success?: string };
        kategoris: Kategori[];
        tanamans: Tanaman[];
    }>().props;

    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const formatRupiah = (value: number | string) => {
        if (!value) return '';

        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(Number(value));
    };

    const {
        data: createData,
        setData: setCreateData,
        post,
        processing: createProcessing,
        errors: createErrors,
        reset: resetCreate,
    } = useForm({
        kategori_id: null as number | null,
        nama_tanaman: '',
        asal_tanaman: '',
        deskripsi_tanaman: '',
        harga: 0,
        stok: '' as number | '',
        status: 'tersedia',
        musim: '',
        foto: null as File | null,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post('/postDataTanaman', {
            forceFormData: true,
            onSuccess: () => {
                resetCreate();
                setOpenCreate(false);
                toast.success('Floratify.', {
                    description: 'Data tanaman telah berhasil disimpan.',
                    position: 'top-center',
                });
            },
        });
    };

    const handleOpenCreate = () => {
        setOpenCreate(true);
    };

    const [selectedTanaman, setSelectedTanaman] = useState<Tanaman | null>(
        null,
    );

    const {
        data: editData,
        setData: setEditData,
        put,
        processing: editProcessing,
        errors: editErrors,
        reset: resetEdit,
    } = useForm({
        kategori_id: 0,
        nama_tanaman: '',
        asal_tanaman: '',
        deskripsi_tanaman: '',
        harga: 0,
        stok: '' as number | '',
        status: '',
        musim: '',
        foto: null as File | null,
    });

    const handleEdit = (tanaman: Tanaman) => {
        setSelectedTanaman(tanaman);

        setEditData({
            kategori_id: tanaman.kategori_id ?? 0,
            nama_tanaman: tanaman.nama_tanaman,
            asal_tanaman: tanaman.asal_tanaman,
            deskripsi_tanaman: tanaman.deskripsi_tanaman,
            harga: tanaman.harga,
            stok: tanaman.stok,
            status: tanaman.status,
            musim: tanaman.musim,
        });

        setOpenEdit(true);
    };

    const submitEdit = (e: React.FormEvent) => {
        e.preventDefault();

        if (selectedTanaman) {
            put(`/updateDataTanaman/${selectedTanaman.id}`, {
                forceFormData: true,
                onSuccess: () => {
                    setOpenEdit(false);
                    resetEdit();
                    toast.success('Floratify.', {
                        description: 'Data tanaman telah berhasil diubah.',
                        position: 'top-center',
                    });
                },
            });
        }
    };

    // const [showAlert, setShowAlert] = useState(true);

    // useEffect(() => {
    //     if (flash?.success) {
    //         const timer = setTimeout(() => {
    //             setShowAlert(false);
    //         }, 3000);

    //         return () => clearTimeout(timer);
    //     }
    // }, [flash?.success]);

    return (
        <AppLayout>
            <Head title="Input Tanaman" />

            <div className="space-y-6 p-6">
                {/* {flash?.success && (
                    <div className="rounded-md bg-green-100 p-3 text-green-700">
                        {flash.success}
                    </div>
                )} */}

                <Dialog open={openCreate} onOpenChange={setOpenCreate}>
                    <DialogTrigger asChild>
                        <Button
                            variant="default"
                            className="cursor-pointer"
                            onClick={handleOpenCreate}
                        >
                            Tambah Data Tanaman
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-4xl">
                        <div className="w-fullno-scrollbar -mx-4 max-h-[75vh] overflow-y-auto p-4">
                            <h1 className="pb-5 text-2xl font-semibold">
                                Input Tanaman
                            </h1>
                            <form onSubmit={submit} id="tanaman-form">
                                <div className="flex flex-wrap gap-6">
                                    <div className="flex w-[calc(50%-0.75rem)] flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <label>Kategori Tanaman :</label>

                                            <Select
                                                value={
                                                    createData.kategori_id?.toString() ??
                                                    ''
                                                }
                                                onValueChange={(value) =>
                                                    setCreateData(
                                                        'kategori_id',
                                                        Number(value),
                                                    )
                                                }
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih Kategori" />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    {kategoris.map(
                                                        (kategori) => (
                                                            <SelectItem
                                                                key={
                                                                    kategori.id
                                                                }
                                                                value={kategori.id.toString()}
                                                            >
                                                                {
                                                                    kategori.nama_kategori
                                                                }
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </SelectContent>
                                            </Select>

                                            {createErrors.kategori_id && (
                                                <p className="text-sm text-red-500">
                                                    {createErrors.kategori_id}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Nama Tanaman :</label>
                                            <Input
                                                type="text"
                                                value={createData.nama_tanaman}
                                                onChange={(e) =>
                                                    setCreateData(
                                                        'nama_tanaman',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            {createErrors.nama_tanaman && (
                                                <p className="text-sm text-red-500">
                                                    {createErrors.nama_tanaman}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Deskripsi :</label>
                                            <textarea
                                                value={
                                                    createData.deskripsi_tanaman
                                                }
                                                onChange={(e) =>
                                                    setCreateData(
                                                        'deskripsi_tanaman',
                                                        e.target.value,
                                                    )
                                                }
                                                className="min-h-[116px] rounded-md border px-3 py-2"
                                            />
                                            {createErrors.deskripsi_tanaman && (
                                                <p className="text-sm text-red-500">
                                                    {
                                                        createErrors.deskripsi_tanaman
                                                    }
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Musim :</label>
                                            <Input
                                                type="text"
                                                value={createData.musim}
                                                onChange={(e) =>
                                                    setCreateData(
                                                        'musim',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            {createErrors.musim && (
                                                <p className="text-sm text-red-500">
                                                    {createErrors.musim}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex w-[calc(50%-0.75rem)] flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <label>Asal Tanaman :</label>
                                            <Input
                                                type="text"
                                                value={createData.asal_tanaman}
                                                onChange={(e) =>
                                                    setCreateData(
                                                        'asal_tanaman',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            {createErrors.asal_tanaman && (
                                                <p className="text-sm text-red-500">
                                                    {createErrors.asal_tanaman}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Harga :</label>
                                            <Input
                                                type="text"
                                                value={formatRupiah(
                                                    createData.harga,
                                                )}
                                                onChange={(e) => {
                                                    const onlyNumber =
                                                        e.target.value.replace(
                                                            /[^0-9]/g,
                                                            '',
                                                        );
                                                    setCreateData(
                                                        'harga',
                                                        Number(onlyNumber),
                                                    );
                                                }}
                                                placeholder="Rp "
                                            />

                                            {createErrors.harga && (
                                                <p className="text-sm text-red-500">
                                                    {createErrors.harga}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Stok :</label>
                                            <Input
                                                type="number"
                                                value={createData.stok}
                                                onChange={(e) => {
                                                    const value =
                                                        e.target.value;

                                                    setCreateData(
                                                        'stok',
                                                        value === ''
                                                            ? ''
                                                            : Number(value),
                                                    );
                                                }}
                                                min={0}
                                            />
                                            {createErrors.stok && (
                                                <p className="text-sm text-red-500">
                                                    {createErrors.stok}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Status :</label>

                                            <Select
                                                value={createData.status}
                                                onValueChange={(value) =>
                                                    setCreateData(
                                                        'status',
                                                        value,
                                                    )
                                                }
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih Status" />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    <SelectItem value="tersedia">
                                                        Tersedia
                                                    </SelectItem>
                                                    <SelectItem value="habis">
                                                        Habis
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            {createErrors.status && (
                                                <p className="text-sm text-red-500">
                                                    {createErrors.status}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Foto Tanaman :</label>
                                            <Input
                                                type="file"
                                                onChange={(e) =>
                                                    setCreateData(
                                                        'foto',
                                                        e.target.files
                                                            ? e.target.files[0]
                                                            : null,
                                                    )
                                                }
                                            />
                                            {createErrors.foto && (
                                                <p className="text-sm text-red-500">
                                                    {createErrors.foto}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <DialogFooter className="gap-2">
                            <DialogClose asChild>
                                <Button variant="outline">Batal</Button>
                            </DialogClose>

                            <Button
                                type="submit"
                                form="tanaman-form"
                                disabled={createProcessing}
                                className="cursor-pointer"
                            >
                                {createProcessing ? 'Menyimpan...' : 'Simpan'}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                {/* {flash?.success && showAlert && (
                    <Alert className="mb-4 border-green-500 bg-green-50">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <AlertTitle className="text-green-700">
                            Berhasil
                        </AlertTitle>
                        <AlertDescription className="text-green-600">
                            {flash.success}
                        </AlertDescription>
                    </Alert>
                )} */}
                <DataTable
                    columns={columns(handleEdit)}
                    data={tanamans ?? []}
                />
                <Dialog open={openEdit} onOpenChange={setOpenEdit}>
                    <DialogContent className="sm:max-w-4xl">
                        <div className="w-fullno-scrollbar -mx-4 max-h-[75vh] overflow-y-auto p-4">
                            <h1 className="pb-5 text-2xl font-semibold">
                                Edit Tanaman
                            </h1>
                            <form onSubmit={submitEdit} id="tanaman-form-edit">
                                <div className="flex flex-wrap gap-6">
                                    <div className="flex w-[calc(50%-0.75rem)] flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <label>Kategori Tanaman :</label>

                                            <Select
                                                value={
                                                    editData.kategori_id?.toString() ??
                                                    ''
                                                }
                                                onValueChange={(value) =>
                                                    setEditData(
                                                        'kategori_id',
                                                        Number(value),
                                                    )
                                                }
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih Kategori" />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    {kategoris.map(
                                                        (kategori) => (
                                                            <SelectItem
                                                                key={
                                                                    kategori.id
                                                                }
                                                                value={kategori.id.toString()}
                                                            >
                                                                {
                                                                    kategori.nama_kategori
                                                                }
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </SelectContent>
                                            </Select>

                                            {editErrors.kategori_id && (
                                                <p className="text-sm text-red-500">
                                                    {editErrors.kategori_id}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Nama Tanaman :</label>
                                            <Input
                                                type="text"
                                                value={editData.nama_tanaman}
                                                onChange={(e) =>
                                                    setEditData(
                                                        'nama_tanaman',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            {editErrors.nama_tanaman && (
                                                <p className="text-sm text-red-500">
                                                    {editErrors.nama_tanaman}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Deskripsi :</label>
                                            <textarea
                                                value={
                                                    editData.deskripsi_tanaman
                                                }
                                                onChange={(e) =>
                                                    setEditData(
                                                        'deskripsi_tanaman',
                                                        e.target.value,
                                                    )
                                                }
                                                className="min-h-[116px] rounded-md border px-3 py-2"
                                            />
                                            {editErrors.deskripsi_tanaman && (
                                                <p className="text-sm text-red-500">
                                                    {
                                                        editErrors.deskripsi_tanaman
                                                    }
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Musim :</label>
                                            <Input
                                                type="text"
                                                value={editData.musim}
                                                onChange={(e) =>
                                                    setEditData(
                                                        'musim',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            {editErrors.musim && (
                                                <p className="text-sm text-red-500">
                                                    {editErrors.musim}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex w-[calc(50%-0.75rem)] flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <label>Asal Tanaman :</label>
                                            <Input
                                                type="text"
                                                value={editData.asal_tanaman}
                                                onChange={(e) =>
                                                    setEditData(
                                                        'asal_tanaman',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            {editErrors.asal_tanaman && (
                                                <p className="text-sm text-red-500">
                                                    {editErrors.asal_tanaman}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Harga :</label>
                                            <Input
                                                type="text"
                                                value={formatRupiah(
                                                    editData.harga,
                                                )}
                                                onChange={(e) => {
                                                    const onlyNumber =
                                                        e.target.value.replace(
                                                            /[^0-9]/g,
                                                            '',
                                                        );
                                                    setEditData(
                                                        'harga',
                                                        Number(onlyNumber),
                                                    );
                                                }}
                                                placeholder="Rp "
                                            />

                                            {editErrors.harga && (
                                                <p className="text-sm text-red-500">
                                                    {editErrors.harga}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Stok :</label>
                                            <Input
                                                type="number"
                                                value={editData.stok}
                                                onChange={(e) => {
                                                    const value =
                                                        e.target.value;

                                                    setEditData(
                                                        'stok',
                                                        value === ''
                                                            ? ''
                                                            : Number(value),
                                                    );
                                                }}
                                                min={0}
                                            />
                                            {editErrors.stok && (
                                                <p className="text-sm text-red-500">
                                                    {editErrors.stok}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Status :</label>

                                            <Select
                                                value={editData.status}
                                                onValueChange={(value) =>
                                                    setEditData('status', value)
                                                }
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih Status" />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    <SelectItem value="tersedia">
                                                        Tersedia
                                                    </SelectItem>
                                                    <SelectItem value="habis">
                                                        Habis
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            {editErrors.status && (
                                                <p className="text-sm text-red-500">
                                                    {editErrors.status}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Foto Tanaman :</label>
                                            <Input
                                                type="file"
                                                onChange={(e) =>
                                                    setEditData(
                                                        'foto',
                                                        e.target.files
                                                            ? e.target.files[0]
                                                            : null,
                                                    )
                                                }
                                            />
                                            {editErrors.foto && (
                                                <p className="text-sm text-red-500">
                                                    {editErrors.foto}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <DialogFooter className="gap-2">
                            <DialogClose asChild>
                                <Button variant="outline">Batal</Button>
                            </DialogClose>

                            <Button
                                type="submit"
                                form="tanaman-form-edit"
                                disabled={editProcessing}
                                className="cursor-pointer"
                            >
                                {editProcessing ? 'Menyimpan...' : 'Simpan'}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </AppLayout>
    );
}
