document.addEventListener("DOMContentLoaded",function(){

const button = document.getElementById("addbtn");
const form = document.getElementById("formContainer");
button.addEventListener("click",function(){
    form.style.display="block";
});
document.getElementById("myForm").addEventListener("submit", function(event) {
event.preventDefault(); 
const inputData = document.getElementById("title").value;
const inputData2 = document.getElementById("author").value;
const inputData3 = document.getElementById("ed").value;
const inputData4 = document.getElementById("cat").value


const title = document.createElement("p")
const author = document.createElement("p")
const ed = document.createElement("p")
const cate = document.createElement("p")


const titleText = document.createTextNode(inputData);
const authorText = document.createTextNode(inputData2);
const edText = document.createTextNode(inputData3);
const catText = document.createTextNode(inputData4);
title.appendChild(titleText);
author.appendChild(authorText);
ed.appendChild(edText);
cate.appendChild(catText);


const newDiv = document.createElement("div");
const imgSrc = document.getElementById("img").value; 
const img = document.createElement("img");

img.src = imgSrc;

const book = {
    title: inputData,
    author: inputData2,
    edition: inputData3,
    Category:inputData4,
    image: imgSrc
  };

  // Retrieve existing books array from local storage or initialize it as an empty array
  let books = JSON.parse(localStorage.getItem('books')) || [];
      
  // Push new book object into the books array
  books.push(book);
  
  // Store the updated books array back into local storage
  localStorage.setItem('books', JSON.stringify(books));
  
  // Optionally, you can clear the form after submission
  document.getElementById('myForm').reset();




title.style.position="absolute";
title.style.left="1150px";
title.style.top="840px"
title.style.fontFamily="Sans-serif"
title.style.fontSize="32px";
title.style.fontWeight="bold";


cate.style.position="absolute";
cate.style.left="1150px";
cate.style.top="890px"
cate.style.fontFamily="Sans-serif"
cate.style.fontSize="25px";


author.style.position="absolute";
author.style.left="1150px";
author.style.top="960px"
author.style.fontFamily="Sans-serif"
author.style.fontSize="25px";


ed.style.position="absolute";
ed.style.left="1150px";
ed.style.top="1000px"
ed.style.fontFamily="Sans-serif"
ed.style.fontSize="25px";

img.style.width = "300px"; 
img.style.height = "400px"; 
img.style.position = "absolute"; 
img.style.marginTop = "610px"; 
img.style.right = "550px"; 

newDiv.appendChild(img);
document.body.appendChild(newDiv);
document.body.appendChild(title);
document.body.appendChild(author);
document.body.appendChild(ed);
document.body.appendChild(cate);
});

});
