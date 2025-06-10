import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken:true,
    detectSessionInUrl: true, // Disable automatic session detection in the URL
  },
  realtime: {
    params: {
      eventsPerSecond: 10, // Limit the number of events per second
      presence: true, // Enable presence feature
    },
  },
  global: {
    headers: {
      "x-client-info": "merka-dom/1.0.0", // Custom header for client identification
      "x-request-id": crypto.randomUUID(), // Unique request ID for tracing
    },
  },
});
