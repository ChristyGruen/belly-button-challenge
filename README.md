#  <span style="color:tan"> **Module 14 Interactive Dashboard Challenge**  </span>
### Chris Gruenhagen 4Jan2023
## **Homework Log**

The Module 14 Challenge homework is located in the belly-button-challenge repository.  

---
## **Purpose**

In this assignment, you will build an interactive dashboard to explore the <a href = "http://robdunnlab.com/projects/belly-button-biodiversity/" target = "_blank"> Belly Button Biodiversity dataset </a>, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## **Attribution**

‘Belly Button Biodiversity data provided by’
http://robdunnlab.com/projects/belly-button-biodiversity/


## **Requirements**
1. Use the D3 library to read in samples.json.
2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
3. Create a bubble chart that displays each sample.
4. Display the sample metadata, i.e., an individual's demographic information.
5. Display each key-value pair from the metadata JSON object somewhere on the page
Bonus: Create a gauge chart to plot the weekly washing frequency of the individual.
6. Update all the plots when a new sample is selected. 
7. Deploy your app to a free static page hosting service, such as GitHub Pages. 

---

# &#x1F469;&#x200d;&#x1F52c; &#x1F4CA; &#x1F4C8; 🔢 &#x1F469;&#x200d;&#x1F4bb;🔢 &#x1F4C8; &#x1F4CA; &#x1F469;&#x200d;&#x1F52c;
     emoji & format references:
        https://emojipedia.org
        https://commons.wikimedia.org/wiki/Emoji/Table
        https://www.markdownguide.org/basic-syntax/

        
***See below for original homework instructions***
# <span style="color:tan"> Module 14 Interactive Dashboard Challenge </span>
Due Jan 12, 2023 by 11:59pm 

Points 100 

Submitting a text entry box or a website url
_________________________________________________________
## <span style="color:red"> **Background**  </span>

In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset <a href = "http://robdunnlab.com/projects/belly-button-biodiversity/" target = "_blank"> Belly Button Biodiversity dataset </a>, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

##  <span style="color:orange"> **Before You Begin** </span>

1. Create a new repository for this project called belly-button-challenge. Do not add this Challenge to an existing repository.
2. Clone the new repository to your computer.
3. Inside your local git repository, copy the files from in the StarterCode folder contained within the Module 14 Challenge zip file. i.e. index.html, samples.json, and the static folder.
NOTE:  You will not be required to access the samples.json file locally, but it is provided for reference.
4. Push the above changes to GitHub.
5. Deploy the new repository to GitHub Pages.

##  <span style="color:yellow"> **Files** </span>

Download the following files to help you get started:

<a href = "https://static.bc-edx.com/data/dl-1-1/m14/lms/starter/Starter_Code_v1.zip " target = "_blank"> Module 14 Challenge files </a>


##  <span style="color:green">  **Instructions** </span>
Complete the following steps:

1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    * Use sample_values as the values for the bar chart.
    * Use otu_ids as the labels for the bar chart.
    * Use otu_labels as the hovertext for the chart.

add bar Chart here

3. Create a bubble chart that displays each sample.
    * Use otu_ids for the x values.
    * Use sample_values for the y values.
    * Use sample_values for the marker size.
    * Use otu_ids for the marker colors.
    * Use otu_labels for the text values.

add Bubble Chart here

4. Display the sample metadata, i.e., an individual's demographic information.
5. Display each key-value pair from the metadata JSON object somewhere on the page.

add demographic info screenshot here

6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

add dashboard screenshot here

7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

##  <span style="color:blue"> **Advanced Challenge Assignment (Optional with no extra points earning)** </span>

The following task is advanced and therefore optional.

* Adapt the Gauge Chart from <a href = "https://plot.ly/javascript/gauge-charts/ " target = "_blank"> Plotly </a> to plot the weekly washing frequency of the individual.
* You will need to modify the example gauge code to account for values ranging from 0 through 9.
* Update the chart whenever a new sample is selected.

### Hints
* Use console.log inside of your JavaScript code to see what your data looks like at each step.
* Refer to the Plotly.js documentation https://plot.ly/javascript/ to an external site.when building the plots.

##  <span style="color:indigo"> **Requirements** </span>
### ***Deliverable 1: Scrape Titles and Preview Text from Mars News (40 points)***
* Automated browsing (with Splinter) was used to visit the Mars news site, and the HTML code was extracted (with Beautiful Soup) (10 points)

* The titles and preview text of the news articles were scraped and extracted (20 points)

* The scraped information was stored in the specified Python data structure—specifically, a list of dictionaries (10 points)

### ***Deliverable 2: Scrape and Analyze Mars Weather Data (60 points)***
* The HTML table was extracted into a Pandas DataFrame. Splinter and Beautiful Soup were used to scrape the data. The columns have the correct headings and data types (15 points)

* The data was analyzed to answer all five listed questions, with data visualizations provided when specified (40 points)

* The DataFrame was exported into a CSV file (5 points)


## <span style="color:violet"> **References**  </span>
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/

© 2023 edX Boot Camps LLC