;(function($){
    $.extend({
        commify: function( options ) {
            
            $._commify_log("Called $.commify() with " + arguments.length + " option(s): " + options);
            
            // Operating on a single value
            if (arguments.length == 1) {
                
                var n;
                n = options;
                
                // Let's coerce it to be a number
                switch(typeof options) {
                    case "string":
                        n = Number(options);
                }
                
                $._commify_log("Operating on a number: " + options);
                
                return n;
            }
            
            // Operating on a value with options
            if (arguments.length > 1 && typeof arguments[1] == "object") {
                
                $._commify_log("we have options for this number: " + arguments[1]);
                
                var n;
                n = arguments[0];
                
                return n;
            }
            
        },
        
        commify_defaults: function() {
            return {
                
            };
        },
        
        _commify_log: function(msg) {
            if (window.console) {
                console.log("$.commify: " + msg);
                return true;
            }
        }
        
    });
})(jQuery);