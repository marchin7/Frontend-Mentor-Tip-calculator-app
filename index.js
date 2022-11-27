const tipButtons = document.querySelectorAll('#btn');
const billElement = document.getElementById('bill');
const customElement = document.getElementById('custom');
const peopleElement = document.getElementById('people');
const tipAmountElement = document.getElementById('tipAmount');
const totalElement = document.getElementById('total');
const resetBtn = document.getElementById('reset');
const alertElement = document.getElementById('alert');

let bill = 0;
let tip = 0;
let custom = 0;
let people = 0;
let billPlusTip = 0;
let tipAmountPerPerson = 0;
let totalPerPerson = 0;


tipButtons.forEach(btn=>{btn.addEventListener('click', btnResult)
    
    function btnResult() {
        bill = Number(billElement.value);
        tip = Number(btn.value);
        custom = Number(customElement.value);
        people = Number(peopleElement.value);

        customElement.value = ''

        if(people === 0) {
            custom = 0
            peopleElement.focus()
            peopleElement.style.outlineColor = 'rgb(212, 138, 0)'
            alertElement.style.opacity ='1'
        }

        else {
            alertElement.style.opacity ='0'
            peopleElement.style.outlineColor = 'hsl(172, 67%, 45%)'
        }
    
        billPlusTip = Math.round(((bill / 100 * tip) + bill)*100)/100;
        tipAmountPerPerson = Math.round((billPlusTip / people)*100)/100;
        totalPerPerson = Math.round(((billPlusTip - bill) / people)*100)/100;
        let tipAmountPerPersonToLocale = tipAmountPerPerson.toLocaleString("en-US", {style:"currency", currency:"USD"});
        let totalPerPersonToLocale = totalPerPerson.toLocaleString("en-US", {style:"currency", currency:"USD"});
        totalElement.innerText = tipAmountPerPersonToLocale;
        tipAmountElement.innerText = totalPerPersonToLocale;

        if(tipAmountElement.innerText === '$NaN' || tipAmountElement.innerText === '$∞'){
            tipAmountElement.innerText = '$0.00'
        }
        if(totalElement.innerText === '$NaN' || totalElement.innerText === '$∞'){
            totalElement.innerText = '$0.00'
        }

    }
})


customElement.addEventListener('input', ()=>{

    bill = Number(billElement.value);
    tip = Number(btn.value);
    custom = Number(customElement.value);
    people = Number(peopleElement.value);

    if(people === 0) {

        customElement.value = ''
        peopleElement.focus()
        peopleElement.style.outlineColor = 'rgb(212, 138, 0)'
        alertElement.style.opacity ='1'
    }
    
    else {
        alertElement.style.opacity ='0'
        peopleElement.style.outlineColor = 'hsl(172, 67%, 45%)'
    }
 
    billPlusTip = Math.round(((bill / 100 * custom) + bill)*100)/100;
    tipAmountPerPerson = Math.round((billPlusTip / people)*100)/100;
    totalPerPerson = Math.round(((billPlusTip - bill) / people)*100)/100;
    let tipAmountPerPersonToLocale = tipAmountPerPerson.toLocaleString("en-US", {style:"currency", currency:"USD"});
    let totalPerPersonToLocale = totalPerPerson.toLocaleString("en-US", {style:"currency", currency:"USD"});
    totalElement.innerText = tipAmountPerPersonToLocale;
    tipAmountElement.innerText = totalPerPersonToLocale;
    console.log(totalPerPerson);
})

function clearAlert(value) {
    alertElement.style.opacity ='0'
    peopleElement.style.outlineColor = 'hsl(172, 67%, 45%)'

}

if(tipAmountElement.innerText === '$NaN' || tipAmountElement.innerText === '$∞'){
    tipAmountElement.innerText = '$0.00'
}
if(totalElement.innerText === '$NaN' || totalElement.innerText === '$∞'){
    totalElement.innerText = '$0.00'
}

resetBtn.addEventListener('click', ()=>{
    billElement.value = ''
    peopleElement.value = ''
    customElement.value = ''
    tipAmountPerPerson = 0;
    totalPerPerson = 0;
    totalElement.innerText = '$0.00'
    tipAmountElement.innerText = '$0.00'
})
    

