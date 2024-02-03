//code made by Lennin Sabogal based on The Code Train code

function make2DArray(cols, rows){
    let arr = new Array(cols);
    for(let i = 0; i < arr.length ; i ++){
        arr[i] = new Array(rows)
    }
    return arr;
}

let grid;
let w = 10;
let cols, rows;

function setup() {
    createCanvas(400,400);
    cols = width/w;
    rows = height/w;
    grid = make2DArray(cols, rows); 

    for (let i = 0; i < cols ; i++){
        for ( let j = 0; j < rows; j++){
            grid[i][j] = 0; 
        }
    }

}

function draw() {
    background(0);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            stroke(255);
            fill(grid[i][j] * 255);
            let x = i * w;
            let y = j * w;
            square(x, y, w);
        }
    }

    grid[10][10] = 1;
    let nextgrid = make2DArray(cols, rows);
    for (let i = 0; i < cols ; i++){
        for (let j = 0; j < rows; j++){
            let state = grid[i][j];
            if(state === 1){
                let below = grid[i][j+1];
                if (below === 0){
                    nextgrid[i][j] = 0;
                    nextgrid[i][+1] = 1;
                }
            }
        }
    }
    grid = nextgrid; 
}

