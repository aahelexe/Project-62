var pics = ["https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/i9toy-J12CS6Y3V0X-Full-Image_GalleryBackground-en-US-1578467414522.jpg._SX1080_.png", "https://www.history.com/.image/t_share/MTU3ODc5MDg2NDM1NTQyMzQ1/wellington-duke.jpg"];
var i = 0;
function change() {
    document.getElementsByClassName("img").innerHTML=pics[i];
    i++;
    if (i = 0 ){
        document.getElementsByClassName("previous").disable=true;
        document.getElementsByClassName("next").disable=false;
    }
    if (i=1) {
        document.getElementsByClassName("previous").disable=true;
        document.getElementsByClassName("next").disable=false;
    }
}
function change2() {
    document.getElementsByClassName("img").innerHTML=pics[i];
    i--;
    if (i=0) {
        document.getElementsByClassName("previous").disable=true;
        document.getElementsByClassName("next").disable=false;
    }
    if (i=1) {
        document.getElementsByClassName("previous").disable=true;
        document.getElementsByClassName("next").disable=false;
}