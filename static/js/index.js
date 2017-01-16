$(function () {

    var ethnicity = $('#ethnicity');
    var household = $('#household');

    ethnicity.click(function () {
        $.ajax({
            url: 'get_data.php',
            type: 'POST',
            success: function (response) {
                var data = $.parseJSON(response);
                //alert(data);
                $("#chart").kendoChart({
                    title: {
                        text: "Numri i popullsise sipas ndarjes etnik"
                    },
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
        });
    });

    household.click(function () {
        $.ajax({
            url: 'get_household_data.php',
            type: 'POST',
            success: function (response) {
                var data = $.parseJSON(response);
                //alert(data);
                $("#chart").kendoChart({
                    title: {
                        text: "Njesite ekonomike familjare sipas llojit dhe zones se banimit"
                    },
                    dataSource: {
                        data: data
                    },
                    series: [{
                        field: "njef_urbane",
                        name: "lloji_njef"
                    }],
                    categoryAxis: {
                        field: "lloji_njef"
                    }
                });
            }
        })
    });

});

