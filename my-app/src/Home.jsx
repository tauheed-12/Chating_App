import Input from "./Components/Input";
import Navbar from "./Components/Navbar.jsx";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
function Home({DisplayName}){
    return (
        <div className="home">
            <div className="Sidebar">
            <Sidebar />
            </div>
            <div className="Messages">
            <Navbar />
            <Chat DisplayName={DisplayName}/>
            </div>
        </div>
    )
}
export default Home;