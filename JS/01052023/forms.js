const loginForm = document.getElementById('login');

loginForm.addEventListener(
    "submit",
    (e) => {
        e.preventDefault();
        const username = document.querySelector('#username');
        const password = document.querySelector('#password');

        console.log(`Username is: ${username.value} \n Password is: ${password.value}`);
    }
);

const fruitsForm = document.querySelector('#fruits');

fruitsForm.addEventListener(
    "submit",
    (e) => {
        /*
        1. Prevent default form submission
        2. Get the value of fruit and quantity
        3. Create a new li element
        4. Set the text of new li element to include fruit and quantity (e.g. 99 Apple)
        5. Append the new li element to the ul id=list
        6. Reset inputs / set input value to empty
        */
        e.preventDefault();
        const fruit = document.querySelector('#fruit');
        const quantity = document.querySelector('#quantity');
        const list = document.querySelector('#list');
        // inputElement.value
        const item = document.createElement('li');
        // item.innerText = `${quantity.value} ${fruit.value}`
        // item.textContent = `${quantity.value} ${fruit.value}`
        item.append(`${quantity.value} ${fruit.value}`);

        list.append(item);

        // reset form element inputs
        fruitsForm.reset();

        // set input value to empty
        // quantity.value = "";
        // fruit.value = "";
    }
)
