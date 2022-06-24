var add_to_cart_btn = document.getElementsByClassName("add-to-cart");
let main_conatiner = document.getElementsByClassName("table")[0];
let quantity_field = document.getElementsByClassName("num");
let remove_btns = document.getElementsByClassName("remove-btn");
let count = 0;



for (let i = 0; i < add_to_cart_btn.length; i++) {
    add_to_cart_btn[i].addEventListener('click', addToCart);
}


function addToCart(event) {
    count++;
    let btn = event.target
    let btn_parent = btn.parentElement;
    let btn_grandparent = btn_parent.parentElement;

    let itemName = btn_parent.children[0].innerText;
    let itemPrice = btn_parent.children[1].innerText.split(" ")[0];
    var itemImage;

    itemImage = btn_grandparent.children[1].children[0].src;

    let itemContainer = document.createElement("tr");
    itemContainer.innerHTML = `
    <td><img src="${itemImage}" class="image-preserve" alt=""></td>
    <td class="item-name">
        <h4>${itemName}</h4>
    </td>
    <td class="item-price">
        <h4>${itemPrice}</h4>
    </td>
    <td><input type="number" class="num" min="1" value="1"></td>
    <td class="total-price"><h4>${itemPrice}</h4></td>
    <td>
        <div class="remove-btn">remove</div>
    </td>
    `;

    main_conatiner.append(itemContainer);

    for (let i = 0; i < quantity_field.length; i++) {
        quantity_field[i].addEventListener('click', updateTotal);
    }

    for (let i = 0; i < remove_btns.length; i++) {
        remove_btns[i].addEventListener('click', removeFromCart);
    }

    grandTotal();
    update()

}

function updateTotal(event) {
    number_of_items = event.target;
    number_of_items_parent = number_of_items.parentElement;
    price_field = number_of_items_parent.parentElement.getElementsByClassName("item-price")[0].children[0];
    total_price = number_of_items_parent.parentElement.getElementsByClassName("total-price")[0];

    price_field_content = price_field.innerText.replace('Rs.', '');
    total_price.children[0].innerText = "Rs." + number_of_items.value * price_field_content;
    grandTotal();
}

function grandTotal() {
    var total = 0;
    let grandTotal = document.getElementsByClassName("grand-total")[0];
    let total_price = document.getElementsByClassName('total-price');
    for (let i = 0; i < total_price.length; i++) {
        total_price_content = Number(total_price[i].children[0].innerText.replace("Rs.", ''));
        total += total_price_content;
    }
    grandTotal.innerHTML = "Rs." + total;
}

function removeFromCart(event) {
    count--;
    remove_btn = event.target;
    remove_btn_grandparent = remove_btn.parentElement.parentElement;
    remove_btn_grandparent.remove();
    grandTotal();
    update();

}

// update cart icon
function update() {
    if (count > 0)
        document.getElementsByClassName("total-count")[0].innerText = count;
    else
        document.getElementsByClassName("total-count")[0].innerText = '';
}

document.getElementsByClassName("empty-cart")[0].onclick = () => {
    count = 0;
    document.getElementsByClassName("table")[0].innerHTML = '';
    grandTotal();
    update();
}