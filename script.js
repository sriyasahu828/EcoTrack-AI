let chart;

function calculateFootprint(){

let vehicle=document.getElementById("vehicle").value;

let distance=parseFloat(document.getElementById("distance").value)||0;

let electricity=parseFloat(document.getElementById("electricity").value)||0;

let water=parseFloat(document.getElementById("water").value)||0;

let food=document.getElementById("food").value;


let transportCarbon=0;

if(vehicle=="car")
transportCarbon=distance*0.21;

else if(vehicle=="bike")
transportCarbon=distance*0.10;

else if(vehicle=="bus")
transportCarbon=distance*0.08;

else
transportCarbon=distance*0.04;



let electricityCarbon=electricity*0.85;

let waterCarbon=water*0.0003;

let foodCarbon=0;


if(food=="veg")
foodCarbon=1;

else if(food=="mixed")
foodCarbon=2;

else
foodCarbon=3;


let carbon=

transportCarbon+

electricityCarbon+

waterCarbon+

foodCarbon;



let score;

let message;

let greenPoints;

if(carbon<5)

greenPoints=100;

else if(carbon<10)

greenPoints=70;

else

greenPoints=30;


if(carbon<5){

score="🌿 Eco Hero";

message="Amazing! Your lifestyle is environmentally friendly.";

}

else if(carbon<10){

score="🌱 Green Citizen";

message="Good work! Try using public transport more often.";

}

else{

score="⚠ High Carbon Footprint";

message="Reduce electricity usage and travel greener.";

}



document.getElementById("result").innerHTML=`

<h2>

🌱 Today's Sustainability Report

</h2>


<h1>

${carbon.toFixed(2)}

kg CO₂

</h1>

<h3>

${score}

</h3>

<p>

${message}

</p>

<hr>


<h2>

🏅 Green Points

</h2>

<h1>

+${greenPoints}

</h1>

<p>

Earn points by making eco-friendly choices.

</p>


<hr>


<h2>

🤖 AI Suggestions

</h2>


<ul>

<li>

Use public transport whenever possible.

</li>

<li>

Switch off unused appliances.

</li>

<li>

Reduce food waste.

</li>

<li>

Use reusable bags and bottles.

</li>

</ul>


<hr>


<h2>

🚇 Sustainable Choice Impact

</h2>


<p>

If you switch from

<b>${vehicle}</b>

to

<b>Metro</b>

you can:

</p>


<ul>

<li>

Reduce CO₂ emissions by

<b>

40%

</b>

</li>


<li>

Earn

<b>

+20 Green Points

</b>

</li>


<li>

Contribute towards a greener future 🌍

</li>

</ul>


<hr>


<h2>

🏆 Next Badge

</h2>


<h3>

Eco Explorer

</h3>


<p>

Only

<b>

${100-greenPoints}

points

</b>

away!

</p>


`;


if(chart){

chart.destroy();

}


const ctx=document.getElementById("myChart");


chart=new Chart(ctx,{

type:'pie',

data:{

labels:['Transport','Electricity','Water','Food'],

datasets:[{

data:[

transportCarbon,

electricityCarbon,

waterCarbon,

foodCarbon

]

}]

}

});

}
const quotes=[

"🌿 Small steps make a big difference.",

"♻ Every action counts.",

"🌍 There is no Planet B.",

"💚 Reduce today for a greener tomorrow."

];
