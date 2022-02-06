function header(page){
    // Crear el header y resaltar la pagina activa
    var header = document.querySelector("#insertheader");
    header.innerHTML = `
    <div class="logo">
        <a href="/index.html">
            <img src="logos/logo_cdf.svg" height="100%" alt="logo cdf">
        </a>
    </div>
    <nav class="nav">
        <a class="navitem home" href="/index.html">
            <i class="fas fa-home"></i>
            <p>Bienvenida</p>
        </a>
        <a class="navitem" href="/cursos.html">
            <i class="fas fa-chalkboard-teacher"></i>
            <p>Cursos</p>
        </a>
        <a class="navitem" href="/eventos.html">
            <i class="fas fa-calendar-alt"></i>
            <p>Eventos</p>
        </a>
        <a class="navitem" href="/proyectos.html">
            <i class="fas fa-tools"></i>
            <p>Proyectos</p>
        </a>
        <a class="navitem" href="/contactos.html">
            <i class="fas fa-comment-alt"></i>
            <p>Contacto</p>
        </a>
    </nav>
    <div class="social">
        <a class="socialitem" href="https://mail.google.com/mail/" target="_blank">
            <i class="far fa-envelope"></i>
        </a>
        <a class="socialitem" href="https://api.whatsapp.com/send?phone=5492612051915" target="_blank">
            <i class="fab fa-whatsapp"></i>
        </a>
        <a class="socialitem" href="https://instagram.com/casadelfuturo.godoycruz?utm_medium=copy_link" target="_blank">
            <i class="fab fa-instagram"></i>
        </a>
        <a class="socialitem" href="https://www.facebook.com/pages/Casa%20Del%20Futuro%20Godoy%20Cruz/2030594193923869/" target="_blank">
            <i class="fab fa-youtube"></i>
        </a>
    </div>`;
    var pages = document.querySelectorAll(".navitem");
    if(page==0){
        pages[page].className = "navitem home actual";
    }else{
        pages[page].className = "navitem actual";
    }
    
    // Escribo a continuacion del header un elemento aside para el whatsapp, en forma de fixed
    var whatsapp = `
    <aside class="whatsapp">
        <a href="https://api.whatsapp.com/send?phone=5492612051915" target="_blank">
            <img src="imgs/WhatsApp-logo.png" height="50px" width="auto" alt="">
        </a>
    </aside>`
    document.write(whatsapp)
}

function footer(){
    // Crear el footer y ponerlo en la equiqueta
    var footer = document.querySelector("#insertfooter");
    footer.innerHTML = `
    <div class="footercont">
        <div class="logogc">
            <!-- <img src="logos/logo_gc.svg" height="80%" alt="logo cdf"> -->
        </div>
        <hr class="footersep  sep1">
        <div class="infomuni">
            <h3>Municipalidad de Godoy Cruz</h3>
            <p><i class="fas fa-map-marker-alt"></i> Rivadavia 448, Godoy Cruz</p>
            <p><i class="fas fa-phone-alt"></i> 0800-800-6864</p>
        </div>
        <hr class="footersep  sep2">
        <div class="contacto">
            <h3>Nuestras Redes</h3>
            <div class="iconoshoriz">
                <a class="socialitem" href="https://mail.google.com/mail/" target="_blank">
                    <i class="far fa-envelope fa-lg"></i>
                </a>
                <a class="socialitem" href="https://api.whatsapp.com/send?phone=5492612051915" target="_blank">
                    <i class="fab fa-whatsapp  fa-lg"></i>
                </a>
                <a class="socialitem" href="https://instagram.com/casadelfuturo.godoycruz?utm_medium=copy_link" target="_blank">
                    <i class="fab fa-instagram fa-lg"></i>
                </a>
                <a class="socialitem" href="https://www.facebook.com/pages/Casa%20Del%20Futuro%20Godoy%20Cruz/2030594193923869/" target="_blank">
                    <i class="fab fa-youtube fa-lg"></i>
                </a>
            </div>
        </div>
        <hr class="footersep sep3">
        <div class="mapa">
            <h3>¿Dónde estamos?</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4980.710811102107!2d-68.81901943013789!3d-32.94271928080441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0b6d2f7e375f%3A0x819b3cf57de15f9a!2sCasa%20del%20Futuro%2C%20Godoy%20Cruz!5e0!3m2!1ses!2sar!4v1634841427235!5m2!1ses!2sar"
                width="100%"
                height="80%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy">
            </iframe>

        </div>
    </div>`
}