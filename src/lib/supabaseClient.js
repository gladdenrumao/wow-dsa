// Supabase Client Configuration
// This file sets up the connection to your Supabase database

import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and Key from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create and export the Supabase client
// This client will be used throughout your app to interact with the database
let supabase;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('⚠️ Supabase credentials not found. Please set up your .env.local file.');
  // Create a dummy client to prevent errors during development
  supabase = null;
}

export { supabase };
