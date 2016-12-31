QUnit.test( "origin test", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("0932132123");
  var result = mobile.Process();
  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "international code test", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("886932132123");
  var result = mobile.Process();
  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "international plus code test", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("+886932132123");
  var result = mobile.Process();
  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "preAlpha code test", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("Y0937383100");
  var result = mobile.Process();
  console.log(result);
  assert.ok( result == "", "Passed!" );
});

QUnit.test( "preAlpha code 2 test", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("D09575959419");
  var result = mobile.Process();
  assert.ok( result == "", "Passed!" );
});

QUnit.test( "mix test", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("D09575959419 Y0937383100 09575959419 0932132123");
  var result = mobile.Process();
  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "mix test 2", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("D09575959419 Y0937383100 09575959419 886932132123");
  var result = mobile.Process();

  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "mix test 3", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("D09575959419 Y0937383100 09575959419 +886932132123");
  var result = mobile.Process();

  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "mix test 4", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("D09575959419 Y886932132124 09575959419 +886932132123");
  var result = mobile.Process();

  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "mix test 5", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("D09575959419 Y886932132124 09575959419 886932132123");
  var result = mobile.Process();

  assert.ok( result == "0932132123", "Passed!" );
});

QUnit.test( "mix cn test ", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("電話↵0932132123");
  var result = mobile.Process();

  assert.ok( result == "0932132123", "Passed!" );
});
QUnit.test( "mix sign test ", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber('<input name="recv_tel" value="0932132123" type="text" size="20" maxlength="30">');
  var result = mobile.Process();
  assert.ok( result == "0932132123", "Passed!" );
});
