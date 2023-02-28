
getAllVehicle();
function getAllVehicle(){
    $.ajax({
        url: baseUrl+"Vehicle",
        dataType:"Json",
        method: "get",
        success: function (resp) {
            console.log(resp)
            for (const r of resp.data) {




            }

        }

    });



}