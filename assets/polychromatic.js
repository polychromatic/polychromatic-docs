
// Smooth loading between pages
const options = {
    animateHistoryBrowsing: true,
    linkSelector: 'a[href^="/"]:not([data-no-swup]), a[href^="../"]:not([data-no-swup])',
};

const swup = new Swup(options);
swup.on("transitionStart", page_exit);
swup.on("contentReplaced", page_enter);

function smooth_scroll_to_top() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

function page_enter() {
    // When navigation changes to another topic. New content replaced.
    apply_markdown_tweaks();
    sidebar_update_position();
}

function page_exit() {
    // Upon leaving the current topic. Transition starts.
    smooth_scroll_to_top();
}

function apply_markdown_tweaks() {
    // If page contains Yes/No in tables, add the fancy decorations.
    var td = document.querySelectorAll("td");
    if (td.length > 0) {
        for (i = 0; i < td.length; i++) {
            if (td[i].textContent.startsWith("Yes") === true)
                td[i].classList.add("yes");
        }
    }
}

function sidebar_update_position() {
    // Scroll to selected item in sidebar
    var selected = document.querySelector(".sidebar-item.active");
    if (selected) {
        document.querySelector(".sidebar").scroll({
            top: selected.offsetTop - 100,
            left: 0,
            behavior: "smooth"
        });
    }
}


function on_initial_page_load() {
    apply_markdown_tweaks();
    sidebar_update_position();

    // Set up sidebar items to change active state
    var sidebar_items = document.querySelectorAll(".sidebar-item");
    for (i = 0; i < sidebar_items.length; i++) {
        sidebar_items[i].onclick = function(e) {
            for (i = 0; i < sidebar_items.length; i++) {
                sidebar_items[i].classList.remove("active");
            }
            e.target.classList.add("active");
        }
    }
}

// On initial page load
on_initial_page_load();
