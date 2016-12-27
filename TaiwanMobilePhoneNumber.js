class TaiwanMobilePhoneNumber {
  constructor(string){
      this._string = string;
  }
  getInitString(){
    return this._string;
  }

  Process(){
    var text = this._string;

    var phone = regEx_First(text,"^09\\d{2}-?\\d{3}-?\\d{3}");
    if(phone == ""){
      var p = regEx_First(text,"^8869\\d{2}-?\\d{3}-?\\d{3}");
      if(p != ""){
        phone = p.replace("886","0");
      }
    }

    if(phone == ""){
      var p = regEx_First(text,"\\+8869\\d{2}-?\\d{3}-?\\d{3}");
      if(p != ""){
        phone = p.replace("\+886","0");
      }
    }

    return phone;
  }

}
