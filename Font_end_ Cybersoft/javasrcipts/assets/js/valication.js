
//sự kiện nhấn tab đăng kí 
function onDangKi() {
    //ẩn phần đăng nhập
    //hiện phần đăng kí 
    var divDki = document.getElementById("divdangky");
    var divDNhap = document.getElementById("divdangnhap");
    divDki.style.display="block";
    divDNhap.style.display="none";
    
}

function onDangNhap() {
    //ẩn phần đăng nhập
    //hiện phần đăng kí 
    var divDki = document.getElementById("divdangky");
    var divDNhap = document.getElementById("divdangnhap");
    divDki.style.display="none";
    divDNhap.style.display="block";
}

function ktraBatBuoc () {

    var ptb = document.getElementById("pthongbao");
    var nghenghiep = document.getElementById("nghenghiep");
    var nu = document.getElementById("nu");
    var nam = document.getElementById("nam");

    if(frmDangKi.tendangnhap.value == "" || frmDangKi.matkhau.value == ""
        || frmDangKi.email.value == ""   || frmDangKi.tuoi.value == "") {
            frmDangKi.tendangnhap.style.border ="solid 2px red";
            frmDangKi.matkhau.style.border ="solid 2px red";
            frmDangKi.email.style.border ="solid 2px red";
            frmDangKi.tuoi.style.border ="solid 2px red";
            
            ptb.style.display ="block";
            
            ptb.innerHTML ="Bạn cần nhập dữ liệu cho các trường đầy đủ"
            return false;
     }else if(nghenghiep.selectedIndex == 0){
             ptb.style.display ="block";
             ptb.innerHTML ="Bạn phải chọn Nghề Nghiệp"; //+= cộng được nhìu thông báo cùng lúc
       
            return false;
     }else if(!nam.checked && !nu.checked){   
            ptb.style.display ="block";
            ptb.innerHTML ="Bạn phải chọn Giới tính"; //+= cộng được nhìu thông báo cùng lúc
       
            return false;
    }else {
        ptb.style.display ="none";
        return true;
    }
}

function kiemtraMinMax(idText, minlenght, maxlenght){

    var ptb = document.getElementById("pthongbao");
    var inputText = document.getElementById(idText);
    var field = inputText.value;
    if( field.length < minlenght || field.length > maxlenght){
       ptb.style.display ="block";
       ptb.innerHTML ="Hãy nhập giá trị từ " + minlenght + "đến " + maxlenght;
       return false;
    }else{
        ptb.style.display ="none";
        return true;
    }
  
}

function checkEmail(igTab) { 
    var ptb = document.getElementById("pthongbao");
    var email = document.getElementById(igTab); 
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email.value)) { 
        ptb.style.display ="block";
        ptb.innerHTML ="Hãy nhập giá trị hợp lý ";
        return false;
    }
    else{ 
        ptb.style.display ="none";
        return true;
    } 
} 

function kiemtraTuoi(idText, mintuoi, maxtuoi){

    var ptb = document.getElementById("pthongbao");
    var inputText = document.getElementById(idText);
    var tuoi = inputText.value;
    var number = /^[0-9]+$/;
    if(!number.test(inputText.value)){
        ptb.style.display ="block";
        ptb.innerHTML ="Hãy nhập giá trị số ";
        return false;
    }else if(tuoi.length < mintuoi || tuoi.length > maxtuoi){
        ptb.style.display ="block";
        ptb.innerHTML ="Hãy nhập giá trị từ " + mintuoi + " đến " + maxtuoi;
        return false;
    }else {
        ptb.style.display ="none";
        return true;
    }
  
}

function ktraHopLeDangky () {
   return ktraBatBuoc() && kiemtraMinMax("tendangnhap", 1, 30) && checkEmail("email") && kiemtraTuoi("tuoi",18,40);
}

// function ktraBatBuocDangnhap (){

//     if(divdangnhap.tendangnhap.value == "" || divdangnhap.matkhau.value == ""
//         || divdangnhap.email.value == ""   || divdangnhap.tuoi.value == "") {
//             var ptb = document.getElementById("pthongbao");
//             ptb.style.display ="block";
//             ptb.innerHTML ="Nhập dữ liệu cho các trường đầy đủ";
//             return false;
//      }else {
//             ptb.style.display ="none";
//             return true;
//     }
// }
