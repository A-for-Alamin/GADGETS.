const wishItem = [];

function addtowish(a) {
    wishItem.push({...productsItem[a]});
    displayWish();
};


function displayWish(a) {
    let l = 0;

    document.querySelector(".wishCount").innerHTML = wishItem.length;

    if(wishItem.length == 0) {
        document.querySelector(".innerWish").innerHTML = "Your WishLIst Is Impty!";
    }else{
        document.querySelector(".innerWish").innerHTML = wishItem.map((items) => {
            var {image, title} = items;

            return(`
            <div class="wishItem">
            <div class="img">
                <img src="${image}">
            </div>
            <div class="title">
                <p>${title}</p>
            </div>
            <div class="del">` +
                '<i class="fa fa-trash"onclick="deltowish('+(l++)+')"></i>' +
            `</div>
        </div>
            `)
        }).join("");
    }
}


function deltowish(a) {
    wishItem.splice(a, 1);
    displayWish();
}