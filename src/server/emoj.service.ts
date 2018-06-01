import {Injectable} from "@angular/core"
import $ from "jquery"

@Injectable()
export class EmojService{
  constructor(){

  }

  replace_em(str){
    str = str.replace(/\[em_([0-9]*)\]/g,'<img src="assets/arclist/$1.gif" border="0" />');
    return str;
  }

  insertAtCaret(textFeildValue){
    var textObj = $("#postContent");
    var str = textObj.html();
    str += textFeildValue
    textObj.html(str);
    $("#postContent").html(this.replace_em($("#postContent").html()));
  }

  createEmoj(options){
    var defaults = {
      id : 'facebox',
      path : 'face/',
      assign : 'content',
      tip : 'em_',
      contrainId: "",
    };
    var option = $.extend(defaults, options);
    var assign = $('#'+option.assign);
    var contrain = $('#'+option.contrainId);
    var id = option.id;
    var path = option.path;
    //var tip = option.tip;

    if(assign.length<=0 || contrain.length<=0){
      alert('缺少参数配置');
      return false;
    }

    var strFace;
    if($('#'+id).length<=0){
      //var labFace;
      strFace = '<table border="0" cellspacing="0" cellpadding="0" style="width: 100%;height: 100%"><tr>';
      for(var i=1; i<=75; i++){
        //labFace = '['+tip+i+']';
        strFace += '<td><img src="'+path+i+'.gif"/></td>';
        if( i % 15 == 0 ) strFace += '</tr><tr>';
      }
      strFace += '</tr></table>';
    }
    contrain.append(strFace);
    $('#'+id).show();
  }
}
