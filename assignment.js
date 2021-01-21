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

function hotelCost() {}

function megaFriend(firends) {
	var megaFriend = 0;
	// First validate array empty or not
	if (firends.length <= 0) {
		return 'Please Enter Your all Frineds Name';
	} else {
		// Loop on friends array and do compare with initial megaFriend  then insert the bigger one
		for (var i = 0; i < firends.length; i++) {
			if (firends[i].length > megaFriend) {
				megaFriend = firends[i].length;
			}
		}
	}
	// Return the final value
	return megaFriend;
}
var firend = [];
console.log(megaFriend(firend));
