package com.github.rok.routes;

import com.github.rok.Discord;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class PutModifyDiscord implements Handler {
    @Override
    public void handle(@NotNull Context ctx) throws Exception {
        Discord discord = ctx.bodyAsClass(Discord.class);
        System.out.println(discord);
        ctx.json(discord);
    }
}
