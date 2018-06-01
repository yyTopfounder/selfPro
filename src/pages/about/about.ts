import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {EmojService} from "../../server/emoj.service"

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  showFaceContrain:boolean = false;
  constructor(public navCtrl: NavController,private emojServe: EmojService) {}

  qqFaceBtn(){
    this.showFaceContrain = true;
    setTimeout(() =>{
      this.emojServe.createEmoj({
        contrainId: "qqFaceContrain",
        assign:'postContent',
        path:'assets/arclist/'
      })
    },200)
  }

  setCaret(){
    console.log(event)
    if(event.target["tagName"] === "IMG"){
      this.emojServe.insertAtCaret("[em_"+/\/\d{1,2}/.exec(event.target["src"])[0].substr(1)+"]");
    }
  }

  picturesBtn(){

  }
}
