const q1 = () => {
    let i = 3;
    while(i) {
        alert(i--);
    }
    // last value alerted = 1
    // after 1 is printed, i--, i=0; i will evaluate to false, 0 is falsy value
}
// q1();

const q2 = () => {
    let i = 0;
    while(++i < 5) alert(i);
    // 4
    i = 0;
    while(i++ < 5) alert(i);
    // 5
}
// q2();

const q3 = () => {
    for(let i =0; i < 5; i++) alert(i);
    for(let i =0; i < 5; ++i) alert(i);
}
// q3();

const q4 = () => {
    for(let i = 0; i < 3; i++) {
        alert(`number ${i}`);
    }
    let i = 0;
    while(i < 3) {
        alert(`number ${i++}`);
    }
}
// q4();

const q5 = () => {
    /* Input from user using prompt
        if input < 100 then prompt again
        if user cancels / enter empty line, stop prompt
    */
    let value;
    do {
        value = Number(prompt("Enter a number > 100"));
    } while(value <= 100 && value);
}
// q5();

const q6 = () => {
    /**
     * 1
     * ...
     * 1 2 3 4 5 6 7 8
     */
    let numbers = "";
    for(let i = 1; i <= 8; i++) {
        numbers += i + " ";
        console.log(numbers);
    }
}
// q6();

const q7 = (n) => {
    // n = 5, 5 % 4, 5 % 3, 5 % 2 === 0, not prime, !== 0 prime
    // count from 2 to n
    //  i = 5, i % 4 === 0?, i % 3 ===0 ? , i % 2 === 0?
    // count from 2 to i - 1
    //  i = 5
    /**
     * j = 2; j < 5; j++
     * 2, 3, 4
     */
    const arr = [];
    for(let i = 2; i < n; i++) {
        let isPrime = true;
        for(let j = 2; j < i; j++) {
            // check if i is prime
            if(i % j === 0) {
                // not prime, go to the next
                isPrime = false;
                break;
            }
        }
        // if prime, print i
        if(isPrime) {
            arr.push(i);
            console.log(i);
        }
    }
    console.log(arr);
    // loop1:
    // for(let i = 2; i < n; i++) {
    //     for(let j = 2; j < i; j++) {
    //         if(i % j === 0) {
    //             continue loop1;
    //         }
    //     }
    //     console.log(i)
    // }


}
// q7(21);

const q8 = (arr) => {
    // return arr.reverse();
    const newArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
// console.log(q8([1,2,3,4]));

const fizzBuzz = (n) => {
    // count from 1 to n, check each number if "FizzBuzz", "Buzz", "Fizz"
    const answer = [];
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {   
            //"FizzBuzz"
            answer.push("FizzBuzz");
        }
        else if (i % 5 === 0) {
            //"Buzz"
            answer.push("Buzz");
        }
        else if(i % 3 === 0) {
            // "Fizz"
            answer.push("Fizz");
        }
        else {
            // i
            answer.push(`${i}`);
        }
    }

    // not using push
    // for(let i = 0; i < n; i++) {
    //     const number = i + 1;
    //     if(number % 3 === 0 && number % 5 === 0) {   
    //         //"FizzBuzz"
    //         // answer.push("FizzBuzz");
    //         answer[i] = "FizzBuzz";
    //     }
    //     else if (number % 5 === 0) {
    //         //"Buzz"
    //         // answer.push("Buzz");
    //         answer[i] = "Buzz";
    //     }
    //     else if(number % 3 === 0) {
    //         // "Fizz"
    //         // answer.push("Fizz");
    //         answer[i] = "Fizz";
    //     }
    //     else {
    //         // i
    //         // answer.push(`${i}`);
    //         answer[i] = `${number}`;
    //     }
    // }
    return answer;
}

// console.log(fizzBuzz(15));






