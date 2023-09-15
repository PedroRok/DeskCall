package com.github.rok.routes;

import com.github.rok.Shortcut;
import com.github.rok.ShortcutManager;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class GetShortcuts implements Handler {

/*
    export type ShortcutTyped = {
        key: string;
        title: string;
        marked: string;
        message: string;
    }
*/


    @Override
    public void handle(@NotNull Context ctx) throws Exception {
        ctx.json(ShortcutManager.shortcut.toArray());
    }

}
