import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController,Slides,MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  newMove:number = 0;
  themColor:string='#30d05f';

  constructor(public navCtrl: NavController,private el:ElementRef,public menuCtrl: MenuController) {
    setInterval(()=>{
      if(this.newMove+60 === 0){
        this.el.nativeElement.querySelector('.newItem').style.marginTop = '0px'
        this.newMove = 0
      }else{
        let count =0;
        var intervalT = setInterval(()=>{
          this.newMove -=2;
          count +=1;
          if(count ===15){
            clearInterval(intervalT)
          }else{
            this.el.nativeElement.querySelector('.newItem').style.marginTop = this.newMove+'px';
          }
        },80)
      }
    },5000);
  }

  openMenu(flag) {
    if(flag){
      this.menuCtrl.enable(true, 'filterMenu');
      this.menuCtrl.enable(false, 'mangeMenu');
    }else{
      this.menuCtrl.enable(false, 'filterMenu');
      this.menuCtrl.enable(true, 'mangeMenu');
    }
    this.menuCtrl.open();
  }

}
