import './css/App.css'
import DiscordModal, { DiscordLogo } from './components/Discord'
import GithubLogo from './components/GithubLogo'
import ShortcutBtn from './components/ShortcutBtn'
import Plus from './components/Plus'
import { useState } from 'react'
import Shortcut from './components/Shortcut'


function App() {
  const defaultModal:React.ReactElement = <></>
  const [modalActive, setModalActive] = useState(defaultModal);
  const [discordActive, setDiscordActive] = useState(false);

  return (
    <div className='main'>

      <div className="title">
        <a href="https://github.com/Rexblane/DeskCall" target='_blank' className='github'>
          <GithubLogo />
        </a>
        <div>
          <h1>DESKCALL</h1>
          <h2>Desenvolvido por Rok</h2>
        </div>
        <div className='discord-element'>
          <div className='discord' onClick={() => setDiscordActive(!discordActive)}>
            <DiscordLogo />
          </div>
          <DiscordModal active={discordActive} setActive={setDiscordActive} />
        </div>
      </div>
      <div
        className="cards">
        <ShortcutBtn shortcut={new Shortcut('F13', 'Call Victor', '@vitão', 'teste')} setModal={setModalActive} activeModal={modalActive}/>
        <ShortcutBtn shortcut={new Shortcut('F15', 'Call Victor')} setModal={setModalActive} activeModal={modalActive}/>
        <ShortcutBtn shortcut={new Shortcut('F16', 'Call Victor')} setModal={setModalActive} activeModal={modalActive} />
        <ShortcutBtn shortcut={new Shortcut('F17', 'Call Victor')} setModal={setModalActive} activeModal={modalActive} />
        <ShortcutBtn shortcut={new Shortcut('F18', 'Call Victor')} setModal={setModalActive} activeModal={modalActive} />
        <ShortcutBtn shortcut={new Shortcut('F19', 'Call Victor')} setModal={setModalActive} activeModal={modalActive} />
        <ShortcutBtn shortcut={new Shortcut('F20', 'Call Victor')} setModal={setModalActive} activeModal={modalActive} />
        <Plus setModalActive={setModalActive} active={modalActive} />
      </div>

      <div className='console'>
        <h3>Console</h3>
        <div className='console-content'>
          [KeyPress] F15
        </div>
      </div>
      <p className="export">
        Clique aqui para exportar o console para <code>console.txt</code>
      </p>
      {modalActive}
    </div>
  )
}

export default App
