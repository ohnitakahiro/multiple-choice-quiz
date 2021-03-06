export class Model {
  constructor() {
    this.quizList = [];
    this.quiz = {};
  }

  async fetch() {
    try {
      const response = await fetch("./data.json");
      this.quizList = await response.json();
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
}
