const defaultVal = {
  q: '',
  answer: {
    answer: '',
    score: 0,
    start: 0,
    end: 0,
  }
}

export default class Question {
  constructor(props = defaultVal) {
    // question text
    this.q = props.q;
    // answer to a question
    this.answer = props.answer
  }
}
