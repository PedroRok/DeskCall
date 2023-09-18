package com.github.rok;

import com.github.kwhat.jnativehook.GlobalScreen;
import com.github.kwhat.jnativehook.NativeHookException;
import com.github.kwhat.jnativehook.keyboard.NativeKeyEvent;
import com.github.kwhat.jnativehook.keyboard.NativeKeyListener;
import com.github.rok.routes.*;
import com.github.rok.utils.Config;
import io.javalin.Javalin;
import io.javalin.plugin.bundled.CorsPluginConfig;

import javax.swing.*;
import java.awt.*;

public class Main implements NativeKeyListener {

    public void nativeKeyPressed(NativeKeyEvent e) {
        if (!ShortcutManager.cointainsShortcut(NativeKeyEvent.getKeyText(e.getKeyCode()))) return;
        Shortcut shortcut = ShortcutManager.getShortcut(NativeKeyEvent.getKeyText(e.getKeyCode()));
        DiscordManager.get().sendWebhook(shortcut);
    }

    public static void main(String[] args) {

        Config.importDiscordConfig();
        Config.importShortcutConfig();
        try {
            GlobalScreen.registerNativeHook();
        } catch (NativeHookException ex) {
            System.err.println("There was a problem registering the native hook.");
            System.err.println(ex.getMessage());
            System.exit(1);
        }

        GlobalScreen.addNativeKeyListener(new Main());

        Javalin app = Javalin.create(cfg -> {
            cfg.staticFiles.add("/public");
            cfg.plugins.enableCors(cors -> cors.add(CorsPluginConfig::anyHost));
        });
        app.get("/public", ctx -> ctx.result("Hello World"));

        app.get("/shortcuts", new GetShortcuts());

        app.post("/shortcut", new PostCreateShortcut());
        app.put("/shortcut", new PutModifyShortcut());
        app.delete("/shortcut", new DeleteShortcut());

        app.post("/shortcut/key", new PostSendShortcut());

        app.get("/discord", new GetDiscord());
        app.put("/discord", new PutModifyDiscord());

        app.start(7000);

        startFrame();
    }


    public static void startFrame() {
        // TODO: make this in a better way
        JFrame frame = new JFrame("DeskCall");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(200, 150);
        frame.setLocationRelativeTo(null);
        frame.setResizable(false);
        frame.setTitle("DeskCall");

        JPanel panel = new JPanel();
        frame.add(panel);
        JLabel label = new JLabel("DeskCall");
        label.setFont(label.getFont().deriveFont(23f));
        panel.add(label);
        JButton button = new JButton("Abrir configurações");
        button.setPreferredSize(new Dimension(150, 50));
        button.setFocusable(false);
        panel.add(button);

        button.addActionListener(e -> {
            try {
                Desktop.getDesktop().browse(java.net.URI.create("http://localhost:7000"));
            } catch (Exception ignored) {}
        });

        frame.setVisible(true);
    }
}