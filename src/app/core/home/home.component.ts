import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocaltionComponent } from "../housing-localtion/housing-localtion.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocaltionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
