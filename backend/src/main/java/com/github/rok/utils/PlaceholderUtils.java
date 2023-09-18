package com.github.rok.utils;

import com.github.rok.Shortcut;

public class PlaceholderUtils {

    public static String getDiscordReplacement(Shortcut shortcut, String owner) {
        return shortcut.message().replace("@user", "<@" + shortcut.marked() + ">")
                .replace("@owner", "<@" + owner + ">");
    }
}
