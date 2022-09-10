//tách ra hàm check phải số nguyên tố không
function checkInt(intNum) {
    var checkIntNumber = true;

    for (var i = 2; i <= Math.sqrt(intNum); i++) {
        if (intNum % i == 0) {
            checkIntNumber = false;
            break;
        }
    }

    return checkIntNumber;
};

function findInt() {
    //đầu vào lấy số liệu từ người dùng
    var intNum = +document.getElementById("intNum").value;

    var result = "";

    //xử lý vòng lặp:
    //b1 tạo biên bước nhảy, điều kiện,khối xử lý,tăng giá trị biến bước nhảy
    for (var i = 2      ; i <= intNum; i++) {
        //kiểm tra từng số xem có phải là số nguyên tố không
        var checkIntNumber = checkInt(i);
        if (checkIntNumber) {
            result += i + " ";
        }
    }

    //đâu ra in ra kết quả
    document.getElementById("show").style.display = "block";
    document.getElementById("showInt").innerHTML = result;

};

