$(function () {

    var ethnicity = $('#ethnicity');
    var household = $('#household');
    var highestEducation = $('#highest-education');
    var illeterate = $('#illeterate');
    var regionBasedCurrenltySchooled = $('#region-based-currently-schooled');

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

    highestEducation.click(function () {
        $.ajax({
            url: 'get_highest_education_achieved_data.php',
            type: 'POST',
            success: function (response) {
                var data = $.parseJSON(response);
                $('#chart').kendoChart({
                    title: {
                        text: "Highest Education Achieved"
                    },
                    dataSource: {
                        data: data
                    },
                    series: [{
                        field: 'primary',
                        name: 'groupage'
                    }],
                    categoryAxis: {
                        field: 'groupage'
                    }
                })
            }
        })
    });

    illeterate.click(function () {
        $.ajax({
            url: 'get_illeterate_data.php',
            type: 'POST',
            success: function (response) {
                var data = $.parseJSON(response);
                $('#chars').kendoChart({
                    title: {
                        text: "Illeterates"
                    },
                    dataSource: {
                        data: data
                    },
                    series: [{
                        field: 'not_schooled',
                        name: 'groupage'
                    }],
                    categoryAxis: {
                        field: 'groupage'
                    }
                })
            }
        })
    });

    regionBasedCurrenltySchooled.click(function () {
        var neverAttended = [];
        var noDiploma = [];
        var primary = [];
        var lowSecondary = [];
        var highSchool = [];
        var uniBachelor = [];
        var uniPhd = [];
        $.ajax({
            url: 'data/region_based_currently_schooled.php',
            type: 'POST',
            success: function (response) {
                var data = $.parseJSON(response);
                for (var i = 0; i < data.length; i++) {
                    neverAttended.push(data[i]['never_attended']);
                    noDiploma.push(data[i]['no_diploma']);
                    primary.push(data[i]['primary']);
                    lowSecondary.push(data[i]['low_secondary']);
                    highSchool.push(data[i]['high_school']);
                    uniBachelor.push(data[i]['uni_bachelor']);
                    uniPhd.push(data[i]['uni_master']);
                }
            }
        });
        $('#chart-never-attended').kendoChart({
            title: {
                text: "NEVER ATTENDED SCHOOL"
            },
            legend: {
                position: "bottom"
            },
            seriesDefaults: {
                labels: {
                    visible: true
                    //format: "{0}%"
                }
            },
            series: [{
                type: "pie",
                data: [{
                    category: "Urban",
                    value: neverAttended[0]
                }, {
                    category: "Rural",
                    value: neverAttended[1]
                }]
            }]
        })
    });

});

