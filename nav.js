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
            var counter = carousel.querySelector('.carousel-counter');
            var current = 0;
            var total = slides.length;

            if (!track || total === 0) return;

            function goTo(index) {
                current = Math.max(0, Math.min(index, total - 1));
                track.style.transform = 'translateX(-' + (current * 100) + '%)';
                dots.forEach(function (dot, i) {
                    dot.classList.toggle('active', i === current);
                });
                if (counter) counter.textContent = 'Story ' + (current + 1) + ' of ' + total;
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
        var F = "font-family:'Source Sans 3',sans-serif;";

        function col(title, links) {
            var items = links.map(function (l) {
                return '<a href="' + l.href + '" style="' + F + 'display:block;font-size:14px;color:#4d564e;text-decoration:none;margin-bottom:9px;">' + l.text + '</a>';
            }).join('');
            return '<div><div style="' + F + 'font-size:11px;font-weight:600;color:#9c5a2b;margin-bottom:14px;">' + title + '</div>' + items + '</div>';
        }

        var upper =
            '<div class="etp-foot-grid" style="max-width:1200px;margin:0 auto;padding:54px 52px 44px;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px;">' +
                '<div>' +
                    '<img src="images/etp-logo.png" alt="EcoTipping Points" style="height:26px;width:auto;display:block;margin-bottom:16px;">' +
                    '<p style="' + F + 'font-size:16px;line-height:1.5;color:#4d564e;max-width:280px;margin:0;">A practical toolkit for facilitating community-scale ecological restoration, grounded in systems thinking and field experience.</p>' +
                '</div>' +
                col('The Toolkit', [
                    { href: 'foundations.html', text: 'Foundations' },
                    { href: 'systems-thinking-overview.html', text: 'Systems Thinking' },
                    { href: 'ingredients-overview.html', text: 'Ingredients for Success' },
                    { href: 'community-sessions.html', text: 'Community Sessions' }
                ]) +
                col('Success Stories', [
                    { href: 'story-apo-island.html', text: 'Apo Island, Philippines' },
                    { href: 'story-gopalpura.html', text: 'Gopalpura, India' },
                    { href: 'story-khao-din.html', text: 'Khao Din, Thailand' },
                    { href: 'story-punukula.html', text: 'Punukula, India' }
                ]) +
                col('More', [
                    { href: 'resources.html', text: 'Resources' },
                    { href: 'https://www.ecotippingpoints.org/', text: 'EcoTippingPoints.org' },
                    { href: 'resources.html', text: 'About the project' }
                ]) +
            '</div>';

        var bar =
            '<div style="background:#173a2b;color:#a6c0b0;">' +
                '<div style="max-width:1200px;margin:0 auto;padding:18px 52px;' + F + 'font-size:12px;letter-spacing:0.04em;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;">' +
                    '<span>©2026 EcoTipping Points</span>' +
                    '<span>v0.6.4.1 · 7/1/26</span>' +
                '</div>' +
            '</div>';

        var footer = document.createElement('footer');
        footer.className = 'footer';
        footer.style.background = '#eef0ed';
        footer.style.borderTop = '1px solid #e4e7e3';
        footer.innerHTML = upper + bar;
        document.body.appendChild(footer);

        // Responsive: collapse the 4 columns on small screens.
        if (!document.getElementById('etp-foot-style')) {
            var st = document.createElement('style');
            st.id = 'etp-foot-style';
            st.textContent =
                '@media (max-width:64rem){.etp-foot-grid{grid-template-columns:1fr 1fr!important;}}' +
                '@media (max-width:40rem){.etp-foot-grid{grid-template-columns:1fr!important;padding:36px 22px 32px!important;}}';
            document.head.appendChild(st);
        }
    }

    function initSectionRail() {
        var subnav = document.querySelector('.subnav');
        if (!subnav) return;

        var page = window.location.pathname.split('/').pop() || 'index.html';

        var sections = {
            'systems-thinking': {
                label: 'Systems Thinking',
                items: [
                    { href: 'systems-thinking-overview.html', text: 'Overview' },
                    { href: 'systems-thinking-recognize.html', text: 'Part 1: Recognize It' },
                    { href: 'systems-thinking-map.html', text: 'Part 2: Map It' },
                    { href: 'systems-thinking-reverse.html', text: 'Part 3: Reverse It' },
                    { href: 'systems-thinking-lock.html', text: 'Part 4: Lock It In' }
                ]
            },
            'ingredient': {
                label: 'Ingredients for Success',
                items: [
                    { href: 'ingredients-overview.html', text: 'Overview' },
                    { href: 'ingredient-outside-stimulation.html', text: 'Outside stimulation and facilitation' },
                    { href: 'ingredient-shared-awareness.html', text: 'Shared community awareness and commitment' },
                    { href: 'ingredient-harmony-ecosystem.html', text: 'Harmony between community and ecosystem' },
                    { href: 'ingredient-enduring-commitment.html', text: 'Enduring commitment of local leadership' },
                    { href: 'ingredient-letting-nature-work.html', text: 'Letting nature do the work' },
                    { href: 'ingredient-mobilizing-commitment.html', text: 'Mobilizing community commitment' },
                    { href: 'ingredient-overcoming-obstacles.html', text: 'Overcoming social obstacles' },
                    { href: 'ingredient-social-ecological-diversity.html', text: 'Social and ecological diversity' },
                    { href: 'ingredient-social-ecological-memory.html', text: 'Social and ecological memory' },
                    { href: 'ingredient-building-resilience.html', text: 'Building resilience' }
                ]
            },
            'community-sessions': {
                label: 'Community Sessions',
                items: [
                    { href: 'community-sessions.html', text: 'Overview' },
                    { href: 'community-sessions-map-it.html', text: 'Map It' },
                    { href: 'community-sessions-reverse-it.html', text: 'Reverse It' }
                ]
            }
        };

        var sectionKey = null;
        if (page.indexOf('systems-thinking') === 0) sectionKey = 'systems-thinking';
        else if (page.indexOf('ingredient') === 0) sectionKey = 'ingredient';
        else if (page.indexOf('community-sessions') === 0) sectionKey = 'community-sessions';

        if (!sectionKey) return;

        var sec = sections[sectionKey];
        var items = sec.items;

        // Find current item by matching page
        var currentIndex = 0;
        items.forEach(function (item, i) { if (item.href === page) currentIndex = i; });
        var total = items.length;

        function makeItems(extraClass) {
            return items.map(function (item, i) {
                var isActive = (item.href === page);
                return '<li><a href="' + item.href + '"' + (isActive ? ' class="rail-active"' : '') + '>' + item.text + '</a></li>';
            }).join('');
        }

        var railItems = makeItems();

        // Build desktop rail aside
        var rail = document.createElement('aside');
        rail.className = 'section-rail';
        rail.setAttribute('aria-label', sec.label + ' navigation');
        rail.innerHTML = '<span class="rail-label">' + sec.label + '</span><ul class="rail-list">' + railItems + '</ul>';

        // Build rail-content wrapper
        var railContent = document.createElement('div');
        railContent.className = 'rail-content';

        // Outer flex wrapper
        var wrapper = document.createElement('div');
        wrapper.className = 'section-with-rail';
        wrapper.appendChild(rail);
        wrapper.appendChild(railContent);

        // Build mobile section menu
        var mobileNav = document.createElement('div');
        mobileNav.className = 'section-mobile-nav';
        var panelId = 'section-menu-panel';
        mobileNav.innerHTML =
            '<button class="section-menu-btn" aria-expanded="false" aria-controls="' + panelId + '">' +
                '<span class="section-menu-label">' + sec.label + '</span>' +
                '<span class="section-menu-current"><span>' + items[currentIndex].text + '</span><span>' + (currentIndex + 1) + ' / ' + total + ' ▾</span></span>' +
            '</button>' +
            '<ul class="section-menu-panel" id="' + panelId + '" aria-hidden="true">' + railItems + '</ul>';

        // Find page-header and move content after it
        var pageHeader = document.querySelector('.page-header');
        if (!pageHeader) return;

        // Hide the original horizontal subnav
        subnav.style.display = 'none';

        // Collect all siblings after pageHeader, move into railContent
        var node = pageHeader.nextSibling;
        while (node) {
            var next = node.nextSibling;
            railContent.appendChild(node);
            node = next;
        }

        // Insert mobile nav then desktop wrapper after pageHeader
        pageHeader.insertAdjacentElement('afterend', mobileNav);
        mobileNav.insertAdjacentElement('afterend', wrapper);

        // Mobile toggle
        var btn = mobileNav.querySelector('.section-menu-btn');
        var panel = mobileNav.querySelector('.section-menu-panel');
        btn.addEventListener('click', function () {
            var expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            panel.setAttribute('aria-hidden', String(expanded));
        });

        // Close panel on item click
        panel.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                btn.setAttribute('aria-expanded', 'false');
                panel.setAttribute('aria-hidden', 'true');
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { initNav(); initSectionRail(); initFooter(); });
    } else {
        initNav();
        initSectionRail();
        initFooter();
    }
}());
