console.log(document.getElementById("formContainer"));

// document.getElementById("formContainer").addEventListener("submit",function data(e ){
//     e.preventDefault();
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let storedData = JSON.parse(localStorage.getItem("userData"));
//     console.log(storedData);
//     console.log(email);
//     console.log(password);
//     if(storedData.email === email && storedData.password === password)
//     {
//         alert("Login Scuessfully!!")
//         window.location.href="../Ecommerce/Home/Home.html";
//     }
//     else{
//         alert("Enter valid Credentials!!!!!!");
//     }    
// })

 document.getElementById("formContainer").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let storedData = JSON.parse(localStorage.getItem("userData"));

    if (storedData && storedData.email === email && storedData.password === password) {
        alert("Login Successfully!!");
        window.location.href = "Home.html";
    } else {
        alert("Enter valid Credentials!");
    }
});

