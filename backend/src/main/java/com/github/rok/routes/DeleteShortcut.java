package com.github.rok.routes;

import com.github.rok.Shortcut;
import com.github.rok.ShortcutManager;
import com.github.rok.utils.Config;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

import java.util.Optional;

public class DeleteShortcut implements Handler {
    @Override
    public void handle(@NotNull Context ctx) throws Exception {
        Shortcut sc = ctx.bodyAsClass(Shortcut.class);
        Optional<Shortcut> first = ShortcutManager.shortcut.stream().filter(s -> s.key().equals(sc.key())).findFirst();
        if (first.isEmpty()) {
            ctx.status(404);
            return;
        }
        Shortcut shortcut = first.get();
        ShortcutManager.shortcut.remove(shortcut);
        Config.saveShortcutConfig();
        ctx.json(shortcut);
    }
}
