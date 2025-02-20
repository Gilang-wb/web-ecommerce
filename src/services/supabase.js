import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://ubnzkdsppdytayvrxgnd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibnprZHNwcGR5dGF5dnJ4Z25kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3NzE5NjcsImV4cCI6MjA1NDM0Nzk2N30.fghkoeeqHGa50nM7ihCJ7LNZ68zc_Jt0LHsTFtQTZU4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;