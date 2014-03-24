var WIDTH=1200;
var HEIGHT=600;

var MAX_BORDER = 30;

var stage;
var mapLayer;
var topLayer;
function drawMapWithCountryList(countryList) {
    stage = new Kinetic.Stage({
                                  container: 'container',
                                  width: WIDTH,
                                  height: HEIGHT,
                              draggable: true,
                                  });
    mapLayer = new Kinetic.Layer({
                                     //y: 20,
                                     //scale: 0.6
                                     });
    topLayer = new Kinetic.Layer({
                                     //y: 20,
                                     //scale: 0.6
                                     });
    
    /*
     * loop through country data stroed in the worldMap
     * variable defined in the worldMap.js asset
     */
    var paths=[];
    
    for(var key in worldmap.shapes) {
        var path = new Kinetic.Path({
                                    data: worldmap.shapes[key],
                                    fill: '#eee',
                                    stroke: '#555',
                                    strokeWidth: 1
                                    });
        
        paths.push(path);
        
        path.fullName = worldmap.names[key];
        
        path.on('mouseover', function() {
                //document.getElementById("countryName").innerHTML=this.fullName;
                this.setFill('#111');
                this.moveTo(topLayer);
                topLayer.drawScene();
                });
        
        path.on('mouseout', function() {
                this.setFill('#eee');
                this.moveTo(mapLayer);
                mapLayer.draw();
                topLayer.draw();
                });
        
        path.on('click', function() {
                checkCorrectCountry(this.fullName);
                });
        
        mapLayer.add(path);
    }
    stage.add(mapLayer);
    stage.add(topLayer);
    
    //now go through paths, finding bounds.
    var minX = 1200;
    var maxX = 0;
    var minY = 600;
    var maxY = 0;
    
    for (var i in paths) {
        var path = paths[i];
        if (countryList.indexOf(path.fullName)!=-1) {//this country is important
            //go through each point in country and find the bounds
            for (i in path.dataArray) {
                var dataPoint = path.dataArray[i].points;
                var x = dataPoint[0];
                var y = dataPoint[1];
                if (!isNaN(x) && !isNaN(y)) {
                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                }
            }
        }
    }
    
    //add randomized borders
    minX -= Math.floor(Math.random()*MAX_BORDER);
    minY -= Math.floor(Math.random()*MAX_BORDER);
    maxX += Math.floor(Math.random()*MAX_BORDER);
    maxY += Math.floor(Math.random()*MAX_BORDER);
    
    stage.offsetX(minX);
    stage.offsetY(minY);
    
    var xScale = WIDTH/(maxX-minX);
    var yScale = HEIGHT/(maxY-minY);
    var scale = Math.min(xScale,yScale);
    stage.scaleX(scale);
    stage.scaleY(scale);
    
    mapLayer.draw();
}