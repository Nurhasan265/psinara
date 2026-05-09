import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
  'https://ecnuyrfegulltfcsubbn.supabase.co'

const supabaseAnonKey =
  'sb_publishable_SfsMzrBKPn7V134xlEh3ew_CUquEKwa'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)