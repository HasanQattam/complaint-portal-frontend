import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import {MatDialog} from '@angular/material/dialog';
import { TokenStorageService } from '../_services/token-storage.service';
import { ComplaintDialogComponent } from '../complaint-dialog/complaint-dialog.component';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  displayedColumns: string[] = ['id','complaintTitle','complaint', 'status'];
  dataSource!: MatTableDataSource<any>;
  userId: any;
  
  constructor(public dialog: MatDialog,private http: HttpClient,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.userId=this.tokenStorage.getUser().id;
    this.getUserComplaint()
  }

openDialog(){
  this.dialog.open(ComplaintDialogComponent, {
    height: '400px',
    width: '600px',

}).afterClosed().subscribe(result =>{
  this.getUserComplaint()
})

}

getUserComplaint(){
  this.http.get<any[]>('http://localhost:8080/complaints/userId/'+this.userId).subscribe((deviceData) => {
      this.dataSource = new MatTableDataSource(deviceData)
      console.log(this.dataSource)
  })
}
}
