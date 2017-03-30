$(document).ready(function(){
	$('.strong_pass').keyup(function (){
           var input = $(this).val();
           var matches = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})/gm;
           if(matches.test(input)&&input.length<16) {
                $(this).css("background","lightgreen");
           }else{
                $(this).css("background","#fc8383");
           }
   });
   
   $('.jpassword').keydown(function (e){
       if(e.keyCode == 13){
            checkAndSubmit();
       }
   });
   
   $('.jusername').focus();
   
   seasonalMsg();
});


function seasonalMsg(){
    
    var d = new Date();
    var s = new Date(2014,11,20);
    var e   = new Date(2015,0,01);
   
    if(s<=d&&d<e){
        $('.seasonal_login_img').show();
    }else{
        $('.seasonal_login_img').hide();
        $('.ads img').hide();
        $('.bottomad img').hide();
    }
}
    
function checkAndSubmit(){
    var username = $.trim($('.jusername').val());
    var password = $.trim($('.jpassword').val());
    var captcha = $.trim($('.jcaptcha').val());
    	
    
    var oksub = true;
    if(username.length===0){
        alert("Username cannot be empty");
        oksub = false;
    }
    
    if(password.length===0&&oksub){
        alert("Password cannot be empty");
        oksub = false;
    }
    
    if(captcha.length===0&&oksub){
        alert("Verification Code cannot be empty");
        oksub = false;
    }
    
    if(oksub){
        /*$('#login_form').submit();*/
    }
    
    return oksub;
}


function resetPassword(){    
	
	
	var username = $.trim($('.login_details input:eq(1)').val());
    var email    = $.trim($('.login_details input:eq(2)').val());
    var ok = true;
    
	
    
    
    if(email.length==0){
        ok=false;
        alert("Please enter a value for the email");
    }

    var array = email.split("@");
    if((array.length!=2)&&ok){
        ok=false;
        alert("The email you entered seems to be invalid");        
    }
    
    if((email.indexOf(".")==-1)&&ok){
        ok=false;
        alert("The email you entered seems to be invalid");        
    }
    
    if(ok&&username.length==0){
        ok=false;
        alert("Username cannot be empty");
     }
    
    
    if(ok){ 
        //($("#pw_reset_btn").attr("disabled","disabled"));
        //$('#pw_reset_form').submit();
    }
    
    return ok;
}


function secureResetPassword(){    
    var pass = $.trim($('.login_details input:eq(1)').val());
    var conf = $.trim($('.login_details input:eq(2)').val());
    var ok = true;

    
    if(pass.length===0||conf.length===0){
       ok=false;
       alert("Passwords cannot be empty");
    }
    
    if(ok&&pass!==conf){
       ok=false;
       alert("Passwords do not match");
    }
    
    var matches = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})/gm;
    if(!matches.test(pass)&&ok) {
        ok=false;
        alert("Password is not strong. The password is expected to contain a mix of numbers and characters (lower and upper case) having a length from 8 to 15");
    }
    
    if(ok){  
//        $('.login_submit').attr("disabled","disabled");
        $('#security_reset_form').submit();
    }
}




function helpMenu(){
    $(this).tooltip();
}




function registerSubmit(){
    var ok = true;
    
    /*var username = $.trim($('.jusername').val());*/
    
    
    var email = $.trim($('.register_box table tr:first td:eq(1) input').val());
    
    if(email.length===0){
        ok=false;
        alert("Please enter a value for the email");
    }

    var array = email.split("@");
    if((array.length!==2)&&ok){
        ok=false;
        alert("The email you entered seems to be invalid");        
    }
    
    if((email.indexOf(".")===-1)&&ok){
        ok=false;
        alert("The email you entered seems to be invalid");        
    }
    
    var mobile = $.trim($('.register_box table tr:eq(1) td:eq(1) input').val()).replace("-","").replace("+","");
    
    
    if ($.trim(mobile)===""&&ok) {
    }else{
    
        if ((isNaN(mobile / 1)=== true)&&ok) {
            ok=false;
            alert("The mobile number you entered is not valid eg.712345678");
        }

        if(ok&&mobile.length!=9){
            ok=false;
            alert("The mobile number seems to be incomplete eg.712345678");
        }
        
        if(ok&&mobile.indexOf("0")===0){
            ok=false;
            alert("Mobile number should start with non zero digit eg.712345678");
        }
        
        mobile = "94"+mobile;
        
    }
    
    var adsluser = $.trim($('.register_box table tr:eq(2) td:eq(1) input').val());
    
    if(adsluser.length===0&&ok){
        ok=false;
        alert("Please enter a valid adsl username before continuing");
    }
    
    var adslpass = $.trim($('.register_box table tr:eq(3) td:eq(1) input').val());
    
    if(adslpass.length===0&&ok){
        ok=false;
        alert("Please enter your adsl password before continuing");
    }
    
    var portalpass = $.trim($('.register_box table tr:eq(4) td:eq(1) input').val());    
    
    
    if(portalpass.length===0&&ok){
        ok=false;
        alert("Please enter a password for this web portal which you plan to use to login in the future");
    }
    
    var confpass = $.trim($('.register_box table tr:eq(5) td:eq(1) input').val());
    
    if(confpass.length===0&&ok){
        ok=false;
        alert("Please confirm the password you entered");
    }
    
    if((confpass!==portalpass)&&ok){
        ok=false;
        alert("Portal password and its confirmation do not match");
    }
    
    var matches = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})$/;
    if(!matches.test(portalpass)&&ok) {
        ok=false;
        alert("Password is not strong. The password is expected to contain a mix of numbers and characters (lower and upper case) having a length from 8 to 15");
    }
    
   
    return ok;
}








function togglePanelStatus(content)
{
	
}


