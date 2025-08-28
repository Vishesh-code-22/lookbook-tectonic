import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div className="h-screen w-screen">
            <Outlet />
        </div>
    );
};

export default App;
