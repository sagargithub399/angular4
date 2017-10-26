import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 
    }

  // Get Questions from LS
  getQuestions(){
    if(localStorage.getItem('questions1') === null){
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions1'));
      console.log(this.questions);
    }
    return this.questions;
  }

  // Add Question to LS
  addQuestion(question:Question){
    this.questions.unshift(question);
     // Init local var
    let questions;

    if(localStorage.getItem('questions1') === null){
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new array to LS
      localStorage.setItem('questions1', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions1'));
      // Add new question
      questions.unshift(question);
      // Re set LS
      localStorage.setItem('questions1', JSON.stringify(questions));
    }
  }

  // Remove Question from LS
  removeQuestion(question:Question){
    for(let i = 0;i < this.questions.length;i++){
      if(question == this.questions[i]){
        this.questions.splice(i, 1);
        localStorage.setItem('questions1', JSON.stringify(this.questions));
      }
    }
  }

}
