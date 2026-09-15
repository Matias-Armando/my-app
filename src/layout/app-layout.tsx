import { Menu } from "@/components/menu";
import { Footer} from "@/pages/footer";
import { Outlet } from "react-router-dom";

export function AppLayout() {
    return (
        <main  className="min-h-screen overflow-hidden bg-[#0d0d0e] text-[#f6f3ed]">
            <Menu/>
            

               
            <Outlet/>
<Footer id="footer"/>
     

        


        </main>
    )
}