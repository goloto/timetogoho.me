import {Component, Input, OnInit, Output} from '@angular/core';
import { menuAnimations } from './menu-animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [menuAnimations],
})
export class MenuComponent implements OnInit {
  @Input() isUpper: boolean;
  @Output() isMenuOpen: boolean;

  constructor() {
    this.isUpper = false;
    this.isMenuOpen = false;
  }

  ngOnInit(): void {}

  toggleMenuVisibility(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
