import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

// author: String;

  comments = [
	  {text: 'first comment!', author: 'Jeff'},
      {text: 'nice work!', author: 'Bob'},
      {text: 'I would also like to congratulate you!', author: 'Jim'}
  ]
}

 // addComment(comment)

