//first create list on screen for clicking
var table = document.getElementById("countries");
for (i in worldmap.names) {
    table.innerHTML+="<tr><td onclick='clickCountryCell(this)'>"+worldmap.names[i]+"</td></tr>";
}

var countriesClicked = [];

//remove element from array
function removeByValue(arr, val) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == val) {
            arr.splice(i, 1);
            break;
        }
    }
}
var countryTotal=0
function clickCountryCell(tableCell) {
    var countryClicked = tableCell.innerHTML;
    if (tableCell.className=="selectedCell") {
        removeByValue(countriesClicked, countryClicked);
        tableCell.className="deselectedCell";
        countryTotal--
    } else {
        countriesClicked.push(countryClicked);
        tableCell.className="selectedCell";
        countryTotal++
    }
}

var mouseIsDown = false;
var prevMousePos;
function mouseUp(event, obj) {
    mouseIsDown=false;
}

function mouseDown(event, obj) {
    mouseIsDown=true;
    prevMousePos = [event.pageX-obj.offsetLeft, event.pageY-obj.offsetTop];
}

var position = {'x':0.0, 'y':0.0};
function mouseMove(event, obj) {
    if (mouseIsDown) {
        var currentMousePos = [event.pageX-obj.offsetLeft, event.pageY-obj.offsetTop];
        var xChange = currentMousePos[0]-prevMousePos[0];
        var yChange = currentMousePos[1]-prevMousePos[1];
        var scale = stage.scaleX();
        position.x+=xChange;
        position.y+=yChange;
        stage.setPosition(position);
        //mapLayer.draw();
        //topLayer.draw();
        prevMousePos=currentMousePos;
    }
}

var ZOOM_FACTOR = .001;
function scroll(event, obj) {
    var currentScale = stage.scaleX();
    var factor = ZOOM_FACTOR*Math.abs(event.wheelDelta)+1;
    if (event.wheelDelta<0) {
        factor = 1./factor;
    }
    var newScale = currentScale*factor;
    var centerX = event.pageX-obj.offsetLeft;
    var centerY = event.pageY-obj.offsetTop;
    var currentX = position.x;
    var currentY = position.y;
    position = {'x':centerX+(currentX-centerX)*factor, 'y':centerY+(currentY-centerY)*factor};
    stage.setPosition(position);
    stage.scaleX(newScale);
    stage.scaleY(newScale);
    //stage.offsetX(currentX);
    //stage.offsetY(currentY);
    
    mapLayer.draw();
    topLayer.draw();
}

function mouseover(event, obj) {
    document.body.style.overflow='hidden';
}

function mouseout(event, obj) {
    document.body.style.overflow='auto';
}

var countryToFind;
var countryCount=0

function startStudying() {
    document.getElementById("countriesDiv").hidden=true;
    //randomize country list
    countriesClicked.sort(function() {return 0.5 - Math.random()});
    console.log("start studying with countries:"+countriesClicked);
    drawMapWithCountryList(countriesClicked);
	document.getElementById("count").innerHTML=countryCount+" out of "+countryTotal
    countryToFind=countriesClicked.pop();
    document.getElementById("message").innerHTML="Click on "+countryToFind+".";
}

function checkCorrectCountry(countryName) {
    if (countryName==countryToFind) {
        //success
        countryCount++
        document.getElementById("count").innerHTML=countryCount+" out of "+countryTotal
        countryToFind=countriesClicked.pop();
        if (countryToFind) {
            document.getElementById("message").innerHTML="Good Job! You found "+countryName+". Now look for "+countryToFind+".";
        } else {
            document.getElementById("message").innerHTML="You found them all! Good job! I hope that you actually thought that this was a valuable way to study.";
        }
    } else if(countryToFind){
        document.getElementById("message").innerHTML="Nope. That is "+countryName+", not "+countryToFind+". Try again.";
    }
}
//hi
