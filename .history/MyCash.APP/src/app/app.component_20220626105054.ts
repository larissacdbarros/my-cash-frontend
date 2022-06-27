import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DashboardComponent } from './components/componentDashboard/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCash.APP';

  constructor(private dialog : MatDialog){

  }
  openDialog() {
    this.dialog.open(DashboardComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}
