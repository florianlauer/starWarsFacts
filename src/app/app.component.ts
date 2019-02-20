import { HTTPStatus } from './interceptor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'starWarsFacts';
  HTTPActivity: boolean;
  currentPath: string;

  constructor(private httpStatus: HTTPStatus) {
    this.httpStatus.getHttpStatus().subscribe((status: boolean) => {
      this.HTTPActivity = status;
    });
  }
}
