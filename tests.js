QUnit.test( "初始", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("0932132123");
  var result = mobile.Process();
  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "國際碼", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("886932132123");
  var result = mobile.Process();
  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "+號 國際碼", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("+886932132123");
  var result = mobile.Process();
  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "無關字串前綴", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("Y0937383100");
  var result = mobile.Process();
  console.log(result);
  assert.ok( result == "", "Passed!" );
});

QUnit.test( "無關字串前綴 - 2", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("D09575959419");
  var result = mobile.Process();
  assert.ok( result == "", "Passed!" );
});

QUnit.test( "無關字串前綴 - 3", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("電話↵0932132123");
  var result = mobile.Process();

  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "綜合測試", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("D09575959419 Y0937383100 09575959419 0932132123");
  var result = mobile.Process();
  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "綜合測試 - 2", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("D09575959419 Y0937383100 09575959419 886932132123");
  var result = mobile.Process();

  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "綜合測試 - 3", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("D09575959419 Y0937383100 09575959419 +886932132123");
  var result = mobile.Process();

  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "綜合測試 - 4", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("D09575959419 Y886932132124 09575959419 +886932132123");
  var result = mobile.Process();

  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "綜合測試 - 5", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("D09575959419 Y886932132124 09575959419 886932132123");
  var result = mobile.Process();

  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "綜合測試 - 混和 HTML TAG ", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber('<input name="recv_tel" value="0932132123" type="text" size="20" maxlength="30">');
  var result = mobile.Process();
  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "不正確初始: undefined", function( assert ) {

  var init = undefined;
  var mobile = new TaiwanMobilePhoneNumber(init);
  var result = mobile.Process();
  assert.ok( result == "", "Passed!" );
});