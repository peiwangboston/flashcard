var BasicCard = require ("./BasicCard");

var ClozeCard = function (text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.fullText = function() {
		console.log(this.text);
	};
	this.partial = function () {
		if (this.text.replace(this.cloze,"...") === this.text) {
			console.log(this.cloze + " does not appear in " + this.text);
		}
		else {
			var newText = this.text.replace(this.cloze, "...");
			console.log(newText);
		}
	};
};

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front); 

console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.cloze); 

firstPresidentCloze.partial(); 

firstPresidentCloze.fullText();

var brokenCloze = new ClozeCard("This doesn't work", "oops");
brokenCloze.partial();

module.exports = ClozeCard;