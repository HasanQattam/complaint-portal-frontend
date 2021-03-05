import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-complaint-dialog',
  templateUrl: './complaint-dialog.component.html',
  styleUrls: ['./complaint-dialog.component.css']
})
export class ComplaintDialogComponent implements OnInit {

  constructor(private http: HttpClient) { }
  complaintForm!: FormGroup;
  status:string="PENDING";

  ngOnInit(): void {
    this.complaintForm = new FormGroup({
      reportNumber: new FormControl(null),
      complaintTitle: new FormControl(null),
      complaint: new FormControl(null),
      status:new FormControl(this.status),
  
    });
  }
  
  complaintForm1(){
    
  this.postAdminComplaint()     
  
  }

  postAdminComplaint(){

    this.http.post('http://localhost:8080/complaints',
  
    {
        "complaintTitle":this.complaintForm.value.complaintTitle,
        "complaint":this.complaintForm.value.complaint,
  
    }
  ).subscribe((dta) => { })
  
  }
  

}

