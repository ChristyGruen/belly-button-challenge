const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
let listofalllists = [];
 
d3.json(url).then(function(data) {

    console.log(data)
    console.log(data['names'])
    console.log(data['metadata'])
    console.log(data['samples'])

    let lNames = data['names'].map(function(item) {
        return item;
    });
    console.log(lNames)

    let lmetadata = data['metadata'].map(function(item) {
        return item;
    });
    console.log(lmetadata)

    let lsamples= data['samples'].map(function(item) {
        return item;
    });
    console.log(lsamples) 
    console.log(lsamples[0])
    console.log(lsamples[0].id)
    console.log(lsamples[0].otu_ids)
    console.log(lsamples[0].otu_ids[2])

  });


// console.log(dataPromise.length)

// for (let m = 0; m = dataPromise.length; m++ ) {
//     let currentind = dataPromise;
//     listofalllists.push(currentind);
// };

// console.log(listofalllists);

//   console.log(listofalllists);
// data in three arrays
//names is actually a list of IDs
//metadata list of dicts key: id
//samples  list of dicts key: id




// NEED TO FIGURE OUT HOW TO GET DATA FROM HTML ON SITE BUT CREATE WEBSITE USING STATIC FILE IN THE MEANTIME
//will need to loop through info to get 
//mod14 day1 activity 6 unsolved
// console.log(movies)

// // Starting a rating count
// let sum = 0;

// // Arrays to hold movies by decade
// movies1930s = [];
// movies1940s = [];
// movies1950s = [];
// movies1960s = [];
// movies1970s = [];
// movies1980s = [];
// movies1990s = [];
// movies2000s = [];
// movies2010s = [];

// // For loop to go through all movies
// for (let m = 0; m <movies.length; m++) {
// let currentMovie = movies[m];
// sum += currentMovie.profit
// //this one should work too???
// // sum = sum +currentMovie.profit
// if(currentMovie.year <1940) {movies1930s.push(currentMovie)}
// else if (currentMovie.year <1950) {movies1940s.push(currentMovie)}
// else if (currentMovie.year <1960) {movies1950s.push(currentMovie)}
// else if (currentMovie.year <1970) {movies1960s.push(currentMovie)}
// else if (currentMovie.year <1980) {movies1970s.push(currentMovie)}
// else if (currentMovie.year <1990) {movies1980s.push(currentMovie)}
// else if (currentMovie.year <2000) {movies1990s.push(currentMovie)}
// else if (currentMovie.year <2010) {movies2000s.push(currentMovie)}
// else if (currentMovie.year <2020) {movies2010s.push(currentMovie)}
// }
//   // Variable to hold current movie in loop

//   // Increment sum variable by amount of rating


//   // Conditional statement to determine array assignment

  


// // Find the average rating
// let avg = sum/movies.length

// // Print results
// console.log("---------");
// console.log(`${movies1930s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1930s.`);
// console.log(`${movies1940s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1940s.`);
// console.log(`${movies1950s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1950s.`);
// console.log(`${movies1960s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1960s.`);
// console.log(`${movies1970s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1970s.`);
// console.log(`${movies1980s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1980s.`);
// console.log(`${movies1990s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1990s.`);
// console.log(`${movies2000s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 2000s.`);
// console.log(`${movies2010s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 2010s.`);
// console.log(`The average movie profit (adjusted for inflation) is ${avg}.`);
// console.log("---------");


metadata940 = [{"id": 940, "ethnicity": "Caucasian", "gender": "F", "age": 24.0, "location": "Beaufort/NC", "bbtype": "I", "wfreq": 2.0}]
currentId = metadata940[0].id;
currentEthnicity = metadata940[0]['ethnicity'];
currentGender = metadata940[0]['gender'];
currentAge = metadata940[0]['age'];
currentLocation = metadata940[0]['location'];
currentBbtype = metadata940[0]['bbtype'];
currentwfreq = metadata940[0]['wfreq'];

console.log(metadata940[0].id)
console.log(metadata940[0]['ethnicity'])
console.log(metadata940[0]['gender'])
console.log(metadata940[0]['age'])
console.log(metadata940[0]['location'])
console.log(metadata940[0]['bbtype'])
console.log(metadata940[0]['wfreq'])





// create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// use sample_values as the values for the bar chart
// use otu_ids as the labels for the bar chart
// use otu_labels as the hovertext for the chart
// observations are in order!!!

//this gives the correct barchart - need to automate & add hovertext
ohBoyy = ['OTU 1167', 'OTU 2859', 'OTU 482', 'OTU 2264', 'OTU 41'].reverse();
ohBoyx = [163, 126, 113, 78, 71].reverse();

//something is messed up with the reverse with the bacteria list, but works with the color list???

// ohBoyz = ["Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas","Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas"].reverse();
ohBoyz = ['red;1', 'orange;2', 'yellow;3', 'green;4', 'blue;5'].reverse()

let trace1 = {
    x: ohBoyx,
    y: ohBoyy,
    text: ohBoyz,
    type: 'bar',
    orientation: 'h',
  };
  let data1 = [trace1];
  
  Plotly.newPlot("bar", data1);

 metadata940 =  {id: 940, ethnicity: "Caucasian", gender: "F", age: 24.0, location: "Beaufort/NC", bbtype: "I", wfreq: 2.0};

//  bubble chart
//  * Use otu_ids for the x values.
//  * Use sample_values for the y values.
//  * Use sample_values for the marker size.
//  * Use otu_ids for the marker colors.
//  * Use otu_labels for the text values.

bubblex =[1167, 2859, 482, 2264, 41, 1189, 352, 189, 2318, 1977, 3450, 874, 1959, 2191, 1950, 2077, 2275, 944, 2184, 2244, 2024, 2419, 2811, 165, 2782, 2247, 2011, 2396, 830, 2964, 1795, 2722, 307, 2178, 2908, 1193, 2167, 1208, 2039, 1274, 2739, 2737, 1314, 1962, 2186, 2335, 2936, 907, 833, 2483, 2475, 2491, 2291, 159, 2571, 2350, 2342, 2546, 725, 170, 1505, 513, 259, 1169, 258, 1232, 1497, 1498, 1503, 412, 2235, 1960, 1968, 121, 2065, 340, 2110, 2188, 357, 342];
bubbley =[163, 126, 113, 78, 71, 51, 50, 47, 40, 40, 37, 36, 30, 28, 25, 23, 22, 19, 19, 14, 13, 13, 13, 12, 12, 11, 11, 11, 10, 10, 10, 8, 7, 7, 7, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
bubblez =["Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Varibaculum", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Peptococcaceae;Peptococcus", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;Ruminococcaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria", "Bacteria;Firmicutes", "Bacteria", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria"];
otuid = 940;

 var trace2 = {
    x: bubblex,
    y: bubbley,
    text: bubblez,
    mode: 'markers',
    marker: {
      size: bubbley,
      color: bubblex
    }
  };
  
  var data2 = [trace2];
  
  var layout = {
    title: `OTU ID ${otuid}`,
    showlegend: false,
    // height: 600,
    // width: 600
  };
  
  Plotly.newPlot('bubble', data2, layout)