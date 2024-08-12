// phone mask
function addPhoneMask() {
    var phoneInput = document.getElementById('form-phone');
    var cleanValue = phoneInput.value.replace(/\D/g, '');
    var formattedValue = '';
    if (cleanValue.length >= 1) {
        formattedValue += '+' + cleanValue.substring(0, 1);
    }
    if (cleanValue.length >= 2) {
        formattedValue += ' (' + cleanValue.substring(1, 4);
    }
    if (cleanValue.length >= 5) {
        formattedValue += ') ' + cleanValue.substring(4, 7);
    }
    if (cleanValue.length >= 8) {
        formattedValue += '-' + cleanValue.substring(7, 9);
    }
    if (cleanValue.length >= 10) {
        formattedValue += '-' + cleanValue.substring(9, 11);
    }
    phoneInput.value = formattedValue;
}
document.getElementById('form-phone').addEventListener('input', addPhoneMask);

// adaptive
window.addEventListener('resize', function() { 
    if (window.innerWidth <= 1470) {
        this.document.querySelector('.name__subtext').innerHTML = '20000 квартир в базе<br>100+ жилищных комплексов'
        this.document.querySelector('#select').innerHTML = 'Подбор'
        this.document.querySelector('#sell').innerHTML = 'Продажа'
        this.document.querySelector('#escort').innerHTML = 'Сопровождение'
        this.document.querySelector('#reg').innerHTML = 'Оформление'
    } else {
        this.document.querySelector('.name__subtext').innerHTML = '20000 квартир в базе 100+ жилищных комплексов'
        this.document.querySelector('#select').innerHTML = 'Подбор квартиры'
        this.document.querySelector('#sell').innerHTML = 'Продажа вторичного жилья'
        this.document.querySelector('#escort').innerHTML = 'Сопровождение сделок'
        this.document.querySelector('#reg').innerHTML = 'Оформление ипотеки'
    }
});

