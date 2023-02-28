function getVehicleDetail(id){
    console.log(id);
    $.ajax({
        url: baseUrl+"Vehicle?vid="+id,
        method :"get",
        dataType:"json",
        success: function (resp) {
            console.log(resp);
            console.log(resp.data)

                $("#tblAddToCart").append("<tr style='height: 71px;column-gap: 10px;gap: 10px;box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);border-radius: 10px;'><td>"+resp.data.vid+"</td><td>"+resp.data.brand+"</td><td>"+resp.data.dailyPrice+"</td><td>"+resp.data.monthlyPrice+"</td><td>"+resp.data.priceForExtraKm+"</td><td>"+resp.data.freeKmForDay+"</td><td>"+resp.data.freeKmForMonth+"</td></tr>")
        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            console.log(prase.message);

        }

    });
}
