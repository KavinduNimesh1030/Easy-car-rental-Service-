let baseUrl = "http://localhost:8080/BackEnd_war/";
$("#submitCusRegDetail").click(function (){
    var formData = $("#cusRegForm").serialize();
    let email =  $("#txtCusEmail").val();
    let name =   $("#txtName").val();
   /* var formData = new FormData();*/


/*    let id = $("#txtCusRegId").val();
    let email = $("#txtCusEmail").val();
    let password = $("#txtPassword").val();
    let address = $("#txtCusRegId").val();
    let contactNo = $("#txtContactNo").val();
    let nic = $("#txtNicNo").val();
    let dln = $("#txtDrivingLNo").val();

    let nicImgPath = $("#formFileNic")[0].files[0].name;
    let dlnImgPath = $("#formFileDL")[0].files[0].name;
    let file = $("#formFileDL")[0].files[0];
    let file1 =$("#formFileNic")[0].files[0];
    console.log(nicImgPath);*/

    /*formData.append("id",id);
    formData.append("email",email);
    formData.append("password",password);
    formData.append("address",address);
    formData.append("contactNo",contactNo);
    formData.append("nic",nic);
    formData.append("dln",dln);
    formData.append("nicImgPath",nicImgPath);
    formData.append("dlnImgPath",dlnImgPath);*/


    console.log(formData);

    $.ajax({
        url: baseUrl+"Customer",
        method :"post",
        data : formData,
        success: function (resp) {
            console.log(resp);
            alert(resp.message);


            console.log("email"+email)
            setUserNameAndEmail(name,email);

            boxShadowRemove();
           /* clearRegData();*/
            $("#loginPage").hide();
            $("#CustomerReg").hide();
            $("#cusDetail").hide();
            $("#HomePage").show();

        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);

        }
    });




});
function clearRegData(){
    $("#txtCusRegId").val("");
    $("#txtCusEmail").val("");
    $("#txtPassword").val("");
    $("#txtName").val("");
    $("#txtAddress").val("");
    $("#txtContactNo").val("");
    $("#txtNicNo").val("");
    $("#txtDrivingLNo").val("");
}
function setUserNameAndEmail(name,email) {
    console.log("name"+name);
    $("#lblNavUserName").text(name);
    $("#lblNavEmail").text(email);
}