import "dotenv/config";
import z from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.string().default("development"),
  JWT_SECRET: z.string().default("secret"),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.log("Invalid environment variables", _env.error.format());

  throw new Error("Invalid environment variables");
}

export const env = _env.data;
