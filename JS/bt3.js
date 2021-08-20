//bt3: Tính thuế thu nhập cá nhân

/**
 * khối 1: 
 * 
 * 
 * khối 2:
 * 
 * 
 * khối 3:
 * 
 * 
 */

document.getElementById("btnTax").onclick = function () {
    var name = document.getElementById("inputName1").value;
    var income = parseFloat(document.getElementById("incomePerYear").value);
    var people = parseFloat(document.getElementById("peopleDependOn").value);
    var taxIncome = income - 4e+6 - people * 1.6e+6;

    if (people < 0) {
        taxIncome = 0;
        console.log(taxIncome);
        // document.getElementById("txtThongBao3").innerHTML = "Họ tên: " + name + "; Tiền thuế thu nhập cá nhân: " + taxIncome + "VND";
        // return taxIncome;
    }
    if (0 <= taxIncome && taxIncome <= 60e+6) {
        taxIncome = taxIncome * 0.05;
        console.log(taxIncome);
    } else if (60e+6 < taxIncome && taxIncome <= 120e+6) {
        taxIncome = taxIncome * 0.1;
        console.log(taxIncome);
    } else if (120e+6 < taxIncome && taxIncome <= 210e+6) {
        taxIncome = taxIncome * 0.15;
        console.log(taxIncome);
    } else if (210e+6 < taxIncome && taxIncome <= 384e+6) {
        taxIncome = taxIncome * 0.2;
        console.log(taxIncome);
    } else if (384e+6 < taxIncome && taxIncome <= 624e+6) {
        taxIncome = taxIncome * 0.25;
        console.log(taxIncome);
    } else if (624e+6 < taxIncome && taxIncome <= 960e+6) {
        taxIncome = taxIncome * 0.3;
        console.log(taxIncome);
    } else if (960e+6 < taxIncome) {
        taxIncome = taxIncome * 0.35;
        console.log(taxIncome);
    } else {
        taxIncome = 0;

    }
    document.getElementById("txtThongBao3").innerHTML = "Họ tên: " + name + "; Tiền thuế thu nhập cá nhân: " + taxIncome + " VND";
    // console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));





}









