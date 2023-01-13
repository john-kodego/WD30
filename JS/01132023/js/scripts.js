const reviewForm = document.querySelector('#reviewForm');
const title = document.querySelector('#title');
const year = document.querySelector('#year');
const review = document.querySelector('#review');
const display = document.querySelector('#display pre');
const retrieveBtn = document.querySelector('#retrieveBtn');
const reviewsTable = document.querySelector('#reviewsTable');

const movieReviews = [];

reviewForm.addEventListener(
    'submit',
    (e) => {
        e.preventDefault();
        const movieReview = {
            id: Date.now(),
            title: title.value,
            year: year.value,
            review: review.value
        }
        movieReviews.push(movieReview);
        reviewForm.reset();
        console.table(movieReviews);
        const reviewsJSON = JSON.stringify( movieReviews, null, 2 );
        display.innerText = "\n" + reviewsJSON;

        localStorage.setItem("Movie Reviews", reviewsJSON);
    }
);

retrieveBtn.addEventListener(
    'click',
    () => {
        // retrieve movie reviews from local storage
        const reviews =  JSON.parse( localStorage.getItem("Movie Reviews") );

        for (let review of reviews) {
            // create / insert a new table row

            // create / insert cells inside new table row

            // insert values to the table cells
        }
    }
);
