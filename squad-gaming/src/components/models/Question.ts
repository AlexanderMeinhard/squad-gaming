import Answer from "./Answer"

export default class Question {
  id: string | null = null
  text: string | null = null
  answers: Answer[] = []

  constructor(element: Element | null = null) {
    if (element == null) return

    this.id = element.getAttribute("id")
    this.text = element.getAttribute("text")
    this.answers = []
    
    const childElements = Object.values(element.childNodes) as HTMLElement[]
    for (var i = 0; i < childElements.length; i++) {
      const element = childElements[i]
      if (element.nodeType !== Node.TEXT_NODE && element.tagName === "answer") {
        this.answers.push(new Answer(element))
      }
    }
  }
}