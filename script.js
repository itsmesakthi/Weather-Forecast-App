/*weather graph*/

const xArray = [1,2,3,4,5,6,7,8,9,10,11,12];
const yArray = [28,29,28,29,28.5,29.5,30,29,30,28,29,30];

// Define Data
const data = [{
  x: xArray,
  y: yArray,
  mode:"lines"
}];

// Define Layout
const layout = {
  xaxis: {range: [1,12], title: "time (in hours)"},
  yaxis: {range: [0, 40], title: "Temperature (in °C)"},  
  title: "TIME vs. TEMPERATURE DIFFRENCE"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);

// c° to °f

let doggleOn =document.queryselector('#toggleOn')
let doggleOff =document.queryselector('#toggleff')

function animatedToggle(){
  // toggle.ClassList.toggle(active);
  alert('hi')

}



document.getElementById("flexSwitchCheckDefault").addEventListener("click", animatedToggle);

// $(document).ready(function() {
//   // if(toggle.ClassList.contains(active)){
//   //   Text.innerHTML="°C";}
//   //   else{
//   //     Text.innerHTML="°F"
//   //   }
//   alert();
//   });