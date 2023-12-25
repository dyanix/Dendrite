// import { Button } from "/Users/dyaneshdhawale/Desktop/Dendrite/dendrite/components/ui/button.tsx";
import logo from "/logo.svg"; 

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-14 px-4  border-b shadow-sm bg-white flex items-center">
            <div className=" md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-6 w-6 mr-2" /> 
                    <b>Dendrite</b>
                </div>
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full ">
                    {/* <Button size="sm" variant="outline">
                        Login
                    </Button> */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
