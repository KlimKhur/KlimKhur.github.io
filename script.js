function click1() {
    let n1, n2, r;
    n1 = document.getElementById("field1").value;
    n2 = document.getElementById("field2").value;
    let temp = new RegExp(/^\d+$/);
    if (temp.test(n1) && temp.test(n2)) {
        document.getElementById("result").innerHTML = parseInt(n1) * parseInt(n2);
        document.getElementById("result").classList.remove("warning");
    } else {
        document.getElementById("result").innerHTML = "Ошибка ввода";
        document.getElementById("result").classList.add("warning");
    }
}
