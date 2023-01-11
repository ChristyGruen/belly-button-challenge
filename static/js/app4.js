// let nameindex;
// let varddl = 940;

//Ian helped with this code, didn't work but is almost there
//   dropdown.on("change", function() {
//     varddl = this.value;
//     console.log(varddl);
    
//   })


const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
 
d3.json(url).then(function(data) {

console.log(data.names[2]);



//nick's original code  kept getting error app.js:34 Uncaught (in promise) ReferenceError: option is not defined at app.js:34:41
// let myddl = d3.select('select')
// data.names.forEach(name => myddl.append(option.attr("value", name)).text(name))
  // //nick's code with a few fixes  WORKS
  let myddl = d3.select('select');
  data.names.forEach(nameber => myddl.append('option').attr('value',nameber).text(nameber));



//Chris try another way - WORKS - keep this code for future reference
  // Object.entries(data.names).forEach(([key,value])=> {
  //   currentValue = value;
  //   console.log(currentValue)
  //   let newOption = d3.select('select').append('option');
  //   newOption.attr('value',currentValue)
  //   newOption.text(currentValue)
  // });
  let varddl = data.names[0];

// Ian helped with this code, didn't work but is almost there
let dropdown = d3.select("#selDataset");
  dropdown.on("change", function() {
    varddl = this.value;
    console.log(varddl)
    const findbob = (element) => element == varddl;
    let mom = data.names.findIndex(findbob);
    console.log(mom)
    let nameindex = mom;
    //need to delete h6s
    dInfo(nameindex);
    barChart(nameindex);
    bubbleChart(nameindex);
    bbWash(nameindex);
  });



// if nameindex is nill,
// let nameindex = 0
// else nameindex = mom
//set name index default to zero 
var nameindex=(typeof nameindex === 'undefined')? 0:nameindex;
console.log(nameindex)

//DEMOGRAPHIC INFO
// dInfo(0);
function dInfo(nameindex) {
let demoInfo = data.metadata[nameindex];
    console.log(demoInfo)

Object.entries(demoInfo).forEach(([key,value])=> {
  bob = key;
  value = value;
  let carrot = d3.select('.panel-body').append('h6');
  carrot.text(`${bob}:  ${value}`)
})};
dInfo(nameindex);

//BAR CHART ;
function barChart(nameindex) {
let ohBoyy = data.samples[nameindex].otu_ids.slice(0,10).reverse();//otu_ids
let ohBoyystr = []
ohBoyy.forEach(pear => ohBoyystr.push(`OTU_${pear}`));
let ohBoyx = data.samples[nameindex].sample_values.slice(0,10).reverse();//sample_values
let ohBoyz = data.samples[nameindex].otu_labels.slice(0,10).reverse();//otu_labels
console.log(ohBoyy)
console.log(ohBoyx)
console.log(ohBoyz)
let colorlist = [ 'red','orangered','orange', 'yellow','yellowgreen', 'green','blue','mediumblue','rebeccapurple','indigo'];//pairs with Jet and Portland
let colorlist2 = ['#0d0887', '#46039f', '#7201a8', '#9c179e', '#bd3786', '#d8576b', '#ed7953', '#fb9f3a', '#fdca26', '#f0f921'];//pairs with plasma
let colorlist3 = ['#f0f921','#fdca26','#fb9f3a','#ed7953','#d8576b','#bd3786','#9c179e','#7201a8','#46039f','#0d0887']//reverse plasma

let trace1 = {
    x: ohBoyx,
    y: ohBoyystr,
    text: ohBoyz,
    type: 'bar',
    orientation: 'h',
    marker:{color: colorlist3}
  };
  let data1 = [trace1];

  var layout1 = {
    title: `ID_${data.names[nameindex]} Top 10 OTUs`,
    showlegend: false,
    height: 400,
    width: 500,
    margin: { t: 50, r: 25, l: 75, b: 25 },
    paper_bgcolor: "aliceblue",
    // paper_bgcolor: "lavender",
    font: { color: "darkblue", family: "Arial" }
  };

  
  Plotly.newPlot("bar", data1,layout1)};
  barChart(nameindex);

//BUBBLEPLOT
// https://plotly.com/javascript/colorscales/

 function bubbleChart(nameindex) {
  let bubblex = [data.samples[nameindex].otu_ids];
  console.log(bubblex)
  let bubbley = [data.samples[nameindex].sample_values];
  console.log(bubbley)
  let bubblez = [data.samples[nameindex].otu_labels];
  console.log(bubblez)
  
   var trace2 = {
      x: bubblex[0],
      y: bubbley[0],
      xlimit: 4000,
      text: bubblez[0],
      mode: 'markers',
      marker: {
        size: bubbley[0],
        color: bubblex[0],
        colorscale: 'Electric'//rainbow colorscale options Jet, Portland , other options Bluered, Electric 
      }
    };
    var data2 = [trace2];


//nameindex variable to be defined by dropdown list event. currently assigned manually above  
    var layout2 = {
      title: `ID_${data.names[nameindex]} OTU Frequency`,
      showlegend: false,
    //   height: 600,
    //   width: 600,
      margin: { t: 75, r: 25, l: 50, b: 25 },
      paper_bgcolor: "aliceblue",
      font: { color: "darkblue", family: "Arial" },
      xaxis: {title:"OTU_ID"},
      yaxis: {title: "OTU Frequency"}
    };
 

    Plotly.newPlot('bubble', data2, layout2)};
    bubbleChart(nameindex);


    //GAUGECHART
function bbWash(nameindex) {
  let gaugechartinfo = data.metadata[nameindex].wfreq;
  console.log(gaugechartinfo)

  var data3 = [
    {
      type: "indicator",
      mode: "gauge+number",
      value: gaugechartinfo,
      title: { text: "Belly Button Washing Frequency", font: { size: 24 } },
    //   title: { text: "Scrubs per Week", font: { size: 16 } },
      // delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
      gauge: {
        axis: { range: [null, 9], tick0: 0, dticks: 8, tickwidth: 1, tickcolor: "darkblue" },
        bar: { color: "darkblue" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
            //color scheme pairs with Jet and Portland
          { range: [0, 1.5], color: "red"},
          { range: [1.5, 3], color: "orange"  },
          { range: [3, 4.5], color: "yellow"  },
          { range: [4.5, 6], color: "green"  },
          { range: [6, 7.5], color: "blue"  },
          { range: [7.5, 9], color: "indigo"  },
 
          // color scheme pairs with Plasma
          { range: [0, 1], color: "#f0f921"},
          { range: [1, 2], color: "#fdca26"},
          { range: [2, 3], color: "#fb9f3a"  },
          { range: [3, 4], color: "#ed7953"  },
          { range: [4, 5], color: "#d8576b"  },
          { range: [5, 6], color: "#bd3786"  },
          { range: [6, 7], color: "#9c179e"  },
          { range: [7, 8], color: "#7201a8"  },
          { range: [8, 9], color: "#46039f"  }
        //   { range: [9, 10], color: '#0d0887'  }
        ],
        
        //['#f0f921','#fdca26','#fb9f3a','#ed7953','#d8576b','#bd3786','#9c179e','#7201a8','#46039f','#0d0887']//reverse plasma
        // threshold: {
        //   line: { color: "black", width: 4 },
        //   thickness: 0.75,
        //   value: 4
        // }
      }
    }
  ];
  
  var layout3 = {
    width: 500,
    height: 400,
    margin: { t: 100, r: 25, l: 25, b: 25 },
    paper_bgcolor: "aliceblue",
    font: { color: "darkblue", family: "Arial" }
  };
  
  Plotly.newPlot('gauge', data3, layout3)};
  bbWash(nameindex)

  //have all chart info before this last bit so you can call the data from the bellybutton site

});

// //DEMOGRAPHIC INFO
// function dInfo(nameindex) {
// let demoInfo = data.metadata[nameindex];
//     console.log(demoInfo)

// Object.entries(demoInfo).forEach(([key,value])=> {
//   bob = key;
//   value = value;
//   let li = d3.select('ul').append('li');
//   li.text(`${bob}:${value}`)
// })};

// after here to automate ddl selection


// d3.selectAll("#selDataset").on("change", getData);

// // Function called by DOM changes
// function getData() {
//   let dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a letiable
//   let dataset = dropdownMenu.property("value");
//   console.log(dataset)
// }

// function optionChanged(name)
// update_Demographicinfo()
// updateplots()

// d3.selectAll("#selDataset").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   let dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   let varddl = dropdownMenu.property("value");
//   console.log(dropdownMenu)

//   // // Initialize x and y arrays
//   // let x = [];
//   // let y = [];

//   // if (dataset === 'dataset1') {
//   //   x = [1, 2, 3, 4, 5];
//   //   y = [1, 2, 4, 8, 16];
//   // }

//   // else if (dataset === 'dataset2') {
//   //   x = [10, 20, 30, 40, 50];
//   //   y = [1, 10, 100, 1000, 10000];
//   // }

//   // // Note the extra brackets around 'x' and 'y'
//   // Plotly.restyle("plot", "x", [x]);
//   // Plotly.restyle("plot", "y", [y]);
// }

// Getting a reference to the button on the page with the id property set to `click-me`


// // Getting a reference to the input element on the page with the id property set to 'input-field'
// let inputField = d3.select("#input-field");

// // This function is triggered when the button is clicked
// function handleClick() {
//   console.log("A button was clicked!");

//   // We can use d3 to see the object that dispatched the event
//   console.log(d3.event.target);
// }

// // We can use the `on` function in d3 to attach an event to the handler function
// button.on("click", handleClick);

// You can also define the click handler inline
