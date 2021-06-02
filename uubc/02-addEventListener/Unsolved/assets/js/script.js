// TODO: Create a variable to hold the count

var $count = 0;

// TODO: Create variables to select the increment button, decrement button and count heading by their respective ids.

var $increment = document.getElementById('increment');
var $decrement = document.getElementById('decrement');
var $countheading = document.getElementById('count');

// TODO: Create a function that displays the current count on the page

function displayCounter() {
    $countheading.textContent = $count; 
}




// TODO: Create an addEventListener that will increment the count on click

$increment.addEventListener('click', function() {
    $count++; 
    displayCounter();
})
// and calls the function to display the current count
// TODO: Create an addEventListener that will decrement the count on click
// and calls the function to display the current count
$decrement.addEventListener('click', function() {
     if ($count > 0 && $count < 10) {
    $count--; 
    displayCounter();   
    }
        
    })


