import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.scss']
})
export class AdminDialogComponent implements OnInit {
  complaintForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string,complaintTitle: string, complaint: string,status: string},private http: HttpClient) { 
  }

  ngOnInit() {
    if (this.data) {
         this.complaintForm = new FormGroup({

            'id': new FormControl(this.data.id),
            'complaintTitle': new FormControl(this.data.complaintTitle),
            'complaint': new FormControl(this.data.complaint),
            'status': new FormControl(this.data.status),
            });
    } else {
     this.complaintForm = new FormGroup({

        'id': new FormControl(null),
        'complaintTitle': new FormControl(null),
        'complaint': new FormControl(null),
        'status': new FormControl(null),
    });

    }
    console.log(this.complaintForm)


}
complaintForm1(){
  this.postAdminStatus()   

}


postAdminStatus(){

  this.http.put('http://localhost:8080/complaints/'+this.complaintForm.value.id+"/"+this.complaintForm.value.status,

  {
  
  }
).subscribe((dta) => { })

}

}
