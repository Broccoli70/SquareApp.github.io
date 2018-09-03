const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let canOff = $("canvas").offset();

class draw {
  constructor(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }
  create() {
    ctx.fillRect(this.x, this.y, this.height, this.width);
  }
  paint(col) {
    ctx.fillStyle = col;
  }
  clean(boll) {
    if(boll) {
      ctx.clearRect(0,0,canvas.width,canvas.height)
    }
  }
}
  let x = 10;
$("canvas").on('click', (e) => {
  let cos2 = new draw(e.clientX - canOff.left - x/2 , e.clientY - canOff.top - x/2 , x, x);
  $("#Y").text("Y: " + e.clientY);
  $("#X").text("X: " + e.clientX);
  cos2.create();


  $(".colors__btn").on("click", (e) => {
    let target = e.target;
    let colors = ["rgb(233, 92, 92)" ,"rgb(34, 103, 45)", "rgb(235, 180, 39)", "rgb(226, 143, 185)"];
    let colorsId = ["red", "green", "yellow", "pink"];
    for(let i=0; i<colors.length; i++) {
      if(e.target.id === colorsId[i]) {
        cos2.paint(colors[i]);
        $(".size__btn").css({background: colors[i]})
      }
    }
  })
  $(".size__btn").on("click", (e) => {
    let target = e.target.value;
    x = target;
    z = target;
  })
  $(".colors").on("mousemove", (e) => {
    cos2.clean(false)
  })
  $(".size").on("mousemove", (e) => {
    cos2.clean(false)
  })
})
