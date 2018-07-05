import { Component } from '@angular/core';
import { appInputRoutes } from '../main.route';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  InputOutLet = appInputRoutes;
}
