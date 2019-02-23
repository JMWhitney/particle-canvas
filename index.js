var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

class Rectangle {
  constructor(temp) {
    this.temp = temp;
  }
}

class Map {
  constructor(height, width, pSize) {
    this.height = height;
    this.width = width;
    this.pSize = pSize;
    this.arr = [];
  }

  initialize() {
    c.width = this.width * this.pSize;    
    c.height = this.height * this.pSize;

    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        this.arr.push( new Rectangle(255 * Math.random()) );
      }
    }

  }

  draw() {
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        const index = (i * this.width) + j
        ctx.fillStyle = `rgb(${this.arr[index].temp}, 0, 0)`;
        ctx.fillRect(i*this.pSize, j*this.pSize, this.pSize, this.pSize);
      }
    }
  }

  run = () => {
    var runTime = setInterval(() => {
      for (let i = 0; i < this.width; i++) {
        for (let j = 0; j < this.height; j++) {
          const index = (i * this.width) + j
          this.arr[index].temp = 255 * Math.random();
        }
      }
      this.draw();
    }, 160)
  }


}

var map1 = new Map(10, 10, 30);
var map2 = map1;
console.log(map2);

map1.initialize();
map1.draw();
document.getElementById("run").addEventListener("click", map1.run);
document.getElementById("stop").addEventListener("click", map1.run.stop);


