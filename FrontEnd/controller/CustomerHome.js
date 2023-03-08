$("#userNameNav").click(function (){
    navigationBefore();
    let navEmail= $("#lblNavEmail").text();
    viewCustomerRental();

    console.log("email"+navEmail)
    $.ajax({
        url: baseUrl+"Customer?email="+navEmail,
        method :"get",
        dataType:"json",
        success: function (resp) {
            console.log(resp);

            $("#submitCusRegDetail").html("update");
            $("#txtCusRegId").val(resp.data.id);
            $("#txtCusEmail").val(resp.data.email);
            $("#txtPassword").val(resp.data.password);
            $("#txtName").val(resp.data.name);
            $("#txtAddress").val(resp.data.address);
            $("#txtContactNo").val(resp.data.contactNo);
            $("#txtNicNo").val(resp.data.nic);
            $("#txtDrivingLNo").val(resp.data.dln);
            $("#file").html(resp.data.imgPath);


        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            console.log(prase.message);

        }

    });

});
function navigationBefore(){
    navSetting();
    $("#userNameNav").show();
    $("#loginPage").hide();
    $("#CustomerReg").show();
    $("#cusDetail").hide();
    $("#HomePage").hide();

    $("#rentCar").hide();
    $("#addToCarPage").hide();
    $("#adminDashBoard").hide();
    $("#DriverSchedule").hide();
    $("#Admin").hide();


}
/*function navigationAfter(){
    $("#loginPage").hide();
    $("#CustomerReg").hide();
    $("#cusDetail").hide();
    $("#HomePage").show();
}*/
getAllVehicleForHome();

var vData = [];
function getAllVehicleForHome() {
    var a = 0;
    $.ajax({
        url: baseUrl + "Vehicle",
        dataType: "Json",
        method: "get",
        success: function (resp) {
            console.log(resp)
            for (const r of resp.data) {
                a++;
                    $(".carCardCon").append("<div class=\"carCardInRent\">\n" +
                        "            <div class=\"carImg\">\n" +
                        "\n" +
                        "                <div id=\"carouselExample5\" class=\"carousel slide\" data-bs-ride=\"carousel\">\n" +
                        "                    <div class=\"carousel-inner\">\n" +
                        "                        <div class=\"carousel-item active\" >\n" +
                        "                            <img src=assets/img/fileSave/uploads/" + r.frontImgPath + " class=\"d-block w-100\" alt=\"fontView\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"carousel-item\">\n" +
                        "                            <img src=assets/img/fileSave/uploads/" + r.backImgPath + " class=\"d-block w-100\" alt=\"sideView\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"carousel-item\">\n" +
                        "                            <img src=assets/img/fileSave/uploads/" + r.sideImgPath + " class=\"d-block w-100\" alt=\"BackView\">\n" +
                        "                        </div>\n" +
                        "                        <div class=\"carousel-item\">\n" +
                        "                            <img src=assets/img/fileSave/uploads/" + r.interiorImgPath + " class=\"d-block w-100\" alt=\"BackView\">\n" +
                        "                        </div>\n" +
                        "                    </div>\n" +
                        "                    <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExample\" data-bs-slide=\"prev\">\n" +
                        "                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n" +
                        "                        <span class=\"visually-hidden\">Previous</span>\n" +
                        "                    </button>\n" +
                        "                    <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleAutoplaying\" data-bs-slide=\"next\">\n" +
                        "                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n" +
                        "                        <span class=\"visually-hidden\">Next</span>\n" +
                        "                    </button>\n" +
                        "                </div>\n" +
                        "\n" +
                        "            </div>\n" +
                        "            <div class=\"detailCon\">\n" +
                        "                <div>\n" +
                        "                    <h1>" + r.brand + "</h1>\n" +
                        "                    <h2 class=\"dailyPrice\">" + r.dailyPrice + "LKR</h2>\n" +
                        "                    <h2 class=\"monthlyPrice\">" + r.monthlyPrice + "/month</h2>\n" +
                        "                </div>\n" +
                        "                <div class=\"typeCon\">\n" +
                        "                    <div>\n" +
                        "                        <img src=\"assets/img/steering-wheel.png\" alt=\"logo\" width=\"20\" height=\"20\">\n" +
                        "                        <h1>" + r.transmissionType + "</h1>\n" +
                        "                    </div>\n" +
                        "                    <div>\n" +
                        "                        <img src=\"assets/img/car-seat.png\" alt=\"logo\" width=\"20\" height=\"20\">\n" +
                        "                        <h1>4 Seat</h1>\n" +
                        "                    </div>\n" +
                        "                    <div>\n" +
                        "                        <img src=\"assets/img/petrol-pump.png\" alt=\"logo\" width=\"20\" height=\"20\">\n" +
                        "                        <h1>" + r.fuelType + "</h1>\n" +
                        "                    </div>\n" +
                        "                </div>\n" +
                        "                <div>\n" +
                        "                    <button class=\"rentNow\" id=" + r.vid + ">Add to cart</button>\n" +
                        "                </div>\n" +
                        "            </div>\n" +
                        "        </div>")

                    if(a === 4){
                        return false;
                    }

            }



        }

    });


}

