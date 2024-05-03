document.addEventListener("DOMContentLoaded", function () {
    const buttonAction = document.getElementById("share.button");
    const hideAction = document.getElementById("hidden_menu");
    const iconAction = document.getElementById("share-icon");
    const detesAction = document.getElementById("detes");
    const triangleAction = document.getElementById("tri");
    const authorAction = document.getElementById("author-dete");
    buttonAction.addEventListener("click", function () {
        hideAction.classList.toggle("hide-me");
        buttonAction.classList.toggle("bg-button");
        iconAction.classList.toggle("icon-color");
    }
    );
    if (innerWidth < 865) {
        buttonAction.addEventListener("click", function () {
            detesAction.classList.toggle("hide-me");
            triangleAction.classList.toggle("hide-me");
            authorAction.classList.toggle("change-bg");
            buttonAction.classList.toggle("remove-style");
        });
    };
});