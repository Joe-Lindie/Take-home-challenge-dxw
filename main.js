//GRABS ELEMENTS FROM DOM
const userInput = document.getElementById("acronyms")
const searchBtn = document.getElementById("search_button")
const result = document.getElementById("result")
const dropdown = document.getElementById("dropdown")

//DATA TO SEARCH FROM
const acronyms = {
  AGO: `Attorney General's Office`,
  APA: `Asset Protection Agency`,
  BIS: `Department for Business, Innovation and Skills`,
  BEIS: `Department for Business, Energy and Industrial Strategy`,
  CO: `Cabinet Office`,
  CxD: `Chancellor's Departments (APA, DMO, GAD, HMRC, HMT, NS&I, OBR)`,
  DCLG: `	Department for Communities and Local Government`,
  DCMS: `	Department for Digital, Culture, Media and Sport`,
  DECC: `	Department of Energy and Climate Change`,
  Defra: `Department for Environment, Food and Rural Affairs`,
}

//EVENTLISTENER(S)
searchBtn.addEventListener("click", acronymDoesNotExist)

/////////////////////////////////////////////////

//FULL NAMES OF GOVERNMENT ORGANISATIONS FUNCTION

//////////////////////////////////////////////////

function fullNameOfOrganisation() {
  const orgaisationNames = Object.values(acronyms)
  return orgaisationNames
}

//////////////////////////////////////////////////

//ACRONYMS OF GOVERNMENT ORGANISATIONS FUNCTION

//////////////////////////////////////////////////

function acronymOfOrganisation() {
  const allAcronyms = Object.keys(acronyms)
  return allAcronyms
}

//////////////////////////////////////////////////

//ACRONYM DOES NOT EXIST FUNCTION

//////////////////////////////////////////////////

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

//////////////////////////////////////////////////

//ACRONYM EXISTS FUNCTION

//////////////////////////////////////////////////

function acronymDoesExist() {
  const acronymArray = acronymOfOrganisation()
  const indexOfacronymArray = acronymArray.indexOf(userInput.value)

  const fullNameArray = fullNameOfOrganisation()
  const fullNameOfGovAgency = fullNameArray[indexOfacronymArray]

  result.innerHTML = `The UK Government acronym for ${userInput.value} is ${fullNameOfGovAgency}.`
}

//////////////////////////////////////////////////

// MATCHING ACRONYMS FUNCTION / DROPDOWN MENU

//////////////////////////////////////////////////

function matchAvailableAcronyms() {
  const acronymArray = acronymOfOrganisation()

  userInput.addEventListener("keyup", (event) => {
    const matchAcronyms = event.target.value.toUpperCase()

    const filteredAcronyms = acronymArray.filter((acronyms) => {
      return acronyms.toUpperCase().includes(matchAcronyms)
    })

    for (let i = 0; i < filteredAcronyms.length; i++) {
      const option_value = document.createElement("option")
      option_value.textContent = filteredAcronyms[i]
      dropdown.appendChild(option_value)
    }
  })
}

matchAvailableAcronyms()
