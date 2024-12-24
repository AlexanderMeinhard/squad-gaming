export default class Answer {
  link: string | null = null
  text: string | null = null

  constructor(element: Element | null = null) {
    if (element == null) return

    this.link = element.getAttribute("link")
    this.text = element.getAttribute("text")
  }
}