let form = document.querySelector('.form')
let input = document.querySelector('#input')
let foot = document.querySelector('.on-foot')
let velo = document.querySelector('.velo')
let car = document.querySelector('.car')
let plano = document.querySelector('.plane')


form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let inputValue = input.value
    if (inputValue) {

        var onFoot = (inputValue / 3.6);
        var onVelo = (inputValue / 20.1);
        var onCar = (inputValue / 70);
        var onPlano = (inputValue / 800);


        var onFoot0 = Math.floor(inputValue / 3.6);
        var onVelo0 = Math.floor(inputValue / 20.1);
        var onCar0 = Math.floor(inputValue / 70);
        var onPlano0 = Math.floor(inputValue / 800);


        var onFoot1 = (onFoot - Math.floor(onFoot)) * 60;
        var onVelo1 = (onVelo - Math.floor(onVelo)) * 60;
        var onCar1 = (onCar - Math.floor(onCar)) * 60;
        var onPlano1 = (onPlano - Math.floor(onPlano)) * 60;


        var onFoot2 = (onFoot1 - Math.floor(onFoot1)) * 60;
        var onVelo2 = (onVelo1 - Math.floor(onVelo1)) * 60;
        var onCar2 = (onCar1 - Math.floor(onCar1)) * 60;
        var onPlano2 = (onPlano1 - Math.floor(onPlano1)) * 60;


        foot.textContent = (Math.floor(onFoot0) + ':' + Math.floor(onFoot1) + ':' + Math.floor(onFoot2)) + 'sek';
        velo.textContent = (Math.floor(onVelo0) + ':' + Math.floor(onVelo1) + ':' + Math.floor(onVelo2)) + 'sek';
        car.textContent = (Math.floor(onCar0) + ':' + Math.floor(onCar1) + ':' + Math.floor(onCar2)) + 'sek';
        plano.textContent = (Math.floor(onPlano0) + ':' + Math.floor(onPlano1) + ':' + Math.floor(onPlano2)) + 'sek';




    }
})