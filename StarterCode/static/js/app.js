//1. Use the D3 library to read in `samples.json`.
// Fetch the JSON data and console log it


function buildPlot() {
  d3.json("samples.json").then(function(data) {

    // Grab values from the data json object to build the plots
    var dataSamples = data.samples.map(d => d.sample_values);
    var otuID = data.samples.map(d => d.otu_ids);
    var otuLabel = data.samples.otu_labels;

    var trace1={
      x: otuID,
      y: dataSamples,
      type: "bar"};

    var DT =[trace1];
    var layout = {
      title: "OTU",
      xaxis: { title: "ID" },
      yaxis: { title: "sample" }
    };
    Plotly.newPlot("bar", DT,layout);
    });
    }
buildPlot();