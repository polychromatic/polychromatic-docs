
// Smooth loading between pages
const options = {
    animateHistoryBrowsing: true,
    linkSelector: 'a[href^="/"]:not([data-no-swup]), a[href^="../"]:not([data-no-swup])',
};

const swup = new Swup(options);
swup.on("transitionStart", page_exit);
swup.on("contentReplaced", page_enter);

var sidebar_items = document.querySelectorAll(".sidebar-item");

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
    setup_permalinks();
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
    // Make sure the correct item is selected
    var active_sidebar_id = document.getElementById("current-page-id").value;
    set_active_sidebar(document.getElementById(active_sidebar_id));

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

function set_active_sidebar(element) {
    sidebar_items.forEach((item) => {
        item.classList.remove("active");
    });
    if (element)
        element.classList.add("active");
}

function initial_page_load() {
    apply_markdown_tweaks();
    sidebar_update_position();
    setup_permalinks();

    // Set up sidebar items to change active state
    sidebar_items.forEach((item) => {
        item.onclick = function(e) {
            set_active_sidebar(e.target);
        }
    });
}

function setup_permalinks() {
    const headings = document.querySelectorAll("h2, h3, h4");
    headings.forEach((header) => {
        header.innerHTML = `<a class="permalink" title="Permalink" href="#${header.id}"><img src="/assets/img/link.svg" alt="Link"/></a>` + header.innerHTML;
    });
}

// On initial page load
initial_page_load();
