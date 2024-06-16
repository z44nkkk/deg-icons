// Función de búsqueda de iconos
function searchIcons() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const icons = document.getElementsByClassName('icon-item');

    for (let i = 0; i < icons.length; i++) {
        const iconName = icons[i].getAttribute('data-name').toLowerCase();
        if (iconName.includes(query)) {
            icons[i].style.display = 'block';
        } else {
            icons[i].style.display = 'none';
        }
    }
}

// Función para resetear filtros y mostrar todos los iconos
function resetFilters() {
    const icons = document.getElementsByClassName('icon-item');
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.display = 'block';
    }
}

function filterSocialIcons() {
    const icons = document.getElementsByClassName('icon-item');
    for (let i = 0; i < icons.length; i++) {
        const iconName = icons[i].getAttribute('data-name');
        if (iconName.includes('social')) {
            icons[i].style.display = 'block';
        } else {
            icons[i].style.display = 'none';
        }
    }
}

function filterAudioIcons() {
    const icons = document.getElementsByClassName('icon-item');
    for (let i = 0; i < icons.length; i++) {
        const iconName = icons[i].getAttribute('data-name');
        if (iconName.includes('audio')) {
            icons[i].style.display = 'block';
        } else {
            icons[i].style.display = 'none';
        }
    }
}

function filterVideoIcons() {
    const icons = document.getElementsByClassName('icon-item');
    for (let i = 0; i < icons.length; i++) {
        const iconName = icons[i].getAttribute('data-name');
        if (iconName.includes('video')) {
            icons[i].style.display = 'block';
        } else {
            icons[i].style.display = 'none';
        }
    }
}

function filterUtilidadesIcons() {
    const icons = document.getElementsByClassName('icon-item');
    for (let i = 0; i < icons.length; i++) {
        const iconName = icons[i].getAttribute('data-name');
        if (iconName.includes('utilidades')) {
            icons[i].style.display = 'block';
        } else {
            icons[i].style.display = 'none';
        }
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const icons = [
        { name: "Casa", file: "home.svg" },
        { name: "Buscar", file: "search.svg" },
        { name: "Menu", file: "menu.svg" },
        { name: "Cerrar", file: "close.svg" },
        { name: "Ajustes", file: "settings.svg" },
        { name: "Perfecto circulo", file: "check-circle.svg" },
        { name: "Corazon", file: "favorite.svg" },
        { name: "Más", file: "add.svg" },
        { name: "Borrar", file: "delete.svg" },
        { name: "Flecha Atras", file: "arrow-back.svg" },
        { name: "Estrella", file: "star.svg" },
        { name: "Flecha Derecha", file: "chevron-right.svg" },
        { name: "Salir", file: "logout.svg" },
        { name: "Flecha Derecha iOS", file: "arrow-forward.svg" },
        { name: "Más circulo", file: "add-circle.svg" },
        { name: "Cancelar", file: "cancel.svg" },
        { name: "Flecha volver iOS", file: "arrow-back-ios.svg" },
        { name: "Flecha derecha", file: "arrow-forward.svg" },
        { name: "Flecha hacia Abajo", file: "arrow-drop-down.svg" },
        { name: "Más Vertical", file: "more-vert.svg" },
        { name: "Perfecto", file: "check.svg" },
        { name: "Perfecto Caja", file: "check-box.svg" },
        { name: "Abrir", file: "open-in-new.svg" },
        { name: "Opcion activada", file: "toggle-on.svg" },
        { name: "Recargar", file: "refresh.svg" },
        { name: "Entrar", file: "login.svg" },
        { name: "Flecha Izquierda", file: "chevron-left.svg" },
        { name: "Más Horizontal", file: "more-horiz.svg" },
        { name: "Descargar", file: "download.svg" },
        { name: "Aplicaciones", file: "apps.svg" },
        { name: "Flecha Derecha Alt", file: "arrow-right-alt.svg" },
        { name: "Eliminar", file: "remove.svg" },
        { name: "Rayo", file: "bolt.svg" },
        { name: "Opcion desactivada", file: "toggle-off.svg" },
        { name: "Flecha hacia Arriba", file: "arrow-upward.svg" },
        { name: "Borrar para siempre", file: "delete-forever.svg" },
        { name: "Renovar", file: "autorenew.svg" },
        { name: "Llave", file: "key.svg" },
        { name: "Bloqueado", file: "block.svg" },
        { name: "Añadir Caja", file: "add-box.svg" },
        { name: "Carrito de compra", file: "shopping-cart-checkout.svg" },
        { name: "Menu Abierto", file: "menu-open.svg" },
        { name: "Atras", file: "back.svg"},
        { name: "Compartir", file: "share.svg"},
        { name: "ABC", file: "abc.svg"},
        { name: "HTML", file: "html.svg"},
        { name: "JavaScript", file: "js.svg"},
        { name: "PHP", file: "php.svg"},
        { name: "Descargar 2", file: "download2.svg"},
        { name: "Persona", file: "person.svg" },
        { name: "Grupo", file: "grup.svg" },
        { name: "Me gusta", file: "like.svg" },
        { name: "Grupos", file: "grups.svg" },
        { name: "Publico", file: "public.svg" },
        { name: "Añadir persona", file: "person-add.svg" },
        { name: "Soporte", file: "support.svg" },
        { name: "Cara", file: "face.svg" },
        { name: "Cohete", file: "rocket.svg"  },
        { name: "Añadir Grupo", file: "grup-add.svg"  },
        { name: "Logro", file: "logro.svg"  },
        { name: "Diversion", file: "diversion.svg"  },
        { name: "Luz", file: "luz.svg" },
        { name: "Agua", file: "water.svg"  },
        { name: "Hoja", file: "hoja.svg" },
        { name: "Mascota", file: "pet.svg" },
        { name: "Feliz", file: "happy.svg" },
        { name: "Galleta", file: "cookie.svg"},
        { name: "Diente", file: "diente.svg"},
        { name: "Volcan", file: "volcan.svg"},
        { name: "Tierra", file: "tierra.svg"},
        { name: "Hueso", file: "hueso.svg"},
        { name: "Calavera", file: "skull.svg"},
        { name: "Huevo", file: "egg.svg"},
        { name: "Luna", file: "luna.svg"},
        { name: "Cuenta", file: "account.svg"},
        { name: "Info", file: "info.svg"},
        { name: "Visibilidad", file: "visibilidad.svg"},
        { name: "Calendario", file: "calendario.svg"},
        { name: "Reloj", file: "reloj.svg"},
        { name: "Ayuda", file: "help.svg"},
        { name: "Advertencia", file: "warn.svg"},
        { name: "Lenguaje", file: "language.svg"},
        { name: "Cerrado", file: "lock.svg"},
        { name: "Error", file: "error.svg"},
        { name: "Verificado", file: "verification.svg"},
        { name: "Logo DEV", file: "logo-dev.svg"},
        { name: "YouTube", file: "youtube.svg"},
        { name: "Gmail", file: "mail.svg"},
        { name: "Llamada", file: "call.svg"},
        { name: "Notificacion", file: "notifications.svg"},
        { name: "Enviar", file: "send.svg"},
        { name: "Link", file: "link.svg"},
        { name: "Foros", file: "forum.svg"},
        { name: "Inventario 2", file: "inventory2.svg"},
        { name: "Contactar Soporte", file: "contact-support.svg"},
        {name: "Editar", file: "edit.svg"},
        {name: "Imagen", file: "image.svg"},
        {name: "Jugar", file: "play.svg"},
        {name: "Micro", file: "mic.svg"},
        {name: "Subir volumen", file: "volume-up.svg"},
        {name: "Musica", file: "music.svg"},
        {name: "Quitar volumen", file: "volume-off.svg"},
        {name: "Repetir", file: "replay.svg"},
        {name: "Pausar", file: "pause.svg"},
        {name: "Rapido", file: "speed.svg"},
        {name: "Stop", file: "stop.svg"},
        {name: "Stop Circulo", file: "stop-circle.svg"},
        {name: "Videollamada", file: "video-call.svg"},
    ];

    const iconGrid = document.getElementById("iconGrid");
    const searchInput = document.getElementById("searchInput");
    const modal = document.getElementById("iconModal");
    const modalIcon = document.getElementById("modalIcon");
    const modalIconName = document.getElementById("modalIconName");
    const downloadSVG = document.getElementById("downloadSVG");
    const downloadPNG = document.getElementById("generatePNG");
    const closeButton = document.querySelector(".close-button");

    // Renderiza los íconos en la cuadrícula
    function renderIcons() {
        iconGrid.innerHTML = "";
        icons.forEach(icon => {
            const iconItem = createIconItem(icon);
            iconGrid.appendChild(iconItem);
        });
    }

    // Crea un elemento de ícono individual
    function createIconItem(icon) {
        const iconItem = document.createElement("div");
        iconItem.className = "icon-item";
        iconItem.innerHTML = `
            <img src="icons/${icon.file}" alt="${icon.name}">
            <p>${icon.name}</p>
        `;
        iconItem.addEventListener("click", () => openModal(icon));
        return iconItem;
    }

    // Abre el modal con la información del ícono seleccionado
    function openModal(icon) {
        modalIcon.src = `icons/${icon.file}`;
        modalIconName.textContent = icon.name;

        // Configura el enlace para descargar el SVG
        downloadSVG.href = `icons/${icon.file}`;
        downloadSVG.download = `${icon.name}.svg`;

        // Genera el PNG y configura el enlace para descargar el PNG
        generatePNG(`icons/${icon.file}`, `${icon.name}.png`, (pngURL) => {
            downloadPNG.href = pngURL;
            downloadPNG.download = `${icon.name}.png`;
        });

        modal.style.display = "block";
    }

    // Cierra el modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Cierra el modal si se hace clic fuera de él
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Filtra los íconos en tiempo real al escribir en el campo de búsqueda
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filteredIcons = icons.filter(icon => icon.name.toLowerCase().includes(query));
        renderFilteredIcons(filteredIcons);
    });

    // Renderiza los íconos filtrados
    function renderFilteredIcons(filteredIcons) {
        iconGrid.innerHTML = "";
        filteredIcons.forEach(icon => {
            const iconItem = createIconItem(icon);
            iconGrid.appendChild(iconItem);
        });
    }

    // Función para generar un PNG desde un SVG usando Canvas
    function generatePNG(svgUrl, fileName, callback) {
        const img = new Image();
        img.src = svgUrl;
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                callback(url);
            }, "image/png");
        };
    }

    // Función para descargar el ícono en SVG o PNG
    function downloadIcon(format) {
        let downloadLink;
        if (format === 'svg') {
            downloadLink = downloadSVG;
        } else if (format === 'png') {
            downloadLink = downloadPNG;
        } else {
            return; // Si el formato no es válido, salir de la función
        }

        const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        downloadLink.dispatchEvent(clickEvent);
    }

    // Evento para el botón de cerrar el modal
    closeButton.addEventListener("click", closeModal);

    // Evento para descargar el SVG
    downloadSVG.addEventListener("click", (event) => {
        event.preventDefault();
        downloadIcon('svg');
    });

    // Evento para descargar el PNG
    downloadPNG.addEventListener("click", (event) => {
        event.preventDefault();
        downloadIcon('png');
    });

    // Inicializa la vista con todos los íconos
    renderIcons();
});

// Interceptar el evento de clic derecho
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    
    });
    
    // Interceptar el evento de tecla presionada
    document.addEventListener("keydown", function(event) {
    // Verificar si la tecla es F12 (código de tecla 123)
    if (event.key === "F12" || event.keyCode === 123) {
    event.preventDefault();
    }
    });