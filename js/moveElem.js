function moveElem(elem, endLeft, endTop, time = 1000){
    let start = Date.now();
    var x = Number(elem.style.left.slice(0,-2));
    var y = Number(elem.style.top.slice(0,-2));
    var id=setInterval(function(){
    var timePassed = Date.now() - start;
    var progress = timePassed/time;
    
    
                //console.log(progress)
                if (progress >1) {
                    progress = 1;
                }    
                elem.style.left= x + ((endLeft - x) * progress) + 'px';
                elem.style.top= y + ((endTop - y) * progress) + 'px';
                   if(progress ===1 ){clearInterval(id)}
                },1)
                //downSlideLeft.removeEventListener('scroll',scroll2)
}
