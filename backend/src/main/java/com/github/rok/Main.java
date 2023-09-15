package com.github.rok;

import com.github.kwhat.jnativehook.GlobalScreen;
import com.github.kwhat.jnativehook.NativeHookException;
import com.github.kwhat.jnativehook.keyboard.NativeKeyEvent;
import com.github.kwhat.jnativehook.keyboard.NativeKeyListener;
import com.github.rok.routes.*;
import io.javalin.Javalin;
import io.javalin.plugin.bundled.CorsPluginConfig;

public class Main implements NativeKeyListener {

    public void nativeKeyPressed(NativeKeyEvent e) {
        System.out.println("Key Pressed: " + NativeKeyEvent.getKeyText(e.getKeyCode()));

        if (e.getKeyCode() == NativeKeyEvent.VC_ESCAPE) {
            try {
                GlobalScreen.unregisterNativeHook();
            } catch (NativeHookException nativeHookException) {
                nativeHookException.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        try {
            GlobalScreen.registerNativeHook();
        } catch (NativeHookException ex) {
            System.err.println("There was a problem registering the native hook.");
            System.err.println(ex.getMessage());
            System.exit(1);
        }

        //GlobalScreen.addNativeKeyListener(new Main());

        Javalin app = Javalin.create(cfg -> {
            cfg.staticFiles.add("/public");
            cfg.plugins.enableCors(cors -> cors.add(CorsPluginConfig::anyHost));
        });
        app.get("/public", ctx -> ctx.result("Hello World"));

        app.get("/shortcuts", new GetShortcuts());

        app.post("/shortcut", new PostCreateShortcut());
        app.put("/shortcut", new PutModifyShortcut());
        app.delete("/shortcut", new DeleteShortcut());

        app.get("/discord", new GetDiscord());
        app.put("/discord", new PutModifyDiscord());

        app.start(7000);
    }
}