// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wkzolvxbwvmjhdpwcsea.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indrem9sdnhid3ZtamhkcHdjc2VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NTQ0MzIsImV4cCI6MjA2NjQzMDQzMn0.yj362NBWZEzod62Xwi9-kDOhPS2pejP2B_QRmgO7Cns";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);