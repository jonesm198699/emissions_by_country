// Create an url variable
const url = "https://gist.githubusercontent.com/mateusarruda87/bb73ae14b8895b1c39e506a4fd483c61/raw/f7dfd3d6434fce4b4ef39c9b97865168439a45e3/emissions_data.json";

var all_data = [];
var emissionsArray = [];

// Make a request to retrive data from the url
fetch(url)
  .then(response => response.json())
  .then(data => {
    const emissionsBySource = [];

    all_data = data;

    // Loop through the emissions data
    for (const emission of data) {
      const country = emission.id;
      const totalEmissions = parseFloat(emission.Total);
      const coalEmissions = parseFloat(emission.Coal);  
      const oilEmissions = parseFloat(emission.Oil);
      const gasEmissions = parseFloat(emission.Gas);
      const cementEmissions = parseFloat(emission.Cement);
      const flaringEmissions = parseFloat(emission.Flaring);
      const otherEmissions = parseFloat(emission.Other);

      // Update total emissions for the country
      if (!emissionsBySource['Total']) {
        emissionsBySource['Total'] = [];
      }
      const totalEmissionsIndex = emissionsBySource['Total'].findIndex(item => item.id === country);
      if (totalEmissionsIndex === -1) {
        emissionsBySource['Total'].push({
          id: country,
          value: totalEmissions
        });
      } else {
        emissionsBySource['Total'][totalEmissionsIndex].value += totalEmissions;
      }
      
      // Update coal emissions for the country
      if (!emissionsBySource['Coal']) {
        emissionsBySource['Coal'] = [];
      }
      const coalEmissionsIndex = emissionsBySource['Coal'].findIndex(item => item.id === country);
      if (coalEmissionsIndex === -1) {
        emissionsBySource['Coal'].push({
          id: country,
          value: coalEmissions
        });
      } else {
        emissionsBySource['Coal'][coalEmissionsIndex].value += coalEmissions;
      }

      // Update oil emissions for the country
      if (!emissionsBySource['Oil']) {
        emissionsBySource['Oil'] = [];
      }
      const oilEmissionsIndex = emissionsBySource['Oil'].findIndex(item => item.id === country);
      if (oilEmissionsIndex === -1) {
        emissionsBySource['Oil'].push({
          id: country,
          value: oilEmissions
        });
      } else {
        emissionsBySource['Oil'][oilEmissionsIndex].value += oilEmissions;
      }

      // Update gas emissions for the country
      if (!emissionsBySource['Gas']) {
        emissionsBySource['Gas'] = [];
      }
      const gasEmissionsIndex = emissionsBySource['Gas'].findIndex(item => item.id === country);
      if (gasEmissionsIndex === -1) {
        emissionsBySource['Gas'].push({
          id: country,
          value: gasEmissions
        });
      } else {
        emissionsBySource['Gas'][gasEmissionsIndex].value += gasEmissions;
      }

      // Update cement emissions for the country
      if (!emissionsBySource['Cement']) {
        emissionsBySource['Cement'] = [];
      }
      const cementEmissionsIndex = emissionsBySource['Cement'].findIndex(item => item.id === country);
      if (cementEmissionsIndex === -1) {
        emissionsBySource['Cement'].push({
          id: country,
          value: cementEmissions
        });
      } else {
        emissionsBySource['Cement'][cementEmissionsIndex].value += cementEmissions;
      }

      // Update flaring emissions for the country
      if (!emissionsBySource['Flaring']) {
        emissionsBySource['Flaring'] = [];
      }
      const flaringEmissionsIndex = emissionsBySource['Flaring'].findIndex(item => item.id === country);
      if (flaringEmissionsIndex === -1) {
        emissionsBySource['Flaring'].push({
          id: country,
          value: flaringEmissions
        });
      } else {
        emissionsBySource['Flaring'][flaringEmissionsIndex].value += flaringEmissions;
      }
      
      // Update other emissions for the country
      if (!emissionsBySource['Other']) {
        emissionsBySource['Other'] = [];
      }
      const otherEmissionsIndex = emissionsBySource['Other'].findIndex(item => item.id === country);
      if (otherEmissionsIndex === -1) {
        emissionsBySource['Other'].push({
          id: country,
          value: otherEmissions
        });
      } else {
        emissionsBySource['Other'][otherEmissionsIndex].value += otherEmissions;
      }
    }

    var keys = Object.keys(emissionsBySource);

    for (var i = 0; i < keys.length; i++) {
      emissionsArray.push({
        source: keys[i],
        data: emissionsBySource[keys[i]].map(item => {
          return {
            id: item.id,
            value: parseFloat(item.value.toFixed(2))
          }
        })
      })
    }
  })

setTimeout(() => { 

// Create the map chart with amCharts 4 library
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv_map", am4maps.MapChart);
chart.hiddenState.properties.opacity = 0;

chart.geodata = am4geodata_worldUltra;
chart.projection = new am4maps.projections.Mercator();

var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}: {value}MtC02";
polygonSeries.heatRules.push({
  property: "fill",
  target: polygonSeries.mapPolygons.template,
  min: am4core.color("lightblue"),
  max: am4core.color("black")
});
polygonSeries.useGeodata = true;

// Create a home buttom
var button = chart.chartContainer.createChild(am4core.Button);
button.padding(10, 10, 10, 10);
button.align = "right";
button.marginRight = 15;
button.events.on("hit", function() {
  chart.goHome();
});
button.icon = new am4core.Sprite();
button.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";

// add heat legend
var heatLegend = chart.chartContainer.createChild(am4maps.HeatLegend);
heatLegend.valign = "bottom";
heatLegend.align = "left";
heatLegend.width = am4core.percent(100);
heatLegend.series = polygonSeries;
heatLegend.orientation = "vertical";
heatLegend.padding(20, 20, 20, 20);
heatLegend.valueAxis.renderer.labels.template.fontSize = 12;
heatLegend.valueAxis.renderer.minGridDistance = 40;

polygonSeries.mapPolygons.template.events.on("over", event => {
  handleHover(event.target);
});

polygonSeries.mapPolygons.template.events.on("hit", event => {
  handleHover(event.target);
});

function handleHover(mapPolygon) {
  if (!isNaN(mapPolygon.dataItem.value)) {
    heatLegend.valueAxis.showTooltipAt(mapPolygon.dataItem.value);
  } else {
    heatLegend.valueAxis.hideTooltip();
  }
}

polygonSeries.mapPolygons.template.strokeOpacity = 0.4;
polygonSeries.mapPolygons.template.events.on("out", event => {
  heatLegend.valueAxis.hideTooltip();
});

chart.zoomControl = new am4maps.ZoomControl();
chart.zoomControl.valign = "bottom";

var selector = document.getElementById("selector");

selector.addEventListener("change", function(event){
  var selectedValue = event.target.value;
  if (selectedValue === "total") {
    selectedDataSource = emissionsArray[0].data;
  } else if (selectedValue === "coal") {
    selectedDataSource = emissionsArray[1].data;
  } else if (selectedValue === "oil") {
    selectedDataSource = emissionsArray[2].data;
  } else if (selectedValue === "gas") {
    selectedDataSource = emissionsArray[3].data;
  } else if (selectedValue === "cement") {
    selectedDataSource = emissionsArray[4].data;
  } else if (selectedValue === "flaring") {
    selectedDataSource = emissionsArray[5].data;
  } else if (selectedValue === "other") {
    selectedDataSource = emissionsArray[6].data;
  }
  
  console.log(selectedDataSource)

  polygonSeries.data = selectedDataSource;

});

var event = new Event("change");
selector.dispatchEvent(event);

// excludes Antarctica
polygonSeries.exclude = ["AQ"];

}, 500);

console.log(emissionsArray)