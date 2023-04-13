import { Component, OnInit } from '@angular/core';
import { ITimesheetListItem } from './models/timesheet-listitem.model';
import { TimesheetsServiceService } from './services/timesheets-service.service';

@Component({
  selector: 'app-timesheets',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.css']
})
export class TimesheetsComponent implements OnInit  {
  title: string = 'Timesheets';
  displayedColumns: string[] = ['id', 'reporterName', 'weekStartDate', 'reportedMinutes'];
  namesFilter: string = '';
  timesheets: ITimesheetListItem[] = new Array<ITimesheetListItem>;
  isLoaded = true;


  constructor(private timesheetsService:TimesheetsServiceService){

  }
  ngOnInit(): void {
    let apiEmitable = this.timesheetsService.getTimesheets();
    this.isLoaded = false;
    apiEmitable.subscribe({
      next: data => {
        this.timesheets = data,
        this.isLoaded = true;
      }
    })
  }
}
