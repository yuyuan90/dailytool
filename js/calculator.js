var result = document.getElementById('result');
function addtoscreen(x){
    result.value += x;
   };
function empty(){
    result.value = '';    
};
function backspace(){
    var len = result.value.length - 1;
    result.value = result.value.substring(0, len);
};
function math(){
    result.value = eval(result.value);
};

//home and about
function tabsChange(item){
    item.parentElement.classList.add('active');
    item.parentElement.previousElementSibling.classList.remove('active');
    };
function tabsChange1(item){
    item.parentElement.classList.add('active');
    item.parentElement.nextElementSibling.classList.remove('active');
    };

