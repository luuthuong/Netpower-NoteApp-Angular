import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basecomponent',
  templateUrl: './basecomponent.component.html',
  styleUrls: ['./basecomponent.component.scss']
})
export class BasecomponentComponent implements OnDestroy {
  public subcription!:Subscription
  constructor() { }

  ngOnDestroy(){
    this.subcription.unsubscribe()
  }

}
