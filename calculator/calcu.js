function answer(val){
    if(val == 'C'){
        var inp = document.getElementById('res');
        inp.value = '';
    }
    else if(val=='='){
        var num = eval(document.getElementById('res').value);
        document.getElementById('res').value = num
    }
    else{
        var v = document.getElementById('res');
        v.value += val;
    }
}