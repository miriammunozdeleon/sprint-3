let add = document.getElementById('indecrease');
let remove = document.getElementById('decrease');
let rest = document.getElementById('reset');
let int = document.getElementById('value');
let x = 0;
add.addEventListener('click',function(){
    x +=1;
    int.innerHTML =x;
    
    if(x >0){
        int.style.color='green';
    }else{
        int.style.color='bleu';
    }
})
rest.addEventListener('click',function(){
    x =0;
    int.innerHTML =x;
    int.style.color='orange';
    
})
remove.addEventListener('click',function(){
    x -=1;
    int.innerHTML =x;
    if(x <0){
        int.style.color='red';
    }else{
        int.style.color='bleu';
    }
    exit;
    // else if(integer ==0){
    //     int.style.color='bleu';
    // }
    
})
