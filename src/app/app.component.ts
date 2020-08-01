import { Component} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {faMoon,faSun} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  isLightTheme:boolean;
  
  
  constructor(private themeService:NbThemeService) {
    this.isLightTheme=true;
    this.themeService.changeTheme('corporate');
   
  }
  public changeTheme(){ 
    this.isLightTheme=this.isLightTheme?false:true;
    this.themeService.changeTheme(this.themeService.currentTheme=='corporate'?'dark':'corporate');
   
  }
}
