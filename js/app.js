/* ============================================================
   CSS Showcase — App Logic
   ============================================================ */

(function () {
  'use strict';

  const gallery       = document.getElementById('gallery');
  const modal         = document.getElementById('modal');
  const modalClose    = document.getElementById('modal-close');
  const demoIframe    = document.getElementById('demo-iframe');
  const codePanelCSS  = document.getElementById('code-block-css');
  const codePanelHTML = document.getElementById('code-block-html');
  const codeCSS       = document.getElementById('code-css');
  const codeHTML      = document.getElementById('code-html');
  const copyBtn       = document.getElementById('copy-btn');
  const modalBadge    = document.getElementById('modal-badge');
  const modalTitle    = document.getElementById('modal-title-text');
  const modalDesc     = document.getElementById('modal-desc');
  const modalTagsEl   = document.getElementById('modal-tags');

  // ── Category config ────────────────────────────────────────
  const CATS = {
    keyframe:    { label: 'Keyframe',      color: '#818cf8', bg: 'rgba(129,140,248,0.12)' },
    scroll:      { label: 'Scroll-Driven', color: '#c084fc', bg: 'rgba(192,132,252,0.12)' },
    '3d':        { label: '3D Transforms', color: '#fb923c', bg: 'rgba(251,146,60,0.12)'  },
    interactive: { label: 'Interactive',   color: '#34d399', bg: 'rgba(52,211,153,0.12)'  },
    'one-div':   { label: 'One Div',       color: '#fbbf24', bg: 'rgba(251,191,36,0.12)'  },
  };

  // Fast lookup by ID
  const demoById = Object.fromEntries(DEMOS.map(d => [d.id, d]));

  // ── Build gallery ───────────────────────────────────────────
  function buildGallery() {
    // Count per category for filter badges
    const counts = { all: DEMOS.length };
    DEMOS.forEach(d => { counts[d.category] = (counts[d.category] || 0) + 1; });
    ['all', 'keyframe', 'scroll', '3d', 'interactive', 'one-div'].forEach(cat => {
      const el = document.getElementById('count-' + cat);
      if (el) el.textContent = counts[cat] || 0;
    });

    DEMOS.forEach(demo => gallery.appendChild(buildCard(demo)));

    initLazyLoad();
    initScales();
  }

  // ── Build a single card ────────────────────────────────────
  function buildCard(demo) {
    const cat = CATS[demo.category] || {};
    const li  = document.createElement('article');
    li.className = `card cat-${demo.category}`;
    li.dataset.category = demo.category;
    li.setAttribute('role', 'listitem');
    li.setAttribute('tabindex', '0');

    li.innerHTML = `
      <div class="card-preview">
        <iframe
          class="preview-iframe"
          data-demo-id="${escAttr(demo.id)}"
          sandbox="allow-scripts"
          title="${escAttr(demo.title)} preview"
        ></iframe>
        ${demo.needsScroll ? `
          <div class="preview-scroll-note">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="7" y="2" width="8" height="15" rx="4" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="11" cy="8" r="1.5" fill="currentColor" opacity="0.5"/>
            </svg>
            Scroll inside demo
          </div>
        ` : ''}
        <div class="card-overlay">
          <div class="open-btn">Open Demo</div>
        </div>
      </div>
      <div class="card-body">
        <span class="card-badge">${escHTML(cat.label || demo.category)}</span>
        <div class="card-title">${escHTML(demo.title)}</div>
        <div class="card-desc">${escHTML(demo.description)}</div>
      </div>
    `;

    const badge = li.querySelector('.card-badge');
    badge.style.color      = cat.color;
    badge.style.background = cat.bg;

    li.addEventListener('click', () => openModal(demo));
    li.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(demo); }
    });

    return li;
  }

  // ── Lazy-load iframes with IntersectionObserver ────────────
  function initLazyLoad() {
    const iframes = gallery.querySelectorAll('.preview-iframe[data-demo-id]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const iframe = entry.target;
        const demo   = demoById[iframe.dataset.demoId];
        if (demo) iframe.srcdoc = injectNoScroll(demo.html);
        observer.unobserve(iframe);
      });
    }, { rootMargin: '150px' });

    iframes.forEach(f => observer.observe(f));
  }

  // ── Scale preview iframes to fit their container ──────────
  // The iframe renders at 800×500 (native), then is CSS-scaled to fill the card.
  function initScales() {
    const ro = new ResizeObserver(entries => {
      entries.forEach(entry => {
        const iframe = entry.target.querySelector('.preview-iframe');
        if (iframe) {
          const scale = entry.contentRect.width / 800;
          iframe.style.transform = `scale(${scale})`;
        }
      });
    });
    gallery.querySelectorAll('.card-preview').forEach(p => ro.observe(p));
  }

  // ── Filters ────────────────────────────────────────────────
  document.getElementById('filters').addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    const filter = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b =>
      b.classList.toggle('active', b === btn));

    gallery.querySelectorAll('.card').forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
    });
  });

  // ── Modal ──────────────────────────────────────────────────
  let currentDemo = null;

  function openModal(demo) {
    currentDemo = demo;
    const cat = CATS[demo.category] || {};

    modalBadge.textContent = cat.label || demo.category;
    modalBadge.style.color      = cat.color;
    modalBadge.style.background = cat.bg;

    modalTitle.textContent = demo.title;
    modalDesc.textContent  = demo.description;

    modalTagsEl.innerHTML = (demo.tags || [])
      .map(t => `<span class="modal-tag">${escHTML(t)}</span>`)
      .join('');

    demoIframe.srcdoc = demo.html;

    const css  = extractCSS(demo.html);
    const body = extractBody(demo.html);
    codeCSS.innerHTML  = hlHighlight(css,  'css');
    codeHTML.innerHTML = hlHighlight(body, 'html');

    switchSubtab('css');
    switchTab('preview');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => modalClose.focus(), 50);
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    // Small delay so the close animation plays before clearing the iframe
    setTimeout(() => { demoIframe.srcdoc = ''; }, 300);
    currentDemo = null;
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // ── Tabs ───────────────────────────────────────────────────
  function switchTab(name) {
    document.querySelectorAll('.tab-btn').forEach(b => {
      const active = b.dataset.tab === name;
      b.classList.toggle('active', active);
      b.setAttribute('aria-selected', active);
    });
    document.querySelectorAll('.tab-panel').forEach(p =>
      p.classList.toggle('hidden', p.id !== 'tab-' + name));
  }

  document.querySelectorAll('.tab-btn').forEach(btn =>
    btn.addEventListener('click', () => switchTab(btn.dataset.tab)));

  // ── Source sub-tabs (CSS / HTML) ───────────────────────────
  let activeSubtab = 'css';

  function switchSubtab(name) {
    activeSubtab = name;
    document.querySelectorAll('.subtab-btn').forEach(b => {
      const on = b.dataset.subtab === name;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on);
    });
    codePanelCSS.classList.toggle('hidden',  name !== 'css');
    codePanelHTML.classList.toggle('hidden', name !== 'html');
  }

  document.querySelectorAll('.subtab-btn').forEach(btn =>
    btn.addEventListener('click', () => switchSubtab(btn.dataset.subtab)));

  // ── Copy source code ───────────────────────────────────────
  copyBtn.addEventListener('click', async () => {
    if (!currentDemo) return;
    const text = activeSubtab === 'css'
      ? extractCSS(currentDemo.html)
      : extractBody(currentDemo.html);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      const panel = activeSubtab === 'css' ? codeCSS : codeHTML;
      const range = document.createRange();
      range.selectNodeContents(panel);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  });

  function setCopied(state) {
    copyBtn.classList.toggle('copied', state);
    if (state) {
      copyBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7l3.5 3.5 6.5-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> Copied!`;
      setTimeout(() => {
        setCopied(false);
        copyBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="4" y="4" width="8" height="9" rx="1" stroke="currentColor" stroke-width="1.4"/>
            <path d="M2 10V2h8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> Copy`;
      }, 2000);
    }
  }

  // ── Suppress scrollbars in card preview iframes ───────────
  const NO_SCROLL = '<style>html,body{overflow:hidden!important;scrollbar-width:none;}::-webkit-scrollbar{display:none;}</style>';

  function injectNoScroll(html) {
    return html.replace('</head>', NO_SCROLL + '</head>');
  }

  // ── Source extraction ──────────────────────────────────────
  function extractCSS(html) {
    const m = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
    return m ? m[1].trim() : '';
  }

  function extractBody(html) {
    const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    return m ? m[1].trim() : '';
  }

  // ── Syntax highlighting via highlight.js ──────────────────
  function hlHighlight(code, lang) {
    if (typeof hljs !== 'undefined') {
      return hljs.highlight(code, { language: lang }).value;
    }
    return escHTML(code);
  }

  // ── Helpers ────────────────────────────────────────────────
  function escHTML(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function escAttr(s) {
    return String(s).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ── Theme toggle ───────────────────────────────────────────
  (function () {
    const btn = document.getElementById('theme-toggle');
    btn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  })();

  // ── Init ───────────────────────────────────────────────────
  buildGallery();

})();
