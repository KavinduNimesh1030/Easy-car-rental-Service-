let baseUrl = "http://localhost:8080/BackEnd_war/";
let fImg = "";
let sImg = "";
let bImg = "";
let iImg = "";
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

$("#btnVhSearch").click(function (){
    let vid = $("#txtVHSearch").val();
    $.ajax({
        url: baseUrl+"Vehicle?vid="+vid,
        method :"get",
        dataType:"json",
        success: function (resp) {
            console.log(resp);
            console.log(resp.data)
            $("#txtCarRegId").val(resp.data.vid);
           $("#txtCarBrand").val(resp.data.brand);
            $("#txtCarColor").val(resp.data.color);
            $("#txtCarDailyPrice").val(resp.data.dailyPrice);
            $("#txtFreeKmForDay").val(resp.data.freeKmForDay);
             $("#txtFreeKmForMonth").val(resp.data.freeKmForMonth);
           $("#txtCarFuelType").val(resp.data.fuelType);
             $("#txtCarIsAvailable").val(resp.data.isAvailable);
            $("#txtCarMonthlyPrice").val(resp.data.monthlyPrice);
            $("#txtCarNoOfPassenger").val(resp.data.noOfPassenger);
             $("#txtPriceFormExKm").val(resp.data.priceForExtraKm);
            $("#txtCarTranType").val(resp.data.transmissionType);
           $("#txtCarType").val(resp.data.type);

           fImg = resp.data.frontImgPath;
           sImg = resp.data.sideImgPath;
           bImg = resp.data.backImgPath;
           iImg = resp.data.interiorImgPath;

        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            console.log(prase.message);

        }

    });
});
getAllVehicleAdmin();
function getAllVehicleAdmin(){
    $("#tblAllVehicle").empty();
    $.ajax({
        url: baseUrl+"Vehicle",
        dataType:"Json",
        method: "get",
        success: function (resp) {
            console.log(resp)
            for (const r of resp.data) {
                $("#tblAllVehicle").append("<tr style='height: 71px;column-gap: 10px;gap: 10px;box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);border-radius: 10px;'><td>"+r.vid+"</td><td>"+r.brand+"</td><td>"+r.color+"</td><td>"+r.dailyPrice+"</td><td>"+r.monthlyPrice+"</td><td>"+r.freeKmForDay+"</td><td>"+r.freeKmForMonth+"</td><td>"+r.fuelType+"</td><td>"+r.isAvailable+"</td><td>"+r.noOfPassenger+"</td><td>"+r.transmissionType+"</td><td>"+r.type+"</td><td>"+r.priceForExtraKm+"</td></tr>")
            }

        }

    });
}

$("#updateVehicleDetail").click(function (){
    let vid = $("#txtVHSearch").val();
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
    let frontImgPath = $("#fileFront").val();
    let backImgPath = $("#fileBack").val();
    let sideImgPath = $("#fileSide").val();
    let interiorImgPath = $("#fileInterior").val();

    //if admin not select img  in detail update,add old img path
    if(frontImgPath == ""){
        frontImgPath = fImg;
    }else {
        frontImgPath = $("#fileFront")[0].files[0].name;
    }

    if(backImgPath == ""){
        backImgPath = bImg;
    }else {
        backImgPath = $("#fileBack")[0].files[0].name;
    }
    if(sideImgPath == ""){
        sideImgPath = sImg;
    }else {
       sideImgPath = $("#fileSide")[0].files[0].name;
    }
    if(interiorImgPath == ""){
        interiorImgPath = iImg;
    }else {
       interiorImgPath = $("#fileInterior")[0].files[0].name;
    }



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

    $.ajax({
        url: baseUrl+"Vehicle",
        method :"post",
        data : JSON.stringify(vehicle),
        contentType: "application/json",
        success: function (resp) {
            alert("updated..!");
            getAllVehicleAdmin();

        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);

        }

    });

});
$("#deleteVehicleDetail").click(function (){
    let vid = $("#txtCarRegId").val();

    $.ajax({
        url: baseUrl+"Vehicle?vid="+vid,
        method :"DELETE",
        success: function (resp) {
            console.log(resp);
            alert(resp.message);

        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);

        }

    });
})
