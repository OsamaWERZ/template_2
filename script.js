document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileNav = document.getElementById('mobileNav');
    
    // Debugging
    console.log('Elements:', {
        menuBtn: mobileMenuBtn,
        closeBtn: closeBtn,
        mobileNav: mobileNav
    });

    // افتح القائمة
    mobileMenuBtn.addEventListener('click', function() {
        console.log('Menu button clicked');
        mobileNav.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // أغلق القائمة
    closeBtn.addEventListener('click', function() {
        console.log('Close button clicked');
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // أغلق القائمة عند النقر على روابط
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const billingOptions = document.querySelectorAll('.billing-option');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    
    billingOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            billingOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            const plan = this.dataset.plan;
            
            if (plan === 'monthly') {
                monthlyPrices.forEach(price => price.classList.remove('hidden'));
                yearlyPrices.forEach(price => price.classList.add('hidden'));
            } else {
                monthlyPrices.forEach(price => price.classList.add('hidden'));
                yearlyPrices.forEach(price => price.classList.remove('hidden'));
            }
        });
    });
    
    // Initialize with monthly prices visible
    billingOptions[0].click();
});