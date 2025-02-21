import { languages } from "./data/languages";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
    return (
        <>
            <Header />
            <Main languages={languages}/>
        </>
    )
}

export default App
