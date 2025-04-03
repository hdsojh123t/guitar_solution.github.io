let cartItems = [];

function addToCart(itemName) {
    cartItems.push(itemName);
    alert(itemName + " добавлен в корзину!");
}

document.addEventListener('DOMContentLoaded', () => {
    const grid = new Masonry('.product-grid', {
        itemSelector: '.product-item',
        columnWidth: '.product-item',
        gutter: 10, // Уменьшенное расстояние между карточками
        fitWidth: true
    });
});