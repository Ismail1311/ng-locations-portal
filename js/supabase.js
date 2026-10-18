// js/supabase.js
// This initializes the Supabase client globally so every page can use it
const supabase = window.supabase.createClient(
  window.APP_CONFIG.SUPABASE_URL, 
  window.APP_CONFIG.SUPABASE_ANON_KEY
);