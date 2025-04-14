import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Create a single supabase client for the browser
export const createClientBrowser = () => {
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Create a client with the service role key for server operations
export const createClientServer = () => {
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
    },
  })
}

// Singleton pattern for client-side
let browserClient: ReturnType<typeof createClientBrowser> | null = null

export const getClientBrowser = () => {
  if (!browserClient) {
    browserClient = createClientBrowser()
  }
  return browserClient
}

// For server components and server actions
export const getClientServer = () => {
  return createClientServer()
}
