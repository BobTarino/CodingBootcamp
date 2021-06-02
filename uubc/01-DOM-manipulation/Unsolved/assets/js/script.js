// Create your HTML Page via DOM Methods here!

var body = document.body;
var $container = document = document.getElementById('container');
var $mainHeader = document.createElement('h1')
var $h2El = document.createElement('h2')

// TODO: Add a centered h1

$mainHeader.textContent = 'Hello World';
$mainHeader.setAttribute('style', 'text-align: center;'); 

body.appendChild($mainHeader);
// TODO: Add a centered h2
$h2El.textContent = 'This is my very cool website';
$h2El.setAttribute('style', 'text-align: center;'); 

body.appendChild($h2El);




// TODO: Add a centered image with a centered caption under it

// TODO: Add a list of your favorite foods (or other favorites)
