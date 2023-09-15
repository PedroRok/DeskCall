import { useState } from "react";
import "../css/Modal.css";
import { Shortcut } from "../lib/types";

export default function ShortcutModal({
  shortcut,
  onClose,
  onRemove,
  onSubmit,
}: {
  shortcut?: Shortcut;
  onClose: () => void;
  onRemove: () => void;
  onSubmit: (shortcut: Shortcut) => void;
}) {
  const [fillBolean, setFillBolean] = useState<boolean>(false);

  const [key, setKey] = useState<string>(shortcut?.key || '');
  const [title, setTitle] = useState<string>(shortcut?.title || '');
  const [marked, setMarked] = useState<string>(shortcut?.marked || '');
  const [message, setMessage] = useState<string>(shortcut?.message || '@user você está sendo chamado por @owner!');

  return (
    <div onClick={onClose} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <div className="modal-header">
          {fillBolean ? (
            <div className="fill">Preencha todos os campos corretamente</div>
          ) : null}
          <input
            onChange={(ev) => {
              setFillBolean(false);
              setTitle(ev.target.value);
            }}
            type="text"
            maxLength={16}
            name="title"
            defaultValue={title}
            placeholder="Título do comando"
            required
          />
          <div className="close" onClick={onClose}>
            <div className="close-btn">
              <div className="cross">
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
              onKeyDownCapture={(ev) => {
                setFillBolean(false);
                setKey(ev.key);
              }}
              name="key"
              type="button"
              defaultValue={key}
              required
            />
          </div>
          <div className="modal-body-content-mention">
            <h2>Usuário Marcado:</h2>
            <input
              onChange={(ev) => {
                setFillBolean(false);
                setMarked(ev.target.value);
              }}
              defaultValue={marked}
              name="user"
              type="text"
              placeholder="BOTAR MENÇÃO AQUI"
              required
            />
          </div>
          <div className="modal-body-content-message">
            <h2>Mensagem</h2>
            <textarea
              onChange={(ev) => {
                setFillBolean(false);
                setMessage(ev.target.value);
              }}
              defaultValue={message}
              required
            />
          </div>
        </div>
        <div className="modal-footer">
          {shortcut == undefined ?  <button onClick={onClose}>Cancelar</button> : <button className="remove" onClick={onRemove}>Remover</button>}
          <button
            onClick={() =>{
              if (key === '' || title === '' || marked === '' || message === '') return setFillBolean(true)
              onSubmit({
                key: key,
                title: title,
                marked: marked,
                message: message,
              })
            }
          }
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
