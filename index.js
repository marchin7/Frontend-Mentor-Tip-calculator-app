const tipButtons = document.querySelectorAll('.btn');
const billElement = document.getElementById('bill');
const customElement = document.getElementById('custom');
const peopleElement = document.getElementById('people');
const tipAmountElement = document.getElementById('tipAmount');
const totalElement = document.getElementById('total');
const resetBtn = document.getElementById('resetBtn');
const dollarCustom = document.getElementById('dollar-custom');
const errorMag = document.getElementById('error-msg');
const form = document.getElementById('form');

let bill = 0;
let tip = 0;
let total = 0;
let tipAmount = 0;
let custom = 0;
let people = 0;
let btnValue = 0;

form.addEventListener('submit', (e)=>{
    e.preventDefault();
});

function calculate(){
    bill = Number(billElement.value);
    people = Number(peopleElement.value);
    custom = Number(customElement.value);

    if(btnValue === ''){tip = custom}
    else{tip = (bill / 100) * btnValue}
    total = (bill + tip) / people;
    tipAmount = tip / people;

    if(customElement.value === ''){
        dollarCustom.classList.remove('dollar-custom-visible')
    }
    resetBtn.classList.add('reset-btn-active');
    render();
}

function render(){
    if(isFinite(tipAmount)){
        totalElement.innerText = `$${total.toFixed(2)}`;
        tipAmountElement.innerText = `$${tipAmount.toFixed(2)}`;
    }
    else{
        totalElement.innerText = '$0.00';
        tipAmount.innerText = '$0.00';
    }
}

tipButtons.forEach(btn=>{btn.addEventListener('click', ()=>{
    btnValue = btn.value;
    customElement.value = '';

    tipButtons.forEach(item =>{
        if(item !== btn){
            item.classList.remove('btn-active')
        }
        else{
            item.classList.add('btn-active')
        }
    })
    calculate();
    showErrorMsg();
})});

billElement.addEventListener('input', ()=>{
    calculate();
});

peopleElement.addEventListener('input', ()=>{
    calculate();
    showErrorMsg();
});;

customElement.addEventListener('input', ()=>{
    tipButtons.forEach(btn=>{
        btnValue = '';
        btn.classList.remove('btn-active');
    });
    dollarCustom.classList.add('dollar-custom-visible');
    calculate();
    showErrorMsg();
});

function showErrorMsg(){
    if(people === 0 || people === ''){
        peopleElement.classList.add('show-error-msg')
        errorMag.style.opacity = '1'
    }
    else{
        peopleElement.classList.remove('show-error-msg')
        errorMag.style.opacity = '0'
    }
}

resetBtn.addEventListener('click', ()=>{
    billElement.value = '';
    peopleElement.value = '';
    customElement.value = '';
    btnValue = '';
    tip = 0;
    custom = 0;
    people = 0;
    totalElement.innerText = '$0.00';
    tipAmountElement.innerText = '$0.00';
    dollarCustom.classList.remove('dollar-custom-visible');
    errorMag.style.opacity = '0';
    peopleElement.classList.remove('show-error-msg');
    resetBtn.classList.remove('reset-btn-active');
    tipButtons.forEach(btn=>{
        btn.classList.remove('btn-active');
    })
});


    

