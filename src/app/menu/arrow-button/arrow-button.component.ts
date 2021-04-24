import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { arrowButtonAnimations } from './arrow-button-animations';

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.scss'],
  animations: [arrowButtonAnimations]
})
export class ArrowButtonComponent implements OnInit {
  @Input() title = '';
  @Input() isMenuOpen = false;
  @Input() isUpper = false;
  @Output() isMenuOpenChange = new EventEmitter<boolean>();

  ngOnInit(): void {}

  toggleMenuVisibility(): void {
    this.isMenuOpenChange.emit(!this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
  }

  calcArrowAnimationDirection(): string {
    if (this.isUpper) {
      return this.isMenuOpen ? 'reversed' : 'not-reversed';
    } else {
      return this.isMenuOpen ? 'not-reversed' : 'reversed';
    }
  }

  calcArrowDirection(): string {
    if (this.isUpper) {
      return this.isMenuOpen ? 'up' : 'down';
    } else {
      return this.isMenuOpen ? 'down' : 'up';
    }
  }
}
