console.log('Static JS hooked up');

/*=======================================================
------------------ GLOBAL FUNCTIONS -------------------
========================================================*/

const toggleHidden = (elem) => {
  elem.classList.toggle('hidden')
  elem.classList.toggle('visible')
  // if (!elem.classList.contains('hidden')) {
  //   elem.classList.add('visible')
  // }
}

const hideNotSelected = (section) => {
  section.forEach(elem => {
    if (elem.classList.contains('visible')) {
      elem.classList.add('hidden')
    }
  })
}

// const viewOrHide = (elem, btn) => {
//   if (elem.classList.contains('hidden')) {
//     btn.innerText = btn.innerText
//   } else {
//     btn.innerText = "Hide"
//   }
// }

/*=======================================================
------------------ STUDENT SHOW PAGE -------------------
========================================================*/

/*-------------- Choose Details or Portfolio -------------*/

const detailsSection = document.getElementById('details')
const detailsBtn = document.getElementById('view-details')
const portSection = document.getElementById('portfolio')
const portfolioBtn = document.getElementById('view-portfolio')

const deetsOrPort = document.querySelectorAll('.main-area')

detailsBtn.addEventListener('click', () => {
  // hideNotSelected(deetsOrPort)
  toggleHidden(detailsSection)
  if (detailsSection.classList.contains('visible')) {
    detailsBtn.innerText = "Hide Details"
  } else if (!detailsSection.classList.contains('visible')) {
    detailsBtn.innerText = "View Details"
  }
  //Add some CSS that tells you which button is selected!!!! Class of visible
})

portfolioBtn.addEventListener('click', () => {
  // hideNotSelected(deetsOrPort)
  toggleHidden(portSection)
  if (portSection.classList.contains('visible')) {
    portfolioBtn.innerText = "Hide Portfolio"
  } else if (!portSection.classList.contains('visible')) {
    portfolioBtn.innerText = "View Portfolio"
  }
})

/*------------- Choose Portfolio Section to View --------------*/

/*----- View Btns -----*/

const cognitiveBtn = document.getElementById('cognitive')
const socioEmotionalBtn = document.getElementById('socioEmotional')
const speechLangBtn = document.getElementById('speechLang')
const fineMotorBtn = document.getElementById('fineMotor')
const grossMotorBtn = document.getElementById('grossMotor')
const summaryBtn = document.getElementById('summary')

/*---- All 5 Content Sections -----*/

const devSections = document.querySelectorAll('.display')

/*---- Each Developmental Section ----*/

const cognitiveSection = document.getElementById('display-cognitive')
const socioEmotionalSection = document.getElementById('display-socioEmotional')
const speechLangSection = document.getElementById('display-speechLang')
const fineMotorSection = document.getElementById('display-fineMotor')
const grossMotorSection = document.getElementById('display-grossMotor')
const summarySection = document.getElementById('display-summary')

/*---- Buttons to hide or show sections based on clicked button -----*/

cognitiveBtn.addEventListener('click', () => {
  hideNotSelected(devSections)
  toggleHidden(cognitiveSection)
})

socioEmotionalBtn.addEventListener('click', () => {
  hideNotSelected(devSections)
  toggleHidden(socioEmotionalSection)
})

speechLangBtn.addEventListener('click', () => {
  hideNotSelected(devSections)
  toggleHidden(speechLangSection)
})

fineMotorBtn.addEventListener('click', () => {
  hideNotSelected(devSections)
  toggleHidden(fineMotorSection)
})

grossMotorBtn.addEventListener('click', () => {
  hideNotSelected(devSections)
  toggleHidden(grossMotorSection)
})

summaryBtn.addEventListener('click', () => {
  hideNotSelected(devSections)
  toggleHidden(summarySection)
})
