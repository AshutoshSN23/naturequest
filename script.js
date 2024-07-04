// Check login status and update the UI accordingly
function checkLoginStatus() {
    const user = localStorage.getItem('user');
    if (user) {
        alert('You are logged in.');
    }
}


// Handle user signup
function signup(event) {
    event.preventDefault();
    const firstName = document.getElementById('signupFirstName').value;
    const lastName = document.getElementById('signupLastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    const user = {
        firstName,
        lastName,
        email,
        password
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful! Please login.');
    window.location.href = 'login.html';
}

// Handle user login
function login(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Handle logout
function logout() {
    localStorage.removeItem('user');
    alert('You have been logged out.');
    window.location.href = 'index.html';
}

// Handle access to challenges page
function accessChallenges() {
    const user = localStorage.getItem('user');
    if (user) {
        window.location.href = 'Challenges.html';
    } else {
        alert('You need to log in to access the challenges page.');
        window.location.href = 'login.html';
    }
}