window.onscroll = function() { 
    showButton() 
};
    
function showButton() {
    var button_home = document.getElementById("button_home");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button_home.style.display = "block";
    } else {
        button_home.style.display = "none";
    }
}

function backHomePage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}