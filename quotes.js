// quotes.js

// Jane Austen Quotes
const quotes = [
  "There is no charm equal to tenderness of heart.",
  "It isn't what we say or think that defines us, but what we do.",
  "Know your own happiness. Want for nothing but patience.",
  "A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.",
  "There is nothing I would not do for those who are really my friends.",
  "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
  "I declare after all there is no enjoyment like reading!"
];

// Wait until the page loads
window.onload = function() {
  const button = document.getElementById("quote-btn");
  const quoteText = document.getElementById("quote-text");

  // When button is clicked, show a random quote
  button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  });
};
