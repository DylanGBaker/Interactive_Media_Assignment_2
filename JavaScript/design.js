const navBarLinks = document.querySelectorAll("#redirect_link");
var hrefs = ["../index.html", "../Blogs/blog.html", "design.html", "../Portfolio/portfolio.html", "../Contact/contact.html"]; //Initilaizing the file paths

function GetNewPageLocation(i) {
    location.href = hrefs[i];
}

function ChangePageOnClick() {
    navBarLinks[0].addEventListener("click", e=> GetNewPageLocation(0));
    navBarLinks[1].addEventListener("click", e=> GetNewPageLocation(1));
    navBarLinks[2].addEventListener("click", e=> GetNewPageLocation(2));
    navBarLinks[3].addEventListener("click", e=> GetNewPageLocation(3));
    navBarLinks[4].addEventListener("click", e=> GetNewPageLocation(4));
}

function RunEvents() {
    ChangePageOnClick();
}

RunEvents();