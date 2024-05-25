
document.addEventListener("DOMContentLoaded", function() {
    const detailPopup = document.querySelector(".detail-popup");
    const closeBtn = document.querySelector(".close-btn");
    const detailButtons = document.querySelectorAll(".detail-btn");
    const detailContent = document.querySelector(".detail-content p");

    detailButtons.forEach(button => {
        button.addEventListener("click", function() {
            const courseInfo = this.parentElement;
            const courseName = courseInfo.querySelector("h2").textContent;
            const courseDuration = courseInfo.querySelectorAll("p")[0].textContent;
            const coursePrice = courseInfo.querySelectorAll("p")[1].textContent;
            
            detailContent.innerHTML = `
                <strong>Curso:</strong> ${courseName} <br>
                <strong>Duración:</strong> ${courseDuration} <br>
                <strong>Precio:</strong> ${coursePrice} <br>
                <strong>Descripción:</strong> Este curso ofrece una comprensión profunda de ${courseName.toLowerCase()}.
            `;
            
            detailPopup.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function() {
        detailPopup.style.display = "none";
    });
});
