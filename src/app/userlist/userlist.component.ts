import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../services/userlogin.service';
import { GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  
  public columnDefs!: any[];
  public gridOptions!: GridOptions<any>;
  private gridApi!: GridApi;
  constructor(private userService: UserloginService) {
    this.gridOptions = <GridOptions>{};
    this.columnDefs = this.colDef;
    this.rowData = this.rowData;
  }
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.setGridOption('columnDefs', this.columnDefs);
    if (this.rowData) {
      this.gridApi.setGridOption('rowData', this.rowData);
    }
  }
  colDef = [
    { field: 'name', headerName: ' Name', sortable: true, filter: true },
   // { field: 'lastName', headerName: 'Last Name', sortable: true, filter: true },
    { field: 'email', headerName: 'Email', sortable: true, filter: true },
    { field: 'mobileNumber', headerName: 'Phone', sortable: true, filter: true },
    { field: 'address', headerName: 'Address', sortable: true, filter: true },
    { field: 'city', headerName: 'City', sortable: true, filter: true },
    { field: 'state', headerName: 'State', sortable: true, filter: true },
    { field: 'zip', headerName: 'Zip', sortable: true, filter: true },
    { field: 'country', headerName: 'Country', sortable: true, filter: true },    
  ]
  rowData:any[] = [];

  ngOnInit() {
     this.userService.getAllUserList().subscribe((data: any) => {
      this.rowData = data;
      console.log(this.rowData);
     });

}
}
