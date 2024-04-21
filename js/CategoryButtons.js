function displayButton(){
    var rem = document.getElementById("Buttons");
    console.log(rem);
    if (rem !== null) {
        rem.style.display = "block";
      } 
  }
function CheckAccess(){
        console.log(localStorage.getItem('userType'));
        if(localStorage.getItem('userType') == 'Admin'){
            displayButton();
        }
  }
function DisplayForm(){
    var id = document.getElementById("BookID");
    var sub = document.getElementById("submt");
    id.style.display = "block";
    sub.style.display = "block";
}

function DeleteBook(){
    var val = document.getElementById("BookID").value;
    var x = document.getElementById(val);
    x.style.display = "none";
}

function Form(){
    var y = document.getElementById("Editing");
    y.style.display = "block";
}

function EditBook(){
    var z1 = document.getElementById("BID").value;
    var z2 = document.getElementById("BookName").value;
    var z4 = document.getElementById("BookAuthor").value;
    if(z2 != ''){
        var x = document.getElementById("name"+z1);
        x.innerHTML = z2;
    }
    if(z4 != ''){
        var e = document.getElementById("author"+z1);
        var k = "By" + " " + z4;
        e.innerHTML = k;
        
    }
}

function Display(){
  // Retrieve stored books from local storage
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  // Display stored books
     const bookList = document.getElementById('bookList');
      storedBooks.forEach(book => {
      let ci = document.getElementById("c").innerText;
      let k = book.Category;
      if(ci.charAt(0) == k){
        const bookDiv = document.createElement('div');
        bookDiv.innerHTML = `<h2>${book.title}</h2>`;
        bookDiv.innerHTML += `<p>Author: ${book.author}</p>`;
        bookDiv.innerHTML += `<p>Edition: ${book.edition}</p>`;
      // bookDiv.innerHTML += `<img src="${book.image}" alt="${book.title}">`;
        bookDiv.innerHTML += `<a href="bookpage.html?title=${encodeURIComponent(book.title)}">
           <img src="${book.image}" alt="${book.title}">
       </a>`;
  
  
      bookList.appendChild(bookDiv);
      }
  });
  }
