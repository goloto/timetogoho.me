import { Component, Input, OnInit } from '@angular/core';
import { onMenuOpenAnimation } from '../on-menu-open-animation';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['../menu-elements.scss'],
  animations: [onMenuOpenAnimation]
})
export class BottomMenuComponent implements OnInit {
  @Input() isMenuOpen: boolean;

  constructor() {
    this.isMenuOpen = false;
  }

  ngOnInit(): void {

  }

}
