import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="text-center bg-light">
    <hr>
    <p>Contact Manager App built in Training in 2018</p>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    <app-nav>
      <li class="nav-item">
        <a class="nav-link" href="#">Goto Top</a>
      </li>
    </app-nav>
    </ul>
    </div>
    </nav>
    <p class="red">Copyright &copy; 2018</p>
  </footer>
  `,
  styles: [
    `
    .red{
      color: red;
    }
    `
  ]
})

export class FooterComponent implements OnInit {
  //ts 
  constructor() { }

  ngOnInit() {
  }

}
