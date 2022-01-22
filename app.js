const form = document.querySelector('#form');
const output = document.querySelector('#output');



form.addEventListener('submit', function (e) {
    e.preventDefault()

    localStorage.setItem('time', JSON.stringify(this.querySelector('input[type="time"]').value))
    localStorage.setItem('date', JSON.stringify(this.querySelector('input[type="date"]').value))

    timeCal()
});

