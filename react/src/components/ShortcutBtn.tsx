import Gear from "./Gear";
import { Shortcut } from "../lib/types";

export default function ShortcutBtn(props: {
  shortcut: Shortcut;
  onClick: () => void;
}) {
  return (
    <div className="shortcut">
      <h1>{props.shortcut.title}</h1>
      <div
        onClick={() => {
          console.log("clicked");
        }}
        className="shortcut-btn"
      >
        <h1>{props.shortcut.key}</h1>
        <div className="gear">
          <div
            onClick={(e) => {
              e.stopPropagation();
              props.onClick();
            }}
            className="gear-btn"
          >
            <Gear color="#888" />
          </div>
        </div>
      </div>
    </div>
  );
}
