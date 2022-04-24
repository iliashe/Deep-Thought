export default class Question {
  constructor(props = {q:'', answer: ''}) {
    // question text
    this.q = props.q;
    // answer to a question
    this.answer = props.answer
  }
}