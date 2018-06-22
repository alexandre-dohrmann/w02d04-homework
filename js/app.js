// console.log("This is working");

// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {
//   console.log('I did it! I linked jQuery and this js file!')
// };

// -----------
// YEAR 1:
// -----------

	const $container = $('#container');
	console.log($container);

	const $h1 = $('h1');
	$container.append($h1);
	$container.append('<h1>Hogwarts</h1>');

// -----------
// YEAR 2:
// -----------

	const $h2 = $('h2');
	$container.append($h2);
	$container.append('<h2>Alexandre</h2>');

	const $h3 = $('h3');
	$container.append($h3);
	$container.append('<h3>Gryffindor</h3>');

	const $h4 = $('h4');
	$container.append($h4);
	$container.append('<h4 class="cat">Midori</h4>');
	$container.append('<h4 class="wand">Holly Wand with Unicorn Hair Core</h4>');

// -----------
// YEAR 3:
// -----------

	const $ul = $('<ul storage="trunk"></ul>');
	$container.append('<li>butter beer</li>');
	$container.append('<li class="secret">invisibility cloak</li>');
	$container.append('<li class="secret">magic map</li>');
	$container.append('<li class="secret">time turner</li>');
	$container.append('<li class="cat">leash</li>');
	$container.append('<li>Bertie Bott\'s Every Flavor [Jelly] Beans</li>');

// -----------
// YEAR 4:
// -----------

	const $h5 = $('h5');
	$container.append('<h5>Spring 2018</h5>');

	const $table = $('<table></table>');
	$container.append('<table><thead><tr><th>Day</th><th>Classes</th><tr><td>Monday</td><td>Herbology, Divination, History of Magic</td></tr><tr><td>Tuesday</td><td>Transfiguration, Defense Against the Dark Arts, Quidditch Practice</td></tr><tr><td>Wednesday</td><td>Herbology, Divination, History of Magic</td></tr><tr><td>Thursday</td><td>Transfiguration, Defense Against the Dark Arts, Quidditch Practice</td></tr><tr><td>Friday</td><td>Herbology, Divination, History of Magic</td></tr></thead></table>')

// -----------
// YEAR 5:
// -----------

	$('h4.wand').remove();	
	$('li').eq(0).remove();
	$('h4').after($('<h4>').text('Hornbeam Wand with Dragon Heartstring').css('color', 'indigo'));
	$('h4.cat').eq(0).replaceWith('<h4 class="cat">Midori (spy mission)</h4>');
	$('h4.cat').appendTo($('body'));
	$('h4').eq(0).before($('h4.cat'));

// -----------
// YEAR 6:
// -----------

	$('.secret').hide('slow').delay(2000).show('slow');
	$('li.cat').addClass('cabbage');
	$('li.cat').removeClass('cabbage');

// -----------
// YEAR 7:
// -----------

	$('h5').text('Fall 2017');
	$('ul').prepend($('<li>').text('Butter beer'));
	$('ul').attr('storage', 'chest');
	console.log($container);
