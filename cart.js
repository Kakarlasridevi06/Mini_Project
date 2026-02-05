document.addEventListener("DOMContentLoaded",()=>{
    displayCart();
})
function displayCart(){
    let cart=JSON.parse(localStorage.getItem("cart"))|| [];
    let cartContent=document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice");
    cartContent.innerHTML="";
    let totalbill=0;
        // console.log(cart);
        // console.log(cartContent);
        // console.log(totalPrice);
         
        if(cart.length===0){
            cartContent.innerHTML="Your cart is empty.start shopping"
            totalPrice.innerHTML=0;
        }
        cart.map((product,i)=>{
            totalbill +=Math.floor((product.price)*90)
            console.log(product,i);
            let newProd=document.createElement("div");
            newProd.setAttribute("class","prod-info");
            newProd.innerHTML=`
            <div id="details_prod">
                <div>
                <div id="img_block"><img src="${product.images[0]}"></div> 
                <div class="prod-details"> 
                <h1 id="title_prod">${product.title}</h1>
                <p>Availability :${product.availabilityStatus}</p>
                <p>Return Policy:${product.returnPolicy}</p>
                <p>Shipping Information :${product.shippingInformation}</p>
                <p>Stock : ${product.stock}</p>
                <p>Warranty Information :${product.warrantyInformation}</p>
                <h3>Price: ₹ ${product.price.toFixed(2)*90}</h3>
                </div>
                 <div onclick="RemoveFromCart(${(i)})" id="remove_button"><button>Remove</button></div>
                 </div> 
            </div>
             
             
             `;
            
            cartContent.append(newProd);
        });
        totalPrice.innerHTML=`<h2>Total Price : ₹ ${totalbill}</h2>`
}
function RemoveFromCart(index ) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    displayCart()
}