// This file is for localStorage and sessionStorage. 
// the CRUD functions should go here
// Create, Read, Update, and Delete


// Create
function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Read
function getItem(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

// Update
function updateItem(key, updaterFn) {
    const currentValue = getItem(key);
    if (currentValue !== null) {
        const updatedValue = updaterFn(currentValue);
        setItem(key, updatedValue);
    } else {
        console.error(`Item with key "${key}" does not exist.`);
    }
}

// Delete
function removeItem(key) {
    localStorage.removeItem(key);
}

// Clear all data
function clearStorage() {
    localStorage.clear();
}
