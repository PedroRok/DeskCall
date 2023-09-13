import Shortcut from "./Shortcut"
import ShortcutModal from "./ShortcutModal"

export default function Plus(props: { setModalActive: Function, active: React.ReactElement}) {
    const newModal = <ShortcutModal active={props.active} setActive={props.setModalActive} shortcut={new Shortcut()} />
    return (
        <div className="cross-btn">
            <div
                onClick={() => props.setModalActive(newModal)}
                className="cross">
                <div className="vertical" />
                <div className="horizontal" />
            </div>
        </div>
    )
}