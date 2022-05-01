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
    this.q = props.q;

    this.answer = props.answer;
    this.answer.isVisible = true;
    this.answer.isMarked = false;
    this.answer.isRelevant = true;
  }
}
