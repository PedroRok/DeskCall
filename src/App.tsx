import './css/App.css'
import DiscordModal, { DiscordLogo } from './components/DiscordLogo'
import GithubLogo from './components/GithubLogo'
import ShortcutBtn from './components/ShortcutBtn'
import Plus from './components/Plus'
import ShortcutModal from './components/ShortcutModal'
import { useState } from 'react'


function App() {

  const [modalActive, setModalActive] = useState(false);
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
        <ShortcutBtn description='Call Victor' keyboard='F13' />
        <ShortcutBtn description='Call Marina' keyboard='F14' />
        <ShortcutBtn description='Call Matheus' keyboard='F15' />
        <ShortcutBtn description='Call Rok' keyboard='F20' />
        <ShortcutBtn description='Call Prih' keyboard='F21' />
        <ShortcutBtn description='Call Iago' keyboard='F22' />
        <ShortcutBtn description='Call Himaru' keyboard='F23' />
        <Plus setModalActive={setModalActive} active={true} />
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
      <ShortcutModal active={modalActive} setActive={setModalActive} />
    </div>
  )
}

export default App
