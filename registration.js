const regF= document.getElementById("registrationForm");
if(regF)
{
    regF.addEventListener('submit',async function(e)
    {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const response=await fetch('https://localhost:8443/user/register', {
            method :'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
        })
        const resultText = await response.text();
        if(resultText.trim().toLowerCase().includes('login successfull'))
        {
            window.location.href = 'LoginPage.html';
        }
        else
        {
            alert(resultText);
        }
    })
}