window.addEventListener("DOMContentLoaded", function () {
    let n1, n2, r;
    let b = document.getElementById("calculate");
    b.addEventListener("click", function () {
        n1 = document.getElementById("field1").value;
        n2 = document.getElementById("field2").value;
        let temp = new RegExp(/^\s*\d+\s*$/);
        if (temp.test(n1) && temp.test(n2)) {
            document.getElementById("result").innerHTML = parseInt(n1) * parseInt(n2);
            document.getElementById("result").classList.remove("warning");
        } else {
            document.getElementById("result").innerHTML = "Параметры заданы неверно";
            document.getElementById("result").classList.add("warning");
        }
    });
});
