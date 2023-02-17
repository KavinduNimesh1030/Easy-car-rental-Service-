let baseUrl = "http://localhost:8080/BackEnd_war/";
$("#submitCusRegDetail").click(function (){
    var formData = $("#cusRegForm").serialize();
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

        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);

        }
    });



});