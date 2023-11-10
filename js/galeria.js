document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModalButton = document.getElementById("closeModal");
    const galleryImages = document.querySelectorAll(".gallery-image");

    function openModal(imageSrc) {
        modalImage.src = imageSrc;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    galleryImages.forEach((image, index) => {
        image.addEventListener("click", () => {
            openModal(image.src);
        });
    });

    closeModalButton.addEventListener("click", closeModal);

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});