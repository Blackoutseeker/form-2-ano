const categoriesInput = document.getElementById('categories-input')
const submitButton = document.getElementById('submit-button')

const navigateToResultPage = () => {
  const categoriesInputIsNotEmpty = categoriesInput.value.length > 0
  if (categoriesInputIsNotEmpty)
    window.location.href = `./result.html?categories=${categoriesInput.value}`
}

const handleBlankSpace = () => {
  const categoriesInputHaveBlankSpace = categoriesInput.value.includes(' ')
  if (categoriesInputHaveBlankSpace)
    categoriesInput.value = categoriesInput.value.replaceAll(' ', '')
}

const handleEnterKeyDown = ({ key }) => {
  const isEnterKeyPressed = key === 'Enter'
  if (isEnterKeyPressed) navigateToResultPage()
}

categoriesInput.addEventListener('keyup', handleBlankSpace)
categoriesInput.addEventListener('keydown', handleEnterKeyDown)
submitButton.addEventListener('click', navigateToResultPage)
