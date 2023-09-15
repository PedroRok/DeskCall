package com.github.rok;

import java.util.ArrayList;

public class ShortcutManager {

    public static ArrayList<Shortcut> shortcut = new ArrayList<>();
    static {
        shortcut.add(new Shortcut("F4", "title", "marked", "message"));
        shortcut.add(new Shortcut("F6", "title1", "marked1", "message1"));
    }
}
