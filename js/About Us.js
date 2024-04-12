function toggleVisibility() {
    var div = document.getElementById("restparagraph");
    var button = document.querySelector("button");

    if (div.style.display === "none") {
      div.style.display = "block";
      button.textContent = "Read Less";
    } else {
      div.style.display = "none";
      button.textContent = "Read More";
    }
  }