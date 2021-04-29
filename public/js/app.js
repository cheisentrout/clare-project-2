console.log('Static JS hooked up');

/*=======================================================
------------------ GLOBAL FUNCTIONS -------------------
========================================================*/

const toggleHidden = (elem) => {
  elem.classList.toggle('hidden')
  if (!elem.classList.contains('hidden')) {
    elem.classList.add('visible')
  }
}

const hideNotSelected = () => {
  displaySections.forEach(node => {
    if (node.classList.contains('visible')) {
      node.classList.add('hidden')
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

/*-------------- Choose Details / Portfolio -------------*/

const detailsSection = document.getElementById('details')
const detailsBtn = document.getElementById('view-details')
const portSection = document.getElementById('portfolio')
const portfolioBtn = document.getElementById('view-portfolio')

detailsBtn.addEventListener('click', () => {
  toggleHidden(detailsSection)
  if (!detailsSection.classList.contains('hidden')) {
    detailsBtn.innerText = 'Hide Details'
  } else {
    detailsBtn.innerText = 'View Details'
  }
})

portfolioBtn.addEventListener('click', () => {
  toggleHidden(portSection)
  if (!portSection.classList.contains('hidden')) {
    portfolioBtn.innerText = "Hide Portfolio"
  } else {
    portfolioBtn.innerText = "View Portfolio"
  }
})

/*------------- Choose Portfolio Section to View --------------*/

const cognitiveBtn = document.getElementById('cognitive')
const socioEmotionalBtn = document.getElementById('socioEmotional')
const speechLangBtn = document.getElementById('speechLang')
const fineMotorBtn = document.getElementById('fineMotor')
const grossMotorBtn = document.getElementById('grossMotor')

const displaySections = document.querySelectorAll('.display')
console.log(displaySections); // returns a node list

const cognitiveSection = document.getElementById('display-cognitive')
const socioEmotionalSection = document.getElementById('display-socioEmotional')
const speechLangSection = document.getElementById('display-speechLang')
const fineMotorSection = document.getElementById('display-fineMotor')
const grossMotorSection = document.getElementById('display-grossMotor')

cognitiveBtn.addEventListener('click', () => {
  hideNotSelected()
  toggleHidden(cognitiveSection)
})

socioEmotionalBtn.addEventListener('click', () => {
  hideNotSelected()
  toggleHidden(socioEmotionalSection)
})

speechLangBtn.addEventListener('click', () => {
  hideNotSelected()
  toggleHidden(speechLangSection)
})

fineMotorBtn.addEventListener('click', () => {
  hideNotSelected()
  toggleHidden(fineMotorSection)
})

grossMotorBtn.addEventListener('click', () => {
  hideNotSelected()
  toggleHidden(grossMotorSection)
})

//GOAL: DRY THE HIDE/SHOW FUNCTION
// const show = (elem) => {
//   console.log('show ran');
//   elem.style.display = 'block'
// }

//each section is connected to a button, and the button should toggle whether or not the section displays
