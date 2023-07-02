const faqs = document.querySelectorAll(".faq")
console.log(typeof(faqs));

faqs.forEach(faq =>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })
})