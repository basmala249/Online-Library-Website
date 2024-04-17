const books= [
  {
    ISBN13: "9780553109535",
    ISBN10: "",
    image: "A_Breif_History_Of_Time.jpg",
    name: "A_Breif_History_Of_Time",
    Author: "Stephen Hawking",
    category: "Scientific",
    Current_state: "Available",
    page: "A_Breif_History_Of_Time.html"
  },
  {
    ISBN13: "",
    ISBN10: "",
    image: "Scaracity_Brain.jpg",
    name: "Scaraity Brain",
    Author: "Michael Easter",
    category: "Scientific",
    Current_state: "Available",
    page: "Scaracity_Brain.html"
  },
  {
    ISBN13: "",
    ISBN10: "",
    image: "The_Elegant_Universe.jpg",
    name: "The_Elegant_Universe",
    Author: "Brian Greene",
    category: "Scientific",
    Current_state: "Available",
    page: "The_Elegant_Universe.html"
  },
  {
    ISBN13: "",
    ISBN10: "0-19-857519-X",
    image: "The_Selfish_Gene.jpg",
    name: "The_Selfish_Gene",
    Author: "Brian Greene",
    category: "Scientific",
    Current_state: "Available",
    page: "The_Selfish_Gene.html"
  },
  {
    ISBN13: "9780593476093",
    ISBN10: "",
    image: "Nuclear_War.webp",
    name: "Nuclear War: A Scenario",
    Author: "Annie Jacobsen",
    category: "Historic",
    Current_state: "Available",
    page: "Nuclear_War.html"
  },
  {
    ISBN13: "9781631498442",
    ISBN10: "",
    image: "The_Rise_and_Fall.webp",
    name: "The Rise and Fall of the Second American Republic: Reconstruction, 1860-1920",
    Author: "Manisha Sinha",
    category: "Historic",
    Current_state: "Available",
    page: "The_Rise_and_fall.html"
  },
  {
    ISBN13: "9780063304321",
    ISBN10: "",
    image: "Normal_women.webp",
    name: "Normal Women: Nine Hundred Years of Making History",
    Author: "Philippa Gregory",
    category: "Historic",
    Current_state: "Available",
    page: "Normal_women.html"
  },
  {
    ISBN13: "9780593474136",
    ISBN10: "",
    image: "The_Return_of_Great_Powers.webp",
    name: "The Return of Great Powers: Russia, China, and the Next World War",
    Author: "Jim Sciutto",
    category: "Historic",
    Current_state: "Available",
    page: "The_Return_of_Great_Powers.html"
  },
  {
    ISBN13: "9780736421973",
    ISBN10: "",
    image: "beauty and beast for web project.png",
    name: "Beauty and the Beast",
    Author: "Leprince de Beaumont, Jeanne-Marie",
    category: "Children Books",
    Current_state: "Available",
    page: "Beauty and the Beast.html"
  },
  {
    ISBN13: "",
    ISBN10: "",
    image: "LionKing.png",
    name: "Lion King",
    Author: "Don Ferguson",
    category: "Children Books",
    Current_state: "Available",
    page: "LionKing.html"
  },
  {
    ISBN13: "",
    ISBN10: "",
    image: "Aladdin.png",
    name: "Aladdin",
    Author: "Susan Yardley (illustrated by David Roberts)",
    category: "Children Books",
    Current_state: "Available",
    page: "Aladdin.html"
  },
  {
    ISBN13: "",
    ISBN10: "",
    image: "WoodyWoodpecker.png",
    name: "Woody Woodpecker",
    Author: "Ben Hardaway",
    category: "Children Books",
    Current_state: "Available",
    page: "Woody.html"
  },
  {
    ISBN13: "9780736421867",
    ISBN10: "",
    image: "snow white.jpeg",
    name: "Snow White",
    Author: "The Brothers Grimm",
    category: "Children Books",
    Current_state: "Available",
    page: "Snow White.html"
  },
  {
    ISBN13: "9780735211292",
    ISBN10: "0735211299",
    image: "Atomic habits book.PNG",
    name: "Atomic Habits",
    Author: "James Clear",
    category: "Personal development",
    Current_state: "Available",
    page: "Atomic Habits.html"
  },
  {
    ISBN13: "9780743269513",
    ISBN10: "0743269519",
    image: "the habit of highly effective people.PNG",
    name: "The 7 Habits of Highly Effective People",
    Author: "Stephen R. Covey",
    category: "Personal development",
    Current_state: "Available",
    page: "The_Habit_of_Highly_Effective_People.html"
  },
  {
    ISBN13: "",
    ISBN10: "",
    image: "rich dad poor dad.PNG",
    name: "Rich Dad Poor Dad",
    Author: "Robert T. Kiyosaki",
    category: "Personal development",
    Current_state: "Available",
    page: "Rich Dad Poor Dad.html"
  },
  {
    ISBN13: "",
    ISBN10: "",
    image: "the 5 am club.PNG",
    name: "The 5 AM Club:Own Your Morning.Elevate Your Life",
    Author: "Robin S. Sharma",
    category: "Personal development",
    Current_state: "Available",
    page: "the5amclub.html"
  },
  {
    ISBN13: "",
    ISBN10: "",
    image: "designing your life.PNG",
    name: "Designing Your life",
    Author: "Bill Burnett and Dave Evans",
    category: "Personal development",
    Current_state: "Available",
    page: "Designing Your life.html"
  },
  {
    ISBN13: "9781522810025",
    ISBN10: "1522810021",
    image: "TheReturnOfSherlockHolmes.jpg",
    name: "The Return Of Sherlock Holmes",
    Author: "CONAN DOYLE",
    category: "Police",
    Current_state: "Available",
    page: "the-return-of.html"
  },
  {
    ISBN13: "9780719515811",
    ISBN10: "0719515815",
    image: "His_Last_Bow_1917_cover.jpg",
    name: "his last bow",
    Author: "CONAN DOYLE",
    category: "Police",
    Current_state: "Available",
    page: "his-last-bow.html"
  },
  {
    ISBN13: "9781949460568",
    ISBN10: "1949460568",
    image: "a study in scarlet.jpg",
    name: "A study in scarlet",
    Author: "CONAN DOYLE",
    category: "Police",
    Current_state: "Available",
    page: "a-study-in-scarlet.html"
  }
]
  
/*
const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const bookList = document.getElementById("book-list"); 
  const books = document.querySelectorAll(".book"); 

  for (const book of books) {
    const titleElement = book.querySelector("h2"); 
    const authorElement = book.querySelector("h4");

    if (titleElement) { 
      const textValue = titleElement.textContent.toUpperCase();
      const authorValue = authorElement.textContent.toUpperCase(); 

      if (textValue.indexOf(searchbox) > -1 || authorValue.indexOf(searchbox) > -1) {
        book.style.display = ""; 
      } else {
        book.style.display = "none"; 
      }
    }
  }
};
*/

/*
const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const bookList = document.getElementById("book-list"); 
  const books = document.querySelectorAll(".book"); 

  for (const book of books) {
    const titleElement = book.querySelector("h2"); 

    if (titleElement) { 
      const textValue = titleElement.textContent.toUpperCase(); 

      if (textValue.indexOf(searchbox) > -1) {
        book.style.display = ""; 
      } else {
        book.style.display = "none"; 
      }
    }
  }
};
*/

/*
const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const bookList = document.getElementById("book-list");
  const books = document.querySelectorAll(".book");

  for (const book of books) {
    const titleElement = book.querySelector("h2");
    const authorElement = book.querySelector("h4");

    let displayed = false;
    if (titleElement) {
      const textValue = titleElement.textContent.toUpperCase();
      if (textValue.indexOf(searchbox) > -1) {
        book.style.display = "";
        displayed = true;
      }
      else{
        book.style.display = "none"; 
      }
    }
    if (authorElement) {
      const authorValue = authorElement.textContent.toUpperCase();
      if (authorValue.indexOf(searchbox) > -1 && !displayed) {
        book.style.display = "";
      } else {
        book.style.display = "none"; 
      }
    }
  }
};
*/

/*
const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const bookList = document.getElementById("book-list"); 
  
  bookList.innerHTML = ""; 

  for (const book of books) {
    const title = book.name.toUpperCase();
    const author = book.Author ? book.Author.toUpperCase() : ""; 
    const category = book.category ? book.category.toUpperCase() : ""; 
   
    if (title.indexOf(searchbox) > -1 || author.indexOf(searchbox) > -1 || category.indexOf(searchbox) > -1) {
      
      const bookElement = document.createElement("div");
      bookElement.classList.add("book"); 

      bookElement.innerHTML = `
        <img src="images/${book.image}" alt="${book.name}">
        <h2>${book.name}</h2>
        <p>By ${book.Author}</p>
        <p>Category: ${book.category}</p>
      `;

      bookList.appendChild(bookElement); 
    }
  }
};
*/

/*const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("search-item");

inputBox.onkeyup = function(){
  let result = [];
  let input = inputBox.value;
  if(input.length){
    result = books.filter((keyword)=>{
      return keyword.toUpperCase().includes(input.toUpperCase());
    });
    console.log(result);
    
  }
};
*/


const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("search-item");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;

  if (input.length) {
    result = books.filter((book) => {
      const bookNameUpper = book.name.toUpperCase();
      const authorUpper = book.Author ? book.Author.toUpperCase() : ""; // Handle missing author
      const categoryUpper = book.category ? book.category.toUpperCase() : "";
      const inputUpper = input.toUpperCase();
      return (
        bookNameUpper.includes(inputUpper) || authorUpper.includes(inputUpper) || categoryUpper.includes(inputUpper)
      );
    });

    
    resultBox.innerHTML = "";

    if (result.length > 0) {
      let resultList = "";
      for (const book of result) {
        resultList +=
        `<a href="${book.page}" target="_blank" class="book"> 
          <img src="image/${book.image}">
          <div class="b-details">
            <h2>${book.name}</h2>
            <p>Author: ${book.Author}</p>
            <p>Category: ${book.category}</p>
          </div>
        </a>` 

        /*`
        <div class="book">
          <img src="${"image/"+book.image}">
          <div class="b-details">
            <h2>${book.name}</h2>
            <p>Author: ${book.Author}</p>
            <p>Category: ${book.category}</p>
          </div>
        </div>
        `;*/
      }
      resultBox.innerHTML = resultList;
    } 
    else {
      resultBox.innerHTML = "<p>No results found.</p>"; 
    }
  } 
};
