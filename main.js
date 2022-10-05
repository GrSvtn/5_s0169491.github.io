function 計算 () {
    let 價錢 = document.getElementById("價錢"), 數量 = document.getElementById("數量"), 結果 = document.getElementById("結果");
    let t_c = /^[1-9][0-9]*(.[0-9]+)?$/, t_c_e = /^[1-9][0-9]*\,[0-9]+$/, t_am = /^[1-9][0-9]*$/;
    let 回答, flag = false;
    if(價錢.value === "" || 數量.value === "")
        回答 = "請輸入數據！";
    else if ((價錢.value.match(t_c) === null && 價錢.value.match(t_c_e) === null) || 數量.value.match(t_am) === null)
        回答 = "數字寫錯了！";
    else if (價錢.value.match(t_c_e) === null) {
        flag = true;
        回答 = ("總費用" + parseFloat(價錢.value) * parseInt(數量.value) + "元！");
    } else 回答 = "請通過點號輸入價錢！";
    結果.classList.add("text-" + ((flag) ? ("success") : ("danger")));
    結果.classList.remove("text-" + ((!flag) ? ("success") : ("danger")));
    結果.innerHTML = 回答;
    return false;
}

window.addEventListener('DOMContentLoaded', function () {
    let b = document.getElementById("按鈕");
    b.addEventListener("click", 計算);
});