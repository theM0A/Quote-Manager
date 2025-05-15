//Grab references to the HTML elements

const quoteInput = document.getElementById("quoteText");
const authorInput = document.getElementById("quoteAuthor");
const addBtn = document.getElementById("addQuoteBtn");
const quoteList = document.getElementById("quoteList");

addBtn.addEventListener("click", function() {
    const quoteText = quoteInput.value.trim();
    const authorText = authorInput.value.trim();

    if (quoteText === "" || authorText === "") {
        alert("Please fill in both fields.");
        return;
    }

    // 1. Create a new quote object
    const newQuote = {
        quote: quoteText,
        author: authorText
    };
 
    // 2. Add to the quotes array
    quotesArray.push(newQuote); //adds the new quote to your in-memory array

    // 3. Save updated array to localStorage.  
    // localStorage.setItem() save the entire array as a string in the browser
    localStorage.setItem("quotes", JSON.stringify(quotesArray));

    // 4. Update the displayed quotes
    displayQuotes();    // refreshes the visible list within the updated array
    
    // 5. Clear input fields after adding
    quoteInput.value = "";
    authorInput.value = "";
});


// 1. Try to get save quotes from localStorage
let quotesArray = JSON.parse(localStorage.getItem("quotes"));

// 2. If nothing is save yet, start with an empty array
if (!quotesArray) {
    quotesArray = [];
}

// 3. Function to display all quotes on the page 
function displayQuotes() {
    // Clear current content
    quoteList.innerHTML = "";

    // Loop over all quotes in the array
    quotesArray.forEach(q => {
        const quoteItem = document.createElement("div");
        quoteItem.innerHTML = `
        <p>"${q.quote}"</p>
        <p>- ${q.author}</p>
    `;

    quoteList.appendChild(quoteItem);

    });
}
