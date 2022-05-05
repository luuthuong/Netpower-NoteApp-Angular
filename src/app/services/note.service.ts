import { Injectable } from '@angular/core';
import INote from './IService';
import {BehaviorSubject,Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private _store=localStorage;
  public dataJSON:INote[]=[]

  private active =new Subject<boolean>()
  private data=new Subject<INote[]>()
  private newdata=new Subject<INote>()

  public observableActive$=this.active.asObservable()
  public observableData$=this.data.asObservable()
  public observableNewData$=this.newdata.asObservable()
  constructor() { }
  public activeForm(state:boolean){
    this.active.next(state)
  }

  private getStore():string{
    return this._store.getItem('data')||''
  }

  public getData():void{
    const JSONdata=this.getStore().length>0?JSON.parse(this.getStore()):[]
    this.data.next(JSONdata)
  }
  public addData(data:INote){
    this.newdata.next(data)
  }
  

  public updateStorage(data:INote[]):void {
    this._store.setItem('data',JSON.stringify(data))
  }
}
