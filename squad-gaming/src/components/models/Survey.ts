import Question from "./Question"
import Result from "./Result"

export default class Survey {
  init: string | null = null
  questions: Question[] = []
  results: Result[] = []

  constructor(element: Element | null = null) {
    if (element == null) return
    
    this.init = element.getAttribute("init")
    
    const childElements = Object.values(element.childNodes) as HTMLElement[]
    for (var i = 0; i < childElements.length; i++) {
      const element = childElements[i]
      if (element.nodeType === Node.TEXT_NODE) {
        continue;
      }
      else if (element.tagName === "question") {
        this.questions.push(new Question(element))
      }
      else if (element.tagName === "result") {
        this.results.push(new Result(element))
      }
    }
  }
}