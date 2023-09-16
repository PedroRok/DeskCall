import { DiscordProps, Shortcut } from "./types";

export const createShortcut = async (shortcut: Shortcut) => {
  const res = await fetch("http://localhost:7000/shortcut", {
    method: "POST",
    body: JSON.stringify(shortcut),
  });
  return res.json();
}

export const loadShortcuts = async () => {
  const res = await fetch("http://localhost:7000/shortcuts");
  return res.json();
}

export const removeShortcut = async (shortcut: Shortcut | undefined) => {
  if (!shortcut) return;
  const res = await fetch(`http://localhost:7000/shortcut`, {
    method: "DELETE",
    body: JSON.stringify(shortcut),
  });
  if (res.status == 404) {
    throw new Error("Shortcut not found");
  }
  return res.json();
}

export const sendShortcut = async (key: string) => {
  const res = await fetch("http://localhost:7000/shortcut/key", {
    method: "POST",
    body: key,
  });
  return res.text();
};




export const loadDiscord = async () => {
  const res = await fetch("http://localhost:7000/discord");
  return res.json();
}

export const updateDiscord = async (props: DiscordProps) => {
  const res = await fetch("http://localhost:7000/discord", {
    method: "PUT",
    body: JSON.stringify(props),
  });
  return res.json();
}