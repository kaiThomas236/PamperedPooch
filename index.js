function editHtml() {
    let contact = document.getElementById("contact");

    let firstOuter = contact.getElementsByClassName("map-wrapper")[0];
    let secondOuter = contact.getElementsByClassName("second-col")[0];
    let firstInner = secondOuter.getElementsByClassName("icon-col")[0];
    let secondInner = secondOuter.getElementsByClassName("contact-col")[0];

    firstOuter.classList.remove("col-auto");
    secondOuter.classList.remove("col-auto");
    firstInner.classList.remove("col-auto");
    secondInner.classList.remove("col-auto");
    
    firstOuter.classList.add("col-6");
    secondOuter.classList.add("col-6");
    firstInner.classList.add("col-2");
    secondInner.classList.add("col-10");

    firstInner.classList.add("firefox-size");
    secondInner.classList.add("firefox-size");

    firstInner.parentElement.classList.add("firefox-parent");
}



function checkFirefox() {
    return(navigator.userAgent.indexOf("Firefox") > -1);
}

var isFirefox = checkFirefox();
if (isFirefox) {
    editHtml();
}