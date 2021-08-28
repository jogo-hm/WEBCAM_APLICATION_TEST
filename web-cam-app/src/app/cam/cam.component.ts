import { Component, OnInit } from '@angular/core';
import {Subject, Observable} from 'rxjs';

//Cam module
import {WebcamImage} from 'ngx-webcam';

@Component({
  selector: 'app-cam',
  templateUrl: './cam.component.html',
  styleUrls: ['./cam.component.css']
})



export class CamComponent implements OnInit {
  title = 'gfgangularwebcam';
  warn = 'No image yet...'
 

  constructor() { }

  displayedColumns: string[] = ['type', 'description'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

  public webcamImage: WebcamImage = null;
  
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
   this.trigger.next();
  }
  handleImage(webcamImage: WebcamImage): void {
   console.info('Saved webcam image', webcamImage);
   this.webcamImage = webcamImage;
  }
   
  public get triggerObservable(): Observable<void> {
   return this.trigger.asObservable();
  }

}

export interface Data {
  type: string;
  description: string;
}

export const ELEMENT_DATA: Data[] = [
  {type:"Name:", description:"José Gonzalo Hernàndez Morales"},
  {type:"Carnet:", description:"201505550"},
  {type:"Course:", description:"Seminario de Sistemas 1"},
  {type:"Topic:", description:"Learning S3 from aws"},
  {type:"Framework:", description: "Angular"}
];
