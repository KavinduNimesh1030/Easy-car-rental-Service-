/*let baseUrl = "http://localhost:8080/BackEnd_war/";*/
$("#submitVehicleDetail").click(function (){
    let vid = $("#txtCarRegId").val();
    let brand = $("#txtCarBrand").val();
    let color = $("#txtCarColor").val();
    let dailyPrice = $("#txtCarDailyPrice").val();
    let freeKmForDay = $("#txtFreeKmForDay").val();
    let freeKmForMonth = $("#txtFreeKmForMonth").val();
    let fuelType = $("#txtCarFuelType").val();
    let isAvailable = $("#txtCarIsAvailable").val();
    let monthlyPrice = $("#txtCarMonthlyPrice").val();
    let noOfPassenger = $("#txtCarNoOfPassenger").val();
    let priceForExtraKm = $("#txtPriceFormExKm").val();
    let transmissionType = $("#txtCarTranType").val();
    let type = $("#txtCarType").val();
    let frontImgPath = $("#fileFront")[0].files[0].name;
    let backImgPath = $("#fileBack")[0].files[0].name;
    let sideImgPath = $("#fileSide")[0].files[0].name;
    let interiorImgPath = $("#fileInterior")[0].files[0].name;

    let vehicle ={
        vid : vid,
        brand : brand,
        color : color,
        dailyPrice : dailyPrice,
        freeKmForDay : freeKmForDay,
        freeKmForMonth : freeKmForMonth,
        fuelType : fuelType,
        isAvailable : isAvailable,
        monthlyPrice : monthlyPrice,
        noOfPassenger : noOfPassenger,
        priceForExtraKm : priceForExtraKm,
        transmissionType : transmissionType,
        type : type,
        frontImgPath : frontImgPath,
        backImgPath : backImgPath,
        sideImgPath : sideImgPath,
        interiorImgPath : interiorImgPath,


    }
    let img=[];
    img.push("fileFront");
    img.push("fileBack");
    img.push("fileSide");
    img.push("fileInterior");
    $.ajax({
        url: baseUrl+"Vehicle",
        method :"post",
        data : JSON.stringify(vehicle),
        contentType:"application/json",
        success: function (resp) {
            console.log(resp);


            for (let i = 0; i < img.length; i++) {
                sendVehicleImagePath(img[i]);
            }
            alert(resp.message);


        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);

        }
    });

});



function sendVehicleImagePath(filId) {
    var data = new FormData();
    let frontFile = $("#"+filId)[0].files[0];
    let frontFileName = $("#"+filId)[0].files[0].name;
   /* let backFile = $("#fileBack")[0].files[0];
    let backFileName = $("#fileBack")[0].files[0].name;
    let sideFile = $("#fileSide")[0].files[0];
    let sideFileName = $("#fileSide")[0].files[0].name;
    let interiorFile = $("#fileFront")[0].files[0];
    let interiorName = $("#fileFront")[0].files[0].name;*/
    data.append("myFile", frontFile, frontFileName);
   /* data.append("myFile", backFile, backFileName);
    data.append("myFile", sideFile, sideFileName);
    data.append("myFile", interiorFile, interiorName);*/

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