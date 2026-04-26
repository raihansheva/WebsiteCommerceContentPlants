import { Head, useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { DataTable } from '@/layouts/app/tableData/data-table';
import { columns, Kategori } from '@/pages/admin/kategori/columnsKat';
import { useState } from 'react';
import { toast } from 'sonner';

export default function InputKat() {
    const { flash, kategoris } = usePage<{
        flash?: { success?: string };
        kategoris: Kategori[];
    }>().props;

    const [openEdit, setOpenEdit] = useState(false);
    const [openCreate, setOpenCreate] = useState(false);

    const {
        data: createData,
        setData: setCreateData,
        post,
        processing: createProcessing,
        errors: createErrors,
        reset: resetCreate,
    } = useForm({
        nama_kategori: '',
        deskripsi: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post('/postDataKategori', {
            onSuccess: () => {
                resetCreate();
                setOpenCreate(false);
                toast.success('Floratify.', {
                    description: 'Data kategori telah berhasil ditambahkan.',
                    position: 'top-center',
                });
            },
        });
    };

    const [selectedKategori, setSelectedKategori] = useState<Kategori | null>(
        null,
    );

    const handleOpenCreate = () => {
        setOpenCreate(true);
    };

    const {
        data: editData,
        setData: setEditData,
        put,
        processing: editProcessing,
        errors: editErrors,
        reset: resetEdit,
    } = useForm({
        nama_kategori: '',
        deskripsi: '',
    });

    const handleEdit = (kategori: Kategori) => {
        setSelectedKategori(kategori);

        setEditData({
            nama_kategori: kategori.nama_kategori ?? 0,
            deskripsi: kategori.deskripsi ?? '',
        });

        setOpenEdit(true);
    };

    const submitEdit = (e: React.FormEvent) => {
        e.preventDefault();

        if (selectedKategori) {
            put(`/updateDataKategori/${selectedKategori.id}`, {
                forceFormData: true,
                onSuccess: () => {
                    setOpenEdit(false);
                    resetEdit();
                    toast.success('Floratify.', {
                        description: 'Data kategori telah berhasil diubah.',
                        position: 'top-center',
                    });
                },
            });
        }
    };
    console.log(kategoris);
    return (
        <AppLayout>
            <Head title="Input Kategori" />

            <div className="space-y-6 p-6">
                {/* {flash?.success && (
                    <div className="rounded bg-green-100 p-2 text-green-700">
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
                            Tambah Data Kategori
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <h1 className="text-2xl font-semibold">
                            Input Kategori
                        </h1>
                        <form
                            onSubmit={submit}
                            className="space-y-4"
                            id="form-input-kategori"
                        >
                            <div className="flex flex-col gap-1">
                                <label htmlFor="nama_kategori">
                                    Nama Kategori :
                                </label>
                                <Input
                                    type="text"
                                    placeholder="Masukan Nama Kategori"
                                    value={createData.nama_kategori}
                                    onChange={(e) =>
                                        setCreateData(
                                            'nama_kategori',
                                            e.target.value,
                                        )
                                    }
                                    className="w-full rounded-md border px-3 py-2"
                                />
                                {createErrors.nama_kategori && (
                                    <p className="text-sm text-red-500">
                                        {createErrors.nama_kategori}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="deskripsi">Deskripsi : </label>
                                <textarea
                                    placeholder="Deskripsi"
                                    value={createData.deskripsi}
                                    onChange={(e) =>
                                        setCreateData(
                                            'deskripsi',
                                            e.target.value,
                                        )
                                    }
                                    className="min-h-[100px] w-full rounded-md border px-3 py-2"
                                />
                                {createErrors.deskripsi && (
                                    <p className="text-sm text-red-500">
                                        {createErrors.deskripsi}
                                    </p>
                                )}
                            </div>
                        </form>
                        <DialogFooter>
                            <button
                                disabled={createProcessing}
                                className="cursor-pointer rounded-md bg-primary px-4 py-2 text-white"
                                form="form-input-kategori"
                            >
                                {createProcessing ? 'Menyimpan...' : 'Simpan'}
                            </button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                <DataTable
                    columns={columns(handleEdit)}
                    data={kategoris ?? []}
                />
                <Dialog open={openEdit} onOpenChange={setOpenEdit}>
                    <DialogContent>
                        <div className="w-fullno-scrollbar -mx-4 max-h-[75vh] overflow-y-auto p-4">
                            <h1 className="pb-5 text-2xl font-semibold">
                                Edit Kategori
                            </h1>
                            <form onSubmit={submitEdit} id="tanaman-form-edit">
                                <div className="flex flex-wrap gap-6">
                                    <div className="flex w-full flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <label>Nama Kategori :</label>
                                            <Input
                                                type="text"
                                                value={editData.nama_kategori}
                                                onChange={(e) =>
                                                    setEditData(
                                                        'nama_kategori',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            {editErrors.nama_kategori && (
                                                <p className="text-sm text-red-500">
                                                    {editErrors.nama_kategori}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Deskripsi :</label>
                                            <textarea
                                                value={editData.deskripsi}
                                                onChange={(e) =>
                                                    setEditData(
                                                        'deskripsi',
                                                        e.target.value,
                                                    )
                                                }
                                                className="min-h-[100px] rounded-md border px-3 py-2"
                                            />
                                            {editErrors.deskripsi && (
                                                <p className="text-sm text-red-500">
                                                    {editErrors.deskripsi}
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
