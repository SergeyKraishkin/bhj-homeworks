const products = [...document.querySelectorAll('.product')];
const productsQtyControl = [...document.querySelectorAll('.product__quantity-control')];
const productsValue = document.querySelectorAll('.product__quantity-value');
const productsInCart = document.getElementsByClassName('cart__products');
const productAddToCart = document.querySelectorAll('.product__add');


productsQtyControl.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        if (item.classList.contains('product__quantity-control_inc')) {
            item.parentNode.childNodes[3].innerText = (Number(item.parentNode.childNodes[3].innerText) + 1);
        }
        if (item.classList.contains('product__quantity-control_dec') && item.parentNode.childNodes[3].innerText > 1) {
            item.parentNode.childNodes[3].innerText = (Number(item.parentNode.childNodes[3].innerText) - 1);
        }

    })
});

productAddToCart.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        let qty = item.parentNode.childNodes[3].childNodes[3].innerText;
        let productImage = item.parentNode.parentNode.parentNode.childNodes[3].currentSrc;
        let productId = item.parentNode.parentNode.parentNode.dataset.id;

        let productInCartList=[... productsInCart[0].children];
        
        if (productInCartList.length === 0) {
            addNewProduct= true;
        }
        else {   // volume exist or not and add it or add new product
          /*  productInCartList.forEach((item) => {
                if (item.id === productId) { //add volume
                    console.log ('the same product is found');
                    item.children[1].innerText = Number(item.children[1].innerText) + Number(qty);
                    addNewProduct= false;
                }
                else addNewProduct= true;
            });
            */
           debugger;
           let productIdInCart = [...productInCartList];
           if  (productInCartList === productId) {
                    productInCartList.children[1].innerText = Number(productInCartList.children[1].innerText) + Number(qty);
                    addNewProduct= false;
                }
                else {
                addNewProduct= true;
                }
            };

        if (addNewProduct){
            
            let divProduct = document.createElement ('div');
            divProduct.className ='cart__product';
            divProduct.id = productId;
            
            let img = document.createElement ('img');
            img.className = 'cart__product-image';
            img.src = productImage;

            let divProductCount = document.createElement ('div');
            divProductCount.className ='cart__product-count';
            divProductCount.innerHTML = qty;

            divProduct.appendChild(img);
            divProduct.appendChild(divProductCount);
            productsInCart[0].appendChild(divProduct);

            addNewProduct= false;
        }

    })
});