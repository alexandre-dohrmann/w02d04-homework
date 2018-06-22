// console.log("This is working");

// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {
//   console.log('I did it! I linked jQuery and this js file!')
// };

const $container = $('#container');
console.log($container);

const $h1 = $('h1');
$container.append($h1);
$container.append('<h1>Hogwarts</h1>');

const $h2 = $('h2');
$container.append($h2);
$container.append('<h2>Alexandre</h2>');

const $h3 = $('h3');
$container.append($h3);
$container.append('<h3>Gryffindor</h3>');

const $h4 = $('h4');
$container.append($h4);
$container.append('<h4 class="cat">Midori</h4>');
$container.append('<h4>Holly Wand with Unicorn Hair Core</h4>');

const $ul = $('<ul storage="trunk"></ul>');
$container.append('<li>butter beer</li>');
$container.append('<li class="secret">invisibility cloak</li>');
$container.append('<li class="secret">magic map</li>');
$container.append('<li class="secret">time turner</li>');
$container.append('<li class="cat">leash</li>');
$container.append('<li>Bertie Bott\'s Every Flavor [Jelly] Beans</li>');




