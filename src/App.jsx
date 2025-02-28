import Exemplu from "@/components/Exemplu/Exemplu";
import Layout from "@/containers/Layout";
import Button from "@/objects/Button";

function App() {
    return (
        <>
            <Layout>
                <Exemplu />
                <Button classes="u-btn--1" href="#" title="Scroll sus">
                    Pula
                </Button>
            </Layout>
        </>
    );
}

export default App;
