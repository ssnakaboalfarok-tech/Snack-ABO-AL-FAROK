const offers = document.querySelectorAll(".featured-offer");

offers.forEach(offer => {
    const signal = offer.querySelector(".traffic-signal");
    const button = offer.querySelector("[data-offer-btn]");

    const status = signal.dataset.status;

    button.classList.remove("active", "coming-soon", "unavailable");
    button.classList.add(status);   

    if (status === "active") 
    {
        button.textContent = "اطلب الآن";
        button.disabled = false;

    } 
    else if (status === "coming-soon") 
    {
        button.textContent = "قريباً";
        button.disabled = true;
    } 
    else if (status === "unavailable") 
    {
        button.textContent = "غير متاح حالياً";
        button.disabled = true;
    }

});




