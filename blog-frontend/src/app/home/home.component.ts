import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogs;
  markdownServ;
  code;
  Object = Object;
  lang = 'python';
  constructor() {
    /*this.code = `
    # Hello
    Todays blog is going to be on having a main method in python
    \`\`\`python
    class main:
      def __init__(self, main):
      \`\`\`
      `;*/
  }

  ngOnInit() {
  }

}
