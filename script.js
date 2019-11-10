function light(){
  textBox =  document.getElementById("text-box")
  textBox.innerText = "Welcome To My Website, Also Important Note That Light Mode Discord is Way Better"
  document.body.setAttribute('style', 'background-color: white;')

}

function dark(){
  textBox =  document.getElementById("text-box")
  textBox.innerText = "Welcome To My Website, Also Important Note That Dark Mode Discord is Way Better"
  document.body.setAttribute('style', 'background-color: black;')

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function cool() {
  var dict = {
  0: "Qualcomm > Intel",
  1:  "Hack Club is life ",
  2: "Light Mode is the best"
  
};
  textBox =  document.getElementById("text-box2")
  while (true) {
  number = getRandomInt(3)
  if (textBox.innerText != dict[number]) {
    break
  }
  }
  textBox.innerText = dict[number]
}