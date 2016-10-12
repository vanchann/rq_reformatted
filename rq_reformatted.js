/*
 * Select all elements of class signature, to remove their contents.
 * 
 * Since javascript's DOM functions parentNode.removeChild or node.remove don't work always as expected,
 * a workaround of setting elements' content text to empty string is used.
 * 
 * The (top) border is also removed. So there is no indication that a signature has been removed.
 * If this isn't desired, comment out the line, so that the top border will indicate that there was a singature.
*/
var signatures = document.getElementsByClassName("signature");
var i;
for (i = 0; i < signatures.length; ++i) {
        s = signatures[i];
        s.innerText="";
        s.style.border="none";
}

/*
 * Default avatar images' dimension values are too high for desktops.
 * Resize avatar image's width to 24 pixel, but leave its height to auto to keep original aspect ratio.
*/
var avatars = document.getElementsByClassName("img-circle");
for (i = 0; i < avatars.length; ++i) {
    avatars[i].style.width = "24px";
}

/*
 * Remove all padding from user info list items to save space.
*/
var avatars = document.getElementsByTagName("li");
for (i = 0; i < avatars.length; ++i) {
    avatars[i].style.padding = "0px";
}
