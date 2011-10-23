;(function($){
    $.extend({
        commify: function( options ) {
            
            $._commify_log("Called $.commify() with " + arguments.length + " option(s): " + options);
            
            var n;

            // Coerce the value to a number
            n = Number(arguments[0]);
            
            // Update the options if specified
            options = (arguments.length > 1) ? $.extend({}, $.commify_defaults, arguments[1]) : $.commify_defaults;
            
            // Round the number if desired
            if (options.round !== false) {
                n = Math.round(n/options.round)*options.round;
            }
            
            console.log(n);
            
            return n;
        },
        
        commify_defaults: {
            prefix: '',
            round: false // Specify the nth to which you would like to round (10, 100, 1000 etc)
        },
        
        _commify_log: function(msg) {
            if (window.console) {
                console.log("$.commify: " + msg);
                return true;
            }
        },
        
        decommify: function(value) {
            return Number(value.replace(/,/g, ""));
        }
        
    });
})(jQuery);