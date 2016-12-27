class TaiwanMobilePhoneNumber {
  constructor(string){
      this._string = string;
  }
  getInitString(){
    return this._string;
  }

  Process(){


    var stringArray = this._string.split(" ");

    for(var i =0; i < stringArray.length; i++){

      var tmp_text = stringArray[i].trim();
      var phone = "";
      //
      if(tmp_text.length==10){
        phone = regEx_First(tmp_text,"^09\\d{2}-?\\d{3}-?\\d{3}");
        if (phone == ""){
          phone = regEx_First(tmp_text,"\\s+09\\d{2}-?\\d{3}-?\\d{3}");
        }
      }

      if(tmp_text.length==12){
        //
        if(phone == ""){
          var p = regEx_First(tmp_text,"^8869\\d{2}-?\\d{3}-?\\d{3}");
          if(p != ""){
            phone = p.replace("886","0");
          }
        }
      }

      if(tmp_text.length==13){
        //
        if(phone == ""){
          var p = regEx_First(tmp_text,"\\+8869\\d{2}-?\\d{3}-?\\d{3}");
          if(p != ""){
            phone = p.replace("\+886","0");
          }
        }
      }
    }
    return phone;
  }

}
