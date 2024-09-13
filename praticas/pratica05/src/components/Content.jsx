import "./Content.css"

function Content(props) {
    return (
        <main className={props.style}>{props.children}</main>
    )
}

export default Content