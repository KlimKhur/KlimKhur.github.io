window.addEventListener("DOMContentLoaded", function () {


    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let messageInput = document.getElementById("messageInput");


    nameInput.addEventListener("input", function () {
        localStorage.setItem("nameInput", nameInput.value);
    });
    emailInput.addEventListener("input", function () {
        localStorage.setItem("emailInput", emailInput.value);
    });
    messageInput.addEventListener("input", function () {
        localStorage.setItem("messageInput", messageInput.value);
    });

    nameInput.value = localStorage.getItem("nameInput");
    emailInput.value = localStorage.getItem("emailInput");
    messageInput.value = localStorage.getItem("messageInput");

    let openFormButton = document.getElementById("openFormButton");
    let closeFormButton = document.getElementById("closeFormButton");
    let contactForm = document.getElementById("contactForm");
  
  
    openFormButton.addEventListener("click", function () {
        history.pushState("activeForm", null, "#contact-form");
    });
    closeFormButton.addEventListener("click", function () {
        history.back();
        document.getElementById("checkbox").checked = false;
    });

   
    contactForm.addEventListener("submit", function (event) {
        history.back();
        let formData = new FormData(contactForm);
        fetch("https://formcarry.com/s/pjSn1OU3r", {
        method: "POST",
        body: formData
        })
        .then((result) => {
            return result.text();
         })
         .then((txt) => {
             alert("Сообщение успешно отправлено!");
             nameInput.value = "";
             emailInput.value = "";
             messageInput.value = "";
             localStorage.setItem("nameInput", nameInput.value);
             localStorage.setItem("emailInput", emailInput.value);
             localStorage.setItem("messageInput", messageInput.value);
         })
         .catch((error)=>{
             alert("Сообщение не отправлено по неизвестной ошибке. Попробуйте еще раз.");
         });
         event.preventDefault();
    });
  
    window.addEventListener("popstate", function () {
        if (history.state === "activeForm")
            $("#modalForm").modal("show");
        else if (history.state === null) {
            $("#modalForm").modal("hide");
            document.getElementById("checkbox").checked = false;
        }
    });
});

