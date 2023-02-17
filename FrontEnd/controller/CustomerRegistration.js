let baseUrl = "http://localhost:8080/BackEnd_war/";
$("#submitCusRegDetail").click(function (){
    var formData = $("#cusRegForm").serialize();
    console.log(formData);

    let nicImgPath = $("#formFileNic")[0].files[0].name;
    let dlnImgPath = $("#formFileDL")[0].files[0];

    console.log(nicImgPath);


    formData.append("nicImgPath",nicImgPath);
    formData.append("dlnImgPath",dlnImgPath);

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