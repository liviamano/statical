<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <link rel="stylesheet" href="../static/css/kendo/kendo.common.min.css">
    <link rel="stylesheet" href="../static/css/kendo/kendo.black.min.css">
    <link rel="stylesheet" href="../static/css/kendo/kendo.common.core.min.css">
    <link rel="stylesheet" href="../static/css/kendo/kendo.bootstrap.min.css">
    <link rel="stylesheet" href="../static/css/w3.css">

    <script type="text/javascript" src="../static/js/kendo/jquery.min.js"></script>
    <script type="text/javascript" src="../static/js/kendo/kendo.all.min.js"></script>
    <script type="text/javascript" src="../static/js/kendo/kendo.dataviz.min.js"></script>
    <script type="text/javascript" src="../static/js/kendo/kendo.web.min.js"></script>
    <script type="text/javascript" src="../static/js/education.js"></script>
</head>
<body>
<nav class="w3-sidenav w3-green" style="width: 20%">
    <a id="home" href="../index.view.php" class="w3-btn w3-green">Home</a>
    <a href="../views/education.view.php" class="w3-btn w3-green">Arsimi</a>
    <a href="../views/disabled.view.php" class="w3-btn w3-green">Njerezit me aftesi te kufizuar</a>
    <a href="../views/movement.view.php" class="w3-btn w3-green">Shperndarja e popullsise</a>
</nav>
<div style="margin-left: 20%">
    <div class="w3-row-padding w3-blue">
        <div class="w3-col m3">
            <button id="highest-education" class="w3-btn w3-blue">Arsimi me i larte i arrire
            </button>
        </div>
        <div class="w3-col m3">
            <button id="illiterate" class="w3-btn w3-blue">Analfabete</button>
        </div>
        <div class="w3-col m3">
            <button id="gender-city-based-schooling" class="w3-btn w3-blue">Niveli arsimor sipas
                gjinise
            </button>
        </div>
        <div class="w3-col m3">
            <button id="city-based-schooling" class="w3-btn w3-blue">Niveli arsimor sipas qytetit
            </button>
        </div>
    </div>
    <div class="w3-container">
        <div id="chart"></div>
        <div id="female-grid" class="w3-padding-16" style="display:none">Femra</div>
        <div id="male-grid" style="display: none"> Meshkuj</div>
        <div id="highest-education-grid" class="w3-padding-16" style="display: none">Arsimi me i larte i arrire</div>
    </div>
</div>

<!--        <table class="w3-table-all">-->
<!--            <tr>-->
<!--                <td>-->
<!--                    <button id="highest-education">Highest Education Achieved-->
<!--                    </button>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--                <td>-->
<!--                    <button id="illiterate">Analfabete</button>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--                <td>-->
<!--                    <button id="gender-city-based-schooling">Gjendja arsimore sipas-->
<!--                        gjinise <br>-->
<!--                        dhe-->
<!--                        qytetit-->
<!--                    </button>-->
<!--                </td>-->
<!--            </tr>-->
<!--        </table>-->


<!--                <li class="w3-navitem w3-right">-->
<!--                    <button id="region-based-currently-schooled" class="w3-btn w3-green">Region Based Currently-->
<!--                        Schooled-->
<!--                    </button>-->
<!--                </li>-->
<!--        <div id="chart-never-attended"></div>-->
<!--        <div id="chart-no-diploma"></div>-->
<!--        <div id="chart-primary"></div>-->
<!--        <div id="chart-low-secondary"></div>-->
<!--        <div id="chart-high-school"></div>-->
<!--        <div id="chart-uni-bachelor"></div>-->
<!--        <div id="chart-uni-phd"></div>-->


<!---->
<!--<div class="w3-row w3-border">-->
<!--    <div class="w3-col m12">-->
<!--        <header>-->
<!--            <ul class="w3-navbar w3-green">-->
<!--                <li class="w3-navitem w3-left">-->
<!--                    <a id="home" href="../index.view.php" class="w3-btn w3-green">Home</a>-->
<!--                </li>-->
<!--                <li class="w3-navitem w3-right">-->
<!--                    <a href="../views/education.view.php" class="w3-btn w3-green">Arsimi</a>-->
<!--                </li>-->
<!--                <li class="w3-navitem w3-right">-->
<!--                    <a href="../views/disabled.view.php" class="w3-btn w3-green">Njerezit me aftesi te kufizuar</a>-->
<!--                </li>-->
<!--                <li class="w3-navitem w3-right">-->
<!--                    <a href="../views/movement.view.php" class="w3-btn w3-green">Shperndarja e popullsise</a>-->
<!--                </li>-->
<!--            </ul>-->
<!--        </header>-->
<!--    </div>-->
<!--</div>-->

<!--<div class="w3-row-padding">-->
<!--    <div class="w3-col m2">-->

</body>
</html>