
var xyValues = [
  {x:	1990	,y:	22757.4805, info: 'In 1990, USA had the highest emissions with a total of 5122.50.'},
  {x:	1991	,y:	23244.80575, info: 'In 1991, USA had the highest emissions with a total of 5064.99.'},
  {x:	1992	,y:	22580.0234, info: 'In 1992, USA had the highest emissions with a total of 5175.22.'},
  {x:	1993	,y:	22812.89982, info: 'In 1993, USA had the highest emissions with a total of 5274.36.'},
  {x:	1994	,y:	22969.49836, info: 'In 1994, USA had the highest emissions with a total of 5365.58.'},
  {x:	1995	,y:	23458.71306, info: 'In 1995, USA had the highest emissions with a total of 5427.80.'},
  {x:	1996	,y:	24159.38227, info: 'In 1996, USA had the highest emissions with a total of 5616.43.'},
  {x:	1997	,y:	24302.58303, info: 'In 1997, USA had the highest emissions with a total of 5691.86.'},
  {x:	1998	,y:	24213.26051,info: 'In 1998, USA had the highest emissions with a total of 5737.13.'},
  {x:	1999	,y:	24732.38837,info: 'In 1999, USA had the highest emissions with a total of 5810.33.'},
  {x:	2000	,y:	25453.62214, info: 'In 2000, USA had the highest emissions with a total of 6016.35.'},
  {x:	2001	,y:	25668.04833, info: 'In 2001, USA had the highest emissions with a total of 5911.99.'},
  {x:	2002	,y:	26281.03747, info: 'In 2002, USA had the highest emissions with a total of 5952.70.'},
  {x:	2003	,y:	27651.59645, info: 'In 2003, USA had the highest emissions with a total of 6015.80.'},
  {x:	2004	,y:	28636.69504, info: 'In 2004, USA had the highest emissions with a total of 6117.96.'},
  {x:	2005	,y:	29614.60226, info: 'In 2005, USA had the highest emissions with a total of 6137.60.'},
  {x:	2006	,y:	30593.11679, info: 'In 2006, China had the highest emissions with a total of 6488.80.'},
  {x:	2007	,y:	31506.7892, info: 'In 2007, China had the highest emissions with a total of 6978.61.'},
  {x:	2008	,y:	32085.83632, info:'In 2008, China had the highest emissions with a total of 7496.83.'},
  {x:	2009	,y:	31564.03069, info: 'In 2009, China had the highest emissions with a total of 7886.53.'},
  {x:	2010	,y:	33364.3465, info: 'In 2010, China had the highest emissions with a total of 8616.65.'},
  {x:	2011	,y:	34487.01162, info: 'In 2011, China had the highest emissions with a total of 9528.56.'},
  {x:	2012	,y:	35006.26758, info: 'In 2012, China had the highest emissions with a total of 9779.28.'},
  {x:	2013	,y:	35319.20162, info: 'In 2013, China had the highest emissions with a total of 9956.31 million.'},
  {x:	2014	,y:	35577.53477, info: 'In 2014, China had the highest emissions with a total of 9998.62.'},
  {x:	2015	,y:	35558.56574, info: 'In 2015, China had the highest emissions with a total of 9866.90.'},
  {x:	2016	,y:	35524.19321, info: 'In 2016, China had the highest emissions with a total of 9764.98.'},
  {x:	2017	,y:	36096.73928, info: 'In 2017, China had the highest emissions with a total of 10011.11.'},
  {x:	2018	,y:	36826.5066, info: 'In 2018, China had the highest emissions with a total of 10353.88.'},
  {x:	2019	,y:	37082.55897, info: 'In 2019, China had the highest emissions with a total of 10741.00.'},
  {x:	2020	,y:	35264.08573, info: 'In 2020, China had the highest emissions with a total of 10956.21.'},
  {x:	2021	,y:	37123.85035, info: 'In 2021, China had the highest emissions with a total of 11472.37.'}
];
var chart = new Chart("sam_chart", {
  type: "scatter",
  data: {
    datasets: [{
      pointRadius: 8,
      pointBackgroundColor: "rgb(0,0,255)",
      data: xyValues,
      borderWidth: 3,
      hoverBorderWidth: 10,
      hoverRadius: 10,

  }],
  },
  options: {
    legend: {
      display: true,
      labels: {
        fontSize: 16,
        usePointStyle: true,
        generateLabels: function(chart) {
          return [{
            text: 'Measured in Million Tonnes',
            fillStyle: 'rgb(0,0,255)'
          }]
        }
      }
    },
    hover: {
      mode: 'index',
      intersect: true
    },
    responsive: true,
  title: {
    display: true,
    fontSize: 20,
    text: 'Total Global Emissions Per Year',
    },
      scales:{
        xAxes: [{
          ticks: {
            fontSize: 10
          },
          scaleLabel: {
           display: true,
           labelString: "Years: 1990-2021",
           fontSize: 16,
           fontStyle:'bold'
              }
            }],
        yAxes: [{
          ticks: {
            fontSize: 10
          },
          scaleLabel: {
            display: true,
            labelString: "Total Global Emissions",
            fontSize: 16,
            fontStyle: 'bold'
               }
            }] 
        },
      }
    });

    var canvas = document.getElementById("sam_chart");
    var infoContainer = document.getElementById("info-container");
    
    canvas.addEventListener("click", function(evt) {
      var activePoint = chart.getElementAtEvent(evt)[0];
      var info = xyValues[activePoint._index].info;
    
      // Set the content of the info container
      infoContainer.textContent = info;
    
      // Show the info container
      infoContainer.style.display = "block";
    });
// create a new div element
var message = document.createElement('div');

// set the message content
message.innerHTML = 'Global emissions have increased from 1990-2021 by 63.104%';

// set some styles for the message
message.style.position = 'fixed';
message.style.bottom = '0';
message.style.left = '30px';
message.style.width = '70%';
message.style.background = '#333';
message.style.color = '#fff';
message.style.padding = '15px';
message.style.fontSize = '30px';
message.style.display = 'flex';
message.style.justifyContent = 'center';
message.style.alignItems = 'center';

// append the message to the body of the page
document.body.appendChild(message);

// set initial left position
var leftPos = -message.offsetWidth;

// animate message to move from left to right
var interval = setInterval(function() {
  leftPos++;
  if (leftPos > window.innerWidth) {
    // reset message position to the left when it moves offscreen
    leftPos = -message.offsetWidth;
  }
  message.style.left = leftPos + 'px';
}, 10);





