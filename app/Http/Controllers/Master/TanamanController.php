<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use App\Models\kategori;
use App\Models\tanaman;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TanamanController extends Controller
{

    public function index()
    {
        $kategoris = kategori::all();
        $tanamans = Tanaman::with('kategori')->get();

        return Inertia::render('admin/tanaman/adminTanaman', [
            'kategoris' => $kategoris,
            'tanamans' => $tanamans
        ]);
    }

    public function postDataT(Request $request)
    {
        $validate = $request->validate([
            'kategori_id' => 'required|exists:kategoris,id',
            'nama_tanaman' => 'required|string|max:255',
            'asal_tanaman' => 'required|string|max:255',
            'deskripsi_tanaman' => 'required|string',
            'harga' => 'required|numeric|min:0',
            'stok' => 'required|numeric|min:0',
            'status' => 'required|string|max:255',
            'musim' => 'required|string|max:255',
            'foto' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);



        if ($request->hasFile('foto')) {
            $path = $request->file('foto')->store('tanaman', 'public');
            $validate['foto'] = $path;
        }

        // dd($validate);

        tanaman::create($validate);

        return redirect()->back()->with('success', 'Data berhasil disimpan');
    }

    public function updateDataT(Request $request, $id)
    {
        $validated = $request->validate([
            'kategori_id' => 'required|exists:kategoris,id',
            'nama_tanaman' => 'required',
            'asal_tanaman' => 'required',
            'deskripsi_tanaman' => 'required',
            'harga' => 'required|numeric',
            'stok' => 'required|numeric',
            'status' => 'required',
            'musim' => 'required',
        ]);

        $tanaman = tanaman::findOrFail($id);
        $tanaman->update($validated);

        return redirect()->back()->with('success', 'Data berhasil diupdate');
    }

    public function destroy($id)
    {
        $tanaman = Tanaman::findOrFail($id);
        $tanaman->delete();

        return back()->with('success', 'Data berhasil dihapus');
    }
}
