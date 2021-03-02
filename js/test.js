function Complete(){
    let arr = new Array();

    arr.push(document.Test1.ans1.value);
    arr.push(document.Test1.ans2.value);
    arr.push(document.Test1.ans3.value);
    arr.push(document.Test1.ans4.value);
    arr.push(document.Test1.ans5.value);
    arr.push(document.Test1.ans6.value);
    arr.push(document.Test1.ans7.value);
    arr.push(document.Test1.ans8.value);
    arr.push(document.Test1.ans9.value);


    var trueAns = 0;
    for(var i = 0; i<9; i++){
        if(arr[i]==1){
            trueAns++;
        }
    }

    alert("Ваш результат " + trueAns + " из 9!")


    /*var allFull = true;

    for(var i = 0; i<9; i++){
        if(arr[i]==""){
            allFull = false;
        }
    }


    if(!allFull){
        alert("Заполните все ответы!")
    }*/
    
}