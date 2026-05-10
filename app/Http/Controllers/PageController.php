<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home(){

        $username = "Raihan";

        return Inertia::render('home' , [
            'username' => $username
        ]);
    }

    public function artikel(){
        return Inertia::render('artikel');
    }
}
