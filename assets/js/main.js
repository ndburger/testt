/* ==========================================================================
   Nate Burger — Main JavaScript
   Mobile nav, scroll animations, back-to-top, header state
   ========================================================================== */

(function () {
  'use strict';

  // ---------- Mobile Navigation ----------
  var navToggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);

      if (isOpen) {
        mobileNav.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

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

  // ---------- Header State: dark on hero, light after ----------
  var header = document.querySelector('.site-header');
  var hero = document.querySelector('.hero');

  if (header && hero) {
    // Start dark (over hero)
    header.classList.add('header-dark');

    window.addEventListener(
      'scroll',
      function () {
        var heroBottom = hero.offsetTop + hero.offsetHeight - 80;
        if (window.scrollY > heroBottom) {
          header.classList.remove('header-dark');
        } else {
          header.classList.add('header-dark');
        }
      },
      { passive: true }
    );
  }
})();
