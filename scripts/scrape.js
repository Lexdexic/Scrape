// reqier request, and cherrieo
var request = require ("express");
var cheerio = requier("cheerio");

// function to scrape cnbc websight
module.exports = function(){
    // return results of request
    
    return request
        .get('http://google.com/img.png')
        .on('response', function(response) {
            // make sure passing correct object do i need .data
            $ = cheerio.load(response)

            var articleObjects = []
            // can this be stored in cheerio
            // loop through each article in the responce 
                // store bellow variables using cheerio
                // inside each article store article heading 
                var heading;
                // store url
                var url;
                // story article summary / text
                var summary
                // storee any additonal inf here

                // if the headline, summary, and url, url variables are not empty or undefined 
                if(heading && url && summary){
                    // tidy up headlines and article summary, remove extra: lines, spaces, tabs, ect (solution uses .trim regular expressions)
                    // heading.replace(reg x to remove spaces and lines, " ").trim();
                    // summary.replace(reg x to remove spaces and lines, " ").trim();

                    // innitalize on this object to push to articles[]
                    var article = {
                        url : url,
                        heading : heading,
                        summary : summary
                    };

                   articleObjects.push(article);
                }
            console.log(response.statusCode) // 200
            console.log(response.headers['content-type']) // 'image/png'
        });
        return articleObjects;
};


// export above function
