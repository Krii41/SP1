const navMenu = document.querySelector(".navigation");
const navToggle = document.querySelector(".mobile-nav");
const modal = document.getElementById("modal");
const ctaBtn = document.getElementById("cta-btn");
const sendBtn = document.getElementById("send-btn");


navToggle.addEventListener("click", () => {
    const visibility = navMenu.getAttribute("data-visible");

    if (visibility === "false") {
        navMenu.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        navMenu.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }

});


ctaBtn.addEventListener("click", function(){
    modal.innerHTML = `
    <button class="btn-close" id="btn-close">
        <i class="fa-solid fa-xmark"></i></button>
    <h2>Contact Us</h2>
    <form action="form-success.php" method="post">
    <input type="text" placeholder="Name">
    <input type="text" placeholder="E-mail address">
    <label for="message">Message</label>
    <textarea name="message" id="message" cols="30" rows="10"></textarea>
    <button class="send-btn" id="send-btn">Send</button>
</form>  `
;
    modal.style.display = "flex";
    
    const btnClose = document.getElementById("btn-close");
    btnClose.addEventListener("click", function(){
        modal.style.display = "none";
    });

});

