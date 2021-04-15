function _do_smooth_scroll() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

function page_loaded() {

    // If page contains Yes/No in tables, add the fancy decorations.
    var td = document.querySelectorAll("td");
    if (td.length > 0) {
        for (i = 0; i < td.length; i++) {
            if (td[i].textContent.startsWith("Yes") === true) {
                td[i].classList.add("yes");
            } else if (td[i].textContent.startsWith("No") === true) {
                td[i].classList.add("no");
            }
        }
    }
}

page_loaded();
