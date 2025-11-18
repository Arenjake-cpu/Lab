const users = {};
let currentUser = null;
const weeklyMeals = {}; 

// SIGNUP FORM
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signup-username').value.trim();
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

// LOGIN FORM
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    if (users[username] && users[username] === password) {
        currentUser = username;
        alert('Login successful!');
        showMealPlan();
        displaySavedMeals();
    } else {
        alert('Invalid username or password!');
    }
});

// TOGGLE TO LOGIN
document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

// TOGGLE TO SIGNUP
document.getElementById('show-signup').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

// LOGOUT
document.getElementById('logout').addEventListener('click', function () {
    currentUser = null;
    document.getElementById('meal-plan').classList.add('hidden');
    document.getElementById('form-container').classList.remove('hidden');
});

// SAVE MEAL BUTTON
document.getElementById('save').addEventListener('click', function () {
    if (!currentUser) return alert('You must log in first!');

    const day = document.getElementById('day').value;
    const breakfast = document.getElementById('breakfast').value;
    const lunch = document.getElementById('lunch').value;
    const dinner = document.getElementById('dinner').value;

    // Save or overwrite the meal for the selected day
    weeklyMeals[currentUser][day] = { breakfast, lunch, dinner };

    displaySavedMeals();
});

// SHOW MEAL PLAN FORM
function showMealPlan() {
    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('meal-plan').classList.remove('hidden');
    document.getElementById('saved-meals').classList.remove('hidden');
}

// DISPLAY SAVED MEALS
function displaySavedMeals() {
    const mealsList = document.getElementById('meals-list');
    mealsList.innerHTML = '';

    const meals = weeklyMeals[currentUser];
    for (const day in meals) {
        const { breakfast, lunch, dinner } = meals[day];
        const li = document.createElement('li');
        li.textContent = `${day}: Breakfast - ${breakfast}, Lunch - ${lunch}, Dinner - ${dinner}`;
        mealsList.appendChild(li);
    }

    document.getElementById('saved-meals').classList.remove('hidden');
}


