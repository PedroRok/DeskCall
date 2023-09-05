import Gear from "./Gear";

export default function ShortcutBtn(props: {description: string, keyboard: string}) {
    return (
        <div className="shortcut">
            <h1 >{props.description}</h1>
            <div className="shortcut-btn">
                <h1>{props.keyboard}</h1>
                <div className="gear">
                    <div className="gear-btn">
                        <Gear color="#888"/>
                    </div>
                </div>
            </div>
        </div>
    )
}