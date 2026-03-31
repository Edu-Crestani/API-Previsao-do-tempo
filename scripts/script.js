const date = new Date();
const days = [
    'Domingo', 'Segunda', 'Terça', 'Quarta',
    'Quinta', 'Sexta', 'Sabado'
];



function weekDisplay() {
    function dayx(x) {
        return days[(date.getDay() + x-1) % 7];
    }
    const day1 = document.querySelector('#day1_h2')
    day1.textContent = dayx(1);
    const day2 = document.querySelector('#day2_h2')
    day2.textContent = dayx(2);
    const day3 = document.querySelector('#day3_h2')
    day3.textContent = dayx(3);
    const day4 = document.querySelector('#day4_h2')
    day4.textContent = dayx(4);
    const day5 = document.querySelector('#day5_h2')
    day5.textContent = dayx(5);
    const day6 = document.querySelector('#day6_h2')
    day6.textContent = dayx(6);
    const day7 = document.querySelector('#day7_h2')
    day7.textContent = dayx(7);
}

weekDisplay()