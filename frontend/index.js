function moduleProject1() {
  const footer = document.querySelector("footer");
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll("section>div");
  console.log(widgets);
  widgets.forEach((widget) => {
    widget.classList.add("widget");
  });

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomIdx = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIdx]; // eslint-disable-line
  //begiinning of quote
  const quote = document.createElement("div");
  const quoteText = randomQuote.quote;
  quote.textContent = quoteText;
  document.querySelector(".quoteoftheday").appendChild(quote);
  //addtion of author and date
  const authorDate = document.createElement("div");
  const { author, date } = randomQuote;
  authorDate.textContent = `${author} in ${date || "an unknown date"}`;
  document.querySelector(".quoteoftheday").appendChild(authorDate);
  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)];
  const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)];

  const randomAdVerb1 = adverbs[Math.floor(Math.random() * adverbs.length)];
  const randomAdVerb2 = adverbs[Math.floor(Math.random() * adverbs.length)];

  const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)];
  
  debugger
  console.log(randomVerb1, randomVerb2);

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== "undefined" && module.exports)
  module.exports = { moduleProject1 };
else moduleProject1();
