$(function(){ // shortcut for document.ready
    $('table').find('button').each(function(){
       var $this = $(this);
       $this.click(function(e){
           e.preventDefault();
           var value = $this.parent().prev().find('div').text();
           var commified = $.commify(value);
           $this.parent().next().text(commified);
       });
    });
    
    // Commify numbers with options
    $('form#with-options').submit(function(e){
        e.preventDefault();
        var value = $.commify($('#n').val(), {
            prefix: $('#options_prefix').val(),
            round: Number($('#options_round').val())
        });
        $('#with-options-result').text(value);
    });
});