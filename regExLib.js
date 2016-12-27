function checkArray(ex){
  return (ex && ex.length > 0);
}

function regEx_First(text,reg){
  var ex;
  ex = text.match(reg);
  if (checkArray(ex)){
    return ex[0];
  }else{return"";}
}
