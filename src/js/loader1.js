document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("global-loader");

    // Esconde o loader ao carregar a página
    setTimeout(() => {
        loader.classList.add("hide");
    }, 2000);

    // CORREÇÃO: Force esconder o loader ao voltar para a página
    window.addEventListener("pageshow", (event) => {
        if (event.persisted) {
            // Página foi restaurada do cache (botão voltar)
            loader.classList.add("hide");
        }
    });

    document.addEventListener("click", e => {
        const el = e.target.closest("a, button[data-loader]");
        if (!el) return;

        const href = el.getAttribute("href");

        // Não mostrar loader em links sem navegação
        if (!href || href === "#" || href.startsWith("#")) {
            return;
        }

        // Se o link abre a MESMA página, não ativa loader
        if (href === window.location.pathname) {
            return;
        }

        // Loader ativado apenas para navegação real
        if (el.tagName === "A") {
            e.preventDefault();
            loader.classList.remove("hide");

            setTimeout(() => {
                window.location.href = href;
            }, 500); // Reduzi para 500ms (opcional)
        }
    });
});
