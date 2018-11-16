const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(50,50,15,"red");
let B = new Point(400,150,15,"blue");
let C = new Point(300,50,15,"yellow");

let S = new Point(0,0,10,"white");

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

A.drag();
B.drag();
C.drag();
S.drag();

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  l.letTwoPointsDefineLine(A,B);
  m.slope = -1/l.slope
  m.intercept = C.y - m.slope*C.x;

  l.draw(context);
  m.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);

  S.draw(context);

  A.print(context,"A");
  B.print(context,"B");
  C.print(context,"C");
}

animate();
