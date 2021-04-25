import { Component, Input, OnInit } from '@angular/core';
import { onMenuOpenAnimations } from '../on-menu-open-animations';

@Component({
  selector: 'app-links-menu',
  templateUrl: './links-menu.component.html',
  styleUrls: ['../menu-elements.scss', 'links-menu.component.scss'],
  animations: [onMenuOpenAnimations]
})
export class LinksMenuComponent implements OnInit {
  @Input() isMenuOpen: boolean;

  constructor() {
    this.isMenuOpen = false;
  }

  ngOnInit(): void {

  }

}
