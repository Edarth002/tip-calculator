
const Mealcost = document.getElementById("inputBill");
const refresh = document.getElementById("reset");
const numberOfPeople = document.getElementById("people");
const tipPerPerson = document.getElementById("tipPer");
const totalperPerson = document.getElementById("totalPerPerson");
let button = document.getElementById("button");
let errorBill = document.getElementById("errorbill");
let erroCustomer = document.getElementById("errorpeople");
let x = null;
let tipRate;
function adder(x) {
    if (isNaN(parseFloat(Mealcost.value)) && isNaN(parseInt(numberOfPeople.value))) {
        errorBill.style.display = "block";
        erroCustomer.style.display = "block";
        console.log("Type in a number");
    } else if (isNaN(parseFloat(Mealcost.value))) {
        errorBill.style.display = "block";
        erroCustomer.style.display = 'none';
    } else if (isNaN(parseFloat(numberOfPeople.value))) {
        erroCustomer.style.display = "block";
        errorBill.style.display = 'none';
    }
    else {
        erroCustomer.style.display = 'none';
        errorBill.style.display = 'none';
        console.log("You worked");
        tipRate = x;
        return calculateAmount();
    }
}

function calculateAmount() {
    tipAmount = parseFloat(Mealcost.value) * parseFloat(tipRate.value) / 100;
    console.log(parseFloat(Mealcost.value) * parseFloat(tipRate.value) / 100);
    const totalAmount = tipAmount + parseFloat(Mealcost.value);
    tipPerPerson.innerText = "$" + Math.round(tipAmount / parseInt(numberOfPeople.value));
    totalperPerson.innerText = "$" + Math.round(totalAmount / parseFloat(numberOfPeople.value));
};
refresh.addEventListener('click', () => {
    location.reload();
});