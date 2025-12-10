document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("global-loader");

    // Some após entrar no site
    setTimeout(() => {
        loader.classList.add("hide");
    }, 2000);

    document.addEventListener("click", e => {
        const el = e.target.closest("a, button[data-loader]");
        if (!el) return;

        // Pegar href
        const href = el.getAttribute("href");

        // 1) NÃO mostrar loader em links sem navegação
        if (!href || href === "#" || href.startsWith("#")) {
            return; // <-- IMPORTANTE
        }

        // 2) Se o link abre a MESMA página, não ativa loader
        if (href === window.location.pathname) {
            return;
        }

        // 3) Loader ativado apenas para navegação real
        if (el.tagName === "A") {
            e.preventDefault();
            loader.classList.remove("hide");

            setTimeout(() => {
                window.location.href = href;
            }, 2000);
        }
    });
});
