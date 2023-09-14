export default function Plus(props: { onClick: () => void }) {
  return (
    <div onClick={props.onClick} className="cross-btn">
      <div className="cross">
        <div className="vertical" />
        <div className="horizontal" />
      </div>
    </div>
  );
}
