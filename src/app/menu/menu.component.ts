import { Component, Input, OnInit } from '@angular/core';
import { menuAnimations } from './menu-animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [menuAnimations],
})
export class MenuComponent implements OnInit {
  @Input() isUpper = false;
  @Input() isMenuOpen = false;

  ngOnInit(): void {}
}
