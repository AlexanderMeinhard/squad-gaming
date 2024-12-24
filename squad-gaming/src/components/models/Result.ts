export default class Result {
  id: string | null = null
  text: string | null = null
  image: string | null = null
  
  constructor(element: Element | null = null) {
    if (element == null) return

    this.id = element.getAttribute("id")
    this.text = element.getAttribute("text")
    this.image = element.getAttribute("image")
  }
}