import { Component, EventEmitter  } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class='container'>
      <h1>Keg List</h1>
      <keg-list
        [kegList]='kegs'
        (onKegSelect)='kegWasSelected($event)'>
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg('Irish Stout', 'Guinness', 5, 6, 124, 0),
      new Keg('Irish Stout', 'Murphys', 5, 6, 124, 1),
      new Keg('Irish Ale', 'Smithwicks', 5, 6, 124, 2),
      new Keg('Larger', 'Harp', 5, 6, 124, 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
  }
}
