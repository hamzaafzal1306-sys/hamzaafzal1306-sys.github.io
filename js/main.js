/* Hamzify — site behaviour. You normally do NOT need to edit this file.
   All text, links and app details live in js/config.js. */
(function () {
  "use strict";
  var C = window.HAMZIFY_CONFIG || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var PLACEHOLDER_EMAIL = "[contact email]";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function has(v) { return typeof v === "string" && v.trim() !== ""; }

  /* ---------- Toast ---------- */
  var toastTimer;
  function toast(msg, ms) {
    var t = $("[data-toast]"); if (!t) return;
    t.innerHTML = msg; t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, ms || 3200);
  }

  /* ---------- Icons (original line icons) ---------- */
  var P = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    profile: '<circle cx="12" cy="8" r="4" ' + P + '/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" ' + P + '/>',
    people: '<circle cx="9" cy="8" r="3.5" ' + P + '/><path d="M2.5 20c1-3.6 3.5-5.5 6.5-5.5s5.5 1.9 6.5 5.5" ' + P + '/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.8c1.8.7 3 2.4 3.6 5.2" ' + P + '/>',
    photo: '<rect x="3" y="4" width="18" height="16" rx="4" ' + P + '/><circle cx="9" cy="10" r="2" ' + P + '/><path d="m4 18 5-5 4 4 3-3 4 4" ' + P + '/>',
    reels: '<rect x="3" y="3" width="18" height="18" rx="5" ' + P + '/><path d="M3 8h18M8 3l3 5M14 3l3 5" ' + P + '/><path d="m10 11.5 5 3-5 3z" ' + P + '/>',
    stories: '<circle cx="12" cy="12" r="9" ' + P + ' stroke-dasharray="4 2.6"/><circle cx="12" cy="12" r="5" ' + P + '/>',
    chat: '<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4A8 8 0 1 1 20 12Z" ' + P + '/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01" ' + P + ' stroke-width="2.6"/>',
    explore: '<circle cx="11" cy="11" r="7" ' + P + '/><path d="m20 20-3.5-3.5" ' + P + '/><path d="m13.5 8.5-1.5 4-3.5 1.5 1.5-4z" ' + P + '/>',
    bell: '<path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15z" ' + P + '/><path d="M10 21h4" ' + P + '/>',
    shield: '<path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z" ' + P + '/><path d="m9 12 2 2 4-4" ' + P + '/>',
    moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" ' + P + '/>'
  };
  function icon(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (ICONS[name] || ICONS.photo) + "</svg>";
  }

  /* ---------- Nav ---------- */
  var nav = $(".nav"), toggle = $(".nav__toggle");
  function onScroll() { if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 10 || !$(".hero")); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    $$(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open menu");
      });
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("is-open")) toggle.click(); });
  }

  /* ---------- Contact email (all pages) ---------- */
  var email = has(C.CONTACT_EMAIL) ? C.CONTACT_EMAIL.trim() : "";
  function emailHTML() {
    return email ? '<a href="mailto:' + esc(email) + '">' + esc(email) + "</a>"
                 : '<span class="placeholder">' + PLACEHOLDER_EMAIL + "</span>";
  }
  $$("[data-contact-email]").forEach(function (el) { el.innerHTML = emailHTML(); });
  $$("[data-contact-email-button]").forEach(function (el) {
    if (email) { el.href = "mailto:" + email; el.hidden = false; } else { el.hidden = true; }
  });
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Download info ---------- */
  var FIELDS = { APP_VERSION: "Coming soon", APK_FILE_SIZE: "Coming soon", LAST_UPDATED: "Coming soon", MINIMUM_ANDROID_VERSION: "Coming soon" };
  $$("[data-cfg]").forEach(function (el) {
    var k = el.getAttribute("data-cfg");
    if (has(C[k])) { el.textContent = C[k]; } else { el.textContent = FIELDS[k] || "—"; el.classList.add("is-placeholder"); }
  });
  var meta = $("[data-hero-meta]");
  if (meta) {
    var bits = ["Free"];
    if (has(C.APP_VERSION)) bits.push("Version " + C.APP_VERSION);
    if (has(C.APK_FILE_SIZE)) bits.push(C.APK_FILE_SIZE);
    if (has(C.MINIMUM_ANDROID_VERSION)) bits.push(C.MINIMUM_ANDROID_VERSION);
    meta.innerHTML = bits.map(function (b) { return "<span>" + esc(b) + "</span>"; }).join(" · ");
  }

  /* ---------- Download buttons ---------- */
  var url = has(C.APK_DOWNLOAD_URL) ? C.APK_DOWNLOAD_URL.trim() : "";
  var validUrl = /^https?:\/\/[^\s]+$/i.test(url);
  var statusEl = $("[data-download-status]");
  var buttons = $$("[data-download]");
  function setStatus(html, isError) {
    if (!statusEl) return;
    statusEl.innerHTML = html; statusEl.classList.toggle("is-error", !!isError);
  }
  function disableDownloads(msg) {
    buttons.forEach(function (b) {
      b.setAttribute("aria-disabled", "true");
      b.setAttribute("href", "#download");
      b.removeAttribute("download");
      var l = $("[data-download-label]", b); if (l) l.textContent = "Download coming soon";
    });
    setStatus(msg, true);
  }
  function enableDownloads() {
    buttons.forEach(function (b) {
      b.removeAttribute("aria-disabled");
      b.setAttribute("href", url);
      b.setAttribute("download", "");
      b.setAttribute("rel", "noopener");
    });
  }
  if (!validUrl) {
    disableDownloads("The download link is not available yet. Please check back soon.");
  } else {
    enableDownloads();
    // Quick reachability check. A blocked check never disables the button by itself
    // unless the network clearly fails.
    if (window.fetch && window.AbortController) {
      var ctl = new AbortController();
      var timer = setTimeout(function () { ctl.abort(); }, 9000);
      fetch(url, { method: "HEAD", mode: "no-cors", cache: "no-store", signal: ctl.signal })
        .then(function () { clearTimeout(timer); })
        .catch(function (err) {
          clearTimeout(timer);
          if (err && err.name === "AbortError") return; // slow network: keep the button working
          if (!navigator.onLine) { setStatus("You seem to be offline. Connect to the internet to download.", true); return; }
          disableDownloads('The download is unavailable right now. Please try again later. <a href="' + esc(url) + '" style="color:#fff">Try the link anyway</a>');
        });
    }
  }
  buttons.forEach(function (b) {
    b.addEventListener("click", function (e) {
      if (b.getAttribute("aria-disabled") === "true") {
        e.preventDefault();
        var dl = document.getElementById("download");
        if (dl) dl.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        toast("The download link is not available yet.");
        return;
      }
      toast('<span class="spinner" aria-hidden="true"></span>Starting download…', 4500);
      setStatus('<span class="spinner" aria-hidden="true"></span>Starting download…');
      setTimeout(function () {
        setStatus("Download started. Check your notifications or the Downloads folder, then open Hamzify.apk. " +
          'Nothing happening? <a href="' + esc(url) + '" style="color:#fff">Tap here to try again</a>.');
      }, 3500);
    });
  });

  /* ---------- Features ---------- */
  var fWrap = $("[data-features]");
  if (fWrap && Array.isArray(C.FEATURES)) {
    fWrap.innerHTML = C.FEATURES.map(function (f) {
      return '<article class="card reveal"><div class="card__icon">' + icon(f.icon) + "</div><h3>" + esc(f.title) + "</h3><p>" + esc(f.text) + "</p></article>";
    }).join("");
  }

  /* ---------- Screenshots ---------- */
  function picture(s, eager) {
    var img = '<img src="' + esc(s.src) + '" alt="' + esc(s.alt || s.title || "Hamzify screenshot") + '" width="720" height="1280"' + (eager ? "" : ' loading="lazy" decoding="async"') + ">";
    return "<picture>" + (has(s.webp) ? '<source srcset="' + esc(s.webp) + '" type="image/webp">' : "") + img + "</picture>";
  }
  var shots = Array.isArray(C.SCREENSHOTS) ? C.SCREENSHOTS.filter(function (s) { return s && has(s.src); }) : [];
  var gal = $("[data-gallery]");
  if (gal) {
    if (shots.length) {
      gal.innerHTML = shots.map(function (s) {
        return '<figure class="shot"><div class="phone"><div class="phone__screen">' + picture(s) + "</div></div><figcaption>" + esc(s.title || "") + "</figcaption></figure>";
      }).join("");
    } else {
      gal.innerHTML = [1, 2, 3].map(function () {
        return '<figure class="shot"><div class="phone phone--empty"><div class="phone__screen">Screenshot coming soon</div></div><figcaption>&nbsp;</figcaption></figure>';
      }).join("");
    }
  }
  var hero = $("[data-hero-phone]"), hero2 = $("[data-hero-phone-2]");
  if (hero) {
    if (!shots.length) {
      hero.classList.add("phone--empty"); $(".phone__screen", hero).innerHTML = "Screenshot coming soon";
      if (hero2) hero2.hidden = true;
    } else {
      var cur = $("img", hero);
      if (!cur || cur.getAttribute("src") !== shots[0].src) $(".phone__screen", hero).innerHTML = picture(shots[0], true);
      if (hero2) {
        if (shots[1]) {
          var cur2 = $("img", hero2);
          if (!cur2 || cur2.getAttribute("src") !== shots[1].src) $(".phone__screen", hero2).innerHTML = picture({ src: shots[1].src, webp: shots[1].webp, alt: "" });
        } else hero2.hidden = true;
      }
    }
  }

  /* ---------- About ---------- */
  var ab = $("[data-about]"); if (ab && has(C.ABOUT_TEXT)) ab.textContent = C.ABOUT_TEXT;

  /* ---------- FAQ ---------- */
  var fq = $("[data-faq]");
  if (fq && Array.isArray(C.FAQ)) {
    fq.innerHTML = C.FAQ.map(function (item, i) {
      var a = esc(item.a).replace(/\{contact\}/g, emailHTML());
      return '<details class="reveal"' + (i === 0 ? " open" : "") + "><summary>" + esc(item.q) + '</summary><div class="faq__a"><p>' + a + "</p></div></details>";
    }).join("");
  }

  /* ---------- Share ---------- */
  var shareUrl = has(C.SITE_URL) ? C.SITE_URL : location.origin + location.pathname.replace(/[^/]*$/, "");
  function copyLink() {
    function done() { toast("Link copied: " + esc(shareUrl)); }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(shareUrl).then(done, fallback);
    } else fallback();
    function fallback() {
      var ta = document.createElement("textarea"); ta.value = shareUrl; ta.setAttribute("readonly", "");
      ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select();
      var ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
      if (ok) done(); else window.prompt("Copy this link:", shareUrl);
    }
  }
  $$("[data-share]").forEach(function (b) {
    b.addEventListener("click", function () {
      var data = { title: "Hamzify", text: "Check out Hamzify, a social app for Android:", url: shareUrl };
      if (navigator.share) {
        navigator.share(data).catch(function (err) { if (!err || err.name !== "AbortError") copyLink(); });
      } else copyLink();
    });
  });

  /* ---------- Entrance animations ---------- */
  var rev = $$(".reveal");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    rev.forEach(function (el, i) { el.style.transitionDelay = (i % 3) * 70 + "ms"; io.observe(el); });
  } else {
    rev.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
