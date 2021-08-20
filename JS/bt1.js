// bt1: Quản lý tuyển sinh

/**
 * khối 1: 
 * 
 * 
 * 
 * khối 2:
 * 
 * 
 * khối 3: 
 * 
 * 
 * 
 */

document.getElementById("btnTinh").onclick = function(){
    var score = parseFloat(document.getElementById("inputScore").value);
    var area = document.getElementById("inputArea").value;
    var object = document.getElementById("inputObject").value;
    var score1 = parseFloat(document.getElementById("inputScore1").value);
    var score2 = parseFloat(document.getElementById("inputScore2").value);
    var score3 = parseFloat(document.getElementById("inputScore3").value);

    var totalScore = score1 + score2 + score3;
    
    switch (area){
        case "A":
            totalScore += 2;
            break;
        case "B":
            totalScore += 1;
            break;
        case "C":
            totalScore += 0.5;
            break;
        default:
            totalScore;
    }

    switch (object){
        case "1":
            totalScore += 2.5;
            break;
        case "2":
            totalScore += 1.5;
            break;
        case "3":
            totalScore += 1;
            break;
        default:
            totalScore;
    }
    // console.log(totalScore);
    
    if ((totalScore >= score) && (score1!=0) && (score2!=0) && (score3!=0)){
        console.log("Bạn đã đậu.");
        document.getElementById("txtThongBao1").innerHTML = "Bạn đã trúng tuyển." + "Tổng điểm của bạn: " + totalScore;
    }else{
        console.log("Oh no, oh no, oh oh oh oh no");
        document.getElementById("txtThongBao1").innerHTML = "Bạn không trúng tuyển." + "Tổng điểm của bạn: " + totalScore;
    }
}











