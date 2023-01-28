
$(document).ready(function(){

    $("#fname").blur(function(){
        var name=$(this).val()
        if(name.length==0){
            $("#nameerror").show()
            
        }
        else{
            $("#nameerror").hide()
            
        }
    })
    $("#lname").blur(function(){
        var lname=$(this).val()
        if(lname.length==0){
            $("#lnameerror").show()
            
        }
        else{
            $("#lnameerror").hide()
            
        }
    })
    $("#mail").blur(function(){
        var mail=$(this).val()
        if(mail.length==0){
            $("#emailerror").show()
            
        }
        else{
            $("#emailerror").hide()
            
        }
    })
    $("#contact").blur(function(){
        var contact=$(this).val()
        if(contact.length!=10){
            $("#contacterror").show()
            
        }
        else{
            $("#contacterror").hide()
            x=true
        }

    })

    // button click action    
    $("#formbtn").click(function(){
        var firstname=$("#fname").val()
        var lastname=$("#lname").val()
        var mail=$("#mail").val()
        var contact=$("#contact").val()

        // display on consol
        console.log("first name :"+firstname)
        console.log("last name :"+lastname)
        console.log("E mail id :"+mail)
        console.log("contact : "+contact)
    })
    

    // click action end here



})