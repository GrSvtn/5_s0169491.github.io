function ji_suan() {
    let jia_qian = document.getElementById("價錢");
    let shu_liang = document.getElementById("數量");
    let jie_guo = document.getElementById("結果");
    let t_c = /^[1-9][0-9]*(.[0-9]+)?$/;
    let t_c_e = /^[1-9][0-9]*,[0-9]+$/;
    let t_am = /^[1-9][0-9]*$/;
    let hui_da;
    let flag = false;
    if (jia_qian.value === "" || shu_liang.value === "") {
        hui_da = "請輸入數據！";
    } else {
        let f_1 = (jia_qian.value.match(t_c) === null);
        let f_2 = (jia_qian.value.match(t_c_e) === null);
        if ((f_1 && f_2) || shu_liang.value.match(t_am) === null) {
            hui_da = "數字寫錯了！";
        } else if (jia_qian.value.match(t_c_e) === null) {
            flag = true;
            f_1 = parseFloat(jia_qian.value);
            f_2 = parseInt(shu_liang.value);
            hui_da = ("總費用" + f_1 * f_2 + "元！");
        } else {
            hui_da = "請通過點號輸入價錢！";
        }
    }
    jie_guo.classList.add("text-" + (
        (flag)
            ? ("success")
            : ("danger")
    ));
    jie_guo.classList.remove("text-" + (
        (!flag)
            ? ("success")
            : ("danger")
    ));
    jie_guo.innerHTML = hui_da;
    return false;
}

window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("按鈕");
    b.addEventListener("click", ji_suan);
});