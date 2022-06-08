//event handling for the nav bar

const navBarLinks = document.querySelectorAll("#redirect_link");
var href_links = ["index.html", "blog.html", "design.html", "portfolio.html", "contact.html"];

const navSlide = () => {
    const hamBurger = document.querySelector(".Hamburger_Logo");
    const nav = document.querySelector("#hyperlinks ul");

    hamBurger.addEventListener("click", e => {
        nav.classList.toggle("toggle_nav");
    })
}

function CheckHTMLPage() {
    if (location.href == "http://127.0.0.1:5500/index.html") {href_links = ["index.html", "Blogs/blog.html", "Design/design.html", "Portfolio/portfolio.html", "Contact/contact.html"];}
    if (location.href == "http://127.0.0.1:5500/Blogs/blog.html") {href_links = ["../index.html", "blog.html", "../Design/design.html", "../Portfolio/portfolio.html", "../Contact/contact.html"];}
    if (location.href == "http://127.0.0.1:5500/Design/design.html") {href_links = ["../index.html", "../Blogs/blog.html", "design.html", "../Portfolio/portfolio.html", "../Contact/contact.html"];}
    if (location.href == "http://127.0.0.1:5500/Portfolio/portfolio.html") {href_links = ["../index.html", "../Blogs/blog.html", "../Design/design.html", "portfolio.html", "../Contact/contact.html"];}
    if (location.href == "http://127.0.0.1:5500/Contact/contact.html") {href_links = ["../index.html", "../Blogs/blog.html", "../Design/design.html", "../Portfolio/portfolio.html", "contact.html"];}
}

function ChangePageOnNavBarClick() {
    navBarLinks[0].addEventListener("click", e => location.href = href_links[0]);
    navBarLinks[1].addEventListener("click", e => location.href = href_links[1]);
    navBarLinks[2].addEventListener("click", e => location.href = href_links[2]);
    navBarLinks[3].addEventListener("click", e => location.href = href_links[3]);
    navBarLinks[4].addEventListener("click", e => location.href = href_links[4]);
    }


navSlide(); 
CheckHTMLPage();
ChangePageOnNavBarClick();
/////////////////////////////////////////