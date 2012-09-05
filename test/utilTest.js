utilTest = TestCase("UtilTest");

utilTest.prototype.testIsInteger = function(){
    assertEquals(true, Util.isInteger(10));
    assertEquals(true, Util.isInteger("10"));
    assertEquals(true, Util.isInteger(0));
    assertEquals(false, Util.isInteger("a4"));
    assertEquals(false, Util.isInteger("0.5"));
    assertEquals(false, Util.isInteger(0.4));
    assertEquals(true, Util.isInteger(0.0));
};

utilTest.prototype.testIsNumber = function(){
    assertEquals(true, Util.isNumber(4));
    assertBoolean(Util.isNumber(10));
    assertTrue(Util.isNumber("0.4"));
    assertFalse(Util.isNumber("0.4a"));
    assertNotNull(Util.isNumber());
    assertFalse(Util.isNumber(5+"d"));
    assertTrue(Util.isNumber("0.0000000000002"));
};

utilTest.prototype.testIsPrimeNumber = function(){

    assertTrue(Util.isPrimeNumber(5));
    assertTrue(Util.isPrimeNumber(61));
    assertFalse(Util.isPrimeNumber("a"));
    assertFalse(Util.isPrimeNumber(4));
    assertTrue(Util.isPrimeNumber("7"));
    assertNotNull(Util.isPrimeNumber());
    assertFalse(Util.isPrimeNumber("4a"));
};

utilTest.prototype.testGetFactors = function(){
    assertArray(Util.getFactors(6));
    assertEquals([1,2,3,6], Util.getFactors(6));
    assertNotEquals([1,2,3,6,7], Util.getFactors(6));
    assertEquals(4,Util.getFactors(6).length);
    assertEquals([1],Util.getFactors(1));
};

utilTest.prototype.testGetPrimeFactors = function(){
    assertArray(Util.getPrimeFactors(12));
    assertEquals([2,3],Util.getPrimeFactors(12));
    assertTrue(Util.getPrimeFactors(4).length > 0);
    assertEquals([2],Util.getPrimeFactors(32));
};

utilTest.prototype.testGetWholePrimeFactors = function(){
    var a = Util.getWholePrimeFactors(25);
    assertEquals(a[0]*a[1],25);
    assertEquals([2,2,3,5],Util.getWholePrimeFactors(60));
};

utilTest.prototype.testFindDistance = function(){
    assertEquals(10*Math.sqrt(2),Util.findDistance(10,10,20,20));
    assertNumber(Util.findDistance(30,51,100,199));
    assertNotUndefined(Util.findDistance(1,1,1,1));
};

utilTest.prototype.testRand01 = function(){
    assertTrue(Util.rand01() < 2);
    assertTrue(Util.rand01() >= 0);
    assertTrue([0,1].indexOf(Util.rand01()) != -1);
};

utilTest.prototype.testRandomInteger = function(){
    assertEquals(3,Util.randomInteger(3,4));
    assertTrue([3,4,8,9].indexOf(Util.randomInteger(2,10,[3,4,8,9])) == -1);
    assertNumber(Util.randomInteger(10));
    assertFalse(Util.randomInteger(4,5) == 5);
};

utilTest.prototype.testRandomDigit = function(){
    assertTrue(Util.randomDigit() < 10);
    assertTrue(Util.randomDigit() >= 0);
    assertNumber(Util.randomDigit());
};

utilTest.prototype.testGcd = function(){

};