[jQuery Commify](http://www.christopherstyles.com/jquery-commify) - Adding commas to your boring numbers.
================================

The jQuery Commify extension provides an easy way to add commas to numbers without them. While not required, there are several customizations you can make, such as adding a prefix ('$' for a monetary value would be the most obvious here, but could just as easily be '%' or '&euro;'), or rounding the number off to a 10th or 100th etc.

If you'd like to improve upon this, by all means create a branch and send a pull request for that branch when you're good and ready.

* * *


    Example usage
  
    $.commify(1100); => 1,100
    $.commify(100100.00); => 100,100.00
    $.commify("$100100.00"); => "100,100.00"  // Notice how the dollar sign was dropped here,
                                              //Use a prefix option instead
    
    With options:
      
      $.commify("$100100.00", { prefix:'$' }); => "$100,100.00"
      $.commify("$100175.00", { round:10 }); => "$100,180.00"
      $.commify("$100175.00", { round:100 }); => "$100,200.00"