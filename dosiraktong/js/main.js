const backToTop = document.getElementById('topBtn');
let pageOffset = window.pageYOffset;

const checkScroll=()=>{

    if(window.pageYOffset !== 0){
        backToTop.classList.add('show');  
    }else{
        backToTop.classList.remove('show'); 
    }
}

const moveBackToTop=()=>{
    if(window.pageYOffset > 0 ){

        window.scrollTo({top:0, behavior:"smooth"});
    }
}

window.addEventListener('scroll', checkScroll);

backToTop.addEventListener('click',moveBackToTop);



