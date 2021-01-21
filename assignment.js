// kilometer To Meter converter function
function kilometerToMeter(kilometer) {
	// validate negative value or empty value
	if (kilometer <= 0) {
		return 'you enter wrong value';
	} else {
		// convert kilometer to meter by multiply, and assign to meter variable
		var meter = kilometer * 1000;
		return meter;
	}
}
console.log(kilometerToMeter(5.21));

function budgetCalculator() {}

// know your hotel rent using by hotelCost Function
function hotelCost(days) {
	// initial rent 0 and this will be final value
	var totalRent = 0;
	// For each option i make each function for call them in situation
	function first10Day(day) {
		return day * 100;
	}
	function second10Day(day) {
		return day * 80;
	}
	function after20Day(day) {
		return day * 50;
	}
	if (days > 0) {
		if (days <= 10) {
			// For first 10 days
			totalRent = first10Day(days);
		} else if (days <= 20) {
			// For second 10 days
			totalRent = second10Day(days - 10) + first10Day(10);
		} else {
			// For after 20 days
			totalRent = first10Day(10) + second10Day(10) + after20Day(days - 20);
		}
	} else {
		return 'Plese Enter Correct Information for knowing your rent';
	}
	return totalRent;
}
console.log('Your Rent is:', hotelCost(101));

//!  find largest word from array by using MegaFrind function
function megaFriend(firends) {
	var megaFriend = [];
	// First validate array empty or not
	if (firends.length <= 0) {
		return 'Please Enter Your all Frineds Name';
	} else {
		// Loop on friends array and do compare with initial megaFriend  then insert the bigger one
		for (var i = 0; i < firends.length; i++) {
			if (firends[i].length > megaFriend.length) {
				megaFriend = firends[i];
			}
		}
	}
	// Return the final value
	return megaFriend;
}
var firend = [
	'lina',
	'tinads',
	'lindayf',
	'kufas',
	'chagoll',
	'rupdssf',
	'lkdfjilove you chagol',
];
console.log(megaFriend(firend));
