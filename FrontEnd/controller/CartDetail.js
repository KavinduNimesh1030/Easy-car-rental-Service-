function getVehicleDetail(id){
    console.log(id);
    $.ajax({
        url: baseUrl+"Vehicle?vid="+id,
        method :"get",
        dataType:"json",
        success: function (resp) {
            console.log(resp);
            console.log(resp.data)

                $("#tblAddToCart").append("<tr><td>"+resp.data.vid+"</td><td>"+resp.data.brand+"</td><td>"+resp.data.dailyPrice+"</td><td>"+resp.data.monthlyPrice+"</td><td>"+resp.data.priceForExtraKm+"</td></tr>")
        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            console.log(prase.message);

        }

    });
}