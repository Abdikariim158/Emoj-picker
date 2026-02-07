
let moodButtons = document.querySelectorAll(".mood");

moodButtons.forEach(function (button) {
  button.addEventListener("click", function () {

    let mood = button.getAttribute("data-mood");

    document.getElementById("result").innerText =
      "Your mood is: " + mood;
  });
});

let form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  let name = document.getElementById("name").value;


  let lettersOnly = /^[A-Za-z]+$/;

  if (name === "") {
    document.getElementById("feedback").innerText =
      "❌ Fadlan geli magacaaga!";
  }
  else if (!lettersOnly.test(name)) {
    document.getElementById("feedback").innerText =
      "❌ Magacu waa inuu noqdaa xarfo kaliya!";
  }
  else {
    document.getElementById("feedback").innerText =
      "✅ Mahadsanid! Xogta waa la helay.";
  }
});