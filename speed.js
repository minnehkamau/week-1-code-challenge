const prompt=require("prompt-sync")();
let speed=prompt("Enter car speed for points to be generated");
function points(){
    if(speed < 70){
        console.log("Ok!")
    }
    else if (speed >70){
        const demeritPoints=((speed-70)/5)
        
        console.log(Math.ceil(demeritPoints));
        if(demeritPoints>=12){
            console.log("License suspended")
        }
    }
else{
    console.log("please check the speed entered")
}
    
}
points()