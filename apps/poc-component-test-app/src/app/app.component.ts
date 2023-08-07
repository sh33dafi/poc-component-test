import { Component } from '@angular/core';
import {TogglerComponent} from "@poc-component-testing/poc-component-test-lib";

@Component({
  standalone: true,
  imports: [TogglerComponent],
  selector: 'poc-component-testing-root',
  template: `<h1>POC TEST</h1><poc-component-testing-toggler></poc-component-testing-toggler>`,
})
export class AppComponent {
  title = 'poc-component-test-app';
}
