let carDailyPrice =[] ;
let amount =0;

function setLossDamageP(lossDamage) {
    amount = amount+lossDamage;
/*    alert(amount);*/
    $("#lblLossDamage").text(amount);
}

function getVehicleDetail(id){
    console.log(id);
    $.ajax({
        url: baseUrl+"Vehicle?vid="+id,
        method :"get",
        dataType:"json",
        success: function (resp) {
            console.log(resp);
            console.log(resp.data)
            carDailyPrice.push(resp.data.dailyPrice);
            alert(resp.data.dailyPrice);


                $("#tblAddToCart").append("<tr style='height: 71px;column-gap: 10px;gap: 10px;box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);border-radius: 10px;'><td>"+resp.data.vid+"</td><td>"+resp.data.brand+"</td><td>"+resp.data.dailyPrice+"</td><td>"+resp.data.monthlyPrice+"</td><td>"+resp.data.priceForExtraKm+"</td><td>"+resp.data.freeKmForDay+"</td><td>"+resp.data.freeKmForMonth+"</td></tr>")
                let lossDamage = resp.data.type== "Luxury"?20000.00:resp.data.type == "General"?10000.00:150000.00;
                setLossDamageP(lossDamage);
        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            console.log(prase.message);

        }

    });
}
var total = 0 ;
var dupTotal =0;
$("#txtDuration").keypress(function (){


})

$('#driverOpSelector').change(function() {
    var conceptName = $('#driverOpSelector').find(":selected").text();
    let serviceCharge = conceptName == "With Driver"?1000.00:0;
    $("#lblService").text(serviceCharge);
    $("#lblTotal").text(parseFloat(dupTotal+serviceCharge));

});


$('#DatReturnDate').change(function(){
    var start =new Date($('#DatPickDate').val());
    var end =  new Date($('#DatReturnDate').val());

    var diff = new Date(end - start);

    var days = diff/1000/60/60/24;

   /* alert(days);*/

    for (let i = 0; i < carDailyPrice.length; i++) {
        alert(carDailyPrice[i]);
        total = total+carDailyPrice[i];
    }
    total = total*days;

    $("#lblTotal").text(parseFloat(total));
    dupTotal = total;
    total =0;
});