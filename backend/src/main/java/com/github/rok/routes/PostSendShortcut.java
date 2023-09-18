package com.github.rok.routes;

import com.github.rok.DiscordManager;
import com.github.rok.Shortcut;
import com.github.rok.ShortcutManager;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class PostSendShortcut implements Handler {
    @Override
    public void handle(@NotNull Context ctx) throws Exception {
        System.out.println(ctx.body());
        Shortcut shortcut = ShortcutManager.getShortcut(ctx.body());
        if (shortcut == null) {
            ctx.status(404);
            return;
        }
        DiscordManager.get().sendWebhook(shortcut);
        ctx.json(ctx.body());
    }
}
