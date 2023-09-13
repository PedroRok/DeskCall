import { useRef, useState } from 'react';
import '../css/Modal.css';
import Shortcut from './Shortcut';


export default function ShortcutModal(props: { active: React.ReactElement, setActive: Function, shortcut: Shortcut}) {
    if (props.active == null) return null;
    const [pressedKey, setPressedKey] = useState(props.shortcut.getKey() || 'F5')
    const [fillBolean, setFillBolean] = useState(false)

    const key = useRef<HTMLInputElement>(null)
    const  = useRef<HTMLInputElement>(null)
    const marked = useRef<HTMLInputElement>(null)
    const message = useRef<HTMLTextAreaElement>(null)

    const test = async () => {
        if (key.current === null || title.current === null || marked.current === null || message.current === null) return console.log('null')
        if (key.current?.value === '' || title.current?.value === '' || marked.current?.value === '' || message.current?.value === '') {
            setFillBolean(true)
            return
        }
        const res = await fetch('http://localhost:7000/scmodal', {
            body: JSON.stringify({
                content: key.current.value,
                title: title.current.value,
                marked: marked.current.value,
                message: message.current.value
            }),
            method: 'POST'
        });
        if (!res.ok) {
            return
        }
        const data = await res.text();
    }


    return (
        <div
            onClick={() => props.setActive(false)}
            className="modal">
            <div
                onClick={(e) => e.stopPropagation()}
                className="modal-content">
                <div className="modal-header">
                    {fillBolean ? <div className="fill">Preencha todos os campos corretamente</div> : null}
                    <input 
                    onChange={() => {setFillBolean(false)}}
                    ref={title} type="text" maxLength={16} name='title' defaultValue={props.shortcut.getTitle()} placeholder='Título do comando' required />
                    <div className="close" onClick={() => props.setActive(null)}>
                        <div className="close-btn">
                            <div
                                onClick={() => props.setActive(null)}
                                className="cross">
                                <div className="vertical" />
                                <div className="horizontal" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="modal-body-content-input">
                        <h2>Selecione uma Tecla</h2>
                        <input 
                        onChange={() => {setFillBolean(false)}}
                        ref={key} name="key" type='button' defaultValue={pressedKey} required onKeyDownCapture={(e) => {
                            setPressedKey(e.key)
                            e.preventDefault()
                        }} />
                    </div>
                    <div className="modal-body-content-mention">
                        <h2>Usuário Marcado:</h2>
                        <input 
                        onChange={() => {setFillBolean(false)}}
                        ref={marked} defaultValue={props.shortcut.getMarked()} name="user" type='text' placeholder='BOTAR MENÇÃO AQUI' required />
                    </div>
                    <div className="modal-body-content-message">
                        <h2>Mensagem</h2>
                        <textarea 
                        onChange={() => {setFillBolean(false)}}
                        ref={message} defaultValue={props.shortcut.getMessage()} required />
                    </div>

                </div>
                <div className="modal-footer">
                    <button onClick={() => props.setActive(null)}>Cancelar</button>
                    <button onClick={() => void test()}>Adicionar</button>
                </div>
            </div>
        </div>
    )
}