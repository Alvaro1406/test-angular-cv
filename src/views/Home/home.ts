import { Component } from '@angular/core';
import { staticInfo } from '../../compossables/staticInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
})
export class Home {
  hotels = staticInfo().hotels;
}
