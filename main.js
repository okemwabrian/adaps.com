let cart = [];

function addToCart(product, price) {
    const quantityInput = document.getElementById(`${product}-quantity`);
    const quantity = parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity <= 0) {
        alert('Please enter a valid quantity');
        return;
    }

    const cartItem = cart.find(item => item.product === product);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ product, price, quantity });
    }

    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${item.product} - ${item.quantity} x $${item.price}`;
        cartItemsElement.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
