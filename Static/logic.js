const Plotly = require('plotly.js-dist');

// Load global emissions data
const global_emissions_data = "resources/emissions_global_data.json";

// Load and preprocess data
const df_Global = pd.read_json(global_emissions_data);
const x_values = df_Global["Year"].astype("float");
const y_values = df_Global["Total"].astype("float");

// Create trace for scatter plot
const scatterTrace = {
  x: x_values,
  y: y_values,
  mode: 'markers',
  type: 'scatter',
  name: 'Data',
  marker: {
    color: 'blue',
    size: 10
  }
};

// Add trace to array of traces
const data = [scatterTrace];

// Calculate linear regression and add trace for line
const {slope, intercept, rvalue} = linregress(x_values, y_values);
const trendline = {
  x: x_values,
  y: x_values.map(x => slope*x + intercept),
  mode: 'lines',
  type: 'scatter',
  name: 'Trendline',
  line: {color: 'red', width: 2}
};
data.push(trendline);

// Set layout options
const layout = {
  title: 'Total Emissions Per Year',
  xaxis: {
    title: 'Years from 1990 to 2021',
    range: [1990, 2023]
  },
  yaxis: {
    title: 'Total Emissions',
    range: [20000, 40000]
  }
};

// Create plot
Plotly.newPlot('plot', data, layout);

// Add equation for trendline to plot
const annotation = {
  x: 1992,
  y: 35000,
  text: `y = ${slope.toFixed(2)}x + ${intercept.toFixed(2)}\nR² = ${rvalue.toFixed(2)}`,
  font: {size: 16, color: 'red'},
  showarrow: false,
  align: 'left'
};
Plotly.layoutAnnotations(layout, [annotation]);








