import "./css/App.css";
import { useEffect } from "react";
import DiscordModal, { DiscordLogo } from "./components/Discord";
import GithubLogo from "./components/GithubLogo";
import ShortcutBtn from "./components/ShortcutBtn";
import Plus from "./components/Plus";
import { useState } from "react";
import { DiscordProps, type Shortcut } from "./lib/types";
import { loadShortcuts, createShortcut, loadDiscord } from "./lib/shortcut";
import ShortcutModal from "./components/ShortcutModal";

function App() {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [shortcut, setShortcut] = useState<Shortcut | undefined>(undefined);

  const [discordActive, setDiscordActive] = useState<boolean>(false);
  const [discord, setDiscord] = useState<DiscordProps | undefined>(undefined);

  const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);

  useEffect(() => {
    async function getShortcuts() {
      const data = await loadShortcuts();
      setShortcuts(data);
    }
    getShortcuts();

    async function getDiscord() {
      const data = await loadDiscord();
      setDiscord(data);
    }
    getDiscord();    
  }, []);

  return (
    <div className="main">
      <div className="title">
        <a
          href="https://github.com/Rexblane/DeskCall"
          target="_blank"
          className="github"
        >
          <GithubLogo />
        </a>
        <div>
          <h1>DESKCALL</h1>
          <h2>Desenvolvido por Rok</h2>
        </div>
        <div className="discord-element">
          <div
            className="discord"
            onClick={() => setDiscordActive(!discordActive)}
          >
            <DiscordLogo />
          </div>
          {discordActive && <DiscordModal 
          onClose={() => {
            setDiscordActive(false);
            setModalActive(false);
          }}
          onSubmit={(discord) => {
            setDiscordActive(false);
            setDiscord(discord);
          }}
          props={discord}
          
          />}
        </div>
      </div>
      <div className="cards">
        {shortcuts.map((shortcut) => (
          <ShortcutBtn
            key={shortcut.key}
            shortcut={shortcut}
            onClick={() => {
              setModalActive(true);
              setShortcut(shortcut);
            }}
          />
        ))}
        <Plus
          onClick={() => {
            setModalActive(true);
            setShortcut(undefined);
          }}
        />
      </div>

      <div className="console">
        <h3>Console</h3>
        <div className="console-content">[KeyPress] F15</div>
      </div>
      <p className="export">
        Clique aqui para exportar o console para <code>console.txt</code>
      </p>
      {!discordActive && (modalActive && (
        <ShortcutModal
          onClose={() => setModalActive(false)}
          onSubmit={(shortcut) => {
            setModalActive(false);
            createShortcut(shortcut);
          }}
          shortcut={shortcut}
        />
      ))}
    </div>
  );
}

export default App;
