// Qvibe Navigation — সব page এ same navigation
function loadNav(activePage) {
  const navHTML = `
  <style>
    .bottom-nav{position:fixed;bottom:0;left:0;right:0;background:#0A0A0F;border-top:1px solid rgba(123,47,255,0.15);display:flex;justify-content:space-around;align-items:center;padding:10px 0 28px;z-index:100;}
    .nav-i{display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;padding:8px 16px;border-radius:12px;transition:all .2s;}
    .nav-i>span{font-size:10px;color:#9B92B8;font-weight:600;letter-spacing:.3px;}
    .nav-i svg path,.nav-i svg circle,.nav-i svg rect{transition:stroke .2s;}
    .nav-i.active svg path,.nav-i.active svg circle{stroke:#A855F7;}
    .nav-i.active>span{color:#A855F7;}
    .nav-i:hover svg path,.nav-i:hover svg circle{stroke:#C084FC;opacity:0.8;}
  </style>
  <div class="bottom-nav">
    <div class="nav-i ${activePage==='home'?'active':''}" onclick="window.location.href='index.html'">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z" stroke="${activePage==='home'?'#A855F7':'#9B92B8'}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 21V12h6v9" stroke="${activePage==='home'?'#A855F7':'#9B92B8'}" stroke-width="1.8" stroke-linecap="round"/></svg>
      <span>Home</span>
    </div>
    <div class="nav-i ${activePage==='discover'?'active':''}" onclick="window.location.href='explore.html'">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="${activePage==='discover'?'#A855F7':'#9B92B8'}" stroke-width="1.8"/><path d="M21 21l-3.5-3.5" stroke="${activePage==='discover'?'#A855F7':'#9B92B8'}" stroke-width="1.8" stroke-linecap="round"/><path d="M8 11h6M11 8v6" stroke="${activePage==='discover'?'#A855F7':'#9B92B8'}" stroke-width="1.8" stroke-linecap="round"/></svg>
      <span>Discover</span>
    </div>
    <div class="nav-i" onclick="window.location.href='post.html'">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#navGrad)"/>
        <path d="M12 7v10M7 12h10" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
        <defs><linearGradient id="navGrad" x1="2" y1="2" x2="22" y2="22"><stop offset="0%" stop-color="#7B2FFF"/><stop offset="100%" stop-color="#C084FC"/></linearGradient></defs>
      </svg>
    </div>
    <div class="nav-i ${activePage==='inbox'?'active':''}" onclick="window.location.href='chat.html'">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M21 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" stroke="${activePage==='inbox'?'#A855F7':'#9B92B8'}" stroke-width="1.8" stroke-linecap="round"/><path d="M3 6l9 7 9-7" stroke="${activePage==='inbox'?'#A855F7':'#9B92B8'}" stroke-width="1.8" stroke-linecap="round"/></svg>
      <span>Inbox</span>
    </div>
    <div class="nav-i ${activePage==='profile'?'active':''}" onclick="window.location.href='profile.html'">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="${activePage==='profile'?'#A855F7':'#9B92B8'}" stroke-width="1.8"/><path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6" stroke="${activePage==='profile'?'#A855F7':'#9B92B8'}" stroke-width="1.8" stroke-linecap="round"/></svg>
      <span>Profile</span>
    </div>
  </div>`;

  document.getElementById('nav-container').innerHTML = navHTML;
}