document.addEventListener("DOMContentLoaded",()=>{
    let productdetails=document.getElementById("productdetails")
    let allproducts=JSON.parse(localStorage.getItem("allproducts"))
    // console.log(allproducts);
    
    let productId=localStorage.getItem("productId")
    // console.log(productId);
    if (allproducts && productId){
        let selectedProduct=allproducts.find((v)=>
             v.id==productId
    )
    // console.log(selectedProduct);
    if (selectedProduct){
        productdetails.innerHTML=`
        <main>
        <div id="f">
            <img src="${selectedProduct.thumbnail}" alt="" />
            <div id="product_info">
                <h1>${selectedProduct.title}</h1>
                <p><b>Brand:</b>${selectedProduct.brand}</p>
                <p><b>Category:</b>${selectedProduct.category}</p>
                <p><b>Description:</b>${selectedProduct.description}</p>
                <p><b>Price: ₹<span style="color: red;">${Math.round(selectedProduct.price*90)}</span></b></p>
                <button id="Add to cart" style="background-color:blue;color:white">Add to Cart</button>
                <button id="Back to home" style="background-color:red;color:white">Back to Home</button>
            </div>
        </div>
            <div id="customer_reviews">
                <h1>Customer Reviews</h1>
                <hr>
                <p>${selectedProduct.reviews.map((i)=>`
                    <p>${"❤️".repeat(i.rating)}${"🖤".repeat(5-i.rating)}</p>
                    <p>${i.comment}</p>
                    <p>By <b>${i.reviewerName}</b> on ${new Date(i.date).toString()}</p>
                    <hr>
                    `)}</p>
            </div>
        </main>`
        document.getElementById("Back to home").addEventListener("click",()=>{
            window.location.href="../Home/Home.html";
        })
        document.getElementById("Add to cart").addEventListener("click",()=>{
            addToCart(selectedProduct);
        })
    }else{
        productdetails.innerHTML="<h2>product not available</h2>"
    }

    }else{
        productdetails.innerHTML="<h2>product not found</h2>"
    }
})

function addToCart(product){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart))
    alert("Product added succsessfully🥳!!!")
}