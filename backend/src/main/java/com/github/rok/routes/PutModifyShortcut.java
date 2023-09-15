package com.github.rok.routes;

import com.github.rok.Shortcut;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class PutModifyShortcut implements Handler {
    @Override
    public void handle(@NotNull Context ctx) throws Exception {
        Shortcut shortcut = ctx.bodyAsClass(Shortcut.class);
        System.out.println(shortcut);
        ctx.json(shortcut);
    }
}
