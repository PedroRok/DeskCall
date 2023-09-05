import { useState } from 'react';
import '../css/Modal.css';



export default function ShortcutModal(props: { active: boolean, setActive: Function }) {
    if (!props.active) return null;
    const [pressedKey, setPressedKey] = useState('F5')
    return (
        <div
            onClick={() => props.setActive(false)}
            className="modal">
            <div
                onClick={(e) => e.stopPropagation()}
                className="modal-content">
                <div className="modal-header">
                    <input type="text" maxLength={16} name='title' placeholder='Título do comando' required />
                    <div className="close" onClick={() => props.setActive(false)}>
                        <div className="close-btn">
                            <div
                                onClick={() => props.setActive(false)}
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
                        <input name="key" type='button' value={pressedKey} required onKeyDownCapture={(e) => {
                            setPressedKey(e.key)
                            e.preventDefault()
                        }} />
                    </div>
                    <div className="modal-body-content-mention">
                        <h2>Usuário Marcado:</h2>
                        <input name="user" type='text' placeholder='BOTAR MENÇÕES AQUI' required />
                    </div>
                    <div className="modal-body-content-message">
                        <h2>Mensagem</h2>
                        <textarea defaultValue={"@user, você está sendo chamado por @owner! "} required />
                    </div>

                </div>
                <div className="modal-footer">
                    <button>Cancelar</button>
                    <button>Adicionar</button>
                </div>
            </div>
        </div>
    )
}