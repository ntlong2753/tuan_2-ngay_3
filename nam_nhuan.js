function kiemtra(){
    let year =document.getElementById("txt_so_nam").value;
    let result = "N/A";
    //let year = parseInt(prompt('Nhập số năm hợp lệ'));
    if(year >= 0){
        if(year % 4 === 0 && year % 100 !== 0){
            Result = year +' Là năm nhuận'
        }
        else if (year % 100 === 0){
            if (year % 400 === 0){
                Result = year +' Là năm nhuận'
            }
            else {
                Result = year + ' Không phải năm nhuận'
            }
        }
    }
    else{
        alert(year + ' Là năm không hợp lệ')
    }
    document.getElementById("hien_thi").innerText = result;
}

