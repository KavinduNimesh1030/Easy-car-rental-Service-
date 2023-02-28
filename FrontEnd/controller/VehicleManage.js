$("#submitVehicleDetail").click(function (){
    let vid = $("#txtCarRegId").val();
    let brand = $("#txtCarBrand").val();
    let color = $("#txtCarColor").val();
    let dailyPrice = $("#txtCarDailyPrice").val();
    let freeKmForDay = $("#txtFreeKmForDay").val();
    let freeKmForMonth = $("#txtFreeKmForMonth").val();
    let fuelType = $("#txtCarFuelType").val();
    let isAvailable = $("#txtCarIsAvailable").val();
    let monthlyPrice = $("#txtCarRegId").val();
    let noOfPassenger = $("#txtCarNoOfPassenger").val();
    let priceForExtraKm = $("#txtCarRegId").val();
    let transmissionType = $("#txtCarTranType").val();
    let type = $("#txtCarType").val();
    let frontImgPath = $("#fileFront")[0].files[0].name;
    let backImgPath = $("#fileBack")[0].files[0].name;
    let sideImgPath = $("#fileSide")[0].files[0].name;
    let interiorImgPath = $("#fileSide")[0].files[0].name;

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

});