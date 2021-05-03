console.log('Static JS hooked up');

/*=======================================================
------------------ GLOBAL FUNCTIONS -------------------
========================================================*/

const toggleHidden = (btn, elem) => {
  elem.classList.toggle('hidden')
  elem.classList.toggle('visible')
  // if (!elem.classList.contains('hidden')) {
  //   btn.style.background = "pink"
  // }
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

// const toDoList = document.getElementById('to-do')
// const doneList = document.getElementById('done')
//
// const appendLi = (toWhat, newLi) => {
//   let newLi = document.createElement('li')
// }

/*=======================================================
------------------ CREATE ACCOUNT PAGE ------------------
========================================================*/

const teacherRegister = document.getElementById('teacher-register')
const caregiverRegister = document.getElementById('caregiver-register')
const teacherBtn = document.getElementById('teacher-btn')
const caregiverBtn = document.getElementById('caregiver-btn')

if (teacherBtn, caregiverBtn) {

  teacherBtn.addEventListener('click', () => {
    toggleHidden(teacherBtn, teacherRegister)
  })

  caregiverBtn.addEventListener('click', () => {
    toggleHidden(caregiverBtn, caregiverRegister)
  })

}
/*=======================================================
------------------ STUDENT SHOW PAGE -------------------
========================================================*/

/*-------------- Choose Details or Portfolio -------------*/

const detailsSection = document.getElementById('details')
const detailsBtn = document.getElementById('view-details')
const portfolioSection = document.getElementById('portfolio')
const portfolioBtn = document.getElementById('view-portfolio')

const deetsOrPort = document.querySelectorAll('.main-area')

if (detailsBtn) {

  detailsBtn.addEventListener('click', () => {
    // hideNotSelected(deetsOrPort)
    toggleHidden(detailsBtn, detailsSection)
    if (detailsSection.classList.contains('visible')) {
      detailsBtn.innerText = "Hide Details"
    } else if (!detailsSection.classList.contains('visible')) {
      detailsBtn.innerText = "View Details"
    }
    //Add some CSS that tells you which button is selected!!!! Class of visible
  })
}

if (portfolioBtn) {

  portfolioBtn.addEventListener('click', () => {
    // hideNotSelected(deetsOrPort)
    toggleHidden(portfolioBtn, portfolioSection)
    if (portfolioSection.classList.contains('visible')) {
      portfolioBtn.innerText = "Hide Portfolio"
    } else if (!portfolioSection.classList.contains('visible')) {
      portfolioBtn.innerText = "View Portfolio"
    }
  })

}

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

if (cognitiveBtn, socioEmotionalBtn, speechLangBtn, fineMotorBtn, grossMotorBtn, summaryBtn) {

  cognitiveBtn.addEventListener('click', () => {
    hideNotSelected(devSections)
    toggleHidden(cognitiveBtn, cognitiveSection)
  })

  socioEmotionalBtn.addEventListener('click', () => {
    hideNotSelected(devSections)
    toggleHidden(socioEmotionalBtn, socioEmotionalSection)
  })

  speechLangBtn.addEventListener('click', () => {
    hideNotSelected(devSections)
    toggleHidden(speechLangBtn, speechLangSection)
  })

  fineMotorBtn.addEventListener('click', () => {
    hideNotSelected(devSections)
    toggleHidden(fineMotorBtn, fineMotorSection)
  })

  grossMotorBtn.addEventListener('click', () => {
    hideNotSelected(devSections)
    toggleHidden(grossMotorBtn, grossMotorSection)
  })

  summaryBtn.addEventListener('click', () => {
    hideNotSelected(devSections)
    toggleHidden(summaryBtn, summarySection)
  })

}
