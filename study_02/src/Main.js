import MainVisual from "./MainVisual"
import SetCount from "./SetCount"
import ToggleClass from "./ToggleClass"

export default function Main() {
    return (
        <>
            <main className="mainVisual">
                <MainVisual />
                <SetCount />
                <ToggleClass />
            </main>
        </>
    )
}