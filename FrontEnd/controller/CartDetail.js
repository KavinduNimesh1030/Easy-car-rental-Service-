function getVehicleDetail(id){
    $.ajax({
        url: baseUrl+"Vehicle?vid="+id,
        method :"get",
        dataType:"json",
        success: function (resp) {
            console.log(resp);
        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            console.log(prase.message);

        }

    });
}