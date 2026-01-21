class mainNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg" style="background-color: #E60012;">
                <div class="container-fluid">
                    <img src="img/logo.png" alt="Bootstrap" width="30" height="24">
                    <a class="navbar-brand" href="#">Hanafuda 1889</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link text-dark" href="index.html" style="font-size: 0.9rem;">Inicio</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-dark" href="contact.html" style="font-size: 0.9rem;">Contáctanos</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-dark" href="about.html" style="font-size: 0.9rem;">Sobre Nosotros</a>
                            </li>
                        </ul>
                        <form class="d-flex ms-auto" role="search" style="max-width: 300px;">
                            <input class="form-control form-control-sm me-2" type="search" placeholder="Buscar (No funciona)" aria-label="Search" style="min-width: 200px;"/>
                            <button class="btn btn-outline-dark btn-sm text-nowrap" type="submit" style="padding: 0.25rem 0.5rem; font-size: 0.875rem; min-width: 70px;">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        `;
    }
}
customElements.define('main-nav', mainNav);

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <p class="footer-title">Autores:</p>
                <p class="footer-authors">
                    Esteban Rafael Mercado Medina · Felipe Ernesto Yañez Sandoval ·
                    Israel Rivera Lopez Bolaños · Ivan Arrieta Ortega · 
                    Ma de los Ángeles Pedraza Salmeron · Jonathan Pacheco Agraz · 
                    Teo · Zorayda Gutierrez Ríos · Jade · Leslie
                </p>
                <p><strong>Email:</strong> equipo.blog@sprint-dev.com</p>
                <p><strong>Proyecto:</strong> El Sitio del Blog</p>
            </footer>
        `;
    }
}
customElements.define('main-footer', Footer);
