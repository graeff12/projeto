function toggleMode() {
  const html = document.documentElement

  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  /* JEITO SIMPLIFICADO */

  html.classList.toggle("light")

  const img = html.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto do Homem Aranha em uma Cidade Ensolarada")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Homem Aranha com Olhos Amarelos e Roupa Escura em uma Cidade Chuvosa e Noturna"
    )
  }
}
