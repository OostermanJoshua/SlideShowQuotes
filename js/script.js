/*
Name: Joshua Oosterman
      Assignment #1

Description: This Project would display random quotes (6 of them) when requested via a button.   


Additional Comments: I did attempt to create a loop/condition check for repeated quotes but ended up not working.

*/
 

var quotes = [               
    {
        quote: "Taking on a challenge is a lot like riding a horse, isn't it? If you're comfortable while you're doing it, you're probably doing it wrong.",   
        source: "TV Character: 'Ted Lasso'",
        citation: "From the Show: Ted Lasso",
        year: "2020"
    }, 
    {
        quote: "Going in one more round when you don't think you can. That's what makes all the difference in your life.",
        source: "Movie Character: Rocky Balboa",
        citation: "From the Movie: Rocky Balboa",
        year: "2006"
    }, 
    {
        quote: "You miss 100 percent of the shots you don't take.",
        source: "Wayne Gretzky"
    }, 
    {
        quote: "I learned that if you want to make it bad enough, no matter how bad it is, you can make it.",
        source: "Gale Sayers"
    }, 
    {
        quote: "Set your goals high, and don't stop till you get there.",
        source: "Bo Jackson"
    }, 
    {
        quote: "When you lose a couple of times, it makes you realize how difficult it is to win.",
        source: "Steffi Graf"

         // link to quotes: https://bleacherreport.com/articles/910238-the-100-best-sports-quotes-of-all-time
         // https://www.countryliving.com/life/entertainment/g37376734/ted-lasso-quotes/
         // https://contendersclothing.com/blogs/contenders-clothing/top-20-inspiring-quotes-by-rocky
    }
];

function getRandomQuote() {
        var numOfQuotes = quotes.length; // get the length or # of quotes into a variable 
        var randNumIndex; // to be initialized
        var noRepeat = []; // array that checks if quotes have been used

        if(noRepeat.length == numOfQuotes.length) {        // if array length is same as number of Quotes, reset the array
            noRepeat = [];
        }
        do {
            var randNumIndex = Math.floor(Math.random() * numOfQuotes);  // gets random number range from 0 to last index of quotes, from 0-5 or 6 quotes
        }   while (noRepeat.includes(randNumIndex)); // repeats until a value is not present in noRepeat Array

        noRepeat.push(randNumIndex);          // value is pushed into the noRepeat array

        return quotes[randNumIndex];       // returned with quotes and bracket notation with random number variable
}

function printQuote() {
    var callRandQuote = getRandomQuote(); // retrieves getRandomQuote function and calls it
    

    var htmlString = '<p class="quote">' + callRandQuote.quote + '</p>' + //initializes classNames and quote and source properties
                    '<p class="source">' + callRandQuote.source;

    if (callRandQuote.citation) {
        htmlString += '<span class="citation">' + callRandQuote.citation + '</span>'; //if citation exist, adds a <span> element with citation property
    }

    if (callRandQuote.year) {
        htmlString += '<span class="year">' + callRandQuote.year + '</span>'; //if citation exist, adds a <span> element with year property
    }

    htmlString += '</p>'; // adds the closing p tag

    document.getElementById("quote-box").innerHTML = htmlString; // div class equals to htmlString, overrides previous html div. 
    

}


document.getElementById('load-quote').addEventListener('click', function() { //adds EventListener, for every click the function printQuote() will be called. 
    printQuote();
});
