function check_login() {
    user = document.getElementById('username').value;
    pass = document.getElementById('password').value;
    
    //check if username/password is correct
    if(user == "admin" && pass == "password") {
        //sorry, I had to obscure this
        (1, eval)(atob("cGFyZW50LmNvbXBsZXRlKDIpOw=="));
        parent.dispose_q2();
    }
    else {
        alert("Invalid!");
    }
}