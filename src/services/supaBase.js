import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cduskqlbyelqmshkglpg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkdXNrcWxieWVscW1zaGtnbHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1MDEwNDgsImV4cCI6MjA0NTA3NzA0OH0.I98r3oxL-1BMA0_CUbFmrO11sLogTrbZGHFUpmXBLsU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
