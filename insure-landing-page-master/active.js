const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("navigation");
const close = document.getElementById("close");
hamburger.onclick = function () {
    navigation.style.display = "inline-flex";
    hamburger.style.display = 'none';
    close.style.display = 'inline-block';
};

close.onclick = function () {
    navigation.style.display = "none";
    close.style.display = "none";
    hamburger.style.display = "inline-block";
}