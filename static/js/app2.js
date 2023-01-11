// this script has been updated per Nick's code to pull the data and save to an external mydata
// I can't get this to work
// let mydata;
let varddl = 1601;

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
 
let data = d3.json(url).then(data => {
  //Nick's code to save data outside of this data pull, doesn't work

console.log(data)


});

console.log(data)

// console.log(data.names[2]);

// //nick's original code  kept getting error app.js:34 Uncaught (in promise) ReferenceError: option is not defined at app.js:34:41
// // let myddl = d3.select('select')
// // data.names.forEach(name => myddl.append(option.attr("value", name)).text(name))
//   // //nick's code with a few fixes  WORKS
//   let myddl = d3.select('select');
//   data.names.forEach(nameber => myddl.append('option').attr('value', nameber).text(nameber));

// //Chris try another way - WORKS - keep this code for future reference
//   // Object.entries(data.names).forEach(([key,value])=> {
//   //   currentValue = value;
//   //   console.log(currentValue)
//   //   let bob = d3.select('select').append('option');
//   //   bob.attr('value',currentValue)
//   //   bob.text(currentValue)
//   // });
//   // let varddl = 1601;
//   const findbob = (element) => element == varddl;
//   let mom = data.names.findIndex(findbob);
// console.log(mom)




//     let nameindex = mom;

// //DEMOGRAPHIC INFO
// // dInfo(0);
// function dInfo(nameindex) {
// let demoInfo = data.metadata[nameindex];
//     console.log(demoInfo)

// Object.entries(demoInfo).forEach(([key,value])=> {
//   bob = key;
//   value = value;
//   let li = d3.select('ul').append('li');
//   li.text(`${bob}:${value}`)
// })};
// dInfo(nameindex);

// //BAR CHART ;
// function barChart(nameindex) {
// let ohBoyy = data.samples[nameindex].otu_ids.slice(0,10).reverse();//otu_ids
// let ohBoyystr = []
// ohBoyy.forEach(pear => ohBoyystr.push(`OTU_${pear}`));
// let ohBoyx = data.samples[nameindex].sample_values.slice(0,10).reverse();//sample_values
// let ohBoyz = data.samples[nameindex].otu_labels.slice(0,10).reverse();//otu_labels
// console.log(ohBoyy)
// console.log(ohBoyx)
// console.log(ohBoyz)

// let trace1 = {
//     x: ohBoyx,
//     y: ohBoyystr,
//     text: ohBoyz,
//     type: 'bar',
//     orientation: 'h',
//   };
//   let data1 = [trace1];
  
//   Plotly.newPlot("bar", data1)};
//   barChart(nameindex);

// //BUBBLEPLOT
// //test data
//   // bubblex =[1167, 2859, 482, 2264, 41, 1189, 352, 189, 2318, 1977, 3450, 874, 1959, 2191, 1950, 2077, 2275, 944, 2184, 2244, 2024, 2419, 2811, 165, 2782, 2247, 2011, 2396, 830, 2964, 1795, 2722, 307, 2178, 2908, 1193, 2167, 1208, 2039, 1274, 2739, 2737, 1314, 1962, 2186, 2335, 2936, 907, 833, 2483, 2475, 2491, 2291, 159, 2571, 2350, 2342, 2546, 725, 170, 1505, 513, 259, 1169, 258, 1232, 1497, 1498, 1503, 412, 2235, 1960, 1968, 121, 2065, 340, 2110, 2188, 357, 342];
//   // bubbley =[163, 126, 113, 78, 71, 51, 50, 47, 40, 40, 37, 36, 30, 28, 25, 23, 22, 19, 19, 14, 13, 13, 13, 12, 12, 11, 11, 11, 10, 10, 10, 8, 7, 7, 7, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
//   // bubblez =["Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Varibaculum", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Peptococcaceae;Peptococcus", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;Ruminococcaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria", "Bacteria;Firmicutes", "Bacteria", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria"];
//  function bubbleChart(nameindex) {
//   let bubblex = [data.samples[nameindex].otu_ids];
//   console.log(bubblex)
//   let bubbley = [data.samples[nameindex].sample_values];
//   console.log(bubbley)
//   let bubblez = [data.samples[nameindex].otu_labels];
//   console.log(bubblez)
  
//    var trace2 = {
//       x: bubblex[0],
//       y: bubbley[0],
//       text: bubblez[0],
//       mode: 'markers',
//       marker: {
//         size: bubbley[0],
//         color: bubblex[0]
//       }
//     };
//     var data2 = [trace2];


// //nameindex variable to be defined by dropdown list event. currently assigned = 0    
//     var layout2 = {
//       title: `OTU ID ${data.names[nameindex]}`,
//       showlegend: false,
//       // height: 600,
//       // width: 600
//     };
    
//     Plotly.newPlot('bubble', data2, layout2)};
//     bubbleChart(nameindex);

// // //DEMOGRAPHIC INFO
// // function dInfo(nameindex) {
// // let demoInfo = data.metadata[nameindex];
// //     console.log(demoInfo)

// // Object.entries(demoInfo).forEach(([key,value])=> {
// //   bob = key;
// //   value = value;
// //   let li = d3.select('ul').append('li');
// //   li.text(`${bob}:${value}`)
// // })};

// // after here to automate ddl selection


// // d3.selectAll("#selDataset").on("change", getData);

// // // Function called by DOM changes
// // function getData() {
// //   let dropdownMenu = d3.select("#selDataset");
// //   // Assign the value of the dropdown menu option to a letiable
// //   let dataset = dropdownMenu.property("value");
// //   console.log(dataset)
// // }

// // function optionChanged(name)
// // update_Demographicinfo()
// // updateplots()

// // d3.selectAll("#selDataset").on("change", updatePlotly);

// // // This function is called when a dropdown menu item is selected
// // function updatePlotly() {
// //   // Use D3 to select the dropdown menu
// //   let dropdownMenu = d3.select("#selDataset");
// //   // Assign the value of the dropdown menu option to a variable
// //   let varddl = dropdownMenu.property("value");
// //   console.log(dropdownMenu)

// //   // // Initialize x and y arrays
// //   // let x = [];
// //   // let y = [];

// //   // if (dataset === 'dataset1') {
// //   //   x = [1, 2, 3, 4, 5];
// //   //   y = [1, 2, 4, 8, 16];
// //   // }

// //   // else if (dataset === 'dataset2') {
// //   //   x = [10, 20, 30, 40, 50];
// //   //   y = [1, 10, 100, 1000, 10000];
// //   // }

// //   // // Note the extra brackets around 'x' and 'y'
// //   // Plotly.restyle("plot", "x", [x]);
// //   // Plotly.restyle("plot", "y", [y]);
// // }