const letters = "10";
const element = document.getElementById("hacker-text");
const headerfank = document.getElementById("headerFank");
const descheaderfank = document.getElementById("descheaderFank");
const originalText1 = headerfank.innerText;
const originalText2 = descheaderfank.innerText;
let iteration1 = 0;
let iteration2 = 0;

const IntervalId1 = setInterval(() => {
  headerfank.innerText = originalText1
    .split("")
    .map((letter, index) => {
      if (index < iteration1) {
        return originalText1[index];
      }

      return letters[Math.floor(Math.random() * letters.length)];
    })
    .join("");

  iteration1 += 1;
  if (iteration1 > originalText1.length) {
    clearInterval(IntervalId1);
    
  }
}, 75);

const IntervalId2 = setInterval(() => {
  descheaderfank.innerText = originalText2
    .split("")
    .map((letter, index) => {
      if (index < iteration2) {
        return originalText2[index];
      }

      return letters[Math.floor(Math.random() * letters.length)];
    })
    .join("");

  iteration2 += 1;
  if (iteration2 > originalText2.length) {
    clearInterval(IntervalId2);
    
  }
}, 75);


document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");

  const nameValue = nameInput.value.trim();
  const phoneValue = phoneInput.value.trim();

  let isValid = true;


  if (nameValue.split(" ").length !== 3) {
    nameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    nameInput.classList.remove("is-invalid");
  }

  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phoneValue)) {
    phoneInput.classList.add("is-invalid");
    isValid = false;
  } else {
    phoneInput.classList.remove("is-invalid");
  }

  if (isValid) {
    alert("Чекайте повістки!");
    nameInput.value = "";
    phoneInput.value = "";
  }
});
