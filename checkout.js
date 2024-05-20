let listCart = [];
function checkCart(){
        var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
        if(cookieValue){
            listCart = JSON.parse(cookieValue.split('=')[1]);
        }
}
checkCart();
addCartToHTML();
function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">₱ ${product.price}.00/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">₱ ${product.price * product.quantity}.00</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '₱' + totalPrice;
}
{
    var customerName = document.getElementById('name');
    var customerAddress = document.getElementById('address');
    var addressCountry = document.getElementById('country');
    var adressCity = document.getElementById('city');
    var customerNumber = document.getElementById('phone')
    var customerCardNum = document.getElementById('CreditCard') 
    const buttonCheckout = document.querySelector('.buttonCheckout');

    buttonCheckout.addEventListener('click', () => {
        alert('Your Order Summary Details:' +
        '\nName: ' +  customerName.value + 
        '\nAdress: ' + customerAddress.value + ', ' + adressCity.value + ', ' + addressCountry.value +
        '\nContact Number: ' + customerNumber.value + 
        '\nPayment(Card): ' + customerCardNum.value +
        '\n\nTHANK YOU FOR ORDERING, YOUR ORDER IS NOW IN PROCESS!'

        
        );
    });
}
