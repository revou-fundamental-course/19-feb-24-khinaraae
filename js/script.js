<script>
const nameInput = document.getElementById('name-input');
const nameSpan = document.getElementById('name');

// Function to validate the name (optional, adapt to your needs)
function validateForm() {
    const name = nameInput.value.trim();

    if (!name) {
        // Handle empty name input (e.g., display an error message)
        document.getElementById('error-name').textContent = 'Please enter your name.';
        return false;
    }

    return true; // Allow form submission if validation passes
}

// Function to update and display the name
function updateName() {
    const newName = nameInput.value.trim();

    // Store the entered name for potential future use (e.g., local storage)
    localStorage.setItem('visitorName', newName); // Adapt storage mechanism as needed

    // Update displayed name
    nameSpan.textContent = newName;
}

// Event listener for form submission
nameInput.addEventListener('change', updateName);

// Check if a stored name exists from a previous visit
const storedName = localStorage.getItem('visitorName');
if (storedName) {
    nameInput.value = storedName; // Pre-fill input with stored name
    updateName(); // Update displayed name
}



</script>