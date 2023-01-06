const btnRadio = document.querySelector('#btnRadio');

btnRadio.addEventListener(
    "click",
    () => {
        // <input type="radio" name="radbtn" id="radbtn1" value="radbtn1" checked>
        const checked = document.querySelector("input[name='radbtn']:checked");
        alert(checked.value);
    }
);

const radBtn = document.querySelectorAll("input[name='radbtn']");
// [input, input, input] (NodeList)

radBtn.forEach(
    (el) => {
        el.addEventListener(
            'change',
            (e) => {
                // e.target.value
                alert(e.target.value);
            }
        );
    }
);


const firstName = document.querySelector('#firstName');
const output = document.querySelector('#output');

firstName.addEventListener(
    'change',
    (e) => {
        output.innerText = `Hello, ${e.target.value}!`;
    }
);


const nickname = document.getElementById('nickname');
const nicknameOutput = document.getElementById('nicknameOutput');

let timer;

nickname.addEventListener(
    'input',
    (e) => {
        // debounce / debouncing
        // setTimeout(callbackfn, milliseconds)
        clearTimeout(timer);

        timer = setTimeout(
            () => {
                nicknameOutput.innerText = `Hi, ${e.target.value}!`;
                console.log(e.target.value);
            },
            1000
        );
    }
);

const checkAll = document.querySelector('#checkAll');
const checkboxes = document.querySelectorAll("input[name='check']");
// [input, input, input, input]

checkAll.addEventListener(
    'click',
    (e) => {
        // e.target.checked
        const checked = e.target.checked;

        checkboxes.forEach(
            (checkbox) => {
                checkbox.checked = checked;
            }
        );
    }
);

/*
    Toggle Button, Colors checkboxes
    When toggle button is clicked:
        1. If 1 or more checkboxes is unchecked, check all
        2. Else, uncheck all
    
    assume all checkboxes are checked
    let allChecked = true;

    loop for each checkbox in checkboxes collection
        if 1 or more checkboxes is not checked, allChecked = false

    if( !allChecked ) {
        // check all checkboxes
    } 
    else {
        // uncheck all checkboxes
    }
*/

const btnToggle = document.querySelector('#toggle');
const colors = document.querySelectorAll('input[name="colors"]');
// [input, input, input, input]

btnToggle.addEventListener(
    "click",
    () => {
        let allChecked = true;
        colors.forEach(
            (color) => {
                if( !color.checked ) {
                    allChecked = false;
                }
            }
        );
        if( !allChecked ) {
            // check all checkboxes
            colors.forEach(
                (color) => {
                    color.checked = true
                }
            )
        } 
        else {
            // uncheck all checkboxes
            colors.forEach( color => color.checked = false );
        }
    }
);
