function moveElem(elem, endLeft, endTop, time = 1000){
    let start = Date.now();
    let x = Number(elem.style.left.slice(0,-2));
    let y = Number(elem.style.top.slice(0,-2));
    let id=setInterval(function(){
    let timePassed = Date.now() - start;
    let progress = timePassed/time;
    
    
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
