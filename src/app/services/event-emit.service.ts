import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitService {

  uploadingFile = new EventEmitter();

}
