import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private subcription!:Subscription;
  constructor() {

}
}
