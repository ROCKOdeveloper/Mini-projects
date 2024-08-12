const dueDate = new Date('2024-08-11')
const deadline = 60

const daysPassed = Math.floor(
  (new Date() - dueDate) / (1000 * 60 * 60 * 24) 
)

if (daysPassed > 0) {
  const daysLate = deadline - daysPassed
  let opacity = daysLate / deadline
  opacity = Math.min(opacity, 1)
  opacity = Math.max(opacity, 0)
  document.body.style.opacity = opacity
}