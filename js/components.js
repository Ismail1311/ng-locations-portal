// js/components.js

async function injectComponents() {
  // 1. Inject Header
  const headerDiv = document.getElementById('site-header');
  if (headerDiv) {
    // Check if user is logged in
    const { data: { session } } = await supabase.auth.getSession();
    const isLoggedIn = !!session;

    headerDiv.innerHTML = `
      <header>
        <div class="nav-container">
          <a href="index.html" class="logo">🇳🇬 NG Locations API</a>
          <nav class="nav-links">
            <a href="about.html">About</a>
            <a href="support.html">Support</a>
            ${isLoggedIn 
              ? `<a href="dashboard.html" class="btn" style="padding: 8px 16px;">Dashboard</a>`
              : `<a href="auth.html" class="btn" style="padding: 8px 16px;">Sign In</a>`
            }
          </nav>
        </div>
      </header>
    `;
  }

  // 2. Inject Footer
  const footerDiv = document.getElementById('site-footer');
  if (footerDiv) {
    footerDiv.innerHTML = `
      <footer>
        <div class="footer-links">
          <a href="index.html">Home</a>
          <a href="contact.html">Contact</a>
          <a href="support.html">Support</a>
        </div>
        <p>&copy; ${new Date().getFullYear()} NG Locations API. Built for Nigerian Developers.</p>
      </footer>
    `;
  }
}

// Run when the page loads
document.addEventListener('DOMContentLoaded', injectComponents);