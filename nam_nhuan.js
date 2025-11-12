function kiemtra(){
    let year =document. getElementById("txt_so_nam").value;
    let result;
    //let year = parseInt(prompt('Nhập số năm hợp lệ'));
    if(year >= 0){
        if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
            result = year +' Là năm nhuận';
        }
            else {
                result = year + ' Không phải năm nhuận';
            }
    }
    else{
        result = year + ' Là năm không hợp lệ';
    }
    document.getElementById("hien_thi").innerText = result;
}

