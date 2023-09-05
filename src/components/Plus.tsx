export default function Plus(props: { setModalActive: Function, active: boolean}) {
    return (
        <div className="cross-btn">
            <div
                onClick={() => props.setModalActive(props.active)}
                className="cross">
                <div className="vertical" />
                <div className="horizontal" />
            </div>
        </div>
    )
}