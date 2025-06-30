export default function Header({ title = "Default Title" }) {
    return (
        <h1 style={{
            color: "black",
            fontFamily: "Arial",
            textAlign: "center",
            fontSize: "2.5rem"
        }}>{title}</h1>
    )
}