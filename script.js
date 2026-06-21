
let chart;

function calculateFootprint() {

    let vehicle =
    document.getElementById("vehicle").value;

    let distance =
    parseFloat(
    document.getElementById("distance").value
    ) || 0;

    let electricity =
    parseFloat(
    document.getElementById("electricity").value
    ) || 0;

    let water =
    parseFloat(
    document.getElementById("water").value
    ) || 0;

    let food =
    document.getElementById("food").value;



    // EMISSION CALCULATIONS

    let transportCarbon = 0;

    if(vehicle=="car")
    transportCarbon = distance * 0.21;

    else if(vehicle=="bike")
    transportCarbon = distance * 0.10;

    else if(vehicle=="bus")
    transportCarbon = distance * 0.08;

    else
    transportCarbon = distance * 0.04;



    let electricityCarbon =
    electricity * 0.85;

    let waterCarbon =
    water * 0.0003;



    let foodCarbon = 0;

    if(food=="veg")
    foodCarbon = 1;

    else if(food=="mixed")
    foodCarbon = 2;

    else
    foodCarbon = 3;



    let carbon =

    transportCarbon +

    electricityCarbon +

    waterCarbon +

    foodCarbon;



    // SCORE

    let score;

    let greenPoints;



    if(carbon < 5){

        score="🌿 Eco Hero";

        greenPoints=100;

    }

    else if(carbon < 10){

        score="🌱 Green Citizen";

        greenPoints=70;

    }

    else{

        score="⚠ High Footprint";

        greenPoints=30;

    }



    // RESULT CARD

    document.getElementById(

    "carbon-value"

    ).innerHTML=

    carbon.toFixed(2)

    +" kg CO₂";



    document.getElementById(

    "eco-score"

    ).innerHTML=

    score;



    document.getElementById(

    "green-points"

    ).innerHTML=

    "Green Points : "

    +greenPoints;



    // AI SUGGESTIONS

    let suggestions="";



    if(vehicle=="car"){

        suggestions+=

        "🚗 Transportation contributes significantly.<br><br>";

        suggestions+=

        "Try metro or public transport twice a week.<br><br>";

    }



    if(electricity>150){

        suggestions+=

        "⚡ Electricity usage is above average.<br><br>";

        suggestions+=

        "Reducing AC usage by 2 hours daily can save energy.<br><br>";

    }



    if(food=="nonveg"){

        suggestions+=

        "🍔 Consider more plant-based meals.<br><br>";

    }



    if(carbon<5){

        suggestions+=

        "🌱 Great job! Your lifestyle is eco-friendly.";

    }



    document.getElementById(

    "ai-suggestions"

    ).innerHTML=

    suggestions;



    // PIE CHART

    if(chart){

        chart.destroy();

    }



    const ctx=

    document.getElementById("myChart");



    chart=

    new Chart(

    ctx,

    {

        type:'doughnut',

        data:{

            labels:[

            'Transport',

            'Electricity',

            'Water',

            'Food'

            ],

            datasets:[{

                data:[

                transportCarbon,

                electricityCarbon,

                waterCarbon,

                foodCarbon

                ],

                backgroundColor:[

                '#34ff87',

                '#2bb673',

                '#55d6a3',

                '#7ef0be'

                ]

            }]

        }

    }

    );

}
function askCoach(){

let question =

document.getElementById("question").value.toLowerCase();

let answer="";



if(question.includes("car")){

answer=

"🚗 Transportation contributes significantly to your emissions. Try metro or public transport.";

}



else if(question.includes("electricity")){

answer=

"⚡ Reducing AC usage and switching off appliances can lower emissions.";

}



else if(question.includes("food")){

answer=

"🍔 Plant-based diets generally produce lower carbon emissions.";

}



else{

answer=

"🌱 Small sustainable actions make a big difference.";

}



document.getElementById("answer").innerHTML=

answer;

}
document.getElementById("badge").innerHTML=

score + " Badge Earned";