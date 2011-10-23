$(document).ready(function(){
	
	var n;
	
	module("commify");
    
    test("commify a number in the hundreds", function(){
		n = 100;
		equal($.commify(n), "100");
	});
	
    test("commify a number in the thousands", function(){
		n = 1100;
		equal($.commify(n), "1,100");
	});
	
    test("commify a number in the hundreds of thousands", function(){
		n = 100100;
		equal($.commify(n), "100,100");
	});
	
    test("commify a number in the hundreds of thousands_with_decimal", function(){
		n = 100100.11;
		equal($.commify(n), "100,100.11");
	});
	
    test("commify a number in the millions", function(){
		n = 1100100;
		equal($.commify(n), "1,100,100");
	});
	
    test("commify a number in the tens of millions", function(){
		n = 10100100;
		equal($.commify(n), "10,100,100");
	});
	
    test("commify a number in the hundreds of millions", function(){
		n = 100100100;
		equal($.commify(n), "100,100,100");
	});
	
    test("commify a number in the thousands with a decimal", function(){
       n = 1100.11;
       equal($.commify(n), "1,100.11");
    });
    
    test("commify a number in the thousands with a dollar sign", function(){
       n = 1100;
       equal($.commify(n, {prefix:'$'}), "$1,100");
    });
    
	test("commify a number in the thousands with a dollar sign and a decimal", function(){
       n = 1100.11;
       equal($.commify(n, {prefix:'$'}), "$1,100.11");
    });
    
    // Rounding
    test("commify a number in the thousands and round up to the nearest 10th", function(){
		n = 1155;
		equal($.commify(n, {round:10}), "1,160");
	});
	
	test("commify a number in the thousands and round up to the nearest 100th", function(){
		n = 1155;
		equal($.commify(n, {round:100}), "1,200");
	});
    
    test("commify a number in the thousands and round up to the nearest 1000th", function(){
		n = 1155;
		equal($.commify(n, {round:1000}), "1,000");
	});
	
});