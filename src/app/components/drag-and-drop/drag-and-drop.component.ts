import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {

  @ViewChild('inputfile',{static: true}) fileButton!: ElementRef

  public fileUploadButtonEvent(){
    this.fileButton.nativeElement.click();
  }

  public prueba(event: any){
    console.log(event.target.file[0])
  }

  public onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    // Cambiar el estilo del área para mostrar que se puede soltar el archivo
    event.target.classList.add('drag-over');
  }

  public onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    // Restaurar el estilo del área cuando el archivo se arrastra fuera del área de "drag and drop"
    event.target.classList.remove('drag-over');
  }

  public onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    // Restaurar el estilo del área
    event.target.classList.remove('drag-over');

    // Obtener el archivo del evento
    const file = event.dataTransfer.files[0];

    // Aquí puedes enviar el archivo al servidor para su procesamiento
    console.log('Archivo cargado:', file);
  }

}
