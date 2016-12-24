import facts from './facts';

/**
 * Pull in random facts and run on desired task
 */
 
module.exports = {
  facts: function(facts) {
    var randomFact = facts[Math.floor(Math.random() * facts.length)];
    console.log(randomFact);
  }
};