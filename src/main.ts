const canvas = document.getElementById('canvas') as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx: CanvasRenderingContext2D;

canvas.onmousedown = function (e) {
    ctx = canvas.getContext('2d');
    var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
    lineargradient.addColorStop(0, 'white');
    lineargradient.addColorStop(1, 'black');
    ctx.moveTo(e.layerX, e.layerY);
}
canvas.onmousemove = function (e) {
    if (ctx) {
        ctx.lineTo(e.layerX, e.layerY);
        ctx.stroke();
    }
}
canvas.onmouseout = function(e) {
    ctx = null;
}
canvas.onmouseup = function (e) {
    ctx = null;
}