import { Component } from '@angular/core';
import { PushNotificationService } from './services/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageReceived : any = '';

  constructor(private notification : PushNotificationService){
    notification.requestPermision().then(token => {
        console.log(token);
    });
  }

  ngOnInit() : void {
    this.notification.receiveMessage().subscribe( payload  => {
      console.log(payload);
      this.messageReceived = payload.notification.title;
    });
  }

}
