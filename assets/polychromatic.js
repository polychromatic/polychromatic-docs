function scrollTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

// Smooth loading between pages
const swup = new Swup();
swup.hooks.on("visit:start", pageExit);
swup.hooks.on("content:replace", pageEnter);

const sidebarItems = document.querySelectorAll(".sidebar-item");

function pageEnter() {
    // When navigation changes to another topic. New content replaced.
    sidebarUpdatePosition();
    setupPermalinks();
    tocSetup();
}

function pageExit() {
    // Upon leaving the current topic. Transition starts.
    scrollTop();
}

function sidebarUpdatePosition() {
    // Make sure the correct item is selected
    const activeID = document.getElementById("current-page-id").value;
    setActiveSidebar(document.getElementById(activeID));

    // Scroll to selected item in sidebar
    const selected = document.querySelector(".sidebar-item.active");
    if (selected) {
        document.querySelector(".sidebar").scroll({
            top: selected.offsetTop - 100,
            left: 0,
            behavior: "smooth"
        });
    }
}

function setActiveSidebar(element) {
    sidebarItems.forEach((item) => {
        item.classList.remove("active");
    });
    if (element)
        element.classList.add("active");
}

function siteEnter() {
    pageEnter();

    // Set up sidebar items to change active state
    sidebarItems.forEach((item) => {
        item.onclick = function(e) {
            setActiveSidebar(e.target);
        }
    });
}

function setupPermalinks() {
    const headings = document.querySelectorAll("h2, h3, h4");
    headings.forEach((header) => {
        header.innerHTML = `<a class="permalink" title="Permalink" href="#${header.id}"><img src="/assets/img/link.svg" alt="Link"/></a>` + header.innerHTML;
    });
}

// Table of contents - on right side
let tocScrollTimeout = null;
function tocOnScroll(event) {
    // Timer based polling to prevent overloading
    clearTimeout(tocScrollTimeout);
    tocScrollTimeout = setTimeout(tocUpdatePosition, 50);
}

function tocSetup() {
    // Update the table of contents with page contents
    const toc = document.getElementById("toc");
    const headings = document.querySelectorAll(".topic h2, .topic h3, .topic h4");

    while (toc.lastChild) {
        toc.removeChild(toc.lastChild);
    }

    if (headings.length <= 1)
        return;

    headings.forEach((header) => {
        toc.insertAdjacentHTML("beforeend", `<li><a data-target-id="${header.id}" href="#${header.id}">${header.innerText}</a></li>`);
    });
    document.getElementById("toc").firstChild.childNodes[0].classList.add("active");
}

function tocUpdatePosition() {
    const currentPos = document.documentElement.scrollTop || document.body.scrollTop;
    const headings = document.querySelectorAll("h2, h3, h4");
    const items = document.querySelectorAll("#toc a");
    let currentHeader = null;

    if (headings.length <= 1)
        return;

    headings.forEach((header) => {
        if (header.offsetTop <= currentPos + 100) {
            currentHeader = header;
        }
    });

    if (!currentHeader)
        currentHeader = headings[0]

    items.forEach((item) => {
        item.classList.remove("active");
        if (item.attributes["data-target-id"].value == currentHeader.id) {
            item.classList.add("active");
        }
    });
}

// On initial page load
siteEnter();

// Track current position in table of contents
window.onscroll = tocOnScroll;
