import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jdaaexqhfytzquglkdnw.supabase.co";
const supabaseKey = process.env.SUPABASE_PUBLIC_TOKEN;

export const supabase = createClient(supabaseUrl, supabaseKey as string);
