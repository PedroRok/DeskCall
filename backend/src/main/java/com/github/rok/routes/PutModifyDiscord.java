package com.github.rok.routes;

import com.github.rok.Discord;
import com.github.rok.DiscordManager;
import com.github.rok.utils.Config;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class PutModifyDiscord implements Handler {
    @Override
    public void handle(@NotNull Context ctx) throws Exception {
        Discord discord = ctx.bodyAsClass(Discord.class);
        DiscordManager.get().setDiscord(discord);
        Config.saveDiscordConfig();
        ctx.json(discord);
    }
}
