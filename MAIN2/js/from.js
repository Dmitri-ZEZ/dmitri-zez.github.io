function Complete(){
    let arr = new Array();

    arr.push(document.Form1.valName.value);
    arr.push(document.Form1.valEmail.value);
    arr.push(document.Form1.valTitle.value);
    arr.push(document.Form1.valDesc.value);




    alert(arr[0] + ", ваша заявка отправленна, ждите ответа на данный адресс: " + arr[1])


    
}