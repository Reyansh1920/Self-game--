var form;
var pCount = 0;


function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    database =  firebase.database()
    User = new  Userdata()
    User.getCount()
    
    form = new Form()
    form.display()
    
}

function draw(){
    background("lightblue");
    
}