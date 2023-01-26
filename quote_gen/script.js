// get quotes locally and from api look out what format api api is returning

// import { localQuotes } from "./quotes.js";
// get quotes from api

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
const body = document.getElementById("body");
const span = document.getElementsByTagName("span");

let apiQuotes = [];
//show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

const arr1 = [
  "bg_1",
  "bg_2",
  "bg_3",
  "bg_4",
  "bg_5",
  "bg_6",
  "bg_7",
  "bg_8",
  "bg_9",
  "bg_10",
];
const color = [
  "red",
  "blue",
  "green",
  "black",
  "greenyellow",
  "purple",
  "maroon",
  "yellow",
  "aqua",
  "hotpink",
];

// show new quote
// function newQuote() {
//   //pick a random quote from apiQuote array
//   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//   console.log(quote);
// }
// newQuote();PICKING QUOTES FROM LOCAL FILE WHILE IMPORTING
// OR USING FROM ANOTHER File  RUN BOTH SCRIPTS ON HTML OR USE package.JSON IN MODULE
// IN package.JSON "type": "module",

function newQuote() {
  //pick a random quote from apiQuote array
  loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //   console.log(quote);
  //check if author is blank

  if (!quote.author) {
    authorText.textContent = "Unknown";
    authorText.classList.add;
  } else {
    authorText.textContent = quote.author;
  }
  // check quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //set quote hide loader
  quoteText.textContent = quote.text;
  complete();
}
function newBackground() {
  const classes = body.classList;

  let a = arr1[Math.floor(Math.random() * 10)];
  classes.value = [];
  span.style.cssText = "background-color: red; color: white";

  console.log(classes);

  classes.add(a);

  // console.log(classes.value[0]);
}

// Math.random 0 to 1
// Math.floor removes decimal part
async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    // fetch request
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();

    // console.log(apiQuotes12]);
  } catch {
    //catch error
  }
}

// tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// creating preloader

// event listeners
newQuoteBtn.addEventListener("click", newQuote);
newQuoteBtn.addEventListener("click", newBackground);
twitterBtn.addEventListener("click", tweetQuote);

// // on load
getQuotes();
// loading();
// complete();
// array with 1660 element

// doing this with quotes stored in another file
// api may change or shut down at time be carefull

// dom manipulation
