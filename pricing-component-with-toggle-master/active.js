let annually = document.getElementById('annually');//获取annually按钮
let monthly = document.getElementById('monthly');//获取monthly按钮
let annuallyPrice = document.getElementsByClassName('annuallyPrice');
let monthlyPrice = document.getElementsByClassName('monthlyPrice');

annually.onclick = function () {
    annually.style.display = 'none';
    monthly.style.display = 'inline-block';
    monthly.style.left = '1.8rem';
    for(let i = 0; i < 3; i++) {
        annuallyPrice[i].style.display = 'none';
        monthlyPrice[i].style.display = 'block';
    }
}

monthly.onclick = function () {
    monthly.style.display = 'none';
    annually.style.display = 'inline-block';
    for(let i = 0; i < 3; i++) {
        monthlyPrice[i].style.display = 'none';
        annuallyPrice[i].style.display = 'block';
    }
}