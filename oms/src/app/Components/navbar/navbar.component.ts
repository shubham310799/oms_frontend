import { Component, EventEmitter, Output } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [LogoComponent, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  orderId: string = "";
  @Output() 
  searchSubmit = new EventEmitter<string>();

  HandleOnSubmit(){
    console.log(this.orderId);
    this.searchSubmit.emit(this.orderId);
  }
}
