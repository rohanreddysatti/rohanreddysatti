document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            // Remove 'active' class from all tabs
            tabs.forEach((t) => t.classList.remove("active"));
            // Hide all content sections
            contents.forEach((content) => (content.style.display = "none"));

            // Add 'active' class to clicked tab
            this.classList.add("active");
            // Show the corresponding content section
            const tabId = this.getAttribute("data-tab");
            document.getElementById(tabId).style.display = "block";
        });
    });
});
