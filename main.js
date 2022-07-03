//GRABS ELEMENTS FROM DOM
const userInput = document.getElementById("acronyms")
const searchBtn = document.getElementById("search_button")
const result = document.getElementById("result")
const dropdown = document.getElementById("dropdown")

//DATA TO SEARCH FROM
const acronyms = {
  AGO: "Attorney General's Office",
  APA: "Asset Protection Agency",
  BIS: "Department for Business, Innovation and Skills",
  BEIS: "Department for Business, Energy and Industrial Strategy",
  CO: "Cabinet Office",
  CxD: "Chancellor's Departments (APA, DMO, GAD, HMRC, HMT, NS&I, OBR)",
  DCLG: "Department for Communities and Local Government",
  DCMS: "Department for Digital, Culture, Media and Sport",
  DECC: "Department of Energy and Climate Change",
  Defra: "Department for Environment, Food and Rural Affairs",
  "DE&S": "Defence Equipment and Support (part of MoD)",
  DExEU: "Department for Exiting the European Union",
  DfE: "Department for Education",
  DfID: "Department for International Development",
  DfT: "Department for Transport",
  DH: "Department of Health",
  DHSC: "Department of Health and Social Care",
  DMO: "Debt Management Office",
  DPM: "Deputy Prime Minister",
  DVLA: "Driver and Vehicle Licensing Agency (part of DfT)",
  DWP: "Department for Work and Pensions",
  ERG: "Efficiency and Reform Group (part of CO)",
  FCO: "Foreign and Commonwealth Office",
  GAD: "Government Actuary's Department",
  GDS: "Government Digital Service",
  HCS: "Home Civil Service (all civil servants in UK, Scottish and Welsh governments)",
  HMRC: "Her Majesty's Revenue and Customs",
  HMT: "Her Majesty's Treasury",
  HO: "Home Office",
  HofC: "House of Commons",
  HofL: "House of Lords",
  IPA: "Infrastructure and Projects Authority",
  Law: "Law officers (AGO, Office of the Advocate General for Scotland)",
  MHCLG: "MInistry of Housing, Communities and Local Government",
  MoD: "Ministry of Defence",
  MoJ: "Ministry for Justice",
  MPA: "Major Projects Authority (part of CO)",
  NAO: "National Audit Office",
  NHS: "National Health Service",
  NICS: "Northern Ireland Civil Service",
  NIO: "Northern Ireland Office",
  "NS&I": "National Savings and Investments",
  OBR: "Office for Budget Responsibility",
  ONS: "Office for National Statistics",
  PM: "Prime Minister",
  Scot: "Scotland Office",
  SG: "Scottish Government",
  Wal: "Wales Office",
  WG: "Welsh Government",
  AME: "Annually Managed Expenditure",
  "AO/AA":
    "Administrative Office/Administrative Assistant (civil service grade)",
  ACSES: "Annual Civil Service Employment Survey",
  ALB: "Arm's length body",
  API: "Application Programming Interface",
  AR: "Annual Report",
  BUD: "Budget",
  CAME: "Capital Annually Managed Expenditure",
  CDEL: "Capital Departmental Expenditure Limit",
  CS: "Civil service",
  DEL: "Departmental Expenditure Limit",
  DLC: "Delegated Legislation Committee",
  EO: "Executive Office (civil service grade)",
  FTE: "Full-time equivalent",
  FoI: "Freedom of Information",
  "G6/G7": "Grade 6 and Grade 7 (civil service grade)",
  GDP: "Gross domestic product",
  GE: "General election",
  HS2: "High Speed Rail 2",
  IfG: "Institute for Government",
  IFRS: "International Financial Reporting Standards",
  IMF: "International Monetary Fund",
  InCiSE: "International Civil Service Effectiveness Index",
  "IT/ICT": "Information technology/Information and communications technology",
  MoS: "Minister of State",
  NCS: "National Security Council",
  NDPB: "Non-departmental public body",
  NGO: "Non-governmental organisation",
  NISRA: "Northern Ireland Statistics and Research Agency",
  ODM: "Opposition Day Motion",
  OSCAR: "Online System for Central Accounting Reporting",
  PAC: "Public Accounts Committee",
  PASC: "Public Administration Select Committee",
  PESA: "Public Expenditure Statistical Analysis",
  PMDU: "Prime Minister's Delivery Unit",
  PSA: "Public Service Agreement",
  PUSS: "Parliamentary Under Secretary of State",
  "Q (Q1 etc.)": "Quarter",
  QDS: "Quarterly Data Summary",
  RAG: "Red-Amber-Green (rating scheme for delivery confidence in projects)",
  RAME: "Resource Annually Managed Expenditure",
  RDEL: "Resource Departmental Expenditure Limit",
  SCS: "Senior civil service",
  SDP: "Single Departmental Plan",
  "SEO/HEO":
    "Senior Executive Officer/Higher Executive Office (civil service grade)",
  SI: "Statutory Instrument",
  SoS: "Secretary of State",
  SR: "Spending Review/Spending Round",
  SRP: "Structural Reform Plan",
  SRO: "Senior Responsible Owner",
  TME: "Total managed expenditure",
  VAT: "Value Added Tax",
  UQ: "Urgent question",
  WGA: "Whole of Government Accounts",
  WMI: "Workforce Management Information",
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
