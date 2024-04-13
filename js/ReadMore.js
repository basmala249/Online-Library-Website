function toggleVisibility() {
    var div = document.getElementById("restparagraph");
    var  btnreadmore = document.querySelector(" .btnreadmore");

    if (div.style.display === "none") {
      div.style.display = "block";
      btnreadmore.textContent = "Read Less";
    } else {
      div.style.display = "none";
      btnreadmore.textContent = "Read More";
    }
  }
