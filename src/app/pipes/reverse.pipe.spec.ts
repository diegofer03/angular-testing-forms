import { Component, DebugElement, ElementRef } from '@angular/core';
import { ReversePipe } from './reverse.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { getText } from '@testing';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });
  it('should return reverse string', () => {
    const pipe = new ReversePipe()
    const rta = pipe.transform('roma')
    expect(rta).toBe('amor')
  })

  @Component({
    template: `
      <h5>{{ 'amor' | reverse }}</h5>
      <input [(ngModel)]="text">
      <p>{{ text | reverse }}</p>
    `
  })
  class HostComponent {
    text = '';
  }

  describe('testing HostComponent', () => {
    let component: HostComponent
    let fixture : ComponentFixture<HostComponent>

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [HostComponent, ReversePipe],
        imports: [FormsModule]
      }).compileComponents()

      fixture = TestBed.createComponent(HostComponent)
      component = fixture.componentInstance
      fixture.detectChanges()

    })

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should text be reverse', () => {
      const elementContent = getText(fixture, 'h5')
      expect(elementContent).toBe('roma')
    })

    it('should apply reverse in input', () => {
      const inputDeb : DebugElement = fixture.debugElement.query(By.css('input'))
      const inputElem : HTMLInputElement = inputDeb.nativeElement

      inputElem.value = 'nolor'
      inputElem.dispatchEvent(new Event('input'))
      fixture.detectChanges()

      const pContent = getText(fixture, 'p')

      expect(pContent).toEqual('rolon')
    })
  })
});
