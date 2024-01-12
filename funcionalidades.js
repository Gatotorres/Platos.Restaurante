function mostrarMenu(tipoMenu) {
    // Puedes personalizar este objeto según tu necesidad
    const menuData = {
        mediterranea: [
            { imgSrc: 'imagen1.jpg', titulo: 'Plato 1', descripcion: 'Descripción del plato 1' },
            { imgSrc: 'imagen2.jpg', titulo: 'Plato 2', descripcion: 'Descripción del plato 2' },
            // Añade más platos si es necesario
        ],
        sushi: [
            { imgSrc: 'imagen3.jpg', titulo: 'Sushi 1', descripcion: 'Descripción del sushi 1' },
            { imgSrc: 'imagen4.jpg', titulo: 'Sushi 2', descripcion: 'Descripción del sushi 2' },
            // Añade más opciones de sushi si es necesario
        ],
        postres: [
            { imgSrc: 'imagen5.jpg', titulo: 'Postre 1', descripcion: 'Descripción del postre 1' },
            { imgSrc: 'imagen6.jpg', titulo: 'Postre 2', descripcion: 'Descripción del postre 2' },
            // Añade más opciones de postres si es necesario
        ],
    };

    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = '';

    menuData[tipoMenu].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        const img = document.createElement('img');
        img.src = item.imgSrc;

        const titulo = document.createElement('div');
        titulo.textContent = item.titulo;

        const descripcion = document.createElement('div');
        descripcion.textContent = item.descripcion;

        menuItem.appendChild(img);
        menuItem.appendChild(titulo);
        menuItem.appendChild(descripcion);

        menuContainer.appendChild(menuItem);
    });
}