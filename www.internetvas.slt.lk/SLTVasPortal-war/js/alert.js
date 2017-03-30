$(document).ready(function(){
        window.alert = function(msg){
            alertSetup(msg);
            
        };  
        
        
        
        
});
    
function alertSetup(msg){
    var width = $(document).width();
    var height = $(document).height();
    $('#act_msg').html(msg);
    $('#alert_box_out').show();
    $('#alert_box_in').show();
    var w = -1 * ($('#alert_box_in').width()) / 2;
    var h = -1 * ($('#alert_box_in').height() / 2);
    var winhalf = ($(window).height()/2) + h;
    $('#alert_box_out').css({"opacity":"0.5","background":"darkblue","width":width+"px","height":height+"px"});
    $('#alert_box_in').css({"margin-left":w+"px","margin-top": winhalf +"px"});
    return false;
}

function closeAlert(){
    $('#act_msg').html("");
    $('#alert_box_out').hide();
    $('#alert_box_in').hide();
}

/* Added functions to check conf*/



function confSetup(msg){
    var width = $(document).width();
    var height = $(document).height();
    $('#act_msg').html(msg);
    $('#alert_box_out').show();
    $('#alert_box_in').show();
    var w = -1 * ($('#alert_box_in').width()) / 2;
    var h = -1 * ($('#alert_box_in').height() / 2);
    var winhalf = ($(window).height()/2) + h;
    $('#alert_box_out').css({"opacity":"0.5","background":"darkblue","width":width+"px","height":height+"px"});
    $('#alert_box_in').css({"margin-left":w+"px","margin-top": winhalf +"px"});
    
    return false;
}


