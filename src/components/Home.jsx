import React from 'react'

import { AddCategory, GifGrid } from "../components";
import { Button } from '@mui/material';
import { getAuth, signOut } from 'firebase/auth'
import FirebaseConfig from '../firebase-config'
const auth = getAuth(FirebaseConfig);


export const Home = ({ onAddCategory, categories, emailUser }) => {
    return (
        <>
            <h4>Bienvenido {emailUser} <Button onClick={()=>signOut(auth)  } >Logout</Button> </h4>
            <AddCategory onNewCategory={onAddCategory} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))

            }
        </>
    )
}
