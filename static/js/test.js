function buildcomparisonData(Year) {
    d3.selectAll("p").remove();
    // @TODO: Complete the following function that builds the metadata panel
    var comparisonURL = `/comparison/${Year}/${Year}`;
    // var input = d3.select("#female-year"); 
    var input = d3.select("#selDataset")
    //.node().value;
    d3.json(comparisonURL).then((data) => {
    //  console.log(data)
      data.Names.forEach((Help) => {
        
        var row = d3.select("#selDataset").append("p");
          row.text(`${Help}`);  
        })
    })
}
      
function charReplace(data){
    if (data != null){
    var Individchar = str(data).split(", ")
    var Individualchar = Individchar.replace(/Mr.|Mrs.|Ms.|Miss|Ms|Mrs|Mr|Dr|Dr.|Atty.|Gov|Gen.|Sgt.|.|(|)|voice|Voice|(voice)|/g, "")
    return Individualchar
}
return data}
function CharacterVSBaby(Year) {
    var TopNames = []
    var FoundNames = []
    var Rank = []
    var Character = []
    var ID = []
    var CharacterClean = []
    // @TODO: Complete the following function that builds the metadata panel
    var comparisonURL = `/comparison/${Year}/${Year}`;
    d3.json(comparisonURL).then((data) => {
        // console.log(Mdata)
        Object.entries(data).forEach((NameValue) => {
        // var charname = charReplace(.Characters)
            // Character.push(charname)
            TopNames.push(NameValue.TopNames)
            FoundNames.push(NameValue.Name)
            Rank.push(NameValue.Number)
           // ID.push(Help.imdbID)
            // Names.push(Help.Names)
            // Rank.push(Help.Rank)})
            // console.log(Character)
        var trace1 = {
            x: Rank,
            y: TopNames,
            mode: "markers",
            text: TopNames,
            marker: { size: 3,
            color: TopNames,
            colorscale: 'Earth'}
        } 
      var data1 = [trace1]   
      Plotly.newPlot("bubble", data1);
         
        })
    
})
}
           


function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
    console.log(selector);
    // // Use the list of sample names to populate the select options
    // d3.json("/comparison/${MoveYear}/${BabyYear}").then((compareYears) => {
    //   // console.log(compareYears)
    //     compareYears.forEach((Year) => {
    //     selector
    //     .append("option")
    //     .text(Year)
    //     .property("value", Year)
    //   });
    d3.json("/years/").then((compareYears) => {
      compareYears.forEach((Year) => {
        selector
          .append("option")
          .text(Year)
          .property("value", Year);
      });

  
      // Use the first sample from the list to build the initial plots
      const firstYear = compareYears[0];
      console.log(firstYear);
      buildcomparisonData(firstYear);
      CharacterVSBaby(firstYear);
    });
}  
  
function optionChanged(newYear) {
// Fetch new data each time a new sample is selected
    buildcomparisonData(newYear);
    CharacterVSBaby(newYear);
}

  // Initialize the dashboard
init();
