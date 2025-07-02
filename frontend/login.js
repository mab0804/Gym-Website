const logF= document.getElementById("loginForm");
const invali = document.getElementById('invali');
if(logF){
    logF.addEventListener('submit',async function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const response=await fetch('https://localhost:8443/user/login', {
            method :'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
    })
    const resultText = await response.text();
    if(resultText.trim().toLowerCase().includes('user found')) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = 'index.html';
    }
    else{
        invali.style.color = 'red';
        invali.innerText = resultText;
    }
}
)}