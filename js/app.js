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
$container.append('<h4>Holly Wand with Unicorn Hair Core</h4>');