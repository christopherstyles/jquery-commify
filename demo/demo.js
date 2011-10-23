$(function(){ // shortcut for document.ready
    $('button').each(function(){
       var $this = $(this);
       $this.click(function(e){
           e.preventDefault();
           var value = $this.parent().prev().find('div').text();
           var commified = $.commify(value);
           $this.parent().next().text(commified);
       });
    });
    
    // Commify numbers with options
    $('#with-options').submit(function(e){
        e.preventDefault();
        console.log($(this).serialize());
        var value = $.commify();
        $('#with-options-result').text();
    });
});