const termData = require('../../../db/terms.json');

const getTerm = (req, res) => {
    // TODO: Add a comment describing the content of req.params in this instance
  
    const requestedTerm = req.params.term.toLowerCase();
  
    for (let i = 0; i < termData.length; i++) {
      if (requestedTerm === termData[i].term.toLowerCase()) {
        return res.json(termData[i]);
      }
    }
  
    // Return a message if the term doesn't exist in our DB
    return res.json('No term found');
  };

module.exports = {getTerm};