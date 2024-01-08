const cartItem = [];

function addtocart(a) {
    cartItem.push({...productsItem[a]});
    displaycart();
};


function displaycart(a) {
    let m = 0, total = 0;

    document.querySelector(".cartCount").innerHTML = cartItem.length;

    document.getElementById("total").innerText ="$ " + 0 + ".00";

    if(cartItem.length == 0) {
        document.querySelector(".innercart").innerHTML = "Your Cart List Is Impty!";
    }else{
        document.querySelector(".innercart").innerHTML = cartItem.map((items) => {
            var {image, title, price} = items;

            total = total + price;
            document.getElementById("total").innerText ="$ " + total + ".00";
            return(`
            <div class="cartItem">
            <div class="img">
                <img src="${image}">
            </div>
            <div class="title">
                <p>${title}</p>
            </div>
            <div class="del">` +
                '<i class="fa fa-trash"onclick="deltocart('+(m++)+')"></i>' +
            `</div>
        </div>
            `)
        }).join("");
    }
}


function deltocart(a) {
    cartItem.splice(a, 1);
    displaycart();
}