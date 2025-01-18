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
    
        { name: "Home", file: "home.svg" },
        { name: "Search", file: "search.svg" },
        { name: "Menu", file: "menu.svg" },
        { name: "Close", file: "close.svg" },
        { name: "Settings", file: "settings.svg" },
        { name: "Check Circle", file: "check-circle.svg" },
        { name: "Favorite", file: "favorite.svg" },
        { name: "Add", file: "add.svg" },
        { name: "Delete", file: "delete.svg" },
        { name: "Arrow Back", file: "arrow-back.svg" },
        { name: "Star", file: "star.svg" },
        { name: "Chevron Right", file: "chevron-right.svg" },
        { name: "Logout", file: "logout.svg" },
        { name: "Arrow Forward", file: "arrow-forward.svg" },
        { name: "Add Circle", file: "add-circle.svg" },
        { name: "Cancel", file: "cancel.svg" },
        { name: "Arrow Back IOS", file: "arrow-back-ios.svg" },
        { name: "Arrow Forward", file: "arrow-forward.svg" },
        { name: "Arrow Drop Down", file: "arrow-drop-down.svg" },
        { name: "More Vert", file: "more-vert.svg" },
        { name: "Check", file: "check.svg" },
        { name: "Check Box", file: "check-box.svg" },
        { name: "Open In New", file: "open-in-new.svg" },
        { name: "Toggle On", file: "toggle-on.svg" },
        { name: "Refresh", file: "refresh.svg" },
        { name: "Login", file: "login.svg" },
        { name: "Chevron Left", file: "chevron-left.svg" },
        { name: "More Horiz", file: "more-horiz.svg" },
        { name: "Download", file: "download.svg" },
        { name: "Apps", file: "apps.svg" },
        { name: "Arrow Right Alt", file: "arrow-right-alt.svg" },
        { name: "Remove", file: "remove.svg" },
        { name: "Bolt", file: "bolt.svg" },
        { name: "Toggle Off", file: "toggle-off.svg" },
        { name: "Arrow Upward", file: "arrow-upward.svg" },
        { name: "Delete Forever", file: "delete-forever.svg" },
        { name: "Autorenew", file: "autorenew.svg" },
        { name: "Key", file: "key.svg" },
        { name: "Block", file: "block.svg" },
        { name: "Add Box", file: "add-box.svg" },
        { name: "Carrito de compra", file: "shopping-cart-checkout.svg" },
        { name: "Menu Open", file: "menu-open.svg" },
        { name: "Back", file: "back.svg"},
        { name: "Share", file: "share.svg"},
        { name: "ABC", file: "abc.svg"},
        { name: "HTML", file: "html.svg"},
        { name: "JavaScript", file: "js.svg"},
        { name: "PHP", file: "php.svg"},
        { name: "Download 2", file: "download2.svg"},
        { name: "Person", file: "person.svg" },
        { name: "Grup", file: "grup.svg" },
        { name: "Like", file: "like.svg" },
        { name: "Grups", file: "grups.svg" },
        { name: "Public", file: "public.svg" },
        { name: "Person Add", file: "person-add.svg" },
        { name: "Support", file: "support.svg" },
        { name: "Face", file: "face.svg" },
        { name: "Rocket", file: "rocket.svg"  },
        { name: "Grup Add", file: "grup-add.svg"  },
        { name: "Achievement", file: "logro.svg"  },
        { name: "Fun", file: "diversion.svg"  },
        { name: "Light", file: "luz.svg" },
        { name: "Water", file: "water.svg"  },
        { name: "Leaf", file: "hoja.svg" },
        { name: "Pet", file: "pet.svg" },
        { name: "Happy", file: "happy.svg" },
        { name: "Cookie", file: "cookie.svg"},
        { name: "Tooth", file: "diente.svg"},
        { name: "Volcano", file: "volcan.svg"},
        { name: "Earth", file: "tierra.svg"},
        { name: "Bone", file: "hueso.svg"},
        { name: "Skull", file: "skull.svg"},
        { name: "Egg", file: "egg.svg"},
        { name: "Moon", file: "luna.svg"},
        { name: "Account", file: "account.svg"},
        { name: "Info", file: "info.svg"},
        { name: "Visibility", file: "visibilidad.svg"},
        { name: "Calendar", file: "calendario.svg"},
        { name: "Clock", file: "reloj.svg"},
        { name: "Help", file: "help.svg"},
        { name: "Warn", file: "warn.svg"},
        { name: "Language", file: "language.svg"},
        { name: "Lock", file: "lock.svg"},
        { name: "Error", file: "error.svg"},
        { name: "Verification", file: "verification.svg"},
        { name: "Logo Dev", file: "logo-dev.svg"},
        { name: "YouTube", file: "youtube.svg"},
        { name: "Mail", file: "mail.svg"},
        { name: "Call", file: "call.svg"},
        { name: "Notifications", file: "notifications.svg"},
        { name: "Send", file: "send.svg"},
        { name: "Link", file: "link.svg"},
        { name: "Forum", file: "forum.svg"},
        { name: "Inventory 2", file: "inventory2.svg"},
        { name: "Contact Support", file: "contact-support.svg"},
        { name: "Edit", file: "edit.svg"},
        { name: "Image", file: "image.svg"},
        { name: "Play", file: "play.svg"},
        { name: "Mic", file: "mic.svg"},
        { name: "Volume Up", file: "volume-up.svg"},
        { name: "Music", file: "music.svg"},
        { name: "Volume Off", file: "volume-off.svg"},
        { name: "Replay", file: "replay.svg"},
        { name: "Pause", file: "pause.svg"},
        { name: "Speed", file: "speed.svg"},
        { name: "Stop", file: "stop.svg"},
        { name: "Stop Circle", file: "stop-circle.svg"},
        { name: "Video Call", file: "video-call.svg"},
        { name: "A B 2", file: "a-b-2.svg"},
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
