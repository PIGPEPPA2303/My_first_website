var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        var img = document.createElement("img");
        img.src = "https://img.freepik.com/free-photo/html-and-css-collage-concept-with-hacker_23-2150061984.jpg";
        document.getElementById("demo").appendChild(img);
    }
}