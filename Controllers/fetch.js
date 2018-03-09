var modelsdb = require("../models");
var scrape = requier("../scripts/scrape.js");

module.exports = {
    scrapeHeadlines : function(req, res){
        // scrape CNBC 
        return scrape()
        .then(function(articleObjects){
        // insert articles in to DB .headline create a create function
        return Headline.create(articleObjects)
        // ^ this will be repeated in other files 
        })
        .then(function(headlinedb){
            // if headline has atleast 1 article pass an object with message of # of messages (.length) to res.json
            // if no articles pass object with message to res.json
        })
        .catch(function(error){
            res.json({
                message : "scrape complete"
            });
        });
    }
};
