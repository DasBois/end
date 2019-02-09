import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef
  map: any;
  constructor(public navCtrl: NavController) {}
  
ionViewDidLoad(){
  this.showMap();
}

showMap(){
// Location -lat long
const location = new google.maps.LatLng(34.019211, -118.276337)

//map options
const options = {
  center: location,
  zoom: 10
}
 this.map = new google.maps.Map(this.mapRef.nativeElement,
   options);

   this.addMarker(location, this.map)
}
addMarker(position, map){
  return new google.maps.Marker({
    position,
    map
  });
}

let myHouse = new google.maps.LatLng(34.025218, -118.278443);
var marker = new google.maps.Marker({
  position: myHouse,
  map: this.map,
  title: 'Hello World!',
})

  changePage() {
    this.navCtrl.push(MessagesPage);
  }
}
