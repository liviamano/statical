$(function () {
    $.ajax({
        url: 'get_data.php',
        type: 'POST',
        success: function (response) {
            var data = $.parseJSON(response);
            //alert(data);
            $("#chart").kendoChart({
                dataSource: {
                    data: data
                },
                series: [{
                    field: "population",
                    name: "ethnicity"
                }],
                categoryAxis: {
                    field: "ethnicity"
                }
            });
        }
    })
});

