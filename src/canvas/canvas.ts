const canvas = document.createElement("canvas");
const exportButton = document.createElement("button");

canvas.width = 300;
canvas.height = 300;
let ctx: CanvasRenderingContext2D;

function toImage() {
    const image = new Image();
    image.src = canvas.toDataURL("image/png");
    document.getElementById("preview").append(image);
    console.log(image);
}

exportButton.innerText = "导出";
exportButton.onclick = toImage;

canvas.onmousedown = function(e) {
    ctx = canvas.getContext("2d");
    const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
    lineargradient.addColorStop(0, "white");
    lineargradient.addColorStop(1, "black");
    ctx.moveTo(e.layerX, e.layerY);
};
canvas.onmousemove = function(e) {
    if (ctx) {
        ctx.lineTo(e.layerX, e.layerY);
        ctx.stroke();
    }
};
canvas.onmouseout = function(e) {
    ctx = null;
};
canvas.onmouseup = function(e) {
    ctx = null;
};

document.body.appendChild(canvas);
document.body.appendChild(exportButton);
