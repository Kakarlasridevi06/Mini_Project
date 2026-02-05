// let submit=document.getElementById("submit");

// submit.addEventListener("click",()=>{
//     window.location.href="../Registration/login.html"
// })

document.getElementById("formContainer").addEventListener("submit",function data(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;
    let errorMail=document.getElementById("errorMail");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
    let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;


    if (!emailPattern.test(email)) {
        errorMail.textContent="Invalid Email";
        return;
    }
     if (!passwordPattern.test(password)) {
        errorPas.innerHTML="Password is not matching with pattern";
        return;
    }
    let userData={
        name:name,
        email:email,
        password:password,
        mobile:mobile
    };
    console.log(userData);
    localStorage.setItem("userData",JSON.stringify(userData))
    alert("Registration Sucessfully");
    window.location.href="./login.html";
})

 

