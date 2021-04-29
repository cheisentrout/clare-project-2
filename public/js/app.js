console.log('Static JS hooked up');

const detailsSection = document.getElementById('details')
const detailsBtn = document.querySelector('#view-details')

// const show = (elem) => {
//   console.log('show ran');
//   elem.style.display = 'block'
// }

// detailsBtn.addEventListener('click', () => {
//   // if (detailsSection.style.display === 'none') {
//     detailsSection.style.display = "block"
//     detailsBtn.innerText = "Hide Details"
//   // }
//   // else {
//   //   detailsSection.style.display = 'none'
//   //   detailsBtn.innerText = "View Details"
//   // }
// })

detailsBtn.addEventListener('click', () => {
  detailsSection.classList.toggle('hidden')
  if (!detailsSection.classList.contains('hidden')) {
    detailsBtn.innerText = 'Hide Details'
  }
})
