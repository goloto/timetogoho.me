import { Component, Input, OnInit } from '@angular/core';
import { onMenuOpenAnimations } from '../on-menu-open-animations';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['../menu-elements.scss', 'bottom-menu.component.scss'],
  animations: [onMenuOpenAnimations]
})
export class BottomMenuComponent implements OnInit {
  @Input() isMenuOpen: boolean;

  constructor() {
    this.isMenuOpen = false;
  }

  ngOnInit(): void {

  }

}
