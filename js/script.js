/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//test

var quotes = [
    ['Be happy with what you have while working for what you want.', 'Helen Keller'],
    ['Comparison is the thief of joy.', 'Theodore Roosevelt'],
    ['in 3 words I can sum up everything I know about life: it goes on', 'Robert Frost'],
    ['You can always do more than you think you can.', 'John Wooden'],
    ['Getting knocked down in life is a given. Getting up and moving forward is a choice.', 'Zig Ziglar'],
    ['If you judge people you have no time to love them.', 'Mother Teresa'],
    ["If you can't fly, then run, if you can't run, then walk, if you can't walk, then crawl, but whatever you do, you have to keep moving forward.", "Martin Luther King Jr."]
];
/***
Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/




/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/




/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
