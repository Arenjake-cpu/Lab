const users = {};
let currentUser = null;
const weeklyMeals = {}; 

document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (users[username]) {
        alert('User already exists!');
    } else {
        users[username] = password;
        weeklyMeals[username] = {};
        alert('Sign up successful! You can now log in.');
        this.reset();
    }
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (users[username] && users[username] === password) {
        currentUser = username;
        alert('Login successful!');
        showMealPlan();
    } else {
        alert('Invalid username or password!');
    }
});

document.getElementById('show-login').addEventListener('click', function () {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

document.getElementById('show-signup').addEventListener('click', function () {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

document.getElementById('logout').addEventListener('click', function () {
    currentUser = null;
    document.getElementById('meal-plan').classList.add('hidden');
    document.getElementById('form-container').classList.remove('hidden');
});

function showMealPlan() {
    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('meal-plan').classList.remove('hidden');
}
