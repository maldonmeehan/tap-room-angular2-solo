import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'add-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h3>Add Keg:</h3>
      <input placeholder="keg name" #newKegName>
      <input placeholder="keg brand" #newKegBrand>
      <input placeholder="keg price" #newKegPrice>
      <input placeholder="keg alcohol" #newKegAlcohol>
      <input placeholder="keg pints" #newKegPints>
      <button (click)="addKeg(newKegName, newKegBrand, newKegPrice, newKegAlcohol, newKegPints)" class="btn-success add-button">Add Keg</button>
    </div>
  `
})
export class AddkegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }

  addKeg(addedKegName: HTMLInputElement, addedKegBrand: HTMLInputElement, addedKegPrice)
}
