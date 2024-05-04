

    function showContent(id) {
        document.getElementById(id).style.display = "block";
    }

    function hideContent(id) {
        document.getElementById(id).style.display = "none";
    }

    function showContent(id) {
        var content = document.getElementById(id);
        content.classList.remove('hidden-content');
    }

    function hideContent(id) {
        var content = document.getElementById(id);
        content.classList.add('hidden-content');
    }

    function changeTheme(theme) {
        document.body.classList.remove('dinosaur-theme', 'kuromi-theme', 'pixel-theme');
        document.body.classList.add(theme + "-theme");
    }

    let lockedText = '';
    const nickname = document.getElementById('nicknameInput').value;
    const date = document.getElementById('dateInput').value;
    const message = document.getElementById('textInput').value;
    
    // Store values in localStorage
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('date', date);
    localStorage.setItem('message', message);

 // Define the correct password
 const correctPassword = "NITRO5";

 // Function to check password
 function checkPassword() {
     const passwordInput = document.getElementById("password");
     const errorMessage = document.getElementById("error-message");

     // Check if the entered password is correct
     if (passwordInput.value === correctPassword) {
         // If correct, redirect to the main site
         window.location.href = "1-11.html";
     } else {
         // If incorrect, show error message
         errorMessage.style.display = "block";
     }
 }
 document.getElementById("submit-button").addEventListener("click", function() {
    window.location.href = "1-3.html";
});

localStorage.setItem('nickname', 'YourNicknameHere');
localStorage.setItem('message', 'YourMessageHere');

console.log(date, nickname, message);
