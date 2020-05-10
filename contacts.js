function validateform(){
    var mail=document.myform.t1.value;
    var query=document.myform.t2.value;
    if(mail == null || mail == ""){
    window.alert("Email id is needed!");
    return false;
    }
    else if(query == null || query == ""){
    window.alert("Query box cannot be empty!")
    return false;
    }
    else{
        email(mail,query);
        window.alert("We have recieved your queries.we will get back to u soon.")
        
    }
}
function email(m,q){
    var template_params = {
        "email": m,
        "query": q
     }
     console.log("email entered");
     var service_id = "default_service";
     var template_id = "email";
     emailjs.send(service_id, template_id, template_params);
}
