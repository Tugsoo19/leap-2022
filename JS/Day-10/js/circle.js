var topLeft = new Point(70, 50);
var rectSize = new Size(100, 100);

var rect = new Rectangle(topLeft, rectSize);

var path = new Path.Rectangle(rect, 80);

path.fillColor = 'blue';

console.log(rect); // { x: 10, y: 20, width: 100, height: 100 }
console.log(rect.point); // { x: 10, y: 20 }
console.log(rect.size); // { width: 200, height: 200 }