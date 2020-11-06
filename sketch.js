var ball, database, ref, refChanges, xy;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
    ref = database.ref('ball/position');
    refChanges = ref.on('value',ballPosition,detectError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ref.set({
        x: xy.x + x,
        y: xy.y + y
    })
}

function ballPosition(value){
    xy = value.val();
    ball.x = xy.x;
    ball.y = xy.y;
}

function detectError(){
    console.log("hi");
}