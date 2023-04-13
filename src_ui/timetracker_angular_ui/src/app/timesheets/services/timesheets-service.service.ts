import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ITimesheetListItem } from '../models/timesheet-listitem.model';

@Injectable({
  providedIn: 'root',
})
export class TimesheetsServiceService {
  getTimesheets(): Observable<ITimesheetListItem[]> {
    return this.httpClient.get<ITimesheetListItem[]>("https://641e0db3945125fff3db9a47.mockapi.io/api/timesheets").pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
    // return [
    //   {
    //     id: 1,
    //     reporterName: 'Danny',
    //     weekStartDate: '03/19/2023',
    //     profileUrl:
    //       'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
    //     reportedMinutes: 2591,
    //   },
    //   {
    //     id: 2,
    //     reporterName: 'Danny',
    //     weekStartDate: '03/12/2023',
    //     profileUrl:
    //       'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
    //     reportedMinutes: 2107,
    //   },
    //   {
    //     id: 3,
    //     reporterName: 'Greg',
    //     weekStartDate: '03/12/2023',
    //     profileUrl:
    //       'https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=',
    //     reportedMinutes: 1815,
    //   },
    //   {
    //     id: 4,
    //     reporterName: 'Anny',
    //     weekStartDate: '03/12/2023',
    //     profileUrl:
    //       'https://image.shutterstock.com/mosaic_250/2780032/1836020740/stock-photo-profile-picture-of-smiling-millennial-asian-girl-isolated-on-grey-wall-background-look-at-camera-1836020740.jpg',
    //     reportedMinutes: 763,
    //   },
    // ];
  }
  constructor(private httpClient: HttpClient) {}
}
