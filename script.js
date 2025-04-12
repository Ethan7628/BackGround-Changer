document.getElementById("color-button").addEventListener("click", function () {
    const colors = ["black", "yellow", "red", "blue", "orange", "beige", "grey", "green"];
  
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    document.body.style.backgroundColor = randomColor;
  });