
// Initialize the cart from localStorage or start with an empty array
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a product to the cart
function addToCart(productName, price) {
    const item = cart.find(item => item.name === productName);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    updateCart();
}

// Function to remove a product from the cart
function removeFromCart(productName) {
    const itemIndex = cart.findIndex(item => item.name === productName);

    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
    }

    updateCart();
}

// Function to update the cart display and save to localStorage
function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalContainer = document.getElementById('total');

    cartItemsContainer.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <span>${item.name} - ${item.price}dt x ${item.quantity}</span>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;

        cartItemsContainer.appendChild(cartItem);

        total += item.price * item.quantity;
    });

    totalContainer.textContent = `${total}dt`;

    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update the cart on page load to restore previous data
updateCart();

function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalContainer = document.getElementById('total');

    cartItemsContainer.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <span>${item.name} (${item.weight}) - ${item.price}dt x ${item.quantity}</span>
            <button onclick="removeFromCart('${item.name}', '${item.weight}')">Remove</button>
        `;

        cartItemsContainer.appendChild(cartItem);

        total += item.price * item.quantity;
    });

    totalContainer.textContent = `${total}dt`;

    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productName, price, weight) {
    const item = cart.find(item => item.name === productName && item.weight === weight);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ name: productName, price: price, weight: weight, quantity: 1 });
    }

    updateCart();
}


function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalContainer = document.getElementById('total');

    cartItemsContainer.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <span>${item.name} (${item.weight}) - ${item.price}dt x ${item.quantity}</span>
            <button onclick="removeFromCart('${item.name}', '${item.weight}')">Remove</button>
        `;

        cartItemsContainer.appendChild(cartItem);

        total += item.price * item.quantity;
    });

    totalContainer.textContent = `${total}dt`;

    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productName, price, weight) {
    const item = cart.find(item => item.name === productName && item.weight === weight);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ name: productName, price: price, weight: weight, quantity: 1 });
    }

    updateCart();
}


function getSelectedWeight(selectId) {
    const selectElement = document.getElementById(selectId);
    return selectElement.value;
}


function getSelectedPrice(selectId) {
    const selectElement = document.getElementById(selectId);
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    return parseInt(selectedOption.getAttribute('data-price'));
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Update hidden fields with cart data
  const cartDetailsField = document.getElementById('cartDetails');
  const cartTotalField = document.getElementById('cartTotal');

  const cartDetails = cart.map(item => 
      `${item.name} (${item.quantity} x ${item.price}dt)`
  ).join(', ');

  const cartTotal = document.getElementById('total').textContent;

  cartDetailsField.value = cartDetails;
  cartTotalField.value = cartTotal;

  // Form submission handled by Web3Forms
});







