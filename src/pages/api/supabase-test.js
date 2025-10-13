// API route to test Supabase connection
// Visit: http://localhost:3000/api/supabase-test

import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  try {
    // Check if Supabase client is configured
    if (!supabase) {
      return res.status(500).json({
        success: false,
        message: '❌ Supabase is not configured',
        instructions: [
          '1. Create a Supabase account at https://supabase.com',
          '2. Get your project URL and API key from Settings > API',
          '3. Copy .env.local.example to .env.local',
          '4. Add your credentials to .env.local',
          '5. Restart the development server',
        ],
      });
    }

    // Try to execute a simple query to test the connection
    // This queries the Supabase system table to verify connection
    const { data, error } = await supabase
      .from('_supabase_system_information')
      .select('*')
      .limit(1);

    if (error && error.code !== 'PGRST116') {
      // PGRST116 means table doesn't exist, which is OK - connection works
      // Any other error means there's a real problem
      if (error.message.includes('JWT')) {
        return res.status(401).json({
          success: false,
          message: '❌ Invalid Supabase credentials',
          error: 'Your SUPABASE_ANON_KEY is invalid or expired',
          instructions: [
            '1. Go to your Supabase project dashboard',
            '2. Navigate to Settings > API',
            '3. Copy the anon/public key (it should start with "eyJ")',
            '4. Update NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local',
            '5. Restart the development server',
          ],
        });
      }
      
      if (error.message.includes('Failed to fetch')) {
        return res.status(500).json({
          success: false,
          message: '❌ Cannot reach Supabase',
          error: 'Your SUPABASE_URL might be incorrect',
          instructions: [
            '1. Check your internet connection',
            '2. Verify NEXT_PUBLIC_SUPABASE_URL in .env.local',
            '3. Make sure the URL starts with https://',
            '4. Make sure the URL ends with .supabase.co',
          ],
        });
      }
    }

    // Connection successful!
    return res.status(200).json({
      success: true,
      message: '✅ Supabase connection successful!',
      info: {
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
        timestamp: new Date().toISOString(),
        status: 'Connected and ready to use',
      },
      nextSteps: [
        '🎉 Great! Your Supabase is connected.',
        '📖 Check SUPABASE_SETUP.md for next steps',
        '🚀 Next: Learn how to create your first table',
        '💡 Visit your Supabase dashboard to explore',
      ],
    });
  } catch (error) {
    console.error('Supabase test error:', error);
    return res.status(500).json({
      success: false,
      message: '❌ Unexpected error testing Supabase connection',
      error: error.message,
      tip: 'Check the server console for more details',
    });
  }
}
