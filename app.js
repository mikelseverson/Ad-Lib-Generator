var names = ["Jim", "Mike", "P R"];
var adjectives = ["hard", "hot", "sweet"];
var nounA = ["chair", "airplane", "clock"]
var nounB = ["sailboat", "sky", "swimming pool"];
var adverbs = ["quickly", "quietly", "skulkingly"]
var i = 0, string = "";

var result = $.map(names, function(name) {
string = name + " went " + adverbs[i] + " to the " + nounA[i] + " to buy a " + adjectives[i] + " " + nounB[i] + ".";
i++;

return string;
});

console.log(result);
