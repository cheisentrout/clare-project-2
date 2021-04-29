console.log('Static JS hooked up');

const detailsSection = document.getElementById('details')
const detailsBtn = document.getElementById('view-details')
const portSection = document.getElementById('portfolio')
const portfolioBtn = document.getElementById('view-portfolio')

//GOAL: DRY THE HIDE/SHOW FUNCTION
// const show = (elem) => {
//   console.log('show ran');
//   elem.style.display = 'block'
// }

detailsBtn.addEventListener('click', () => {
  detailsSection.classList.toggle('hidden')
  if (!detailsSection.classList.contains('hidden')) {
    detailsBtn.innerText = 'Hide Details'
  } else {
    detailsBtn.innerText = 'View Details'
  }
})

portfolioBtn.addEventListener('click', () => {
  portSection.classList.toggle('hidden')
  if (!portSection.classList.contains('hidden')) {
    portfolioBtn.innerText = "Hide Portfolio"
  } else {
    portfolioBtn.innerText = "View Portfolio"
  }
})
