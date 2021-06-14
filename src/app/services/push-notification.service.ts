import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessagePayload } from './notification-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  messagingFirebase : firebase.messaging.Messaging;
  constructor() { 
    firebase.initializeApp(environment.configFirebase);
    this.messagingFirebase = firebase.messaging();
  }

  requestPermision =  () => {
     return new Promise(async (resolve,reject) =>{
       const permis = await Notification.requestPermission();
      if(permis === "granted"){
        const tokenFirebase = await this.messagingFirebase.getToken();
        resolve(tokenFirebase);
      }else{
        reject(new Error("No se otorgaron los permisos."));
      }
     })
  };

  private messaginObservable =new Observable<MessagePayload>( observer => {
    this.messagingFirebase.onMessage(payload => {
      observer.next(payload); 
    })
  });
  
  receiveMessage(){
    return this.messaginObservable;
  }
}

