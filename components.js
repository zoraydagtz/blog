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