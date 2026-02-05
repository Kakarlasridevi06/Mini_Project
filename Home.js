let product=[];

function fetchData(){
    fetch("https://dummyjson.com/products").then((res)=>{
        return res.json();

    }).then ((val)=>{
        console.log(val.products);
        product=val.products;
        localStorage.setItem("allproducts",JSON.stringify(product))
        displayProduct(product)
    })
}
function displayProduct(prod) {
    let output=""
    prod.map((val)=>{
        output+=`   
        <main>
        <div id="image" >
        <img src="${val.thumbnail}"/>
        <div id="block"> 
        <h3 id="title">${val.title}</h3>
        <div id ="rating_box">
        <p>Rating:${val.rating}</p>
        <p>Price:${Math.round((val.price)*90)}</p>
        <div>
        <p>InStoke:${val.stoke}</p>
        <button id="details_button" onclick="details(${val.id})">Details</button>
        </div>
        </div>
        </div>
        </div>
        </main>
        `
    })
    document.getElementById("productcontainer").innerHTML=output;
}
fetchData()

document.getElementById("searchbar").addEventListener("input",function searchItem(event){
    let searchTerm=event.target.value.toLowerCase();
    let filterProduct=product.filter((v)=>{
        return (v.title.toLowerCase().includes(searchTerm) || v.category.toLowerCase().includes(searchTerm));

    });
    displayProduct(filterProduct);
})


function details(productId){
    console.log(productId);

    localStorage.setItem("productId",productId);
    // window.location.href="../viewDetails/viewDetails.html";
    window.location.href="viewDetails.html"
    
}




