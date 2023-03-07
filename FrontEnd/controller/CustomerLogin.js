function setUserNameAndEmail(name,email) {
    console.log("name"+name);
    $("#lblNavUserName").text(name);
    $("#lblNavEmail").text(email);
}

function checkDriver(email, password) {
    $.ajax({
        url: baseUrl+"Driver/"+email,
        method :"get",
        dataType:"json",
        success: function (resp) {
            for (const r of resp.data) {
                if(r.driverName == email){
                    alert("success");
                    return ;
                }
            }


        }


    });
}

$("#btnLogin").click(function (){
    let massage = 0;
    let email= $("#txtLoginEmail").val();
    let password = $("#txtCusLoginPassword").val();
   /* let c = checkDriver(email,password);*/
    console.log("email"+email)
    let a ="easycar@gmail.com";




     if(email == a) {
           alert("Admin Login Success !!");
           $("#loginPage").hide();
           $("#CustomerReg").hide();
           $("#cusDetail").hide();
           $("#HomePage").hide();
           $("#adminDashBoard").show();

       }else {
           alert("mas "+massage);
           $.ajax({
               url: baseUrl + "Customer?email=" + email,
               method: "get",
               dataType: "json",
               success: function (resp) {
                   console.log(resp);

                   if (resp.data.password == password) {
                       console.log(resp.data);
                       alert(resp.message);
                       console.log("a" + resp.data.id);
                       getCustomerId(resp.data.id);
                       setUserNameAndEmail(resp.data.name, email);


                       $("#loginPage").hide();
                       $("#CustomerReg").hide();
                       $("#cusDetail").hide();
                       $("#HomePage").show();

                   } else {
                       alert("invalid email or password")
                   }
               },
               error: function (error) {
                   let prase = JSON.parse(error.responseText);
                   alert("invalid email or password");

               }

           });

   }
});