import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  dropdown1 = false;
  displayDropdown1(){
    this.dropdown1 = true;
  }
  hideDropdown1(){
    this.dropdown1 = false;
  }


  dropdown2 = false;
  displayDropdown2(){
    this.dropdown2 = true;
  }
  hideDropdown2(){
    this.dropdown2 = false;
  }

  dropdown3 = false;
  displayDropdown3(){
    this.dropdown3 = true;
  }
  hideDropdown3(){
    this.dropdown3 = false;
  }
}
