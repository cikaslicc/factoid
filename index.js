var facts = require('./facts');

module.exports = {
	randomizeFact: function() {
		var randomFact = facts[Math.floor(Math.random() * facts.length)];
		return randomFact;
	},
  	showRandomFact: function() {
    	console.log(
    		'\n' +
    		'* * * * * * * * * * \n' +
    		'Fun fact:',this.randomizeFact() + '\n' +
    		'* * * * * * * * * * \n'
    	);
	}
};