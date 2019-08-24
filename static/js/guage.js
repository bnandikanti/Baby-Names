
function handleSubmit() {

  
    // Select the input value from the form
  
    
    var nameselector = d3.select("#selNAMEDataset");
    var mnameselector = d3.select("#selMNAMEDataset");
   
    var Year = d3.select("#selDataset").node().value;
    //console.log(Year);
    
    var femaleURL = `/guagechart/female/${Year}/`;
    //console.log(femaleURL)
    d3.json(femaleURL).then((data) => {
    
    data.Names.forEach((Name) => {
      // console.log(Name)
      nameselector
          .append("option")
          .text(Name)
          .property("value", Name);
    })
    var Femaleguage = nameselector.node().value
    // Build the plot with the new stock
    buildGaugeFemale(Femaleguage, Year);
  })
  
  var maleURL = `/guagechart/male/${Year}/`;
    //console.log(maleURL)
    d3.json(maleURL).then((data) => {
    
    data.Names.forEach((Name) => {
      // console.log(Name)
      mnameselector
          .append("option")
          .text(Name)
          .property("value", Name);
    })
    var maleguage = mnameselector.node().value
    // Build the plot with the new stock
    buildGaugeMale(maleguage, Year);
    //console.log(mnameSelector)
  })
  
  }
  function buildGaugeMale(Name, Year) {
  //console.log(Name)
  
  d3.json(`/guagechart/male/${Year}/`).then((data) => {
   
//   console.log(data.Names.findIndex(nameIndex))
  var index = data.Names.indexOf(Name)
  //console.log(index)
  var count = data.Number[index]
  console.log(`boycount : ${count}`)
  var level = (parseFloat(count) * 10)
  //console.log(level)
  //console.log(Name)
  
  var degrees = 180 - level,
    radius = .5;
  var radians = degrees * Math.PI / 180;
  var x = radius * Math.cos(radians);
  var y = radius * Math.sin(radians);
  
  var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
       pathX = String(x),
       space = ' ',
       pathY = String(y),
       pathEnd = ' Z';
  var path = mainPath.concat(pathX,space,pathY,pathEnd);
  
  
  var data = [{ type: 'scatter',
  x: [0], y:[0],
   marker: {size: 28, color:'850000'},
   showlegend: false,
   name: 'Boy Baby',
   text: level,
   hoverinfo: 'text+name'},
  { values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50],
  rotation: 90,
  text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3',
           '1-2', '0-1', ''],
  textinfo: 'text',
  textposition:'inside',
  marker: {colors:[ 'rgba(0,128,0, .9)', 'rgba(0,128,0, .8)', 'rgba(0,128, 0, .7)', 
                    'rgba(0,128, 0, .6)', 'rgba(0,128, 0, .5)',	'rgba(0,128, 0, .4)',
                    'rgba(0,128, 0, .3)', 'rgba(0,128, 0, .2)', 'rgba(0,128, 0, .1)',
                    'rgba(255, 255, 255, 0)']},
  labels:['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3',
  '1-2', '0-1', ''],
  hoverinfo: 'label',
  hole: .5,
  type: 'pie',
  showlegend: false
  }];
  
  var layout = {
  shapes:[{
     type: 'path',
     path: path,
     fillcolor: '850000',
     line: {
       color: '850000'
     }
   }],
  title: '<b>Boy Baby Names</b> <br>Count Per Year',
  height:400,
  width:400,
  xaxis: {zeroline:false, showticklabels:false,
            showgrid: false, range: [-1, 1]},
  yaxis: {zeroline:false, showticklabels:false,
            showgrid: false, range: [-1, 1]}
  };
  
  Plotly.newPlot('gauge', data, layout);
  
  })
  }
  
  function buildGaugeFemale(Name, Year) {
    //console.log(Name)
    //var gmaleguage = mnameselector.node().value
    d3.json(`/guagechart/female/${Year}/`).then((data) => {
     
  //   console.log(data.Names.findIndex(nameIndex))
    var index = data.Names.indexOf(Name)
    //console.log(index)
    var Femalecount = data.Number[index]
    console.log(`female count: ${Femalecount}`)
    var level = (parseFloat(Femalecount) * 10)
    //console.log(level)
    //console.log(Name)
    
    var degrees = 180 - level,
      radius = .5;
    var radians = degrees * Math.PI / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);
    
    var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
         pathX = String(x),
         space = ' ',
         pathY = String(y),
         pathEnd = ' Z';
    var path = mainPath.concat(pathX,space,pathY,pathEnd);
    
    
    var data = [{ type: 'scatter',
    x: [0], y:[0],
     marker: {size: 28, color:'850000'},
     showlegend: false,
     name: 'Girl Baby',
     text: level,
     hoverinfo: 'text+name'},
    { values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50],
    rotation: 90,
    text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3',
    '1-2', '0-1', ''],
    textinfo: 'text',
    textposition:'inside',
    marker: {colors:[ 'rgba(0,128,0, .9)', 'rgba(0,128,0, .8)', 'rgba(0,128, 0, .7)', 
                      'rgba(0,128, 0, .6)', 'rgba(0,128, 0, .5)',	'rgba(0,128, 0, .4)',
                      'rgba(0,128, 0, .3)', 'rgba(0,128, 0, .2)', 'rgba(0,128, 0, .1)',
                      'rgba(255, 255, 255, 0)']},
    labels: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3',
    '1-2', '0-1', ''],
    hoverinfo: 'label',
    hole: .5,
    type: 'pie',
    showlegend: false
    }];
    
    var layout = {
    shapes:[{
       type: 'path',
       path: path,
       fillcolor: '850000',
       line: {
         color: '850000'
       }
     }],
    title: '<b>Girl Baby Names</b> <br>Count Per Year',
    height:400,
    width:400,
    xaxis: {zeroline:false, showticklabels:false,
              showgrid: false, range: [-1, 1]},
    yaxis: {zeroline:false, showticklabels:false,
              showgrid: false, range: [-1, 1]}
    };
    
    Plotly.newPlot('gauge1', data, layout);
    
    })
    }
   

  function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
    //console.log(selector);
    // Use the list of sample names to populate the select options
    d3.json("/years/").then((yearData) => {
      yearData.forEach((Year) => {
        selector
          .append("option")
          .text(Year)
          .property("value", Year);
      });
  
      // Use the first sample from the list to build the initial plots
      const firstYear = yearData[0];
      // buildCharts(firstSample);
      // buildMetadata(firstSample);
  
      d3.select("#selDataset").on("change", handleSubmit);
    });
  }
  
  function optionChanged(newYear) {
    console.log(newYear)
    // Fetch new data each time a new sample is selected
    handleSubmit(newYear)
    // buildCharts(newSample);
    // buildMetadata(newSample);
  }
  
  // Initialize the dashboard
  
  init();