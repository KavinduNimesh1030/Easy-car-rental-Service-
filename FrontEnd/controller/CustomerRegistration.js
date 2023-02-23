let baseUrl = "http://localhost:8080/BackEnd_war/";

$("#submitCusRegDetail").click(function (){
    var formData = $("#cusRegForm").serialize();

   /* var formData = new FormData();*/

    /*formData.append("id",id);
    formData.append("email",email);
    formData.append("password",password);
    formData.append("address",address);
    formData.append("contactNo",contactNo);
    formData.append("nic",nic);
    formData.append("dln",dln);
    formData.append("nicImgPath",nicImgPath);
    formData.append("dlnImgPath",dlnImgPath);*/

    let id = $("#txtCusRegId").val();
    let name =   $("#txtName").val();
    let email = $("#txtCusEmail").val();
    let password = $("#txtPassword").val();
    let address = $("#txtCusRegId").val();
    let contactNo = $("#txtContactNo").val();
    let nic = $("#txtNicNo").val();
    let dln = $("#txtDrivingLNo").val();

 /*   let file = $("#file")[0].files[0];*/
    let nicImgPath = $("#file")[0].files[0].name;
  /*  let dlnImgPath = $("#formFileDL")[0].files[0].name;
    let file = $("#formFileDL")[0].files[0];*/
    let file1 =$("#file")[0].files[0];
    console.log(nicImgPath);
 /*   console.log(file);*/

    var Customer = {
        id : id,
        name : name,
        email : email,
        password : password,
        address : address,
        contactNo : contactNo,
        dln : dln,
        imgPath : nicImgPath,

    }
    
    console.log(formData);

    $.ajax({
        url: baseUrl+"Customer",
        method :"post",
        data : JSON.stringify(Customer),
        contentType:"application/json",
        success: function (resp) {
            console.log(resp);
            alert(resp.message);

            sendImagePath();
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

function sendImagePath() {
    var data = new FormData();
    let file = $("#file")[0].files[0];
    let fileName = $("#file")[0].files[0].name;
    data.append("myFile", file, fileName);
    console.log("file name "+ fileName);

    $.ajax({
        url: baseUrl + "api/v1/upload",
        method: 'post',
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (resp) {
            alert(resp);
            alert("Successfully Uploaded");
           /* loadTheLastUploadedImage();*/
        },
        error: function (err) {
            console.log(err);
        }
    });
}