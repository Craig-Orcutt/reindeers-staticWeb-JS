var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var colorsIndex = colors.length;
var reindeerIndex = reindeer.length;


var hohohoElement = document.getElementById("reindeer");

function coloredReindeer(colors, reindeer) {
        for (let i = 0; i < reindeer.length; i++) {
        hohohoElement.innerHTML+= "<p>" + colors[i] + " " + reindeer[i] + "</p>"
        };
    
} 

coloredReindeer(colors,reindeer);
// am i creating a div called "reindeer"?
// how do i pull from two different arrays and put them next to each other?
// .innerhtml? += "<p>colors[i]? + " " + reindeer[i]? + </p>"???

// if statement to find out when an array is shorter?