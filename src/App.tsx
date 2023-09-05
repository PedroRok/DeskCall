import './App.css'
import DiscordLogo from './components/DiscordLogo'
import GithubLogo from './components/GithubLogo'
import ShortcutBtn from './components/ShortcutBtn'
import Plus from './components/plus'

function App() {

  return (
    <>
      <div className="title">
        <div className='github'>
          <GithubLogo />
        </div>
        <div>
          <h1>DESKCALL</h1>
          <h2>Desenvolvido por Rok</h2>
        </div>
        <div className='discord'>
          <DiscordLogo />
        </div>
      </div>
      <div className="cards">
        <ShortcutBtn description='Call Victor' keyboard='F13'/>
        <ShortcutBtn description='Call Marina' keyboard='F14'/>
        <ShortcutBtn description='Call Matheus' keyboard='F15'/>
        <ShortcutBtn description='Call Rok' keyboard='F20'/>
        <ShortcutBtn description='Call Prih' keyboard='F21'/>
        <ShortcutBtn description='Call Iago' keyboard='F22'/>
        <ShortcutBtn description='Call Himaru' keyboard='F23'/>
        <Plus />
        <div className='plus'>
        </div>
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
    </>
  )
}

export default App
