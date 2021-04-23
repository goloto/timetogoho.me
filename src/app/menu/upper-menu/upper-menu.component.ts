import {Component, Input, OnInit} from '@angular/core';
import { onMenuOpenAnimations } from '../on-menu-open-animations';

@Component({
  selector: 'app-upper-menu',
  templateUrl: './upper-menu.component.html',
  styleUrls: ['../menu-elements.scss'],
  animations: [onMenuOpenAnimations]
})
export class UpperMenuComponent implements OnInit {
  @Input() isMenuOpen: boolean;
  public workStarts = new Date();
  public workEnds = new Date();
  public dayEnd = `${this.workEnds.getHours()}:${this.workEnds.getMinutes()}`;
  public dayStart = `${this.workStarts.getHours()}:${this.workStarts.getMinutes()}`;

  constructor() {
    this.isMenuOpen = false;
  }

  ngOnInit(): void {

  }

}