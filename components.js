class mainNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div class="nav-container">
                    <div class="nav-left">
                        <h2 class="nav-title">The Warp Pipe</h2>
                        <span class="separator">|</span>
                        <ul class="nav-menu">
                            <li><a href="index.html" class="nav-link">Home</a></li>
                            <li><a href="about.html"     class="nav-link">About Us</a></li>
                            <li><a href="contact.html" class="nav-link">Contact</a></li>
                        </ul>
                    </div>
                    <div class="logo-img">
                        <img src="img/logo.png" alt="Logo del Blog"> <!-- Editar segun la carpeta de imagenes -->
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
