function togglemode() {
  const html = document.documentElement
  
  html.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if(html.classList.contains('light')){
     img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/assets/357783786_959588571933635_8362935790525914708_n.jpg")
  }

}