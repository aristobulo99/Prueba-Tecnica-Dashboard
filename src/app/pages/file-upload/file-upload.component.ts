import { Component } from '@angular/core';
import { EventEmitService } from 'src/app/services/event-emit.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  protected dialogControl: boolean = true;

  constructor(
    private uploadFileEvent: EventEmitService
  ){
    this.uploadFileEvent.uploadingFile.subscribe(
      () => {
        this.dialogControl = !this.dialogControl;
      }
    );
  }

}
