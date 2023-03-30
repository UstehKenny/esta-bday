var i = 0;

document.addEventListener("keyup", function(event){
    if (event.keyCode === 27){ 
        document.getElementById('final').style.display = 'none';
        document.getElementById('estasquad-video').style.display = 'none';
        document.getElementById('princesas-video').style.display = 'none';
    } else return;
});

function counter(){
    i++;
    if(i == 20){
        document.getElementById('age').innerHTML = i;
        finalImg()
    } else if (i < 20){
        document.getElementById('age').innerHTML = i;
    }
    
}
function estasquad(){
    document.getElementById('estasquad-video').style.display = 'inline';
}

function princesas(){
    document.getElementById('princesas-video').style.display = 'inline';
}

function finalImg(){
    document.getElementById('final').style.display = 'inline-block';
}