import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private functionCallSubject = new Subject<any>();
  functionCalled$ = this.functionCallSubject.asObservable();
  callFunction(value: any) {
    this.functionCallSubject.next(value);
    console.log('callFunction');
    
  }
}
