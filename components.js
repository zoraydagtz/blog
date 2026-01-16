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