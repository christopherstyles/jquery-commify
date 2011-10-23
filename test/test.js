$(document).ready(function(){
	
	var n;
	
	module("commify");

	test("commify a number in the hundreds of thousands", function(){
		n = 100100;
		equal($.commify(n), "100,100");
	});
	
});