const productsInfo = [
    {id: 0, image:"foryou/fu1.avif", title:"Jacket", price:130},
    {id: 1, image:"foryou/fu2.avif", title:"Sunglass", price:120},
    {id: 2, image:"foryou/fu3.avif", title:"Lipstic", price:140},
    {id: 3, image:"foryou/fu4.avif", title:"Side Bag", price:150},
    {id: 4, image:"foryou/fu5.avif", title:"Shoe", price:170},
    {id: 5, image:"foryou/fu6.avif", title:"Facewash", price:190},
    {id: 6, image:"foryou/fu7.avif", title:"T-Shirt", price:200},
    {id: 7, image:"foryou/fu8.avif", title:"Smart Watch", price:220}
];


const productsItem = [...new Set(productsInfo.map((item) => {return item}))];

let i = 0, j = 0, k = 0;

document.querySelector(".items").innerHTML = productsItem.map((item) => {
    var {image, title, price} = item;

    return(`
        <div class="itemBox">
                <div class="itemImg">
                    <img src="${image}">
                </div>
                <div class="itemEtc">
                    <div class="titleDiv">
                      <strong>${title}</strong>
                    </div>
                    <p>$ ${price}</p>` +
                    '<i class="fa fa-heart"onclick="addtowish('+(i++)+')"></i>' +
                    `<div class="buttonDiv">` +
                        '<button onclick="addtobuy('+(j++)+')">Buy Now</button>' +
                        '<button onclick="addtocart('+(k++)+')">Add to Cart</button>' +
                    `</div>
                </div>
            </div>
    `)
}).join("");






