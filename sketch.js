//code made by Lennin Sabogal based on The Code Train code

//in this function i create a 2D array in which i can store the values of each box in the canva
function make2DArray(cols, rows){ //it will be used to create the array the values of columns and rows
    let arr = new Array(cols);
    for(let i = 0; i < arr.length ; i ++){
        arr[i] = new Array(rows)
        for ( let j = 0; j < arr[i].length ; j++){
            arr[i][j] = 0;
        }
    }
    return arr;
}

let grid;
let w = 10;
let cols, rows;
let hueValue = 200;

function setup() {
    createCanvas(1080,720);
    colorMode(HSB, 360, 255, 255);
    cols = width/w;
    rows = height/w;
    grid = make2DArray(cols, rows); 

    for (let i = 0; i < cols ; i++){
        for ( let j = 0; j < rows; j++){
            grid[i][j] = 0; 
        }
    }

}

function mouseDragged(){
    let mouseCol = floor(mouseX / w);
    let mouseRow = floor(mouseY / w);
    let matrix = 2;
    let extent = floor(matrix/2);
    
    for (let i = -extent; i <= extent; i++) {
        for (let j = -extent; j <= extent; j++) {
            if (random(1) < 0.75){
                col = mouseCol + i;
                row = mouseRow + j;
                if (col >= 0 && col <= cols-1 && row>=0 &&row<=rows-1) {
                    grid[col][row] = hueValue;
              }
            }
        }
    }
    hueValue = hueValue+1;
    if (hueValue > 360) {
        hueValue = 1;
    }    
}

function draw() {
    background(0);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            noStroke(0);
            if(grid[i][j] > 0){
                fill(grid[i][j], 255, 255);
                let x = i * w;
                let y = j * w;
                square(x, y, w);
            }
        }
    }

    let nextgrid = make2DArray(cols, rows);
    for (let i = 0; i < cols ; i++){
        for (let j = 0; j < rows; j++){
            let state = grid[i][j];
            if(state > 0 ){
                let below = grid[i][j+1];
                let dir = random([-1,1] );
                let belowA, belowB;
                
                if ( i > 0 && i<cols-1){
                    belowA = grid[i+dir][j+1];
                    belowB = grid[i-dir][j+1];
                } 
                if (below === 0){
                    nextgrid[i][j+1] = grid[i][j];
                }
                else if (belowA === 0 && i < cols -1) {
                    nextgrid[i+1][j+1] = grid[i][j];
                }
                else if (belowB === 0 && i < cols -1) {
                    nextgrid[i-1][j+1] = grid[i][j];
                }
                else {
                    nextgrid[i][j] = grid[i][j];
                }
            }
        }
    }
    grid = nextgrid; 

}

