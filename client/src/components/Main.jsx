import Mails from "./pages/Mails";
import Menu from "./pages/Menu";
import Panel from "./pages/Panel";

const Main = () => {
    return ( 
        <main className="flex">
            <Menu />
            <Mails />
            <Panel />
        </main>
     );
}
 
export default Main;