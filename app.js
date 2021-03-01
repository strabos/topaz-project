// Try Catch 
const getArt = async (color, pageNumber) => {
  try {
    removeText()
    removeArt()
    let pageNumber = getRandomInt(1, 80)
    const searchURL = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.collection&access_token=563c920a365dbd7648051ca0ad0f4bb7&color=${color}&page=${pageNumber}&per_page=1`
    const response = await axios.get(searchURL)
    const data = response.data.objects[0]
    showData(data)
    showImage(data)
    return (response)

  } catch (err) {
    console.error(err)
  }
}

getArt()
//make function for dynamic HTML including descriptions
function showData(data) {
  const dataContainer = document.querySelector("#art-data")
  const artInfo = `
    <h2 class="title">Title: ${data.title_raw}</h1> 
    <h3>Year: ${data.date}</h2>
    <h3>Medium: ${data.medium}</p>
    `
    dataContainer.insertAdjacentHTML("beforeend", artInfo)
}
// new div and function for the image
function showImage(data) {
  const imageContainer = document.querySelector("#art-image")
  const artImage = `
  <img src="${data.images[0].b.url}" alt="artwork" class="artwork"/>
  `
  imageContainer.insertAdjacentHTML("beforeend", artImage)
}
//BUTTONS
const redButton = document.querySelector("#red")
redButton.addEventListener("click", function () {
  const inputValue = "red"
  getArt(inputValue)
})
const blueButton = document.querySelector("#blue")
blueButton.addEventListener("click", function () {
  const inputValue = "blue"
  getArt(inputValue)
})
const yellowButton = document.querySelector("#yellow")
yellowButton.addEventListener("click", function () {
  const inputValue = "yellow"
  getArt(inputValue)
})
const blackButton = document.querySelector("#black")
blackButton.addEventListener("click", function () {
  const inputValue = "black"
  getArt(inputValue)
})
const whiteButton = document.querySelector("#white")
whiteButton.addEventListener("click", function () {
  const inputValue = "white"
  getArt(inputValue)
})
const greenButton = document.querySelector("#green")
greenButton.addEventListener("click", function () {
  const inputValue = "green"
  getArt(inputValue)
})
const pinkButton = document.querySelector("#pink")
pinkButton.addEventListener("click", function () {
  const inputValue = "pink"
  getArt(inputValue)
})
const brownButton = document.querySelector("#brown")
brownButton.addEventListener("click", function () {
  const inputValue = "brown"
  getArt(inputValue)
})
const orangeButton = document.querySelector("#orange")
orangeButton.addEventListener("click", function () {
  const inputValue = "orange"
  getArt(inputValue)
})

//Removing Text
function removeText() {
  const textContainer = document.querySelector("#art-data")
  while (textContainer.lastChild) {
    textContainer.removeChild(textContainer.lastChild)
  }
}
removeText()


function removeArt() {
  const artContainer = document.querySelector("#art-image")
  while (artContainer.lastChild) {
    artContainer.removeChild(artContainer.lastChild)
  }
}
removeArt()


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min)+min)
}
getRandomInt(1, 40)

