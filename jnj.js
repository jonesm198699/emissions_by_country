const url = "https://github.com/jonesm198699/emissions_by_country/blob/main/emissions.json";

fetch(url)

.then(response => response.json())
  .then(data => {
    // console.log(data);

    const totalEmissionsByCountry = {};
    for (const entry of data) {
      const country = entry.Country;
      const year = entry.Year;
      const total = parseFloat(entry.Total);
      if (!totalEmissionsByCountry[country]) {
        totalEmissionsByCountry[country] = 0;
      }
      totalEmissionsByCountry[country] += total;
    }
    // console.log(totalEmissionsByCountry);

    // const entries = Object.entries(totalEmissionsByCountry);
    const sorted = Object.fromEntries(Object.entries(totalEmissionsByCountry).sort(([,a],[,b]) => a-b).slice(-5))
    // const sorted = Object.entries(totalEmissionsByCountry).slice(-5);
    // // const sorted = Object.fromEntries( Object.entries(totalEmissionsByCountry).slice(-5)

    // console.log(sorted)

    const pair = Object.entries(sorted).map(([key, value]) => ({
      Country: key,
      Total: value
    }));
    
    // console.log(pair)

    let Countries = []

    for (let c = 0; c < pair.length; c++) {
      let country = pair[c].Country;
       Countries.push(country);
    
    }

      // console.log(Countries);

      let Totals = []

      for (let t = 0; t < pair.length; t++) {
        let total = pair[t].Total;
        Totals.push(total);
      
      }

       // console.log(Totals);

  // ******* Chart for Top 5 Contrubutors *******
      var canvasElement = document.getElementById("topChart");
      var config = {
        type: "bar",
        data: {labels: Countries, 
          datasets: [{
            label: "Top CO2 Emissions Contributors (1990 - 2020)", 
            data: Totals}],
        },
        
      };
  
      var topChart = new Chart(canvasElement, config)
  
       
// ******* Lowest 5 Contributors *******
        // const entries = Object.entries(totalEmissionsByCountry);
    const revSorted = Object.fromEntries(Object.entries(totalEmissionsByCountry).sort(([,a],[,b]) => a-b).slice(0,5))
    // const sorted = Object.entries(totalEmissionsByCountry).slice(-5);
    // // const sorted = Object.fromEntries( Object.entries(totalEmissionsByCountry).slice(-5)

    // console.log(revSorted)

    const revPair = Object.entries(revSorted).map(([key, value]) => ({
      Country: key,
      Total: value
    }));
    
    // console.log(revPair)

    let revCountries = []

    for (let c = 0; c < revPair.length; c++) {
      let country = revPair[c].Country;
       revCountries.push(country);
    
    }
// **** this returns top 5 countries & totals ???? ****
      // console.log(revCountries);

      let revTotals = []

      for (let t = 0; t < revPair.length; t++) {
        let total = revPair[t].Total;
        revTotals.push(total);
      
      }
  
        // console.log(revTotals);

  

    var canvasElement = document.getElementById("bottomChart");
    var config = {
      type: "bar",
      data: {labels: revCountries, 
        datasets: [{
          label: "Lowest CO2 Emissions Contributors (1990 - 2021)", 
          data: revTotals}],
      },
     
      
    };

    var topBottomChart = new Chart(canvasElement, config)

 
    });





