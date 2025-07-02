// hide otp
window.onload = function () {
    document.getElementById('otp-verification').style.display = 'none';

    // otp sender
    const sendForm = document.getElementById('emailForm');
    const sendBtn = document.getElementById('sendBtn');
    const otpsenderDiv = document.getElementById('otpsender');
    const otpVerificationDiv = document.getElementById('otp-verification');
    const errorDisplay = document.getElementById('error');

    if (sendForm) {
        sendForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const email = document.getElementById('email').value;

            const response = await fetch('https://localhost:8443/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `email=${encodeURIComponent(email)}`,
                credentials: 'include' 
            });

            const resultText = await response.text();
            alert(resultText);

            if(resultText.trim().toLowerCase().includes('user already found')) {
                errorDisplay.style.color = 'red';
                errorDisplay.innerText = resultText;
                return;
            }

            if (response.ok) {
                otpsenderDiv.style.display = 'none';
                otpVerificationDiv.style.display = 'block';
            }
        });
    }

    // otp verification
    const verifyForm = document.getElementById('verify-form');
    if (verifyForm) {
        verifyForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const otpValue = document.getElementById('otp').value;

            const response = await fetch('https://localhost:8443/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `otp=${encodeURIComponent(otpValue)}`,
                credentials: 'include' 
            });

            const resultText = await response.text();
            const resultDisplay = document.getElementById('otp-result');

          if (resultText.includes('successfully')) {
               resultDisplay.style.color = 'green';
              resultDisplay.innerText = resultText;

            setTimeout(() => {
             window.location.href = 'registration.html';
            } ,1500); 
} else {
    resultDisplay.style.color = 'red';
    resultDisplay.innerText = resultText;
}

        });
    }
};
