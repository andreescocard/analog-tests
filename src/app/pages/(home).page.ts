import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div>
      <a href="/">
        <img alt="Analog Logo" class="logo analog" src="/analog.svg" />
      </a>
    </div>

    <h2>Analog</h2>

    <h3>This is the index page</h3>

    <ul>
      <li class="mt-4"><a href="/about">About page</a></li>
      <li class="mt-4"><a href="/products/1">Product page - id 1</a></li>
    </ul>
   
  `,
  styles: [
    `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.angular:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
  ],
})
export default class HomeComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
