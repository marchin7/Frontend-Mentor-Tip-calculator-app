const inputs = document.querySelectorAll('input')
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
let people;
let billPlusTip = 0;
let tipAmountPerPerson = 0;
let totalPerPerson = 0;
let item = 0;

function render(){
    bill = Number(parseFloat(billElement.value))
    people = Number((peopleElement.value));
    tipAmountPerPerson = Math.round((billPlusTip / people)*100)/100;
    totalPerPerson = Math.round(((billPlusTip - bill) / people)*100)/100;
    totalElement.innerText = tipAmountPerPerson.toLocaleString("en-US", {style:"currency", currency:"USD"});
    tipAmountElement.innerText = totalPerPerson.toLocaleString("en-US", {style:"currency", currency:"USD"})

    if(tipAmountElement.innerText === '$NaN' || tipAmountElement.innerText === '$∞'){
        tipAmountElement.innerText = '$0.00'
    }
    if(totalElement.innerText === '$NaN' || totalElement.innerText === '$∞'){
        totalElement.innerText = '$0.00'
    }
}

tipButtons.forEach(item =>{item.addEventListener('click', ()=>{
    bill = Number(parseFloat(billElement.value))
    tip = item.value
    customElement.value = ''
    billPlusTip = Math.round(((bill / 100 * tip) + bill)*100)/100;
    console.log(item.value)
    render()
    alert()
    
    tipButtons.forEach(btn =>{
        if(item !== btn) {
          btn.classList.remove('active')
        }
        else {
          btn.classList.add('active')
        }
      })
      
})})

function customFunction(){
    custom = Number(customElement.value);
    people = Number(peopleElement.value);
    billPlusTip = Math.round((bill + custom)*100)/100
    render()
    tipButtons.forEach(btn =>{
        btn.classList.remove('active')
    });
}

customElement.addEventListener('input', ()=>
alert()
)

function peopleFunction(value) {
    //customFunction() //
    render()
    alert()
}

function billFunction(value) {
    render()
    customFunction()
}

function alert() {
    if(people === 0 || people === '') {

        //customElement.value = ''
        //peopleElement.focus()
        peopleElement.style.outlineColor = 'rgb(212, 138, 0)'
        alertElement.style.opacity ='1'
    }
    
    else {
        alertElement.style.opacity ='0'
        peopleElement.style.outlineColor = 'hsl(172, 67%, 45%)'
    }
}

resetBtn.addEventListener('click', ()=>{
    billElement.value = ''
    peopleElement.value = ''
    customElement.value = ''
    tipAmountPerPerson = 0;
    totalPerPerson = 0;
    totalElement.innerText = '$0.00'
    tipAmountElement.innerText = '$0.00'
    tipButtons.forEach(btn =>{
        btn.classList.remove('active')
    });
})


























/*
function general(item){
    bill = Number(billElement.value)
    tip = Number(item.value);
    custom = Number(customElement.value);
    people = Number(peopleElement.value);

    customElement.value = ''

    billPlusTip = Math.round(((bill / 100 * tip) + bill)*100)/100;
    tipAmountPerPerson = Math.round((billPlusTip / people)*100)/100;
    totalPerPerson = Math.round(((billPlusTip - bill) / people)*100)/100;

    totalElement.innerText = tipAmountPerPerson.toLocaleString("en-US", {style:"currency", currency:"USD"});
    tipAmountElement.innerText = totalPerPerson.toLocaleString("en-US", {style:"currency", currency:"USD"})
}

tipButtons.forEach(item =>{item.addEventListener('click', btnFunction)



function btnFunction() {

    general(item)

    tipButtons.forEach(btn =>{

    if(item !== btn) {
      btn.classList.remove('active')
    }
    else {
      btn.classList.add('active')
    }
  })
}


})






customElement.addEventListener('input', customFunction)


function customFunction(){

    tipButtons.forEach(btn=>{
        btn.classList.remove('active')
    })

    bill = Number(billElement.value)
    tip = Number(tipAmountElement.value);
    custom = Number(customElement.value);
    people = Number(peopleElement.value);

    billPlusTip = Math.round((bill + custom)*100)/100
    tipAmountPerPerson = Math.round((billPlusTip / people)*100)/100
    totalPerPerson = Math.round(((billPlusTip - bill) / people)*100)/100
    
    totalElement.innerText = tipAmountPerPerson.toLocaleString("en-US", {style:"currency", currency:"USD"});
    tipAmountElement.innerText = totalPerPerson.toLocaleString("en-US", {style:"currency", currency:"USD"});
}



function peopleFunction(item) {
    if (tip){
        btnFunction(item)
    }

}



*/






  
    



































/*


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
 
    billPlusTip = Math.round((bill + custom) *100)/100;
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

*/