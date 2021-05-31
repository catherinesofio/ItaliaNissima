"use strict";

let nav = document.createElement("nav");
nav.id = "main_nav";
nav.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-dark", "shadow");
nav.innerHTML = `<div class="container d-flex justify-content-between align-items-center">
    <a class="navbar-brand h1" href="index.html">
        <i class='fa fa-utensils text-success'></i>
        <span class="text-light h4">Italia</span><span class="text-danger h4">Nissima</span>
    </a>

    <button class="navbar-toggler border-0 text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler-success" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class='fa fa-bars text-light'></i>
    </button>

    <div class="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between" id="navbar-toggler-success">
        <div class="flex-fill mx-xl-5 mb-2">
            <ul class="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-light">
                <li class="nav-item">
                    <a class="nav-link btn-outline-success rounded-pill text-light px-3" href="index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn-outline-success rounded-pill text-light px-3" href="about.html">Sobre Nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn-outline-success rounded-pill text-light px-3" href="products.html">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn-outline-success rounded-pill text-light px-3" href="subscriptions.html">Subscripciones</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn-outline-success rounded-pill text-light px-3" href="contact.html">Cont&aacute;ctanos</a>
                </li>
            </ul>
        </div>
        
        <div class="navbar align-self-center d-flex">
            <a class="nav-link btn btn-outline-success rounded-pill m-1" href="#"><i class='fa fa-shopping-cart
            text-light'></i></a>
        </div>
    </div>
</div>`;

document.body.appendChild(nav);