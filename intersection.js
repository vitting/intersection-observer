const sections = document.querySelectorAll(".section");
const info = document.querySelector(".info-body");
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        let value = "";
        if (entry.isIntersecting) {
            value = "Section" + entry.target.getAttribute("data-item") + ": Bliver vist";
            console.log(value);
        } else {
            value = "Section" + entry.target.getAttribute("data-item") + ": Bliver ikke vist";
            console.log(value);
        }

        const item = document.createElement("div");
        item.innerText = value;
        info.appendChild(item);
    });
}, options);

sections.forEach((value) => {
    observer.observe(value);
});