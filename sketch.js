
function setup() {
  D2R = Math.PI / 180;
  let cvs = createCanvas(600, 600, WEBGL);
  cvs.id("mainCanvas");
  circ = true;
  
  frameRate(30);
  angleMode(DEGREES);
  rectMode(CENTER);
  //
  /*
    Here we build one single 'Ukrainian' flag ring
    which will serve us to build a 'Ukrainian' DotBall Sphere
  */
  ring = new UkrDotRing();
}

function draw()
{ 
  //clear();
  background("#000");
  rotateZ( frameCount/3 );
  rotateY( Math.sin(frameCount * D2R) * 180 );
  rotateX( Math.cos(frameCount * D2R) * 90 );
  /*
    Drawing the Sphere is easy :
      Simply draw 20 circles with each time an offset of 9° on z-axis !
      20 * 9 => 180°
      We don't need more : over, you'll duplicate existing dots 'coz we're allready drawing full circle in UkrDotCircle !
  */
  for ( let j = 0; j < 20; j++ )
  {
    push();
      rotateY( j*9 );
      ring.draw();
    pop();
  }
  //select("#out").html( cir.mx.length );
} 
function keyPressed()
{
  if ( keyIsDown(32) )
    circ = !circ;
}
class UkrDotRing 
{
  constructor() {
    this.mx = Array();
    /*
      A circle is an array of 36 dots every 10° + its color
        -> Over 180°, dots are yellow
    */
    for (let i = 0; i < 360; i += 10) {
      let clr = ( i<=185 )? "#015BBB":"#FED500";
      this.mx.push( {v:createVector( Math.cos(i * D2R) * width/2.5, Math.sin(i * D2R) * height/2.5 ), c:clr} );
    }
  }
  
  draw()
  {
    noFill();
    strokeWeight( 2 );
    for ( const vec of this.mx )
    {
      stroke( vec.c );
      ( circ )? circle( vec.v.x, vec.v.y, 1) : point(vec.v.x, vec.v.y );
    }
  }
  //
}

