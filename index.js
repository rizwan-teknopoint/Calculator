let screen = document.getElementById('screen');
let allBtns = document.querySelectorAll('.btn');
let themeBtn = document.querySelector('.theme')
let screenValue = "";
let buttonText;


// THEME 
themeBtn.addEventListener('click', (e) => {
    document.documentElement.classList.toggle('dark')
})

screen.addEventListener('keydown', (e) => {
    if (
        isNaN(e.key) &&
        e.key !== "Backspace" &&
        e.key !== "ArrowLeft" &&
        e.key !== "ArrowRight" &&
        e.key !== "Delete" &&
        e.key !== "/" &&
        e.key !== "*" &&
        e.key !== "+" &&
        e.key !== "-" &&
        e.key !== "%" &&
        e.key !== '='
    ) {
        e.preventDefault()
    }
})

allBtns.forEach((elem, i) => {
    elem.addEventListener('click', (e) => {

        buttonText = e.target.innerText;
        screenValue += buttonText
        screen.value = screenValue

        if (buttonText == 'X') {
            screenValue = screen.value.replace('X', '*')
            screen.value = screenValue
        }

        // ALL CLEAR BUTTON LOGIC
        if (buttonText == 'AC') {
            screen.value = ""
            screenValue = screen.value
        }

        // CLEAR BUTTON LOGIC 
        if (buttonText == 'C') {
            screenValue = screen.value.slice(0, -2)
            screen.value = screenValue
        }

        if (buttonText == '=') {
            screen.value = screen.value.replace('=', "")
            // calculate(screen.value)
            allCalculate(screen.value)
        }
    })
})

// screen.addEventListener('keydown', (e)=>{
//     if(e.key == 'Enter'){
//         calculate(screen.value)
//     }
// })

function division(num1, num2) {
    let result = parseFloat(num1) / parseFloat(num2)
    screenValue = result;
    screen.value = screenValue
    return result
}

function multiplication(num1, num2) {
    let result = parseFloat(num1) * parseFloat(num2)
    screenValue = result;
    screen.value = screenValue
    return result
}

function addition(num1, num2) {
    let result = parseFloat(num1) + parseFloat(num2)
    screenValue = result;
    screen.value = screenValue
    return result
}

function subtraction(num1, num2) {
    let result = parseFloat(num1) - parseFloat(num2)
    screenValue = result;
    screen.value = screenValue
    return result
}

const calculate = (string) => {
    let allValuesArr = string.split('')
    console.log(string)
    console.log(allValuesArr)
    allValuesArr.forEach((e, i) => {
        if (e == '/') {
            let x = screenValue.slice().split('/')
            let [a, b] = x;
            division(a, b)
        }
        if (e == '*') {
            let x = screenValue.slice().split('*')
            let [a, b] = x;
            multiplication(a, b)
        }
        if (e == '+') {
            screenValue = screen.value
            let x = screenValue.slice().split('+')
            let [a, b] = x;
            addition(a, b)
        }
        if (e == '-') {
            let x = screenValue.slice()
            // .split('-')
            console.log(x)
            let [a, b] = x;
            subtraction(a, b)
        }
    })
}

// New Method 
{   
    let result = 0
    function allCalculate() {
        console.log(screen.value)
        let allValuesArr = scree.value.split('')
    }

    var expression = "3+4*5-6/2";

    // Splitting by operators (+, -, *, /)
    var values = expression.split(/([+\-*\/])/);
    console.log(values)

    // Filter out empty strings
    values = values.filter(function (value) {
        return value !== "";
    });

    console.log(values);
    values.forEach((e, i) => {
        if(i>0){       

        if(i%2!==0){
           if(e=='/'){
            console.log(values[i-1],values[i+1])
           }
        
            if(values[i-1] == '/'){

            }else if (values[i-1] == '*'){

            }else if (values[i-1] == '+'){
                
            }else if (values[i-1] == '-'){
                
            }else if (values[i-1] == '%'){
                
            }else{

            }
        }
    }
    })
}






