document.addEventListener('DOMContentLoaded', () => {
    const priceTag = document.getElementById('priceTag');

    priceTag.addEventListener('click', () => {
        alert('This is a great deal at $99.99!');
    });
});