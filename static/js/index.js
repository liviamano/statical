$(function () {

    var ethnicity = $('#ethnicity');
    var household = $('#household');
    var highestEducation = $('#highest-education');
    var illeterate = $('#illeterate');
    var regionBasedCurrentlySchooled = $('#region-based-currently-schooled');
    var femaleCityBasedSchooling = $('#female-city-based-schooling');
    var maleCityBasedSchooling = $('#male-city-based-schooling');


    femaleCityBasedSchooling.click(function () {

        var dataSource = new kendo.data.DataSource({
           transport:{
               read: {
                   url: 'get_female_city_based_schooling_data.php',
                   dataType: 'json'
               }
           }
        });

        $('#chart').kendoGrid({
           dataSource: dataSource,
            columns: [{
                field: "city",
                title: "Qyteti"
            },
                {
                    field: "illiterates",
                    title: "Analfabete"
                },
                {
                    field: "no_diploma",
                    title: "Pa diplomë"
                }, {
                    field: "primary",
                    title: "Fillore"
                }, {
                    field: "low_secondary",
                    title: "9 vjecare"
                }, {
                    field: "high_school",
                    title: "E Mesme"
                }, {
                    field: "uni_bachelor",
                    title: "E Larte"
                },
                {
                    field: "uni_phd",
                    title: "Doktorature"
                }]
        });
    });


    maleCityBasedSchooling.click(function () {

        var dataSource = new kendo.data.DataSource({
            transport:{
                read: {
                    url: 'get_male_city_based_schooling_data.php',
                    dataType: 'json'
                }
            }
        });

        $('#chart').kendoGrid({
            dataSource: dataSource,
            columns: [{
                field: "city",
                title: "Qyteti"
            },
                {
                    field: "illiterates",
                    title: "Analfabete"
                },
                {
                    field: "no_diploma",
                    title: "Pa diplomë"
                }, {
                    field: "primary",
                    title: "Fillore"
                }, {
                    field: "low_secondary",
                    title: "9 vjecare"
                }, {
                    field: "high_school",
                    title: "E Mesme"
                }, {
                    field: "uni_bachelor",
                    title: "E Larte"
                },
                {
                    field: "uni_phd",
                    title: "Doktorature"
                }]
        });
    });


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

    //regionBasedCurrentlySchooled.click(function () {
    //    var neverAttended = [];
    //    var noDiploma = [];
    //    var primary = [];
    //    var lowSecondary = [];
    //    var highSchool = [];
    //    var uniBachelor = [];
    //    var uniPhd = [];
    //    $.ajax({
    //        url: 'region_based_currently_schooled.php',
    //        type: 'POST',
    //        success: function (response) {
    //            //console.log(response);
    //            var data = $.parseJSON(response);
    //            for (var i = 0; i < data.length; i++) {
    //                neverAttended.push(data[i]['never_attended']);
    //                //console.log(neverAttended[i]);
    //                noDiploma.push(data[i]['no_diploma']);
    //                primary.push(data[i]['primary']);
    //                lowSecondary.push(data[i]['low_secondary']);
    //                highSchool.push(data[i]['high_school']);
    //                uniBachelor.push(data[i]['uni_bachelor']);
    //                uniPhd.push(data[i]['uni_master']);
    //            }
    //        }
    //    });
    //    //console.log(neverAttended[0][0]);
    //    $('#chart-never-attended').kendoChart({
    //        title: {
    //            text: "NEVER ATTENDED SCHOOL"
    //        },
    //        legend: {
    //            position: "bottom"
    //        },
    //        seriesDefaults: {
    //            labels: {
    //                visible: true,
    //                format: "{0}%"
    //            }
    //        },
    //        series: [{
    //            type: "pie",
    //            data: [{
    //                category: "Urban",
    //                value: neverAttended[0]
    //            }, {
    //                category: "Rural",
    //                value: neverAttended[1]
    //            }]
    //        }]
    //    })
    //});

});

