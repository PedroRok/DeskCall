package com.github.rok.routes;

import com.github.rok.Discord;
import com.github.rok.Shortcut;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class GetDiscord implements Handler {

    /*
        export type DiscordProps = {
        token: string;
        owner: string;
        channel: string;
        sound: boolean;
        response: boolean;
    }
     */

    @Override
    public void handle(@NotNull Context ctx) throws Exception {
        Discord dc = new Discord("token", "owner", "channel", true, true);
        ctx.json(dc);
    }
}
