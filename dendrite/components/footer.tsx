import logo from "/logo.svg"; 
import { Button } from "./ui/button";

const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full p-4  border-t  bg-slate-100 flex items-center">
            <div className=" md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
            <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-6 w-6 mr-2" /> 
                    {/* <b>Dendrite</b> */}
                </div>
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">

                    <Button size="sm" variant="ghost">
                       Privacy Policy
                    </Button>
                    <Button size="sm" variant="ghost" >
                       Terms Of Service
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Footer;