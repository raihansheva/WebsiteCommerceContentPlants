<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class tanaman extends Model
{

    protected $table = 'tanamans';

    protected $fillable = ['kategori_id', 'nama_tanaman', 'asal_tanaman', 'deskripsi_tanaman', 'harga', 'stok', 'status', 'musim', 'foto'];

    public function kategori()
    {
        return $this->belongsTo(Kategori::class);
    }
}
