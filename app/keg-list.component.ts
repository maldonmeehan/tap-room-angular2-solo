import { Component, EventEmitter  } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { AddKegComponent } from './add-keg.component';
import { TappedPipe } from './tapped.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [TappedPipe],
  directives: [KegComponent, EditKegDetailsComponent, AddKegComponent],
  template: `
    <select (change)='onChange($event.target.value)'>
      <option value='all' selected='selected'>All Kegs</option>
      <option value='full'>Full Kegs</option>
      <option value='open'>Open Kegs</option>
      <option value='almostEmpty'>Kegs to Change Soon</option>
    </select>
    <keg-display *ngFor='#currentKeg of kegList | open: filterOpen'
      (click)='kegClicked(currentKeg)'
      [class.selected]='currentKeg === selectedKeg'
      [keg]='currentKeg'>
    </keg-display>
    <edit-keg-details *ngIf='selectedKeg' [keg]='selectedKeg'>
    </edit-keg-details>
    <add-keg (onSubmitNewKeg)='createKeg($event)'>
    </add-keg>
  `
})

export class KegListComponent{
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterOpen: string = 'all';
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKeg: Keg): void {
    newKeg.id = this.kegList.length;
    this.kegList.push(newKeg);
  }
  onChange(filterOption) {
    this.filterOpen = filterOption;
  }
}
