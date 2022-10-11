import { NavBar, SideBar } from '../../ui';
import { Box } from "@mui/system";
import { Toolbar } from '@mui/material';


const drawerWidth = 240;

export const DashboardLayout = ({children}) => {
    return (
        <Box sx={{ display:'flex' }} >
            <NavBar drawerWidth={drawerWidth}/>
            <SideBar drawerWidth={drawerWidth}/>

            <Box component='main'
                 sx={{ flexGrow:1, p:3 }}>
                {/*TOOLBAR*/}
                <Toolbar />
                { children }
            </Box>

        </Box>
    )
}
