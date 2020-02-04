const sections = document.querySelectorAll(".section");
const info = document.querySelector(".info-body");
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
};

const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        let value = "";
        const itemNumber = entry.target.dataset.item;
        if (entry.isIntersecting) {
            value = "Section" + itemNumber + ": Bliver vist";
            console.log(value);
            if (!entry.target.classList.contains("fadein")) {
                entry.target.classList.add("fadein");   
                // Unsubscribe after fade in
                // observer.unobserve(entry.target);
            }
        } else {
            value = "Section" + itemNumber + ": Bliver ikke vist";
            console.log(value);
        }

        const item = document.createElement("div");
        item.innerText = value;
        info.appendChild(item);
    });
}, options);

sections.forEach((value) => {
    io.observe(value);
});