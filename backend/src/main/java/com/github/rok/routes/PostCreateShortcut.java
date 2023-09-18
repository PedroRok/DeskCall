package com.github.rok.routes;

import com.github.rok.Shortcut;
import com.github.rok.ShortcutManager;
import com.github.rok.utils.Config;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class PostCreateShortcut implements Handler {
    @Override
    public void handle(@NotNull Context ctx) throws Exception {
        Shortcut shortcut = ctx.bodyAsClass(Shortcut.class);
        ShortcutManager.shortcut.add(shortcut);
        Config.saveShortcutConfig();
        ctx.json(shortcut);
    }
}
