const FormInput = document.getElementById('container_add__note')

let counter = parseInt(localStorage.getItem('counter')) || 0
FormInput.addEventListener('submit', function (e) {
    e.preventDefault();
    ++counter
    console.log(counter)
    localStorage.setItem('counter', counter)
})