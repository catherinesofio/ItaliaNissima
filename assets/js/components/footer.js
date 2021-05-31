"use strict";

let footer = document.createElement("footer");
footer.classList.add("bg-secondary", "pt-4");
footer.classList.add("bg-dark");
footer.innerHTML = `<div class="container">
    <div class="row py-4">
        <div class="col-lg-3 col-12 align-left">
            <a class="navbar-brand" href="index.html">
                <i class='fa fa-utensils text-success'></i>
                <span class="text-light h5">Italia</span><span class="text-danger h5 semi-bold-600">Nissima</span>
            </a>
            
            <p class="text-light my-lg-4 my-2">
                Lo mejor de Italia en la mesa de tu casa.
            </p>

            <ul class="list-inline footer-icons light-300">
                <li class="list-inline-item m-0">
                    <a class="btn btn-outline-light" target="_blank" href="http://facebook.com/">
                        <i class='fab fa-facebook-f'></i>
                    </a>
                </li>
                <li class="list-inline-item m-0">
                    <a class="btn btn-outline-light" target="_blank" href="https://www.linkedin.com/">
                        <i class='fab fa-linkedin-in text-light'></i>
                    </a>
                </li>
                <li class="list-inline-item m-0">
                    <a class="btn btn-outline-light" target="_blank" href="https://www.whatsapp.com/">
                        <i class='fab fa-whatsapp text-light'></i>
                    </a>
                </li>
                <li class="list-inline-item m-0">
                    <a class="btn btn-outline-light" target="_blank" href="https://www.flickr.com/">
                        <i class='fab fa-flickr text-light'></i>
                    </a>
                </li>
                <li class="list-inline-item m-0">
                    <a class="btn btn-outline-light" target="_blank" href="https://www.medium.com/">
                        <i class='fab fa-medium-m text-light' ></i>
                    </a>
                </li>
            </ul>
        </div>

        <div class="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h3 class="h4 pb-lg-3 text-light light-300">Productos</h2>
                <ul class="list-unstyled text-light light-300">
                    <li class="pb-2">
                        <a class="btn btn-outline-success py-1" href="products.html">Ver Productos</a>
                    </li>
                </ul>
        </div>

        <div class="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h2 class="h4 pb-lg-3 text-light light-300">Subscripciones</h2>
            <ul class="list-unstyled text-light light-300">
                <li class="pb-2">
                    <a class="btn btn-outline-success py-1" href="subscriptions.html">Ver subscripciones</a>
                </li>
            </ul>
        </div>

        <div class="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h2 class="h4 pb-lg-3 text-light light-300">Contacto</h2>
            <ul class="list-unstyled text-light light-300">
                <li class="pb-2">
                    <i class='fa fa-phone'></i> <a class="text-decoration-none text-light py-1" href="tel:010-020-0340">021-2354-4568</a>
                </li>
                <li class="pb-2">
                    <i class='fa fa-envelope'></i> <a class="text-decoration-none text-light py-1" href="mailto:info@italianissima.com.it">info@italianissima.com.it</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="w-100 bg-success py-3">
    <div class="container">
        <div class="row pt-2">
            <div class="col-lg-6 col-sm-12">
                <p class="text-lg-start text-center text-light light-300">
                &copy; Copyright 2021 ItaliaNissima. Todos los derechos reservados.
                </p>
            </div>
            <div class="col-lg-6 col-sm-12">
                <p class="text-lg-end text-center text-light light-300">
                    Diseñado por <a rel="sponsored" class="text-decoration-none text-light" 
                    href="https://cursophp.com.ar/" target="_blank"><strong>CAC FullStack</strong></a> &amp; <a rel="sponsored" class="text-decoration-none text-light" href="https://www.linkedin.com/in/catalina-sofio-avogadro/"><strong>Catalina Sofio Avogadro</strong></a>
                </p>
            </div>
        </div>
    </div>
</div>`;

document.body.appendChild(footer);