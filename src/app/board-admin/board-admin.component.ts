import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'complaintTitle','complaint', 'status','Action'];
  dataSource!: MatTableDataSource<any>;

  constructor(public dialog: MatDialog,private http: HttpClient) { }

  ngOnInit(): void {
    this.getAdminComplaint();
  }

  openDialog(row: any) {
    if (row) {
        this.dialog.open(AdminDialogComponent,
            {
                data: row,
                height: '600px',
                width: '600px',
              
            },
            
        ).afterClosed().subscribe(result =>{
          this.dialog.closeAll()
          this.getAdminComplaint();
        })
    } else {
        this.dialog.open(AdminDialogComponent,{
            height: '600px',
            width: '600px',

        }).afterClosed().subscribe(result =>{
        })
    }
}
 
getAdminComplaint(){
    this.http.get<any[]>('http://localhost:8080/complaints').subscribe((deviceData) => {
        this.dataSource = new MatTableDataSource(deviceData)
        console.log(this.dataSource)
    })
}


}
