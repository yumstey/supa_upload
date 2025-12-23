import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "url-supabse"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "AnonKey-Supabase"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)