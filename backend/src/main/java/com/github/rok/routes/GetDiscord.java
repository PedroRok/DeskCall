package com.github.rok.routes;

import com.github.rok.Discord;
import com.github.rok.DiscordManager;
import com.github.rok.Shortcut;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class GetDiscord implements Handler {
    @Override
    public void handle(@NotNull Context ctx) throws Exception {
        ctx.json(DiscordManager.get().getDiscord());
    }
}
