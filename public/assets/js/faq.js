function toggleFaqCustom(element) {
    const faqItem = element.closest('.faq-item-custom');
    const answer = faqItem.querySelector('.faq-answer-custom');
    const icon = element.querySelector('.faq-icon-custom i');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item-custom.active').forEach(activeItem => {
        if (activeItem !== faqItem) {
            activeItem.classList.remove('active');
            activeItem.querySelector('.faq-answer-custom').classList.remove('show');
            activeItem.querySelector('.faq-icon-custom i').className = 'fa fa-plus';
        }
    });
    
    // Toggle current FAQ item
    if (faqItem.classList.contains('active')) {
        faqItem.classList.remove('active');
        answer.classList.remove('show');
        icon.className = 'fa fa-plus';
    } else {
        faqItem.classList.add('active');
        answer.classList.add('show');
        icon.className = 'fa fa-minus';
    }
}