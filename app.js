var names = [];
var adjectives = [];
var nounA = [];
var nounB = [];
var adverbs = [];
var i = 0, string = "";

var output = function(result) {
	$('#output-field').html(result[0]) + $('#output-field').html(result[1]) + $('#output-field').html(result[2]);
}

(document).ready(function() {
$('submit').on('click', function() {
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

	adjectives.push($('#adjective0').val());
	adjectives.push($('#adjective1').val());
	adjectives.push($('#adjective2').val());
	
	var result = $.map(names, function(name) {
	string = name + " went " + adverbs[i] + " to the " + nounA[i] + " to buy a " + adjectives[i] + " " + nounB[i] + ".";
	i++;
	return string;
	});

	output(result);
});
});


