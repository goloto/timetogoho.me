import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  set(name: string, value: string): void {
    this.document.cookie = `${name}=${value}; samesite=strict; max-age=31536000`;
  }

  get(name: string): string {
    const matches = document.cookie.match(new RegExp(
      '(?:^|; )'
      + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')
      + '=([^;]*)'
    ));

    return matches ? decodeURIComponent(matches[1]) : '';
  }
}

