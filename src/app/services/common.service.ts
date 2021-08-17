import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  sharedStyleSource = new ReplaySubject<any>(1);
  sharedEdinStyleSource = new ReplaySubject<any>(1);
  sharedEdinTextStyleSource = new ReplaySubject<any>(1);
  sharedPrinStyleSource = new ReplaySubject<any>(1);
  sharedPrinTextStyleSource = new ReplaySubject<any>(1);
  sharedselectStyleSource = new ReplaySubject<any>(1);
  sharedOtagoStyleSource = new ReplaySubject<any>(1);
  sharedBerkStyleSource = new ReplaySubject<any>(1);
  sharedBerkTextStyleSource = new ReplaySubject<any>(1);
  sharedRotateSource =new ReplaySubject<any>(1);

  
  public sharedStyle$ = this.sharedStyleSource.asObservable();
  public sharedEdinStyle$ = this.sharedEdinStyleSource.asObservable();
  public sharedEdinTextStyle$ = this.sharedEdinTextStyleSource.asObservable();
  public sharedPrinStyle$ = this.sharedPrinStyleSource.asObservable();
  public sharedPrinTextStyle$ = this.sharedPrinTextStyleSource.asObservable();
  public sharedselectStyle$ = this.sharedselectStyleSource.asObservable();
  public sharedOtagoStyle$ = this.sharedOtagoStyleSource.asObservable();
  public sharedBerkStyle$ = this.sharedBerkStyleSource.asObservable();
  public sharedBerkTextStyle$ = this.sharedBerkTextStyleSource.asObservable();
  public sharedRotate$ = this.sharedRotateSource.asObservable();

  constructor() { }
  selectStyle(value: any) {
    this.sharedselectStyleSource.next(value);
  }
  newStyle(value: any) {
    this.sharedStyleSource.next(value);
  }
  newEdinStyle(value: any) {
    this.sharedEdinStyleSource.next(value);
  }
  newEdinTextStyle(value: any) {
    this.sharedEdinTextStyleSource.next(value);
  }
  newPrinTextStyle(value: any) {
    this.sharedPrinTextStyleSource.next(value);
  }
  newOtagoStyle(value:any){
    this.sharedOtagoStyleSource.next(value)
  }
  newBerkStyle(value:any){
    this.sharedBerkStyleSource.next(value)
  }
  newBerkTextStyle(value:any){
    this.sharedBerkTextStyleSource.next(value)
  }

  newRotate(value: any) {
    this.sharedRotateSource.next(value);
  }
}

