import Gear from "./Gear";
import Shortcut from "./Shortcut";
import ShortcutModal from "./ShortcutModal";

export default function ShortcutBtn(props: { shortcut: Shortcut, setModal: Function, activeModal: React.ReactElement }) {
    return (
        <div className="shortcut">
            <h1 >{props.shortcut.getTitle()}</h1>
            <div
                onClick={() => {
                     console.log("clicked")
                }}
                className="shortcut-btn">
                <h1>{props.shortcut.getKey()}</h1>
                <div className="gear">
                    <div
                        onClick={(e) => {
                            props.setModal(<ShortcutModal active={props.activeModal} setActive={props.setModal} shortcut={props.shortcut} />)
                            e.stopPropagation()
                        }}
                        className="gear-btn">
                        <Gear color="#888" />
                    </div>
                </div>
            </div>
        </div>
    )
}