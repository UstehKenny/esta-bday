var i = 0;
var items = 0;
document.addEventListener("keyup", function(event){
    if (event.keyCode === 27){ 
        document.getElementById('final').style.display = 'none';
        document.getElementById('estasquad-video').style.display = 'none';
        document.getElementById('princesas-video').style.display = 'none';
        document.getElementById('arlett-video').style.display = 'none';
        document.getElementById('puzzle').style.display = 'none';
        document.getElementById('win').style.display = 'none';
    } else return;
});

function counter(){
    i++;
    if(i == 20){
        document.getElementById('age').innerHTML = i;
        document.getElementById('flame').style.display = 'none';
        document.getElementById('blinking-glow').style.display = 'none';
        document.getElementById('glow').style.display = 'none';
        finalImg()
    } else if (i == 18){
        document.getElementById('tailus4').style.display = 'inline';
        document.getElementById('tailus3').style.display = 'none';
        document.getElementById('age').innerHTML = i;

        document.getElementById('win').style.display = 'flex';
        document.getElementById('win4').style.display = 'inline';
        document.getElementById('win3').style.display = 'none';
        document.getElementById('age').innerHTML = i;
    } else if (i == 12){
        document.getElementById('tailus3').style.display = 'inline';
        document.getElementById('tailus2').style.display = 'none';
        document.getElementById('age').innerHTML = i;
    }else if (i == 6){
        document.getElementById('tailus2').style.display = 'inline';
        document.getElementById('tailus1').style.display = 'none';
        document.getElementById('age').innerHTML = i;
    } else if (i == 3){
        document.getElementById('win').style.display = 'flex';
        document.getElementById('win1').style.display = 'inline';
        document.getElementById('age').innerHTML = i;
    } else if (i == 9){
        document.getElementById('win').style.display = 'flex';
        document.getElementById('win2').style.display = 'inline';
        document.getElementById('win1').style.display = 'none';
        document.getElementById('age').innerHTML = i;
    } else if (i == 14){
        document.getElementById('win').style.display = 'flex';
        document.getElementById('win3').style.display = 'inline';
        document.getElementById('win2').style.display = 'none';
        document.getElementById('age').innerHTML = i;
    } else if (i == 19){
        document.getElementById('win').style.display = 'flex';
        document.getElementById('win5').style.display = 'inline';
        document.getElementById('win4').style.display = 'none';
        document.getElementById('age').innerHTML = i;
    } else if (i < 20){
        document.getElementById('age').innerHTML = i;
    } 
    
}
function estasquad(){
    items++;
    document.getElementById('estasquad-video').style.display = 'flex';
}

function princesas(){
    items++;
    document.getElementById('princesas-video').style.display = 'flex';
}

function arlett(){
    items++;
    document.getElementById('arlett-video').style.display = 'flex';
}

function finalImg(){
    document.getElementById('final').style.display = 'inline-block';
}

function puzzle(){
    items++;
    document.getElementById('puzzle').style.display = 'flex';
}
function closeScreen(){
    document.getElementById('puzzle').style.display = 'none';
    document.getElementById('posterMom').style.display = 'none';
    document.getElementById('win').style.display = 'none';
    document.getElementById('final').style.display = 'none';
    document.getElementById('estasquad-video').style.display = 'none';
    document.getElementById('princesas-video').style.display = 'none';
    document.getElementById('arlett-video').style.display = 'none';
}
function posterMom(){
    items++;
    document.getElementById('posterMom').style.display = 'flex';
}