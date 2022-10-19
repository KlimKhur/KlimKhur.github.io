function updateLabels(){
    let select = document.getElementById("selectProducts");
    let h1 = document.querySelector('main h1');
    h1.innerHTML = products[select.value].name;
    let t = document.querySelectorAll('#checkboxDiv .form-check-label');
    let a = document.getElementById('productLink');
    let i = document.getElementById('productImage');
    if(select.value != 2){
        let temp = document.querySelectorAll('input[type="checkBox"]:checked');
        for(let i = 0; i < temp.length; i++){
            temp[i].checked = false;
        }
        for (let i = 0; i < 3; i++){
            t[i].innerHTML = products[select.value].propsNames[i] + " (" + products[select.value].props[i] + " руб.)";
        }
        a.href = products[select.value].link;
        i.src = products[select.value].image;
    }
    else{
        a.href = "images/image.jpg";
        i.src = "images/image.jpg";
    }
}
function updatePrice(){
    let select = document.getElementById("selectProducts");
    let answer = document.getElementById("answer");
    let count = document.getElementById("count");
    let radioDiv = document.getElementById('radioDiv');
    let checkboxDiv = document.getElementById('checkboxDiv');
    radioDiv.style.display = (select.value == 2)?'flex':"none";
    checkboxDiv.style.display = (select.value == 2)?'none':"flex";
    let r = new RegExp(/^\d+$/);
    if (r.test(count.value)) {
        let f = products[select.value].price;
        if (select.value == 2){
            let t = document.querySelector('input[name="radioGroup"]:checked').value;
            f*=products[select.value].options[t];
        } else {
            let t = document.querySelectorAll('input[type="checkBox"]:checked');
            for(let i = 0; i < t.length; i++){
                f+=products[select.value].props[t[i].value];
            }
        }
        answer.innerHTML = f*count.value + " руб.";
    } else {
        answer.innerHTML = "<div class='bg-danger'> Проверьте свой ввод &#129300;</div>";
    }

}
window.addEventListener("DOMContentLoaded", function () {
    let select = document.getElementById("selectProducts");
    let count = document.getElementById("count");
    let radios = document.getElementsByName('radioGroup');
    let checkBoxes = document.querySelectorAll('input[type="checkBox"]');
    for(let i = 0; i < products.length; i++){
        select.innerHTML+= "<option value='"+ i + "'>" + products[i]['name'] + "</option>"
    }
    select.addEventListener("change", function() {
        updateLabels();
        updatePrice();
    });
    count.addEventListener("change", function() {
        updatePrice();
    });
    radios.forEach(r => {
        r.addEventListener("click",function(){
            updatePrice();
        })
    });
    checkBoxes.forEach(r => {
        r.addEventListener("click",function(){
            updatePrice();
        })
    });
    updateLabels();
    updatePrice();
});
