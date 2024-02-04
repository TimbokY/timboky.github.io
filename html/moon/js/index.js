var moon = JSON.parse(localStorage.getItem('moon'))

var app = document.getElementById('app')
app.style.backgroundColor = moon?.backgroundColor || 'rgb(146, 179, 165)'

document.addEventListener('click', () => {
  console.log(document.getElementsByClassName('heart'))
  var heartList = document.getElementsByClassName('heart')
  let lastItem = heartList.length ? heartList[heartList.length - 1] : []
  var heartColor = lastItem?.style?.background
  if (heartColor) {
    document.getElementsByClassName('title')[0].style.color = heartColor
  }
})
