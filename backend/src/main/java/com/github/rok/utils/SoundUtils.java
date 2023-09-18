package com.github.rok.utils;

import javax.sound.sampled.*;
import java.io.File;
import java.io.IOException;

import com.github.rok.Main;

public class SoundUtils {

    public static void playSound() throws LineUnavailableException, IOException, UnsupportedAudioFileException {

        File f = new File(Main.class.getClassLoader().getResource("assets/message.wav").getFile());
        AudioInputStream audioIn = AudioSystem.getAudioInputStream(f.toURI().toURL());
        Clip clip = AudioSystem.getClip();
        clip.open(audioIn);
        clip.start();
    }
}
