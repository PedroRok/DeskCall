package com.github.rok.utils;

import com.github.rok.Discord;
import com.github.rok.DiscordManager;
import com.github.rok.Shortcut;
import com.github.rok.ShortcutManager;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;

public class Config {

    public static void saveDiscordConfig() {
        System.out.println("Saving config");
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();
        Gson gson = builder.create();
        try (Writer writer = new FileWriter("config.json")) {
            gson.toJson(DiscordManager.get().getDiscord(), writer);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void importDiscordConfig() {
        System.out.println("Importing config");
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();
        Gson gson = builder.create();

        FileReader fileReader = null;
        try {
            fileReader = new FileReader("config.json");
        } catch (IOException ignored) {}

        if (fileReader == null) {
            saveDiscordConfig();
            return;
        }

        DiscordManager.get().setDiscord(gson.fromJson(fileReader, Discord.class));
    }

    public static void importShortcutConfig() {
        System.out.println("Importing Shortcuts");
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();
        Gson gson = builder.create();

        FileReader fileReader = null;
        try {
            fileReader = new FileReader("shortcuts.json");
        } catch (IOException ignored) {}

        if (fileReader == null) {
            saveShortcutConfig();
            return;
        }

        ShortcutManager.shortcut = gson.fromJson(fileReader, new TypeToken<ArrayList<Shortcut>>() {}.getType());
    }

    public static void saveShortcutConfig() {
        System.out.println("Saving Shortcuts");
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();
        Gson gson = builder.create();
        try (Writer writer = new FileWriter("shortcuts.json")) {
            gson.toJson(ShortcutManager.shortcut, writer);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
