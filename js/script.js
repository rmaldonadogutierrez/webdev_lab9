function init() {
  // Get elements
  const entryButton = document.getElementById("entrybutton");
  const entryInput = document.getElementById("entryinput");
  const textOutput = document.getElementById("textoutput");

  // Add event listener to the Alert Me div
  entryButton.addEventListener("click", function () {
    const message = entryInput.value;

    // Alert with your name + message
    alert("Regina Maldonado-Gutierrez: " + message);

    // Update the h2 with the exact message
    textOutput.textContent = message;
  });
}

window.addEventListener('load', init);