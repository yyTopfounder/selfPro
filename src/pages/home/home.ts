import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController,Slides,MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  newMove:number = 0;
  themColor:string = '#30d05f';
  stationContrain:boolean = false;
  clickLineName:string;
  lineStation:Array<string> = [];

  constructor(public navCtrl: NavController,private el:ElementRef,public menuCtrl: MenuController) {
    //消息轮播动画
    setInterval(()=>{
      if(this.newMove+60 === 0){
        this.el.nativeElement.querySelector('.newItem').style.marginTop = '0px';
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

  //侧边菜单导航
  openMenu(flag:boolean) {
    if(flag){
      this.menuCtrl.enable(true, 'filterMenu');
      this.menuCtrl.enable(false, 'mangeMenu');
    }else{
      this.menuCtrl.enable(false, 'filterMenu');
      this.menuCtrl.enable(true, 'mangeMenu');
    }
    this.menuCtrl.open();
    this.stationContrain = false;
    this.clickLineName = 0;
  }

  //侧边菜单地铁详细站点显示隐藏切换
  toggleStation(event:Event){
    console.log(event);
    if(/\d+号线/.test(event.target.innerText)){
      this.stationContrain = true;
      this.clickLineName = /\d+/.exec(event.target.innerText)[0];
      switch (this.clickLineName){
        case '1': this.lineStation = ["富锦路","友谊西路","宝安公路","共富新村","呼兰路","通河新村","共康路","彭浦新村","汶水路","上海马戏城",
          "延长路","中山北路","上海火车站","汉中路","新闸路","人民广场","黄陂南路","陕西南路","常熟路","衡山路",
          "徐家汇","上海体育馆","漕宝路","上海南站","锦江乐园","莲花路","外环路","莘庄"];break;
        case '2': this.lineStation = ["浦东机场","海天三路","远东大道","凌空路","川沙","华夏东路","创新中路","唐镇","广兰路","金科路",
          "张江高科","龙阳路","世纪公园","东昌路","陆家嘴","南京东路","人民广场","南京西路","静安寺","江苏路",
          "中山公园","娄山关路","咸宁路","北新泾","淞虹路","虹桥航站楼","虹桥火车站","徐泾东"];break;

      }
    }
  }

}
