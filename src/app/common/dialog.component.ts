import { Component, Inject, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";




@Component({
  selector: 'app-custom-dialog',
  template:`<p>{{data}}</p>`,

})
export class DialogComponent {
    constructor( public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        
    }

    ngOnInit() {
        this.data = this.data;
    }


}