<?php

use App\Http\Controllers\Master\KategoriController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\Master\TanamanController;
use App\Models\kategori;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// routes pages
Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/artikel', [PageController::class, 'artikel'])->name('artikel');
// ===========


// routes admin
Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/adminTanaman', [TanamanController::class, 'index'])
        ->name('adminTanaman');
    Route::get('/adminKategori', [KategoriController::class, 'index'])
        ->name('adminKategori');
});
Route::post('/postDataTanaman', [TanamanController::class, 'postDataT']);
Route::put('/updateDataTanaman/{id}', [TanamanController::class, 'updateDataT']);
Route::delete('/tanaman/{id}', [TanamanController::class, 'destroy'])
    ->name('tanaman.destroy');
Route::post('/postDataKategori', [KategoriController::class, 'postDataK']);
Route::put('/updateDataKategori/{id}', [KategoriController::class, 'updateDataK']);
Route::delete('/kategori/{id}', [KategoriController::class, 'destroy'])
    ->name('kategori.destroy');
// ===========

require __DIR__ . '/settings.php';
