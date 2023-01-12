const register = document.querySelector('#register');
const username = document.querySelector('#username');

register.addEventListener(
    'submit',
    (e) => {
        e.preventDefault();

        const userValue = username.value.trim();
        
        if( !userValue ) {
            console.log('Username is required');
        }
        // username should be between 5 to 16 characters
        else if( userValue.length < 5 || userValue.length > 16 ) {
            console.log('Username must be between 5 to 16 characters');
        }
    }
)
