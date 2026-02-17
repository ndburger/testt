/* ==========================================================================
   Nate's PM Portfolio — Main JavaScript
   Theme toggle, mobile nav, scroll animations, back-to-top
   ========================================================================== */

(function () {
  'use strict';

  // ---------- Theme Toggle ----------
  const themeToggle = document.querySelector('.theme-toggle');
  const root = document.documentElement;

  function getPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    // Default to dark
    return 'dark';
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Initialize theme
  setTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = root.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ---------- Mobile Navigation ----------
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);

      if (isOpen) {
        mobileNav.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Close mobile nav when a link is clicked
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- Scroll Animations (IntersectionObserver) ----------
  var animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  if ('IntersectionObserver' in window && animatedElements.length > 0) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    animatedElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ---------- Back to Top Button ----------
  var backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    window.addEventListener(
      'scroll',
      function () {
        if (window.scrollY > 500) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      },
      { passive: true }
    );

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- Active Nav Link Highlight ----------
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener(
      'scroll',
      function () {
        var scrollY = window.scrollY + 100;

        sections.forEach(function (section) {
          var sectionTop = section.offsetTop;
          var sectionHeight = section.offsetHeight;
          var sectionId = section.getAttribute('id');

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(function (link) {
              link.classList.remove('active');
              if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('active');
              }
            });
          }
        });
      },
      { passive: true }
    );
  }

  // ---------- Header Background on Scroll ----------
  var header = document.querySelector('.site-header');

  if (header) {
    window.addEventListener(
      'scroll',
      function () {
        if (window.scrollY > 10) {
          header.style.borderBottomColor = 'var(--color-border)';
        } else {
          header.style.borderBottomColor = 'transparent';
        }
      },
      { passive: true }
    );
  }
})();
