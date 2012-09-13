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
    assertEquals([],Util.getFactors(-1));
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
    assertFalse(Util.randomDigit() > 10);
};

utilTest.prototype.testGcd = function(){
    assertTrue(Util.gcd(12,13,14) == 1);
    assertEquals(Util.gcd(4,24),Util.gcd(4,8,24));
    assertEquals(Util.gcd(4,6), Util.gcd(4,8,10));
    assertEquals(7,Util.gcd(21,77));
    assertEquals(1,Util.gcd(6,7,8));
    assertEquals(4,Util.gcd(20,12));
    assertEquals(Util.gcd(8,10),Util.gcd(22,24));
};

utilTest.prototype.testLcm = function(){
    assertEquals(12*11,Util.lcm(12,11));
    assertEquals(2*Util.lcm(12,13,14),Util.lcm(24,26,28));
    assertEquals(Util.lcm(6,7),Util.lcm(3,6,7));
    assertEquals(12,Util.lcm(12,3));
};

utilTest.prototype.testReduceFractions = function(){
    assertEquals(Util.reduceFractions(4,6),Util.reduceFractions(2,3));
    assertArray(Util.reduceFractions(10,5));
    assertEquals([1,3],Util.reduceFractions(4,12));
    assertEquals([2,7],Util.reduceFractions(6,21));
};

utilTest.prototype.testGetShuffledArray = function(){
    var a = Util.getShuffledArray(12,1);
    var total = 0;
    for(var i = 0; i < a.length; i++){
        total += a[i];
    }
    assertEquals(66,total);
    assertArray(Util.getShuffledArray(10));
    assertEquals(Util.getShuffledArray(6).length,Util.getShuffledArray(10,4).length);
    assertEquals([],Util.getShuffledArray());
    assertEquals([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],Util.getShuffledArray(10,-1).sort());
};

utilTest.prototype.testFormat=function(){
  assertString(Util.format(15));
  assertString(Util.format("15"));
  assertEquals("14,15",Util.format(14.15,{places:2}));
  assertEquals("14,150",Util.format(14.15,{places:3}));
};

utilTest.prototype.testStringreverse=function(){
    assertString("abc".reverse());
    assertEquals("cba","abc".reverse());


}

utilTest.prototype.testNumberTurkishFloating = function(){
    assertEquals("16,40",Util.numberTurkishFloating(16.40,2));
    assertEquals("1,00",Util.numberTurkishFloating(1,2));
    assertEquals("3,33333",Util.numberTurkishFloating(3.333333333,5));
    assertEquals("6,667",Util.numberTurkishFloating(6.66666,3));
}