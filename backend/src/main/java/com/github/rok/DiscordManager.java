package com.github.rok;

import com.github.rok.utils.DiscordWebhook;
import com.github.rok.utils.PlaceholderUtils;
import com.github.rok.utils.SoundUtils;

public class DiscordManager {

    private static DiscordManager instance;

    private Discord discord;

    public static DiscordManager get() {
        if (instance == null) {
            instance = new DiscordManager();
            instance.setDiscord(new Discord("webhook", "owner", true));
        }
        return instance;
    }

    public Discord getDiscord() {
        return discord;
    }

    public void setDiscord(Discord discord) {
        this.discord = discord;
    }


    public boolean sendWebhook(Shortcut shortcut) {
        if (discord.webhook().equals("webhook")) {
            return false;
        }
        if (discord.owner().equals("owner")) {
            return false;
        }
        System.out.println("Sending webhook");
        DiscordWebhook discordWebhook = new DiscordWebhook(discord.webhook());
        discordWebhook.setContent(PlaceholderUtils.getDiscordReplacement(shortcut, discord.owner()));
        try {
        discordWebhook.execute();
        } catch (Exception e) {
            e.printStackTrace(); // TODO: a logger
            return false;
        }

        if (discord.sound())
            try {
                SoundUtils.playSound("assets/message.wav");
            } catch (Exception e) {
                e.printStackTrace();
            }

        return true;
    }


}
