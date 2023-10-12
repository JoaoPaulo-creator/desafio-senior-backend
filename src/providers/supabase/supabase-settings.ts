import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_TOKEN as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
