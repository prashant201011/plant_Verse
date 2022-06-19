function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const translator = () => {
  document.querySelector(".light").textContent =
    "पौधों को आमतौर पर वह प्रकाश मिलता है जिसकी उन्हें सूर्य से आवश्यकता होती है|लेकिन वे कृत्रिम प्रकाश में भी बढ़ सकते हैं|";
  document.querySelector(".air").textContent =
    "हवा में कई गैसें होती हैं।इनमें नाइट्रोजन, ऑक्सीजन, कार्बन डाइऑक्साइड और जल वाष्प शामिल हैं।";
  document.querySelector(".water").textContent =
    "प्रकाश संश्लेषण के लिए पौधों को पानी की आवश्यकता होती है।जड़ों द्वारा अवशोषित, पानी पौधे के तनों के माध्यम से पत्तियों में क्लोरोप्लास्ट तक जाता है।";
  document.querySelector(".nutrients").textContent =
    "पोषक तत्व वे पदार्थ हैं जो पौधे को पोषण देते हैं।";
  document.querySelector(".space").textContent =
    "सभी जीवित चीजों को स्थान की आवश्यकता होती है।एक पौधे की जड़ों को जगह की आवश्यकता होती है ताकि वे फैल सकें और पानी और पोषक तत्वों को अवशोषित कर सकें।";
};

const classAdd = () => {
  document.querySelector(".MoreInfo").style.display = "inline";
  document.querySelector(".btn").remove();
};
const onclickevent = document
  .querySelector(".translate")
  .addEventListener("click", translator);

document.querySelector(".btn").addEventListener("click", classAdd);

var rotate = false;
function setbackground() {
  window.setTimeout("setbackground()", 2000);
  newImage = rotate
    ? "url(./main-webimages/image.jpg)"
    : "url(./main-webimages/imaeg1.jpg)";
  rotate = !rotate;
  document.getElementsByClassName(".man").style.backgroundImage = newImage;
}

var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
  displaySlides((currentIndex += num));
}

function displaySlides(num) {
  var x;
  var slides = document.getElementsByClassName("imageSlides");
  if (num > slides.length) {
    currentIndex = 1;
  }
  if (num < 1) {
    currentIndex = slides.length;
  }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  slides[currentIndex - 1].style.display = "block";
}
