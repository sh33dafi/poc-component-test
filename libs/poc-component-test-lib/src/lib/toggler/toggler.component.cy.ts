import { TestBed } from '@angular/core/testing';
import { TogglerComponent } from './toggler.component';

describe(TogglerComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(TogglerComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(TogglerComponent);
    cy.get('div').contains('TOGGLE OFF');
  });
});
