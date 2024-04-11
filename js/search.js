const firstDiv = document.querySelector("#FirstDiv");
const searchIcon = document.querySelector("#searchIcon");

searchIcon.addEventListener("click", () =>{
  firstDiv.classList.toggle("openSearch");
  if(firstDiv.classList.contains("openSearch")){
    return searchIcon.classList.replace("fa-search","fa-times");
  }
  searchIcon.classList.replace("fa-times","fa-search");
});
  