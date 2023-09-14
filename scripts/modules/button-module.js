export { addButtonClickListener };

function addButtonClickListener(buttonId, linkedInUrl) {
    const button = document.getElementById(buttonId);
    if (button) {
        console.log(`Button ${buttonId}  found`);
        button.addEventListener('click', function () {
            window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
        });
    }

}

