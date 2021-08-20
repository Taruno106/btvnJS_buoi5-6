// bt4: Tính tiền cáp

/**
 * khối 1: 
 * 
 * 
 * khối 2:
 * 
 * <option value=""></option>
 * khối 3: 
 */





function myFunction() {
  var select = document.getElementById("mySelect").value;
  if (select == "enterprise") {
    document.getElementById("connect").style.visibility = "visible";
  } else {
    document.getElementById("connect").style.visibility = "hidden";
  }
  // return select;

  document.getElementById("btnCable").onclick = function () {
    var codeClient = document.getElementById("codeClient").value;
    var channel = parseInt(document.getElementById("channel").value);
    var connect = parseInt(document.getElementById("connect").value);
    var totalCost = 0;
    myFunction();

    switch (select) {
      case "citizen":
        totalCost = 4.5 + 20.5 + channel * 7.5;
        console.log(totalCost);
        break;
      case "enterprise":
        if (0 < connect && connect <= 10) {
          connect = 75;
        } else if (11 <= connect) {
          connect = 75 + (connect - 10) * 5;
        } else {
          console.log("Nhập số kết nối dương!");
        }
        totalCost = 15 + connect + channel * 50;
        console.log(totalCost);
        break;
      default:
        console.log("Vui lòng chọn loại khách hàng!");
    }
    document.getElementById("txtThongBao4").innerHTML = "Mã khách hàng: " + codeClient + "; Tiền cáp: " + totalCost;



  }

}







