import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hiusbnlkbeglbswwsdzk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpdXNibmxrYmVnbGJzd3dzZHprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3ODc4NjgsImV4cCI6MjAwNTM2Mzg2OH0.td1qdwKWK4lU8leEwjpd1ZGpqmgkUy8xsKFMUd3PloM";

const supabase = createClient(supabaseUrl, supabaseKey);
// const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
