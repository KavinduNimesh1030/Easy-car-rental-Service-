
function setUserNameAndEmail(name,email) {
    console.log("name"+name);
    $("#lblNavUserName").text(name);
    $("#lblNavEmail").text(email);
}

function checkDriver(email, password) {

    $.ajax({
        url: baseUrl+"Driver?driverId="+password,
        method :"get",
        dataType:"json",
        success: function (resp) {
           if (resp.data.driverName == email){
               setUserNameAndEmail(password,email);
               driverSchedule(password);
               $("#loginPage").hide();
               $("#CustomerReg").hide();
               $("#cusDetail").hide();
               $("#HomePage").hide();
               $("#adminDashBoard").hide();
               $("#DriverSchedule").show();
               alert("Driver Login Success..!");
               return false;
               // window.location.href = "DriverSchedule.html";

           } else {
               alert("Invalid Detail,Try Again..!");

           }


        }, error: function (error){
            alert("Invalid Detail,Try Again..!1");

        }


    });
}

$("#btnLogin").click(function (){
    let email= $("#txtLoginEmail").val();
    let password = $("#txtCusLoginPassword").val();
    console.log("email"+email)
    let a ="easycar@gmail.com";

     if(email == a) {
           alert("Admin Login Success !!");
      /*     $("#loginPage").hide();
           $("#CustomerReg").hide();
           $("#cusDetail").hide();
           $("#HomePage").hide();
           $("#Admin").show();*/
         window.location.href = "Admin.html";

       }else {
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
                       /*alert("invalid email or password")*/
                       checkDriver(email,password);
                   }
               },
               error: function (error) {
                   let prase = JSON.parse(error.responseText);
                   checkDriver(email,password);

               }

           });

   }
});