import { z } from "zod";

export const envSchema = z.object({
    BOT_TOKEN: z.string("Discord Bot Token is required").min(1),
    WEBHOOK_LOGS_URL: z.url().optional(),
    MAIN_GUILD_ID: z.url().optional(),
    MAIN_CHANNEL_ID: z.url().optional()
});