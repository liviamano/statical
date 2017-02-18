<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <link rel="stylesheet" href="static/css/kendo/kendo.common.min.css">
    <link rel="stylesheet" href="static/css/kendo/kendo.black.min.css">
    <link rel="stylesheet" href="static/css/kendo/kendo.common.core.min.css">
    <link rel="stylesheet" href="static/css/kendo/kendo.bootstrap.min.css">
    <link rel="stylesheet" href="static/css/w3.css">

    <script type="text/javascript" src="static/js/kendo/jquery.min.js"></script>
    <script type="text/javascript" src="static/js/kendo/kendo.all.min.js"></script>
    <script type="text/javascript" src="static/js/kendo/kendo.dataviz.min.js"></script>
    <script type="text/javascript" src="static/js/kendo/kendo.web.min.js"></script>


    <script type="text/javascript" src="static/js/index.js"></script>
</head>
<body>


<div class="w3-row w3-border">
    <div class="w3-col m3 w3-padding-right">
        <div class="w3-content w3-left w3-padding-16">
            <div class="w3-center" id="about-statical">
                <h3>Rreth Statical:</h3>

                <p>
                    Statical është një gjenerues grafik i statistikave të CENSUSIT të mbledhura nga INSTAT
                    përgjatë viteve <i>2001-2011</i>
                </p>
            </div>
            <div class="w3-center" id="about-us">
                <h3>Rreth nesh:</h3>

                <div class="w3-row">
                    <div class="w3-col m6">
                        <a href="#">Livia Mano</a>
                    </div>
                    <div class="w3-col m6">
                        <a href="#">Madrit Kacabumi</a>
                    </div>
                </div>
                <div class="w3-row">
                    <div class="w3-col m6">
                        <a href="#">Margarit Zisi</a>
                    </div>
                    <div class="w3-col m6">
                        <a href="#">Kundret Bejko</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w3-col m9 w3-padding-left w3-border-right">
        <header>
            <ul class="w3-navbar w3-green">
                <li class="w3-navitem w3-right">
                    <button id="ethnicity" class="w3-btn w3-green">Ethnicity</button>
                </li>
                <li class="w3-navitem w3-right">
                    <button id="household" class="w3-btn w3-green">Household</button>
                </li>
                <li class="w3-navitem w3-right">
                    <button id="highest-education" class="w3-btn w3-green">Highest Education Achieved</button>
                </li>
                <li class="w3-navitem w3-right">
                    <button id="illeterate" class="w3-btn w3-green">Illeterates</button>
                </li>
                <li class="w3-navitem w3-right">
                    <button id="female-city-based-schooling" class="w3-btn w3-green">Female</button>
                </li>
                <li class="w3-navitem w3-right">
                    <button id="male-city-based-schooling" class="w3-btn w3-green">Male</button>
                </li>
                <!--                <li class="w3-navitem w3-right">-->
                <!--                    <button id="region-based-currently-schooled" class="w3-btn w3-green">Region Based Currently-->
                <!--                        Schooled-->
                <!--                    </button>-->
                <!--                </li>-->
            </ul>
        </header>

        <div id="chart"></div>
        <!--        <div id="chart-never-attended"></div>-->
        <!--        <div id="chart-no-diploma"></div>-->
        <!--        <div id="chart-primary"></div>-->
        <!--        <div id="chart-low-secondary"></div>-->
        <!--        <div id="chart-high-school"></div>-->
        <!--        <div id="chart-uni-bachelor"></div>-->
        <!--        <div id="chart-uni-phd"></div>-->


    </div>
</div>
</body>
</html>