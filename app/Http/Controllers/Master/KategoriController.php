<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use App\Models\kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KategoriController extends Controller
{

    public function index(){
        $kategori = kategori::all();
        return Inertia::render('admin/kategori/adminKategori', [
            'kategoris' => $kategori,
        ]);
    }

    public function postDataK(Request $request)
    {
        $validate = $request->validate([
            'nama_kategori' => 'required|string|max:255',
            'deskripsi' => 'required|string',
        ]);

        kategori::create($validate);

        return redirect()->back()->with('success' , 'Data berhasil disimpan');
    }

    public function updateDataK(Request $request, $id){
        $validate = $request->validate([
            'nama_kategori' => 'required|string|max:255',
            'deskripsi' => 'required|string',
        ]);

        $kategori = kategori::findOrFail($id);
        $kategori->update($validate);

        return redirect()->back()->with('success', 'Data berhasil diupdate');
    }

    public function destroy($id){
        $kategori = kategori::findOrFail($id);
        $kategori->delete();

        return redirect()->back()->with('success', 'Data berhasil dihapus');
    }
}
