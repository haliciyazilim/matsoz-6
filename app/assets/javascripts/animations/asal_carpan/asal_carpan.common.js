var getFactorsAndNumbersArrays = function(number){
    var primeFactors = [];
    var wholePrimeFactors = [];

    Interaction.primeFactors = [];
    Interaction.numbersOfFactors = [];
    Interaction.wholePrimeFactors = [];

    Interaction.wholePrimeFactors = Util.getWholePrimeFactors(number);

    primeFactors = Util.getPrimeFactors(number);
    wholePrimeFactors = Util.getWholePrimeFactors(number);

    for(var i = 0; i < primeFactors.length; i++){
        Interaction.primeFactors.push(primeFactors[i]);
    }

    var a;
    var b = [];
    for(var j = 0; j < primeFactors.length; j++){
        b = wholePrimeFactors.slice(wholePrimeFactors.indexOf(primeFactors[j]),wholePrimeFactors.lastIndexOf(primeFactors[j])+1);
        a = b.length;
        Interaction.numbersOfFactors.push(a);
    }

};