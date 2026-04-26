<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tanamans', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('kategori_id');

            $table->string('nama_tanaman', 255);
            $table->string('asal_tanaman', 255);
            $table->text('deskripsi_tanaman');

            $table->integer('harga');
            $table->integer('stok')->default(0);

            $table->enum('status', ['tersedia', 'habis'])
                  ->default('tersedia')
                  ->nullable();

            $table->string('musim', 255);
            $table->string('foto', 255);

            $table->timestamps();

            // Jika ada relasi ke tabel kategoris
            $table->foreign('kategori_id')
                  ->references('id')
                  ->on('kategoris')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tanamans');
    }
};