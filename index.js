const passwordd = document.getElementById('displayed-password');
const generateButton = document.querySelector('.generate');
const copy = document.querySelector('.copy');
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
const allChars = upperCase + lowerCase + numbers + specialChars;

function generatePassword() {
    let password = '';
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += specialChars[Math.floor(Math.random() * specialChars.length)];

        while(length > password.length) {
          password += allChars[Math.floor(Math.random() * allChars.length)];
        }

        passwordd.innerHTML = password;

}
document.addEventListener("keypress", (e)=> {
    if (e.key === "Enter") {
        generatePassword();
    }
})

copy.addEventListener('click', () => {
    const passwordText = passwordd.innerText;
    navigator.clipboard.writeText(passwordText);
    alert('Password copied to clipboard!');
});
generateButton.addEventListener("click", generatePassword);

