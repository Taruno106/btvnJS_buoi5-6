// bt2: Tính tiền điện

/**
 * khối 1: 
 * soKW
 * 
 * 
 * khối 2:
 * 
 * 
 * khối 3: 
 * tienDien
 * 
 * 
 */

 const gia50KWDau = 500, gia50KWKe = 650, gia100KWKe = 850,  gia150KWKe = 1100, gia350KWTroLen = 1300;

 function tinhTienDien(){
     var name = document.getElementById("inputName").value;
     var soKW = parseInt(document.getElementById("inputKW").value);
     var tienDien = 0;
 
     if (0 <= soKW && soKW <= 50){
         tienDien = soKW * gia50KWDau;
         // tienDien = tinhTienDien(soKW, gia50KWDau);
     }else if (50 < soKW && soKW <= 100){
         tienDien = 50 * gia50KWDau + (soKW - 50) * gia50KWKe;
         // tienDien = tinhTienDien(soKW, gia50KWKe);
     }else if (100 < soKW && soKW <= 200){
         tienDien = 50 * gia50KWDau + 50 * gia50KWKe + (soKW - 100) * gia100KWKe;
         // tienDien = tinhTienDien(soKW, gia100KWKe);
     }else if (200 < soKW && soKW <= 350){
         tienDien = 50 * gia50KWDau + 50 * gia50KWKe + 100 * gia100KWKe + (soKW - 200) * gia150KWKe;
         // tienDien = tinhTienDien(soKW, gia150KWKe);
     }else if (350 < soKW){
         tienDien = 50 * gia50KWDau + 50 * gia50KWKe + 100 * gia100KWKe + 150 * gia150KWKe + (soKW - 350) * gia350KWTroLen;
         // tienDien = tinhTienDien(soKW, gia350KWTroLen);
     }else{
         document.getElementById("txtThongBao2").innerHTML = "Nhập số Kw lớn hơn hoặc bằng 0";
     }
     document.getElementById("txtThongBao2").innerHTML = "Họ tên: " + name + "; Tiền cần phải trả: " + tienDien;
     return tienDien;
 }
 
 document.getElementById("btnKW").onclick = tinhTienDien;