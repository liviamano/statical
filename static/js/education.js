$(function () {

    var highestEducation = $('#highest-education');
    var illiterate = $('#illiterate');
    var cityBasedSchooling = $('#city-based-schooling');
    var genderCityBasedSchooling = $('#gender-city-based-schooling');
    var femaleGrid = $('#female-grid');
    var maleGrid = $('#male-grid');
    var highestEducationGrid = $('#highest-education-grid');

    cityBasedSchooling.click(function () {
        $.ajax({
            url: '../get_city_based_schooled.php',
            type: 'POST',
            success: function (response) {
                var data = $.parseJSON(response);
                $('#chart').kendoChart({
                    title: {
                        text: "Qytetet"
                    },
                    dataSource: {
                        data: data
                    },
                    series: [{
                        //type: "column",
                        field: 'high_school',
                        stack: true,
                        name: "Gjimnaz",
                        color: "#cc6e38"
                    }, {
                        //type: "column",
                        field: "uni_bachelor",
                        stack: true,
                        name: "Universitet",
                        color: "#ef955f"
                    }],
                    valueAxes: [{
                        title: {text: "gjimnazi"},
                        min: 0,
                        max: 100000
                    }, {
                        name: "uni",
                        title: {text: "uni"},
                        min: 0,
                        max: 10000,
                        majorUnit: 32
                    }],
                    categoryAxis: {
                        field: 'Region',
                        axisCrossingValues: [0, 0, 10, 10]
                    }
                })
            }
        })
    });

    genderCityBasedSchooling.click(function () {


        femaleGrid.css('display', 'inline-block');
        maleGrid.css('display', 'inline-block');
        var femaleDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: '../get_female_city_based_schooling_data.php',
                    dataType: 'json'
                }
            }
        });

        femaleGrid.kendoGrid({
            dataSource: femaleDataSource,
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
                    title: "Pa diplome"
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

        var maleDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: '../get_male_city_based_schooling_data.php',
                    dataType: 'json'
                }
            }
        });

        maleGrid.kendoGrid({
            dataSource: maleDataSource,
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

    highestEducation.click(function () {

        highestEducationGrid.css('display', 'inline-block');

        var highestEducationData = new kendo.data.DataSource({
            transport: {
                read: {
                    url: '../get_highest_education_achieved_data.php',
                    dataType: 'json'
                }
            }
        });
        $('#highest-education-grid').kendoGrid({
            dataSource: highestEducationData,
            title: {
                text: "Arsimi me i larte i arritur per cdo grupmoshe"
            },
            columns: [{
                field: "groupage",
                title: "Mosha"
            },
                {
                    field: "primary",
                    title: "Fillore"
                }, {
                    field: "lower_secondary",
                    title: "9 vjecare"
                }, {
                    field: "high_school",
                    title: "E Mesme"
                }, {
                    field: "uni_bachelor",
                    title: "E Larte"
                },
                {
                    field: "uni_master",
                    title: "Doktorature"
                }]
        });
    });

    illiterate.click(function () {
        $.ajax({
            url: '../get_illiterate_data.php',
            type: 'POST',
            success: function (response) {
                var data = $.parseJSON(response);
                $('#chart').kendoChart({
                    title: {
                        text: "Analfabet"
                    },
                    seriesDefaults: {
                        type: 'area'
                    },
                    dataSource: {
                        data: data
                    },
                    series: [{
                        field: 'not_schooled',
                        name: 'Analfabete'
                    }, {
                        field: 'schooled',
                        name: 'Te shkolluar'
                    }
                    ],
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

