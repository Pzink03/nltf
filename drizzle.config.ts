import { env } from "@/data/env/server"
import { defineConfig } from "drizzle-kit"

export default defineConfig({
  out: "./src/drizzle/migrations", //Where we output our migrations
  schema: "./src/drizzle.schema.ts",
  dialect: "postgresql",
  strict: true,
  verbose: true, //Security measure asking us to confirm deletion of files etc.
  dbCredentials: {
    password: env.DB_PASSWORD,
    user: env.DB_USER,
    database: env.DB_NAME,
    host: env.DB_HOST,
    ssl: false,
  },
})
