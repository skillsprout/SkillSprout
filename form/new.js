
    document.getElementById('signUpForm').addEventListener
    ('submit',async function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('name').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:3000/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            const data = await response.text();
            alert(data); // Show the response from the server
        } catch (error) {
            console.error('Error:', error);
        }   
         });


// document.addEventListener('DOMContentLoaded', function() {
//     const signUpButton = document.getElementById('signUp');
//     const container = document.querySelector('.container');
//     const heroBoxButton = document.querySelector('.hero-box button');
    
//     signUpButton.addEventListener('click', () => {
//         container.classList.toggle('right-panel-active');
//         // Toggle button text between "Sign Up" and "Sign In"
//         if (heroBoxButton.textContent === 'Sign Up') {
//             heroBoxButton.textContent = 'Sign In';
//         } else {
//             heroBoxButton.textContent = 'Sign Up';
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const signUpBtns = document.querySelectorAll('#signUp'); // Both "Sign Up" buttons

    signUpBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            container.classList.toggle('right-panel-active');
        });
    });
});

const container = document.querySelector('.container');
// 700px Sing In logic
const signUpBtns = document.querySelectorAll('#signUp'); 
signUpBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    container.classList.toggle('right-panel-active');
  });
});
