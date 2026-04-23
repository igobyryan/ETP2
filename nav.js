(function () {
    var t = document.createElement('template');
    t.innerHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="logo"><img src="images/etp-logo.png" alt="EcoTipping Points"></a>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-links">
                <li><a href="foundations.html">Foundations</a></li>
                <li class="has-dropdown">
                    <a href="#" class="dropdown-toggle">Toolkit</a>
                    <div class="dropdown-menu">
                        <div class="dropdown-section">
                            <h4>Systems Thinking</h4>
                            <a href="systems-thinking-overview.html">Overview</a>
                            <a href="systems-thinking-recognize.html">Part 1: Recognize It</a>
                            <a href="systems-thinking-map.html">Part 2: Map It</a>
                            <a href="systems-thinking-reverse.html">Part 3: Reverse It</a>
                            <a href="systems-thinking-lock.html">Part 4: Lock It In</a>
                        </div>
                        <div class="dropdown-section">
                            <h4>Ingredients for Success</h4>
                            <a href="ingredients-overview.html">Overview</a>
                            <a href="ingredient-outside-stimulation.html">Outside stimulation and facilitation</a>
                            <a href="ingredient-shared-awareness.html">Shared community awareness and commitment</a>
                            <a href="ingredient-harmony-ecosystem.html">Harmony between community and ecosystem</a>
                            <a href="ingredient-enduring-commitment.html">Enduring commitment of local leadership</a>
                            <a href="ingredient-letting-nature-work.html">Letting nature do the work</a>
                            <a href="ingredient-mobilizing-commitment.html">Mobilizing community commitment</a>
                            <a href="ingredient-overcoming-obstacles.html">Overcoming social obstacles</a>
                            <a href="ingredient-social-ecological-diversity.html">Social and ecological diversity</a>
                            <a href="ingredient-social-ecological-memory.html">Social and ecological memory</a>
                            <a href="ingredient-building-resilience.html">Building resilience</a>
                        </div>
                        <div class="dropdown-section">
                            <h4>Community Sessions</h4>
                            <a href="community-sessions.html">Overview</a>
                            <a href="community-sessions-map-it.html">Map It</a>
                            <a href="community-sessions-reverse-it.html">Reverse It</a>
                        </div>
                    </div>
                </li>
                <li class="has-dropdown">
                    <a href="#" class="dropdown-toggle">Success Stories</a>
                    <div class="dropdown-menu dropdown-menu-narrow">
                        <div class="dropdown-section">
                            <h4>Community Stories</h4>
                            <a href="story-apo-island.html">Marine Sanctuary - Philippines</a>
                            <a href="story-khao-din.html">Agroforestry - Thailand</a>
                            <a href="story-punukula.html">Pesticide Trap - India</a>
                            <a href="story-gopalpura.html">Rainwater Harvesting - India</a>
                        </div>
                    </div>
                </li>
                <li><a href="resources.html">Resources</a></li>
            </ul>
        </div>
    </nav>`;

    document.currentScript.before(t.content);

    function initNav() {
        var hamburger = document.querySelector('.hamburger');
        var navLinks = document.querySelector('.nav-links');
        var dropdownToggles = document.querySelectorAll('.has-dropdown > a');

        if (hamburger) {
            hamburger.addEventListener('click', function () {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            dropdownToggles.forEach(function (toggle) {
                toggle.addEventListener('click', function (e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        toggle.parentElement.classList.toggle('active');
                    }
                });
            });

            document.addEventListener('click', function (e) {
                if (!e.target.closest('.navbar')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        }

        // Carousel initialization
        document.querySelectorAll('.story-carousel').forEach(function (carousel) {
            var track = carousel.querySelector('.carousel-track');
            var slides = carousel.querySelectorAll('.carousel-slide');
            var navBtns = carousel.querySelectorAll('.carousel-btn');
            var prevBtn = navBtns[0] || null;
            var nextBtn = navBtns[navBtns.length - 1] || null;
            var dots = carousel.querySelectorAll('.carousel-dot');
            var current = 0;
            var total = slides.length;

            if (!track || total === 0) return;

            function goTo(index) {
                current = Math.max(0, Math.min(index, total - 1));
                track.style.transform = 'translateX(-' + (current * 100) + '%)';
                dots.forEach(function (dot, i) {
                    dot.classList.toggle('active', i === current);
                });
                if (prevBtn) prevBtn.disabled = current === 0;
                if (nextBtn) nextBtn.disabled = current === total - 1;
            }

            if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
            if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });
            dots.forEach(function (dot) {
                dot.addEventListener('click', function () {
                    goTo(parseInt(dot.dataset.index, 10));
                });
            });

            goTo(0);
        });
    }

    function initFooter() {
        var footer = document.createElement('footer');
        footer.className = 'footer';
        footer.innerHTML = '<div class="footer-content"><p class="footer-tagline"><strong>EcoTipping Points:</strong> Transforming ecosystems through community-led systemic change.</p><nav class="footer-nav"><a href="#">About Us</a><a href="#">Contact Us</a></nav></div>';
        document.body.appendChild(footer);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { initNav(); initFooter(); });
    } else {
        initNav();
        initFooter();
    }
}());
