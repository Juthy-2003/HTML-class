(function () {
    const deleteButton = document.getElementById('delete-button');
    const image = document.getElementById('image');

    deleteButton.addEventListener('click', function () {
        if (confirm('Are you sure you want to delete this image?')) {
            image.parentNode.removeChild(image);
            deleteButton.disabled = true;
        }
    });
})();