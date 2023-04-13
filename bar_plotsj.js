// Set x axis values

const countries = ["Australia", "Austria", "Belarus", "Belgium", "Brazil", "Bulgaria", "Canada", "China", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Japan", "Kazakhstan", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Netherlands", "New Zealand", "Norway", "Poland", "Portugal", "South Korea", "Romania", "Russia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Taiwan", "Turkey", "Ukraine", "United Kingdom", "USA"];

// Create chart with data sets
new Chart ("barChartj", {
  type: "bar",
  data: {
    labels: countries,
    datasets: [{
      data: [ 156.143134, 11.393343, 3.777468, 10.651276, 56.240806, 16.597579, 48.034995, 7605.716883, 1.423842, 0.068052, 49.846815, 3.142834, 5.335555, 11.871713, 23.826985, 197.357678, 10.129119, 7.440498, 0.667573, 3.757762, 22.269892, 399.366949, 181.010491, 0.098523, 0.0, 0.621598, 0.2374929, 0.0, 16.994711, 5.7556629, 3.6024, 164.234621, 2.430948, 282.8834129, 14.234452, 366.758617, 9.955995, 4.392651, 14.300041, 6.662655, 0.414396, 144.262502, 158.630595, 102.148412, 22.8094049, 878.972885],
      label: "Coal",
      backgroundColor: 'red',
      borderColor: 'red',
      borderWidth: 1
    }, {
      data: [ 135.47629799999999, 30.712898, 17.900204, 39.498344, 281.089414, 12.141451, 238.378466, 1627.725238, 8.273147, 6.299155, 21.129351, 18.5911559, 3.111814, 20.139138, 164.451417, 251.383941, 31.071229, 17.372881, 2.480043, 18.1366519, 127.28358, 387.85735, 40.068642, 4.170118, 0.093475, 8.0213179, 5.94124, 0.863125, 48.155713, 19.124118, 21.1856, 85.531578, 23.215232, 165.067876, 29.22042, 380.8333169, 9.610438, 6.019196, 120.2835949, 26.157097, 25.309228, 62.887735, 115.2808939, 34.914376, 143.980921, 2049.3365],
      label: "Oil",
      backgroundColor: 'blue',
      borderColor: 'blue',
      borderWidth: 1
    }, {
      data: [ 84.471564, 16.8769369, 33.632754, 35.856444, 59.0260959, 5.361709, 223.719402, 687.880944, 5.519125, 0.00022, 17.4307859, 4.792077, 0.809566, 4.361261, 80.040967, 167.628086, 11.042299, 20.8954329, 0.0002, 10.951807, 140.800754, 222.604846, 32.208293, 2.103025, 0.0485209, 4.242133, 1.469367, 0.7362609, 70.666977, 7.846914, 14.317, 36.764228, 11.992691, 116.634539, 25.117993, 780.781499, 9.287948, 1.749733, 64.320816, 1.446498, 6.6491669, 50.229238, 92.216937, 60.774426, 149.420095, 1653.677852],
      label: "Gas",
      backgroundColor: 'green',
      borderColor: 'green',
      borderWidth: 1
    }]
  },
  options: {
    legend: {display: true},
    title: {
      display: true,
      text: 'Global Emissions 2020'},
      hover: {
        mode: 'index',
        intersect: true
      },
    }
  });
