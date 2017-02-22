<?php include 'include.php' ?>
<div style="margin-left: 21%">
    <div class="w3-row-padding w3-blue">
        <ul class="w3-navbar w3-blue">
            <li>
                <button id="illiterate" class="w3-btn w3-blue">Analfabete</button>
            </li>
            <li>
                <button id="city-based-schooling" class="w3-btn w3-blue">Niveli arsimor sipas qytetit
                </button>
            </li>
            <li>
                <button id="highest-education" class="w3-btn w3-blue">Arsimi me i larte i arrire
                </button>
            </li>
            <li>
                <button id="gender-city-based-schooling" class="w3-btn w3-blue">Niveli arsimor sipas
                    gjinise
                </button>
            </li>
        </ul>
    </div>
    <div class="w3-container">
        <div id="chart"></div>
        <div class="w3-row w3-padding-16">
            <div id="female-grid" class="w3-padding-16" style="display:none">Femra</div>
        </div>
        <div class="w3-row w3-padding-16">
            <div id="male-grid" style="display: none"> Meshkuj</div>
        </div>
        <div id="highest-education-grid" class="w3-padding-16" style="display: none">Arsimi me i larte i arrire</div>
    </div>
</div>

<script type="text/javascript" src="../static/js/education.js"></script>
</body>
</html>