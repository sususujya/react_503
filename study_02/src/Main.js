import MainVisual from "./MainVisual"
import SetCount from "./SetCount"
import ToggleClass from "./ToggleClass"
import SectionCustomer from "./SectionCustomer"
import Map from "./Map"

export default function Main() {
    const Test = ({ name }) => {
        return (
            <div>
                {name}
                Test Component
            </div>
        )
    }
    return (
        <>
            <main className="mainVisual">
                <MainVisual />
                <Test name='Oii Oiii' />
                <SectionCustomer name='Louis' age='Kill My Mind' color="#f00" />
                <SectionCustomer name='Tomlinson' age='Habit' color="#ff0" />
                <SectionCustomer name='Wonderful' age='Copy of a Copy of a Copy' color="#f0f" />
                <SectionCustomer name='Album' color="#00f" />
                <SetCount />
                <ToggleClass />
                <Map />
            </main>
        </>
    )
}