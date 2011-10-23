;(function($){
    $.extend({
        commify: function( options ) {
            
            $._commify_log("Called $.commify() with " + arguments.length + " option(s): " + options);
            
            var base, decimal, negative, n, parts, pieces, result;

            // Coerce the value to a number
            n = Number(arguments[0]);
            
            // Update the options if specified
            options = (arguments.length > 1) ? $.extend({}, $.commify_defaults, arguments[1]) : $.commify_defaults;
            
            // Round the number if a round value was specified
            if (options.round !== false && typeof options.round === "number") {
                n = Math.round(n/options.round)*options.round;
            }
            
            // Coerce the number to a string
            n = String(n);
            
            // Split into an array
            parts = n.split(".");
            
            // Get the base number
            base = parts[0];
            
            // Are we a negative?
            negative = (Boolean(~(n.indexOf("-")))); // TODO: test the speed of this against substring(0,1) === "-"
            if (negative) 
                base = base.replace('-', '');
            
            // Start an empty result
            result = "";
            
            // Break the base number into pieces
            pieces = base.split('').reverse();
            
            for (var i = 0; i < pieces.length; i++) {
                if (i != 0 && i % 3 == 0)
			        result = ',' + result;
			    result = pieces[i] + result;
            };
            
            // Get the decimal if there is one
            decimal = (parts.length > 1) ? ("." + parts[1]) : "";
            result += decimal;
            
            // Add the negative back if it was originally negative
            if (negative)
                result = "-" + result;
            
            return result;
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