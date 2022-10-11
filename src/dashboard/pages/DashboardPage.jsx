import React from 'react';
import { IconButton } from '@mui/material';
import {DashboardLayout} from '../layout/DashboardLayout';
import {NothingSelectedView, NoteView} from '../views';
import { AddOutlined } from '@mui/icons-material';

export const DashboardPage = () => {
    return (
        <DashboardLayout>
            <NothingSelectedView />
            {/*<NoteView />*/}

            <IconButton size='large' 
                        sx={{ color:'white', 
                              backgroundColor:'error.main',
                              ':hover':{ backgroundColor:'error.main',opacity:0.9 },
                              position:'fixed',
                              right:50,
                              bottom:50 }}>
                <AddOutlined sx={{ fontSize:30 }}/>        
            </IconButton>
        </DashboardLayout>
    )
}