package com.github.rok;

import java.util.ArrayList;

public class ShortcutManager {

    public static ArrayList<Shortcut> shortcut = new ArrayList<>();
    public static Shortcut getShortcut(String key) {
        for (Shortcut shortcut : shortcut) {
            if (shortcut.key().equals(key)) {
                return shortcut;
            }
        }
        return null;
    }

    public static boolean cointainsShortcut(String key) {
        for (Shortcut shortcut : shortcut) {
            if (shortcut.key().equals(key)) {
                return true;
            }
        }
        return false;
    }
}
