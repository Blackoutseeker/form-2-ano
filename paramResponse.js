const mainContainer = document.createElement('main')
mainContainer.className = 'main-container'
const categoriesList = document.createElement('div')
categoriesList.className = 'categories-list'
mainContainer.appendChild(categoriesList)
document.body.appendChild(mainContainer)

const params = new URLSearchParams(document.location.search)
const categories = params.get('categories').split(',')

const createCheckboxes = category => {
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.className = 'category-checkbox'
  checkbox.name = category
  checkbox.id = category
  checkbox.value = category
  checkbox.checked = false

  const label = document.createElement('label')
  label.htmlFor = category
  label.innerText = category

  label.appendChild(checkbox)
  categoriesList.appendChild(label)
}

categories.forEach(createCheckboxes)
