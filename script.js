const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {
    action.addEventListener("click", (e) => {
        e.preventDefault();

        navigator.clipboard.writeText(action.parentElement.getAttribute("href"));

        document.getElementById("toast").innerHTML = `
        <div class="toast-container toast-gone">
            <p>✔ Link berhasil disalin!</p>
        </div>
        `;

        setTimeout(() => {
            document.querySelector("#toast .toast-container").classList.add("toast-gone")
        }, 300);
        
        setTimeout(() => {
            document.querySelector("#toast .toast-container").remove();
        }, 2000)
    });
    
});

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
    sosmed.addEventListener("mouseenter", () => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill");
    });

    sosmed.addEventListener("mouseleave", () => {
        sosmed.classList.remove("ph-fill");
        sosmed.classList.add("ph");
    });
});

document.addEventListener("scroll", (e) => {

    document.querySelector(".bg-text").style.transform = `translateX(${window.scrollY / 5}px)`
});