function draw(image) {
    const canvas = document.getElementById("my-canvas");
    const context = canvas.getContext("2d")

    context.fillStyle = "red";
    context.fillRect(0,0,50,50);

    context.strokeStyle = "black"
    context.lineWidth = 1;

    const height = image.height();
    const width = image.width();
    const cellSize = 50;

    const cells = image.cells();

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const index = ((y * width) + x) * 3;
            const color = `rgb(${cells[index + 0]}, ${cells[index +1]}, ${cells[index +2]})`
            context.fillStyle = color;
            context.fillRect = (x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }

    // draw the grid
    for(let x = 0; x<= width; x++){
        context.beginPath();
        context.moveTo(x * cellSize + 0.5, 0);
        context.lineTo(x * cellSize + 0.5, height * cellSize);
        context.stroke();
    }
    for(let y = 0; y<= height; y++){
        context.beginPath();
        context.moveTo(0, y * cellSize + 0.5);
        context.lineTo( height * cellSize, y * cellSize + 0.5);
        context.stroke();
    }

    // Draw box round the grid
    context.beginPath();
    context.moveTo(cellSize * height, 0)
    context.lineTo(cellSize * height, cellSize * height)
    context.stroke();

    context.beginPath();
    context.moveTo(0, cellSize * height)
    context.lineTo(cellSize * height, cellSize  * height)
    context.stroke();
}


async function main() {
    const lib = await import("../pkg/index.js").catch(console.error);

    const image = new lib.Image(10, 10);

    console.log(image);

    draw(image);
}

main();
