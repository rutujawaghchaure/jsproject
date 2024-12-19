function generatePassword() {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const special = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    
    let characters = '';
    let passwordLength = 12; // Default password length
    
     
    if (document.getElementById('uppercase').checked) {
        characters += uppercase;
    }
    if (document.getElementById('lowercase').checked) {
        characters += lowercase;
    }
    if (document.getElementById('digits').checked) {
        characters += digits;
    }
    if (document.getElementById('special').checked) {
        characters += special;
    }

    if (characters === '') {
        document.getElementById('message').innerText = 'Please select at least one character set.';
        return;
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password').value = password;
    document.getElementById('message').innerText = '';
}

function copyToClipboard() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    document.getElementById('message').innerText = 'Password copied to clipboard!';
}
