
$(document).ready(function(){
    var x = new Boolean(false);
    $("#fname").blur(function(){
        var name=$(this).val()
        if(name.length==0){
            $("#nameerror").show()
            x=false
        }
        else{
            $("#nameerror").hide()
            x=true
        }
    })
    $("#lname").blur(function(){
        var lname=$(this).val()
        if(lname.length==0){
            $("#lnameerror").show()
            x=false
        }
        else{
            $("#lnameerror").hide()
            x=true
        }
    })
    $("#mail").blur(function(){
        var mail=$(this).val()
        if(mail.length==0){
            $("#emailerror").show()
            x=false
        }
        else{
            $("#emailerror").hide()
            x=true
        }
    })
    $("#contact").blur(function(){
        var contact=$(this).val()
        if(contact.length!=10){
            $("#contacterror").show()
            x=false
        }
        else{
            $("#contacterror").hide()
            x=true
        }

    })

    $("#formbtn").click(function(){
        if(x==true){
            console.log("fields are compleately filled")
        }
        else{

            console.log("field not filled")
        }

    })



})