const toggle = document.getElementById ('toggle');
const box = document.getElementById ('box')

toggle.addEventListener('change', function (event) {
    box.classList.toggle('show-monthly');
});
