import { useState } from 'react';
import '../css/Discord.css'
import { DiscordProps } from '../lib/types';

export default function DiscordModal({
    props,
    onClose,
    onSubmit
}: {
    props?: DiscordProps;
    onClose: () => void;
    onSubmit: (discordProps: DiscordProps) => void;
}) {
    const [fillBolean, setFillBolean] = useState<boolean>(false);
    const [token, setToken] = useState(props?.token || '')
    const [owner, setOwner] = useState(props?.owner || '')
    const [channel, setChannel] = useState(props?.channel || '')
    const [sound, setSound] = useState(props?.sound || false)
    const [response, setResponse] = useState(props?.response || false)

    return (
        <div className="disc-modal">
            
            <div className="disc-close">
                <div className="close">
                    <div className="close-btn">
                        <div 
                        className="cross"
                        onClick={onClose}
                        >
                            <div className="vertical" />
                            <div className="horizontal" />
                        </div>
                    </div>
                </div>
            </div>
            {fillBolean ? <div className="fill">Preencha todos os campos</div> : null}
            <div className="disc-content">
                <div className="token">
                    <h2>Token</h2>
                    <input 
                    onChange={(ev) => {
                        setFillBolean(false)
                        setToken(ev.target.value)
                        }} type='password' name='token' 
                        defaultValue={token}
                        />
                </div>
                <div className='disc-props'>
                    <div className="owner">
                        <h2>Dono</h2>
                        <input
                        onChange={(ev) => {
                            setFillBolean(false)
                            setOwner(ev.target.value)
                            }} type='text' name='owner'
                            defaultValue={owner}
                            />
                    </div>
                    <div className="channel">
                        <h2>Canal</h2>
                        <input
                        onChange={(ev) => {
                            setFillBolean(false)
                            setChannel(ev.target.value)
                            }} type='text' name='channel' 
                            defaultValue={channel}
                            />
                    </div>
                </div>
                <div className="disc-options">
                    <div className="sound">
                        <input 
                        type="checkbox" 
                        name='sound'
                        onChange={(ev) => {
                            setFillBolean(false)
                            setSound(ev.target.checked)
                            }}
                        defaultChecked={sound}
                         />
                        <h2>Tocar som</h2>
                    </div>
                    <div className="response">
                        <input 
                        type="checkbox" 
                        name='response'
                        onChange={(ev) => {
                            setFillBolean(false)
                            setResponse(ev.target.checked)
                            }}
                        defaultChecked={response}
                        />
                        <h2>Botão de resposta</h2>
                    </div>
                </div>
                <div className="disc-footer">
                    <button 
                    onClick={() => {
                        if (token === '' || owner === '' || channel === '') return setFillBolean(true)
                        onSubmit({
                            token: token,
                            owner: owner,
                            channel: channel,
                            sound: sound,
                            response: response
                        })
                    }
                }
                >
                    Salvar
                    </button>
                </div>
            </div>
        </div>
    )
}

