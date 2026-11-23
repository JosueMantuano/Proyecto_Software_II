import { createClient } from '@supabase/supabase-js'
const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
export const isConfigured = Boolean(url && key && !url.includes('https://goeihvzjgkygapbxwhlb.supabase.co') && !key.includes('sb_publishable_IGjld9VRRaw7i9Hry5Ic6g_WshclYXH'))
export const supabase = isConfigured ? createClient(url, key) : null
