var fId = getUrlParameters("fId");
if(fId == "0"){ fId = "shed1"; }
var canvasWidth = 800;
var canvasHeight = 1800;
var scale =3.3;
var pos = [[10/scale,50/scale+96],[60/scale + 93,50/scale+96],[10/scale,200/scale+96+96],[60/scale + 93,200/scale+96+96],[10/scale,300]];  // two dimensional array  horiz pos of left edge and vertical pos of bottom in inches
var colorTreatedLumber = "#C89664"
var colorFloor = "#326432"
var colorLumber = "#FAC896"
var colorroof = "#6060C0"
var ctx;

$(document).ready(function(){
    $("body").append('<canvas id="canvas" width = '+canvasWidth+' height = '+canvasHeight+'></canvas>');
    //$("body").append('<canvas id="canvas" width = '+canvasWidth+' height = '+canvasHeight+' style="border:1px solid #000000"></canvas>');
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        ctx = canvas.getContext("2d");
        drawShed(fId);
    }
});
function getUrlParameters(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "0";
    else
        return results[1];
}
function drawShed(shedId) {
    switch(shedId){
        case  "shed1":
          //Draw Front
            posInd = 0;
            drawRect(0,0,93,3.5,colorTreatedLumber,posInd);  //  subfloor frame
            drawRect(0,3.5,93,.75,colorFloor,posInd);  //  floor
            drawRect(0,4.25,3.5,1.5,colorLumber,posInd);  //   end of left side wall bottom plate
            drawRect(3.5,4.25,25,1.5,colorLumber,posInd);  //   wall bottom plate left
            drawRect(64.5,4.25,25,1.5,colorLumber,posInd);  // wall bottom plate right
            drawRect(89.5,4.25,3.5,1.5,colorLumber,posInd);  //   end of right side wall bottom plate
            drawRect(0,5.75,3.5,76.75,colorLumber,posInd);  // end of left side wall 
            drawRect(3.5,5.75,1.5,76.75,colorLumber,posInd);  // stud 1
            drawRect(25.5,5.75,1.5,76.75,colorLumber,posInd);  // stud 2
            drawRect(27,5.75,1.5,76.75,colorLumber,posInd);  // stud 3
            drawRect(64.5,5.75,1.5,76.75,colorLumber,posInd);  // stud 4
            drawRect(66,5.75,1.5,76.75,colorLumber,posInd);  // stud 5
            drawRect(88,5.75,1.5,76.75,colorLumber,posInd);  // stud 6
            drawRect(89.5,5.75,3.5,76.75,colorLumber,posInd);  // end of right side wall
            drawRect(0,82.5,3.5,1.5,colorLumber,posInd);  // end of left side wall top plate
            drawRect(3.5,82.5,86,1.5,colorLumber,posInd);  // wall top plate
            drawRect(89.5,82.5,3.5,1.5,colorLumber,posInd);  // end of right wall wall top plate
            drawRect(45.75,84,1.5,8.5,colorLumber,posInd);  // ridge beam post
            drawPoly([[0,84],[3.5,84],[45.75,92.28],[45.75,95.85],[0,86.88]],colorLumber,posInd);     // rafter left
            drawPoly([[93,84],[89.5,84],[47.25,92.28],[47.25,95.85],[93,86.88]],colorLumber,posInd);     //rafter right
            drawPoly([[45.75,92.5],[47.25,92.5],[47.25,95.85],[46.5,96],[45.75,95.85]],colorLumber,posInd);     //rafter beam
            drawPoly([[-.5,86.87],[46.5,96],[46.4,96.5],[-.6,87.37]],colorroof,posInd);     //roof sheeting left
            drawPoly([[93.5,86.87],[46.5,96],[46.4,96.5],[93.6,87.37]],colorroof,posInd);     //roof sheeting right
            ctx.font = "16px Calibri";
            ctx.fillStyle = "#000000";
            ctx.fillText('"Shed 1 -- framing dimensions:  length = 95", width = 93", height = 96"  --  Roof to use complete uncut 4´ x 8´ sheets', 0, 20);
            ctx.fillText("Front", pos[0][0]*scale,pos[0][1]*scale+20);
            ctx.fillText('1.) Sub floor length = 93"', pos[0][0]*scale,pos[0][1]*scale+40);
            ctx.fillText('2.) Top & Bottom plates length = 86"', pos[0][0]*scale,pos[0][1]*scale+60);
            ctx.fillText('3.) Stud length = 76¾"', pos[0][0]*scale,pos[0][1]*scale+80);
            ctx.fillText('4.) Door opening width = 36"', pos[0][0]*scale,pos[0][1]*scale+100);
            ctx.fillText('5.) Ridge beam post length = 8.5"', pos[0][0]*scale,pos[0][1]*scale+120);
          //Draw Sides
            posInd = 1;
            drawRect(0,0,1.5,3.5,colorTreatedLumber,posInd);  //  end of front subfloor frame
            drawRect(1.5,0,92,3.5,colorTreatedLumber,posInd);  //  subfloor frame
            drawRect(93.5,0,1.5,3.5,colorTreatedLumber,posInd);  //  end of back subfloor frame
            drawRect(0,3.5,95,.75,colorFloor,posInd);  //  floor
            drawRect(0,4.25,95,1.5,colorLumber,posInd);  //   wall bottom plate 
            drawRect(0,5.75,1.5,76.75,colorLumber,posInd);  // stud 1
            drawRect(23,5.75,1.5,76.75,colorLumber,posInd);  // stud 2
            drawRect(46.75,5.75,1.5,76.75,colorLumber,posInd);  // stud 3
            drawRect(70.5,5.75,1.5,76.75,colorLumber,posInd);  // stud 4
            drawRect(93.5,5.75,1.5,76.75,colorLumber,posInd);  // stud 5
            drawRect(0,82.5,95,1.5,colorLumber,posInd);  // wall top plate
            drawRect(0,92.5,95,3.5,colorLumber,posInd);  // ridge beam
            drawRect(0,84,1.5,2.88,colorLumber,posInd);  // rafter 1 end
            drawRect(0,86.88,1.5,8.97,colorLumber,posInd);  // rafter 1 rise
            drawRect(23,84,1.5,2.88,colorLumber,posInd);  // rafter 2 end
            drawRect(23,86.88,1.5,8.97,colorLumber,posInd);  // rafter 2 rise
            drawRect(46.75,84,1.5,2.88,colorLumber,posInd);  // rafter 3 end
            drawRect(46.75,86.88,1.5,8.97,colorLumber,posInd);  // rafter 3 rise
            drawRect(70.5,84,1.5,2.88,colorLumber,posInd);  // rafter 4 end
            drawRect(70.5,86.88,1.5,8.97,colorLumber,posInd);  // rafter 4 rise
            drawRect(93.5,84,1.5,2.88,colorLumber,posInd);  // rafter 5 end
            drawRect(93.5,86.88,1.5,8.97,colorLumber,posInd);  // rafter 5 rise
            ctx.font = "16px Calibri";
            ctx.fillStyle = "#000000";
            ctx.fillText("Sides", pos[posInd][0]*scale,pos[posInd][1]*scale+20);
            ctx.fillText('1.) Sub floor board cut to = 92"', pos[posInd][0]*scale,pos[posInd][1]*scale+40);
            ctx.fillText('2.) Top & Bottom plates length = 95"', pos[posInd][0]*scale,pos[posInd][1]*scale+60);
            ctx.fillText('3.) Stud length = 76¾"', pos[posInd][0]*scale,pos[posInd][1]*scale+80);
            ctx.fillText('4.) Studs spaced evenly across wall', pos[posInd][0]*scale,pos[posInd][1]*scale+100);
            ctx.fillText('5.) Int. stud centers - 23¾", 47½", 71¼"', pos[posInd][0]*scale,pos[posInd][1]*scale+120);
          //Draw Back
            posInd = 2;
            drawRect(0,0,93,3.5,colorTreatedLumber,posInd);  //  subfloor frame
            drawRect(0,3.5,93,.75,colorFloor,posInd);  //  floor
            drawRect(0,4.25,3.5,1.5,colorLumber,posInd);  //   end of left side wall bottom plate
            drawRect(3.5,4.25,86,1.5,colorLumber,posInd);  //   wall bottom plate
            drawRect(89.5,4.25,3.5,1.5,colorLumber,posInd);  //   end of right side wall bottom plate
            drawRect(0,5.75,3.5,76.75,colorLumber,posInd);  // end of left side wall 
            drawRect(3.5,5.75,1.5,76.75,colorLumber,posInd);  // stud 1
            drawRect(24.25,5.75,1.5,76.75,colorLumber,posInd);  // stud 2
            drawRect(45.75,5.75,1.5,76.75,colorLumber,posInd);  // stud 3
            drawRect(67.25,5.75,1.5,76.75,colorLumber,posInd);  // stud 4
            drawRect(88,5.75,1.5,76.75,colorLumber,posInd);  // stud 5
            drawRect(89.5,5.75,3.5,76.75,colorLumber,posInd);  // end of right side wall
            drawRect(0,82.5,3.5,1.5,colorLumber,posInd);  // end of left side wall top plate
            drawRect(3.5,82.5,86,1.5,colorLumber,posInd);  // wall top plate
            drawRect(89.5,82.5,3.5,1.5,colorLumber,posInd);  // end of right wall wall top plate
            drawRect(45.75,84,1.5,8.5,colorLumber,posInd);  // ridge beam post
            drawPoly([[0,84],[3.5,84],[45.75,92.28],[45.75,95.85],[0,86.88]],colorLumber,posInd);     // rafter left
            drawPoly([[93,84],[89.5,84],[47.25,92.28],[47.25,95.85],[93,86.88]],colorLumber,posInd);     //rafter right
            drawPoly([[45.75,92.5],[47.25,92.5],[47.25,95.85],[46.5,96],[45.75,95.85]],colorLumber,posInd);     //rafter beam
            drawPoly([[-.5,86.87],[46.5,96],[46.4,96.5],[-.6,87.37]],colorroof,posInd);     //roof sheeting left
            drawPoly([[93.5,86.87],[46.5,96],[46.4,96.5],[93.6,87.37]],colorroof,posInd);     //roof sheeting right
            ctx.font = "16px Calibri";
            ctx.fillStyle = "#000000";
            ctx.fillText("Back", pos[posInd][0]*scale,pos[posInd][1]*scale+20);
            ctx.fillText('1.) Top & Bottom plates length = 86"', pos[posInd][0]*scale,pos[posInd][1]*scale+60);
            ctx.fillText('2.) Stud length = 76¾"', pos[posInd][0]*scale,pos[posInd][1]*scale+80);
            ctx.fillText('3.) Studs spaced evenly across wall', pos[posInd][0]*scale,pos[posInd][1]*scale+100);
            ctx.fillText('4.) Ridge beam post length = 8.5"', pos[posInd][0]*scale,pos[posInd][1]*scale+120);
          //Draw Rafters
            posInd = 3;
            var m = 2;
            drawPoly([[0,40],[3.5*m,40],[45.75*m,40+8.28*m],[45.75*m,40+11.85*m],[0,40+2.88*m]],colorLumber,posInd);     // rafter left
            ctx.font = "16px Calibri";
            ctx.fillStyle = "#000000";
            ctx.fillText("Rafters", pos[posInd][0]*scale,pos[posInd][1]*scale+20);
            ctx.fillText('1.) Top of rafter length = 46¾" (long to short)', pos[posInd][0]*scale,pos[posInd][1]*scale+60);
            ctx.fillText('2.) Angle for cuts = 11°', pos[posInd][0]*scale,pos[posInd][1]*scale+80);
            ctx.fillText('3.) Flat bottom = 3½"', pos[posInd][0]*scale,pos[posInd][1]*scale+100);
            ctx.fillText('4.) Left end = 2⅞"', pos[posInd][0]*scale,pos[posInd][1]*scale+120);
          //Draw Door
            scale = 5;
            posInd = 4;
            drawRect(0,0,1.5,77.25,colorLumber,posInd);  //   door left side
            drawRect(1.5,0,32.25,1.5,colorLumber,posInd);  //   door bottom
            drawRect(1.5,1.5 + 36.375,32.25,1.5,colorLumber,posInd);  //   door middle
            drawRect(1.5,75.75,32.25,1.5,colorLumber,posInd);  //   door top
            drawRect(33.75,0,1.5,77.25,colorLumber,posInd);  //   door right sid
            drawPoly([[1.5,1.5],[1.5+1.5516,1.5],[1.5+32.25,1.5+36.375-1.9738],[1.5+32.25,1.5+36.375],[1.5+32.25-1.5516,1.5+36.375],[1.5,1.5+1.9738]],colorLumber,posInd);     // rafter left
            drawPoly([[1.5+32.25-1.5516,1.5+36.375+1.5],[1.5+32.25,1.5+36.375+1.5],[1.5+32.25,1.5+36.375+1.5+1.9738],[1.5+1.5516,1.5+36.375+1.5+36.375],[1.5,1.5+36.375+1.5+36.375],[1.5,1.5+36.375+1.5+36.375-1.9738]],colorLumber,posInd);     // rafter left
            ctx.font = "16px Calibri";
            ctx.fillStyle = "#000000";
            ctx.fillText("Door", pos[posInd][0]*scale,pos[posInd][1]*scale+20);
            ctx.fillText('1.) Length of sides = 77¼".  This allows ½" clearance top and bottom. ', pos[posInd][0]*scale,pos[posInd][1]*scale+60);
            ctx.fillText('2.) Length of top, middle and bottom cross pieces = 32¼".', pos[posInd][0]*scale,pos[posInd][1]*scale+80);
            ctx.fillText('       This allows ¼" clearance hinge side and ½" clearance opposite side.', pos[posInd][0]*scale,pos[posInd][1]*scale+100);
            ctx.fillText('3.) Diagonal braces - Cut parallelogram with angle 41.5° length 49½" ( long to short).', pos[posInd][0]*scale,pos[posInd][1]*scale+120);
            ctx.fillText('       Cut off points of parallelogram square to end at 2" from heel.', pos[posInd][0]*scale,pos[posInd][1]*scale+140);
            break;
        case "shed2":
          //Draw Front
            posInd = 0;
            drawRect(0,0,92.625,3.5,colorTreatedLumber,posInd);  //  subfloor frame
            drawRect(0,3.5,92.625,.75,colorFloor,posInd);  //  floor
            drawRect(0,4.25,3.5,1.5,colorLumber,posInd);  //   end of left side wall bottom plate
            drawRect(3.5,4.25,24.8125,1.5,colorLumber,posInd);  //   wall bottom plate left
            drawRect(64.3125,4.25,24.8125,1.5,colorLumber,posInd);  // wall bottom plate right
            drawRect(89.125,4.25,3.5,1.5,colorLumber,posInd);  //   end of right side wall bottom plate
            drawRect(0,5.75,3.5,76.75,colorLumber,posInd);  // end of left side wall 
            drawRect(3.5,5.75,1.5,76.75,colorLumber,posInd);  // stud 1
            drawRect(25.3125,5.75,1.5,76.75,colorLumber,posInd);  // stud 2
            drawRect(26.8125,5.75,1.5,76.75,colorLumber,posInd);  // stud 3
            drawRect(64.3125,5.75,1.5,76.75,colorLumber,posInd);  // stud 4
            drawRect(65.8125,5.75,1.5,76.75,colorLumber,posInd);  // stud 5
            drawRect(87.625,5.75,1.5,76.75,colorLumber,posInd);  // stud 6
            drawRect(89.125,5.75,3.5,76.75,colorLumber,posInd);  // end of right side wall
            drawRect(0,82.5,92.625,1.5,colorLumber,posInd);  // wall top plate
            drawRect(0,82.5,3.5,1.5,colorLumber,posInd);  //  end of left side wall top plate
            drawRect(89.125,82.5,3.5,1.5,colorLumber,posInd);  // end of right wall wall top plate
            drawRect(45.5625,84,1.5,8.5,colorLumber,posInd);  // ridge beam post
            drawPoly([[0,84],[3.5,84],[45.5625,92.28],[45.5625,95.85],[0,86.88]],colorLumber,posInd);     // rafter left
            drawPoly([[92.625,84],[89.125,84],[47.0625,92.28],[47.0625,95.85],[92.625,86.88]],colorLumber,posInd);     //rafter right
            drawPoly([[45.5625,92.5],[47.0625,92.5],[47.0625,95.85],[46.3125,96],[45.5625,95.85]],colorLumber,posInd);     //rafter beam
            drawPoly([[0,86.88],[46.3125,96],[46.2125,96.5],[-.1,87.38]],colorroof,posInd);     //roof sheeting left
            drawPoly([[92.625,86.88],[46.3125,96],[46.4125,96.5],[92.725,87.38]],colorroof,posInd);     //roof sheeting left
            ctx.font = "16px Calibri";
            ctx.fillStyle = "#000000";
            ctx.fillText('Shed 2 -- framing dimensions: length = 92⅝", width = 92⅝", height = 96', 10, 20);
            ctx.fillText("Front", pos[0][0]*scale,pos[0][1]*scale+20);
            ctx.fillText('1.) Sub floor length = 92⅝"', pos[0][0]*scale,pos[0][1]*scale+40);
            ctx.fillText('2.) Top & Bottom plates length = 85⅝"', pos[0][0]*scale,pos[0][1]*scale+60);
            ctx.fillText('3.) Stud length = 76¾"', pos[0][0]*scale,pos[0][1]*scale+80);
            ctx.fillText('4.) Door opening width = 36"', pos[0][0]*scale,pos[0][1]*scale+100);
            ctx.fillText('5.) Ridge beam post length = 8.5"', pos[0][0]*scale,pos[0][1]*scale+120);
          //Draw Sides
            posInd = 1;
            drawRect(0,0,1.5,3.5,colorTreatedLumber,posInd);  //  end of front subfloor frame
            drawRect(1.5,0,89.625,3.5,colorTreatedLumber,posInd);  //  subfloor frame
            drawRect(91.125,0,1.5,3.5,colorTreatedLumber,posInd);  //  end of back subfloor frame
            drawRect(0,3.5,92.625,.75,colorFloor,posInd);  //  floor
            drawRect(0,4.25,92.625,1.5,colorLumber,posInd);  //   wall bottom plate 
            drawRect(0,5.75,1.5,76.75,colorLumber,posInd);  // stud 1
            drawRect(22.40625,5.75,1.5,76.75,colorLumber,posInd);  // stud 2
            drawRect(45.5625,5.75,1.5,76.75,colorLumber,posInd);  // stud 3
            drawRect(68.71875,5.75,1.5,76.75,colorLumber,posInd);  // stud 4
            drawRect(91.125,5.75,1.5,76.75,colorLumber,posInd);  // stud 5
            drawRect(0,82.5,92.625,1.5,colorLumber,posInd);  // wall top plate
            drawRect(0,92.5,92.625,3.5,colorLumber,posInd);  // ridge beam
            drawRect(0,84,1.5,2.88,colorLumber,posInd);  // rafter 1 end
            drawRect(0,86.88,1.5,8.97,colorLumber,posInd);  // rafter 1 rise
            drawRect(22.40625,84,1.5,2.88,colorLumber,posInd);  // rafter 2 end
            drawRect(22.40625,86.88,1.5,8.97,colorLumber,posInd);  // rafter 2 rise
            drawRect(45.5625,84,1.5,2.88,colorLumber,posInd);  // rafter 3 end
            drawRect(45.5625,86.88,1.5,8.97,colorLumber,posInd);  // rafter 3 rise
            drawRect(68.71875,84,1.5,2.88,colorLumber,posInd);  // rafter 4 end
            drawRect(68.71875,86.88,1.5,8.97,colorLumber,posInd);  // rafter 4 rise
            drawRect(91.125,84,1.5,2.88,colorLumber,posInd);  // rafter 5 end
            drawRect(91.125,86.88,1.5,8.97,colorLumber,posInd);  // rafter 5 rise
            ctx.font = "16px Calibri";
            ctx.fillStyle = "#000000";
            ctx.fillText("Sides", pos[posInd][0]*scale,pos[posInd][1]*scale+20);
            ctx.fillText('1.) Sub floor board cut to = 89⅝"', pos[posInd][0]*scale,pos[posInd][1]*scale+40);
            ctx.fillText('1.) Top & Bottom plates length = 92⅝"', pos[posInd][0]*scale,pos[posInd][1]*scale+60);
            ctx.fillText('2.) Stud length = 76¾"', pos[posInd][0]*scale,pos[posInd][1]*scale+80);
            ctx.fillText('3.) Studs spaced evenly across wall', pos[posInd][0]*scale,pos[posInd][1]*scale+100);
            ctx.fillText('4.) Int. stud centers - 23⅛", 46¼", 69½"', pos[posInd][0]*scale,pos[posInd][1]*scale+120);
          //Draw Back
            posInd = 2;
            drawRect(0,0,92.625,3.5,colorTreatedLumber,posInd);  //  subfloor frame
            drawRect(0,3.5,92.625,.75,colorFloor,posInd);  //  floor
            drawRect(0,4.25,3.5,1.5,colorLumber,posInd);  //   end of left side wall bottom plate
            drawRect(3.5,4.25,85.625,1.5,colorLumber,posInd);  //   wall bottom plate
            drawRect(89.125,4.25,3.5,1.5,colorLumber,posInd);  //   end of right side wall bottom plate
            drawRect(0,5.75,3.5,76.75,colorLumber,posInd);  // end of left side wall 
            drawRect(3.5,5.75,1.5,76.75,colorLumber,posInd);  // stud 1
            drawRect(24.156,5.75,1.5,76.75,colorLumber,posInd);  // stud 2
            drawRect(45.5625,5.75,1.5,76.75,colorLumber,posInd);  // stud 3
            drawRect(68.469,5.75,1.5,76.75,colorLumber,posInd);  // stud 4
            drawRect(87.625,5.75,1.5,76.75,colorLumber,posInd);  // stud 5
            drawRect(89.125,5.75,3.5,76.75,colorLumber,posInd);  // end of right side wall
            drawRect(0,82.5,92.625,1.5,colorLumber,posInd);  // end of left side wall top plate
            drawRect(0,82.5,3.5,1.5,colorLumber,posInd);  // wall top plate
            drawRect(89.125,82.5,3.5,1.5,colorLumber,posInd);  // end of right wall wall top plate
            drawRect(45.5625,84,1.5,8.5,colorLumber,posInd);  // ridge beam post
            drawPoly([[0,84],[3.5,84],[45.5625,92.28],[45.5625,95.85],[0,86.88]],colorLumber,posInd);     // rafter left
            drawPoly([[92.625,84],[89.125,84],[47.0625,92.28],[47.0625,95.85],[92.625,86.88]],colorLumber,posInd);     //rafter right
            drawPoly([[45.5625,92.5],[47.0625,92.5],[47.0625,95.85],[46.3125,96],[45.5625,95.85]],colorLumber,posInd);     //rafter beam
            drawPoly([[0,86.88],[46.3125,96],[46.2125,96.5],[-.1,87.38]],colorroof,posInd);     //roof sheeting left
            drawPoly([[92.625,86.88],[46.3125,96],[46.4125,96.5],[92.725,87.28]],colorroof,posInd);     //roof sheeting left
            ctx.font = "16px Calibri";
            ctx.fillStyle = "#000000";
            ctx.fillText("Back", pos[posInd][0]*scale,pos[posInd][1]*scale+20);
            ctx.fillText('1.) Top & Bottom plates length = 85⅝"', pos[posInd][0]*scale,pos[posInd][1]*scale+60);
            ctx.fillText('2.) Stud length = 76¾"', pos[posInd][0]*scale,pos[posInd][1]*scale+80);
            ctx.fillText('3.) Studs spaced evenly across wall', pos[posInd][0]*scale,pos[posInd][1]*scale+100);
            ctx.fillText('4.) Ridge beam post length = 8.5"', pos[posInd][0]*scale,pos[posInd][1]*scale+120);
          //Draw Rafters
            posInd = 3;
            m = 2;
            drawPoly([[0,40],[3.5*m,40],[45.5625*m,40+8.28*m],[45.5625*m,40+11.85*m],[0,40+2.86*m]],colorLumber,posInd);     // rafter left
            ctx.font = "16px Calibri";
            ctx.fillStyle = "#000000";
            ctx.fillText("Rafters", pos[posInd][0]*scale,pos[posInd][1]*scale+20);
            ctx.fillText('1.) Top of rafter length = 46½" (long to short)', pos[posInd][0]*scale,pos[posInd][1]*scale+60);
            ctx.fillText('2.) Angle for cuts = 11.14°', pos[posInd][0]*scale,pos[posInd][1]*scale+80);
            ctx.fillText('3.) Flat bottom = 3½"', pos[posInd][0]*scale,pos[posInd][1]*scale+100);
            ctx.fillText('4.) Left end = 2⅞"', pos[posInd][0]*scale,pos[posInd][1]*scale+120);
          //Draw Door
            scale = 5;
            posInd = 4;
            drawRect(0,0,1.5,77.25,colorLumber,posInd);  //   door left side
            drawRect(1.5,0,32.25,1.5,colorLumber,posInd);  //   door bottom
            drawRect(1.5,1.5 + 36.375,32.25,1.5,colorLumber,posInd);  //   door middle
            drawRect(1.5,75.75,32.25,1.5,colorLumber,posInd);  //   door top
            drawRect(33.75,0,1.5,77.25,colorLumber,posInd);  //   door right sid
            drawPoly([[1.5,1.5],[1.5+1.5516,1.5],[1.5+32.25,1.5+36.375-1.9738],[1.5+32.25,1.5+36.375],[1.5+32.25-1.5516,1.5+36.375],[1.5,1.5+1.9738]],colorLumber,posInd);     // rafter left
            drawPoly([[1.5+32.25-1.5516,1.5+36.375+1.5],[1.5+32.25,1.5+36.375+1.5],[1.5+32.25,1.5+36.375+1.5+1.9738],[1.5+1.5516,1.5+36.375+1.5+36.375],[1.5,1.5+36.375+1.5+36.375],[1.5,1.5+36.375+1.5+36.375-1.9738]],colorLumber,posInd);     // rafter left
            ctx.font = "16px Calibri";
            ctx.fillStyle = "#000000";
            ctx.fillText("Door", pos[posInd][0]*scale,pos[posInd][1]*scale+20);
            ctx.fillText('1.) Length of sides = 77¼".  This allows ½" clearance top and bottom. ', pos[posInd][0]*scale,pos[posInd][1]*scale+60);
            ctx.fillText('2.) Length of top, middle and bottom cross pieces = 32¼".', pos[posInd][0]*scale,pos[posInd][1]*scale+80);
            ctx.fillText('       This allows ¼" clearance hinge side and ½" clearance opposite side.', pos[posInd][0]*scale,pos[posInd][1]*scale+100);
            ctx.fillText('3.) Diagonal braces - Cut parallelogram with angle 41.5° length 49½" ( long to short).', pos[posInd][0]*scale,pos[posInd][1]*scale+120);
            ctx.fillText('       Cut off points of parallelogram square to end at 2" from heel.', pos[posInd][0]*scale,pos[posInd][1]*scale+140);
            break;
        case "shed3":
          //Draw Front
            posInd = 0;
            drawRect(0,0,96,3.5,colorTreatedLumber,posInd);  //  subfloor frame
            drawRect(0,3.5,96,.75,colorFloor,posInd);  //  floor
            drawRect(0,4.25,3.5,1.5,colorLumber,posInd);  //   end of left side wall bottom plate
            drawRect(3.5,4.25,26.5,1.5,colorLumber,posInd);  //   wall bottom plate left
            drawRect(66,4.25,26.5,1.5,colorLumber,posInd);  // wall bottom plate right
            drawRect(92.5,4.25,3.5,1.5,colorLumber,posInd);  //   end of right side wall bottom plate
            drawRect(0,5.75,3.5,76.75,colorLumber,posInd);  // end of left side wall 
            drawRect(3.5,5.75,1.5,76.75,colorLumber,posInd);  // stud 1
            drawRect(27,5.75,1.5,76.75,colorLumber,posInd);  // stud 2
            drawRect(28.5,5.75,1.5,76.75,colorLumber,posInd);  // stud 3
            drawRect(66,5.75,1.5,76.75,colorLumber,posInd);  // stud 4
            drawRect(67.5,5.75,1.5,76.75,colorLumber,posInd);  // stud 5
            drawRect(91,5.75,1.5,76.75,colorLumber,posInd);  // stud 6
            drawRect(92.5,5.75,3.5,76.75,colorLumber,posInd);  // end of right side wall
            drawRect(0,82.5,3.5,1.5,colorLumber,posInd);  // end of left side wall top plate
            drawRect(3.5,82.5,89,1.5,colorLumber,posInd);  //  wall top plate
            drawRect(92.5,82.5,3.5,1.5,colorLumber,posInd);  // end of right wall wall top plate
            drawRect(47.25,84,1.5,8.5,colorLumber,posInd);  // ridge beam post
            drawPoly([[0,84],[3.5,84],[47.25,92.29],[47.25,95.85],[0,86.91]],colorLumber,posInd);     // rafter left
            drawPoly([[96,84],[92.5,84],[48.75,92.29],[48.75,95.85],[96,86.91]],colorLumber,posInd);     //rafter right
            drawPoly([[47.25,92.5],[48.75,92.5],[48.75,95.85],[48,96],[47.25,95.85]],colorLumber,posInd);     //rafter beam
            drawPoly([[-.5,86.90],[48,96],[47.9,96.5],[-.6,87.40]],colorroof,posInd);     //roof sheeting left
            drawPoly([[96.5,86.90],[48,96],[48.1,96.5],[96.6,87.40]],colorroof,posInd);     //roof sheeting left
            ctx.font = "16px Calibri";
            ctx.fillStyle = "#000000";
            ctx.fillText('Shed 3 -- framing dimensions: length = 96", width = 96", height = 96', 10, 15);
            ctx.fillText('             -- roof sheeting 96 x 49⅜', 10, 30);

            ctx.fillText("Front", pos[0][0]*scale,pos[0][1]*scale+20);
            ctx.fillText('1.) Sub floor length = 96"', pos[0][0]*scale,pos[0][1]*scale+40);
            ctx.fillText('2.) Top & Bottom plates length = 89"', pos[0][0]*scale,pos[0][1]*scale+60);
            ctx.fillText('3.) Stud length = 76¾"', pos[0][0]*scale,pos[0][1]*scale+80);
            ctx.fillText('4.) Door opening width = 36"', pos[0][0]*scale,pos[0][1]*scale+100);
            ctx.fillText('5.) Ridge beam post length = 8.5"', pos[0][0]*scale,pos[0][1]*scale+120);
          //Draw Sides
            posInd = 1;
            drawRect(0,0,1.5,3.5,colorTreatedLumber,posInd);  //  end of front subfloor frame
            drawRect(1.5,0,93,3.5,colorTreatedLumber,posInd);  //  subfloor frame
            drawRect(94.5,0,1.5,3.5,colorTreatedLumber,posInd);  //  end of back subfloor frame
            drawRect(0,3.5,96,.75,colorFloor,posInd);  //  floor
            drawRect(0,4.25,96,1.5,colorLumber,posInd);  //   wall bottom plate 
            drawRect(0,5.75,1.5,76.75,colorLumber,posInd);  // stud 1
            drawRect(23.25,5.75,1.5,76.75,colorLumber,posInd);  // stud 2
            drawRect(47.25,5.75,1.5,76.75,colorLumber,posInd);  // stud 3
            drawRect(71.25,5.75,1.5,76.75,colorLumber,posInd);  // stud 4
            drawRect(94.5,5.75,1.5,76.75,colorLumber,posInd);  // stud 5
            drawRect(0,82.5,96,1.5,colorLumber,posInd);  // wall top plate
            drawRect(0,92.5,96,3.5,colorLumber,posInd);  // ridge beam
            drawRect(0,84,1.5,2.91,colorLumber,posInd);  // rafter 1 end
            drawRect(0,86.91,1.5,8.94,colorLumber,posInd);  // rafter 1 rise
            drawRect(23.25,84,1.5,2.91,colorLumber,posInd);  // rafter 2 end
            drawRect(23.25,86.91,1.5,8.94,colorLumber,posInd);  // rafter 2 rise
            drawRect(47.25,84,1.5,2.91,colorLumber,posInd);  // rafter 3 end
            drawRect(47.25,86.91,1.5,8.94,colorLumber,posInd);  // rafter 3 rise
            drawRect(71.25,84,1.5,2.91,colorLumber,posInd);  // rafter 4 end
            drawRect(71.25,86.91,1.5,8.94,colorLumber,posInd);  // rafter 4 rise
            drawRect(94.5,84,1.5,2.91,colorLumber,posInd);  // rafter 5 end
            drawRect(94.5,86.91,1.5,8.94,colorLumber,posInd);  // rafter 5 rise
            ctx.font = "16px Calibri";
            ctx.fillStyle = "#000000";
            ctx.fillText("Sides", pos[posInd][0]*scale,pos[posInd][1]*scale+20);
            ctx.fillText('1.) Sub floor board cut to = 93"', pos[posInd][0]*scale,pos[posInd][1]*scale+40);
            ctx.fillText('1.) Top & Bottom plates length = 96"', pos[posInd][0]*scale,pos[posInd][1]*scale+60);
            ctx.fillText('2.) Stud length = 76¾"', pos[posInd][0]*scale,pos[posInd][1]*scale+80);
            ctx.fillText('3.) Studs spaced evenly across wall', pos[posInd][0]*scale,pos[posInd][1]*scale+100);
            ctx.fillText('4.) Int. stud centers - 24", 48", 72"', pos[posInd][0]*scale,pos[posInd][1]*scale+120);
          //Draw Back
            posInd = 2;
            drawRect(0,0,96,3.5,colorTreatedLumber,posInd);  //  subfloor frame
            drawRect(0,3.5,96,.75,colorFloor,posInd);  //  floor
            drawRect(0,4.25,3.5,1.5,colorLumber,posInd);  //   end of left side wall bottom plate
            drawRect(3.5,4.25,89,1.5,colorLumber,posInd);  //   wall bottom plate
            drawRect(92.5,4.25,3.5,1.5,colorLumber,posInd);  //   end of right side wall bottom plate
            drawRect(0,5.75,3.5,76.75,colorLumber,posInd);  // end of left side wall 
            drawRect(3.5,5.75,1.5,76.75,colorLumber,posInd);  // stud 1
            drawRect(23.25,5.75,1.5,76.75,colorLumber,posInd);  // stud 2
            drawRect(47.25,5.75,1.5,76.75,colorLumber,posInd);  // stud 3
            drawRect(71.25,5.75,1.5,76.75,colorLumber,posInd);  // stud 4
            drawRect(91,5.75,1.5,76.75,colorLumber,posInd);  // stud 5
            drawRect(92.5,5.75,3.5,76.75,colorLumber,posInd);  // end of right side wall
            drawRect(0,82.5,3.5,1.5,colorLumber,posInd);  // end of left side wall top plate
            drawRect(3.5,82.5,89,1.5,colorLumber,posInd);  // wall top plate
            drawRect(92.5,82.5,3.5,1.5,colorLumber,posInd);  // end of right wall wall top plate
            drawRect(47.25,84,1.5,8.5,colorLumber,posInd);  // ridge beam post
            drawPoly([[0,84],[3.5,84],[47.25,92.29],[47.25,95.85],[0,86.91]],colorLumber,posInd);     // rafter left
            drawPoly([[96,84],[92.5,84],[48.75,92.29],[48.75,95.85],[96,86.91]],colorLumber,posInd);     //rafter right
            drawPoly([[47.25,92.5],[48.75,92.5],[48.75,95.85],[48,96],[47.25,95.85]],colorLumber,posInd);     //rafter beam
            drawPoly([[-.5,86.90],[48,96],[47.9,96.5],[-.6,87.40]],colorroof,posInd);     //roof sheeting left
            drawPoly([[96.5,86.90],[48,96],[48.1,96.5],[96.6,87.40]],colorroof,posInd);     //roof sheeting left
            ctx.font = "16px Calibri";
            ctx.fillStyle = "#000000";
            ctx.fillText("Back", pos[posInd][0]*scale,pos[posInd][1]*scale+20);
            ctx.fillText('1.) Top & Bottom plates length = 89"', pos[posInd][0]*scale,pos[posInd][1]*scale+60);
            ctx.fillText('2.) Stud length = 76¾"', pos[posInd][0]*scale,pos[posInd][1]*scale+80);
            ctx.fillText('3.) Studs spaced evenly across wall', pos[posInd][0]*scale,pos[posInd][1]*scale+100);
            ctx.fillText('4.) Ridge beam post length = 8.5"', pos[posInd][0]*scale,pos[posInd][1]*scale+120);
          //Draw Rafters
            posInd = 3;
            m = 2;
            drawPoly([[0,40],[3.5*m,40],[47.25*m,40+8.29*m],[47.25*m,40+11.85*m],[0,40+2.91*m]],colorLumber,posInd);     // rafter left
            ctx.font = "16px Calibri";
            ctx.fillStyle = "#000000";
            ctx.fillText("Rafters", pos[posInd][0]*scale,pos[posInd][1]*scale+20);
            ctx.fillText('1.) Top of rafter length = 48⅛" (long to short)', pos[posInd][0]*scale,pos[posInd][1]*scale+60);
            ctx.fillText('2.) Angle for cuts = 10.7°', pos[posInd][0]*scale,pos[posInd][1]*scale+80);
            ctx.fillText('3.) Flat bottom = 3½"', pos[posInd][0]*scale,pos[posInd][1]*scale+100);
            ctx.fillText('4.) Left end = 2⅞"', pos[posInd][0]*scale,pos[posInd][1]*scale+120);
          //Draw Door
            scale = 5;
            posInd = 4;
            drawRect(0,0,1.5,77.25,colorLumber,posInd);  //   door left side
            drawRect(1.5,0,32.25,1.5,colorLumber,posInd);  //   door bottom
            drawRect(1.5,1.5 + 36.375,32.25,1.5,colorLumber,posInd);  //   door middle
            drawRect(1.5,75.75,32.25,1.5,colorLumber,posInd);  //   door top
            drawRect(33.75,0,1.5,77.25,colorLumber,posInd);  //   door right sid
            drawPoly([[1.5,1.5],[1.5+1.5516,1.5],[1.5+32.25,1.5+36.375-1.9738],[1.5+32.25,1.5+36.375],[1.5+32.25-1.5516,1.5+36.375],[1.5,1.5+1.9738]],colorLumber,posInd);     // rafter left
            drawPoly([[1.5+32.25-1.5516,1.5+36.375+1.5],[1.5+32.25,1.5+36.375+1.5],[1.5+32.25,1.5+36.375+1.5+1.9738],[1.5+1.5516,1.5+36.375+1.5+36.375],[1.5,1.5+36.375+1.5+36.375],[1.5,1.5+36.375+1.5+36.375-1.9738]],colorLumber,posInd);     // rafter left
            ctx.font = "16px Calibri";
            ctx.fillStyle = "#000000";
            ctx.fillText("Door", pos[posInd][0]*scale,pos[posInd][1]*scale+20);
            ctx.fillText('1.) Length of sides = 77¼".  This allows ½" clearance top and bottom. ', pos[posInd][0]*scale,pos[posInd][1]*scale+60);
            ctx.fillText('2.) Length of top, middle and bottom cross pieces = 32¼".', pos[posInd][0]*scale,pos[posInd][1]*scale+80);
            ctx.fillText('       This allows ¼" clearance hinge side and ½" clearance opposite side.', pos[posInd][0]*scale,pos[posInd][1]*scale+100);
            ctx.fillText('3.) Diagonal braces - Cut parallelogram with angle 41.5° length 49½" ( long to short).', pos[posInd][0]*scale,pos[posInd][1]*scale+120);
            ctx.fillText('       Cut off points of parallelogram square to end at 2" from heel.', pos[posInd][0]*scale,pos[posInd][1]*scale+140);
            break;
    }
}
function drawRect(tl,tb,tw,th,tc,tpos){
    a = (pos[tpos][0] + tl)*scale;
    b = ((pos[tpos][1] - tb - th ) * scale);
    c = tw * scale;
    d = th * scale;
    ctx.fillStyle = tc;
    ctx.strokeStyle = "#000000";
    ctx.fillRect (a,b, c, d);
    ctx.strokeRect (a,b, c, d);
}
function drawPoly(poly,tc,tpos){
    for(var i = 0; i < poly.length ; i++){
        poly[i][0] =(poly[i][0] + pos[tpos][0])* scale;
        poly[i][1] =((pos[tpos][1]-poly[i][1])*scale);
    }
    ctx.fillStyle = tc;
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(poly[0][0], poly[0][1]);
    for( var i = 0 ; i < poly.length ; i++ ){
        ctx.lineTo( poly[i][0] , poly[i][1] );
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

  