//GRABS ELEMENTS FROM DOM
const userInput = document.getElementById("acronyms")
const searchBtn = document.getElementById("search_button")
const result = document.getElementById("result")

//DATA TO SEARCH FROM
const acronyms = {
  AGO: "Attorney General Office",
  APA: "Asset Protection Agency",
  BIS: "Department for Business, Innovation and Skills",
  BEIS: "Department for Business, Energy and Industrial Strategy",
}

//EVENTLISTENER(S)
searchBtn.addEventListener("click", acronymDoesNotExist)

//FULL NAMES OF GOVERNMENT ORGANISATIONS
function fullNameOfOrganisation() {
  const orgaisationNames = Object.values(acronyms)
  return orgaisationNames
}

//ACRONYMS OF GOVERNMENT ORGANISATIONS
function acronymOfOrganisation() {
  const allAcronyms = Object.keys(acronyms)
  return allAcronyms
}

//ACRONYM DOES NOT EXIST FUNCTION
function acronymDoesNotExist(event) {
  event.preventDefault()

  const userGuess = userInput.value
  const acronymArray = acronymOfOrganisation()

  if (!acronymArray.includes(userGuess)) {
    result.innerHTML = `The acronym ${userGuess} does not match a Government organisation in our database!`
  } else {
    acronymDoesExist()
  }
}

//ACRONYM EXISTS FUNCTION
function acronymDoesExist() {
  const acronymArray = acronymOfOrganisation()
  const indexOfacronymArray = acronymArray.indexOf(userInput.value)

  const fullNameArray = fullNameOfOrganisation()
  const fullNameOfGovAgency = fullNameArray[indexOfacronymArray]

  result.innerHTML = `The UK Government acronym for ${userInput.value} is ${fullNameOfGovAgency}.`
}
