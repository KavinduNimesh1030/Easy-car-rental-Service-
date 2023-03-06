monthlyIncome();
annuallyIncome();
weeklyIncome();
dailyIncome();
totalIncome();
function monthlyIncome(){
    $.ajax({
        url: baseUrl+"Income?monthly="+"100",
        dataType:"Json",
        method: "get",
        success: function (resp) {
            $("#lblMonthly").text(resp.data);
        }

    });
}
function annuallyIncome(){
    $.ajax({
        url: baseUrl+"Income?annually="+"100",
        dataType:"Json",
        method: "get",
        success: function (resp) {
            $("#lblAnnually").text(resp.data);
        }

    });
}
function dailyIncome(){
    $.ajax({
        url: baseUrl+"Income?daily="+"100",
        dataType:"Json",
        method: "get",
        success: function (resp) {
            $("#lblDaily").text(resp.data);
        }

    });
}
function weeklyIncome(){
    $.ajax({
        url: baseUrl+"Income?weekly="+"100",
        dataType:"Json",
        method: "get",
        success: function (resp) {
            $("#lblWeekly").text(resp.data);
        }

    });
}
function totalIncome(){
    $.ajax({
        url: baseUrl+"Income?tot="+"100",
        dataType:"Json",
        method: "get",
        success: function (resp) {
            $("#lblWeekly").text(resp.data);
        }

    });
}

