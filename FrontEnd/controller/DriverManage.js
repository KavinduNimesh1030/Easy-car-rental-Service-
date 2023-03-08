baseUrl = "http://localhost:8080/BackEnd_war/";
let avaDriverCount =0;
$("#btnSaveDriver").click(function (){
    var formData = $("#driverRegForm").serialize();
    console.log(formData);
    let btn =$("#btnSaveDriver").html();
    if(btn == "Submit"){
        $.ajax({
            url: baseUrl+"Driver",
            method :"post",
            data : formData,
            success: function (resp) {
                console.log(resp);
                alert(resp.message);
                getAllDrivers();

            },
            error: function(error) {
                let prase = JSON.parse(error.responseText);
                alert(prase.message);

            }
        });
    }else {

        let driverId  = $("#txtDriId").val();
       let driverName = $("#txtDriName").val();
        let no = $("#txtdriNo").val();
        let availability =$("#txtDrOp").val();

        let Driver = {
            driverId: driverId,
            driverName:driverName,
            driverContactNo:no,
            availability: availability

        }
        $.ajax({
            url: baseUrl + "Driver",
            method: "put",
            data: JSON.stringify(Driver),
            contentType: "application/json",
            success: function (resp) {

                alert(resp.message);
                $("#btnSaveDriver").html("Submit")
                getAllDrivers();

            },
            error: function (error) {
                let prase = JSON.parse(error.responseText);
                alert(prase.message);

            }

        });

    }


});
getAllDrivers();

function getAllDrivers(){
    $("#tblDriverDetail").empty();
    $.ajax({
        url: baseUrl+"Driver",
        method :"get",
        dataType:"json",
        success: function (resp) {
            for (const r of resp.data) {

                if(r.driverId !== "with out Driver"){
                    if(r.availability === "Available"){
                        avaDriverCount++;
                    }
                    $("#tblDriverDetail").append("<tr style='height: 71px;column-gap: 10px;gap: 10px;box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);border-radius: 10px;'><td>"+r.driverId+"</td><td>"+r.driverName+"</td><td>"+r.driverContactNo+"</td><td>"+r.availability+"</td><td></tr>");
                }


            }
            avaDriverCountM(avaDriverCount);


        }


    });
}

function avaDriverCountM(ava) {
    $("#lblAvaDriverC").text(ava);
}

$('#btnDriSearch').click(function() {
    let id = $("#txtDrSearch").val();
    $("#btnSaveDriver").html("Update")
    $.ajax({
        url: baseUrl + "Driver?driverId="+id,
        dataType:"Json",
        method: "get",
        success: function (resp) {
          /*  alert(resp.message);
            alert(resp.data);*/
            $("#txtDriId").val(resp.data.driverId);
            $("#txtDriName").val(resp.data.driverName);
            $("#txtdriNo").val(resp.data.driverContactNo);
            $("#txtDrOp").val(resp.data.availability);
        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);

        }
    });

});


function driverSchedule(id){
    $.ajax({
        url: baseUrl+"Driver/"+id,
        dataType:"Json",
        method: "get",
        success: function (resp) {
            $("#tblDriverSchedule").append("<tr style='height: 71px;column-gap: 10px;gap: 10px;box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);border-radius: 10px;'><td>"+resp.data.vid+"</td><td>"+resp.data.pickDate+"</td><td>"+resp.data.pickTime+"</td><td>"+resp.data.returnDate+"</td><td></tr>");
        }

    });
}
function deleteDriver(){
    let id = $("#txtDrSearch").val();

    $.ajax({
        url: baseUrl+"Driver?driverId="+id,
        method :"DELETE",
        success: function (resp) {
            alert(resp.message);
            getAllDrivers();

        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);

        }

    });
}

