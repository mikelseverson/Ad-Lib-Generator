var names = [];
var adjectives = [];
var nounA = [];
var nounB = [];
var adverbs = [];
var i = 0, string = "";

var output = function(result) {
	$('#output-field').html("<p>" + result[0] + "</p> <p>" + result[1] + "</p> <p>" + result[2] + "</p>");

}

$(document).ready(function() {
$('#submit').on('click', function() {
	names.push($('#name0').val());
	names.push($('#name1').val());
	names.push($('#name2').val());

	adjectives.push($('#adjective0').val());
	adjectives.push($('#adjective0').val());
	adjectives.push($('#adjective0').val());

	nounA.push($('#nounA0').val());
	nounA.push($('#nounA1').val());
	nounA.push($('#nounA2').val());

	nounB.push($('#nounB0').val());
	nounB.push($('#nounB1').val());
	nounB.push($('#nounB2').val());

	adverbs.push($('#adverbs0').val());
	adverbs.push($('#adverbs1').val());
	adverbs.push($('#adverbs2').val());

	console.log(adjectives);
	
	var result = $.map(names, function(name) {
	string = name + " went " + adverbs[i] + " to the " + nounA[i] + " to buy a " + adjectives[i] + " " + nounB[i] + ".";
	i++;
	return string;
	});
	console.log(result);
	output(result);
});
});


