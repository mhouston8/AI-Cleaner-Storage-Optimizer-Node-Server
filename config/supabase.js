const { createClient } = require('@supabase/supabase-js');

// Get Supabase credentials from environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Warning: Supabase URL or Key not found in environment variables');
}

// Create Supabase client
// Use service role key for admin operations, or anon key for client-like operations
const supabase = createClient(supabaseUrl || '', supabaseKey || '');

module.exports = supabase;

