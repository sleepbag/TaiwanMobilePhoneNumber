QUnit.test( "origin test", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("0913544966");
  var result = mobile.Process();
  assert.ok( result == "0913544966", "Passed!" );
});

QUnit.test( "international code test", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("886913544966");
  var result = mobile.Process();
  assert.ok( result == "0913544966", "Passed!" );
});

QUnit.test( "international plus code test", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("+886913544966");
  var result = mobile.Process();
  assert.ok( result == "0913544966", "Passed!" );
});

QUnit.test( "preAlpha code test", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("Y0937383100");
  var result = mobile.Process();
  assert.ok( result == "", "Passed!" );
});

QUnit.test( "preAlpha code 2 test", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("D09575959419");
  var result = mobile.Process();
  assert.ok( result == "", "Passed!" );
});

QUnit.test( "mix test", function( assert ) {

  var mobile = new TaiwanMobilePhoneNumber("D09575959419 09575959419 0932050119");
  var result = mobile.Process();
  console.log(result);
  assert.ok( result == "0932050119", "Passed!" );
});
