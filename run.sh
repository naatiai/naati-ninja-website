npx prisma generate
# npx prisma migrate reset
npx prisma db push
npx ts-node -P tsconfig.seed.json src/data/seedDatabase.ts
# 
# For New SUPABASE, run manually:
# grant usage on schema "public" to anon;
# grant usage on schema "public" to authenticated;
# 
# GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA "public" TO authenticated;
# GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA "public" TO anon;
