document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function(e) {
        const checkbox = this.querySelector('input[type="checkbox"]');
        
        // Toggle checkbox state
        checkbox.checked = !checkbox.checked;
        
        // Toggle 'active' class on this card
        this.classList.toggle('active');
    });
});