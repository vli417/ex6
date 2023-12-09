//import { useEffect, useState } from 'react';
//import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
//import Header from "@/app/components/Header";


import { useEffect } from 'react';
import { useRouter } from "next/router";
import UserProfileCard from '@/app/components/UserProfileCard';

//import firebaseConfig from "@/app/components/firebaseConfig";


export default function UserProfile({isLoggedIn, userInformation}){
    const router = useRouter();
    useEffect(() => {
        //if user is not logged in, send them to login page
        if(!isLoggedIn) router.push("/login");
    }, [isLoggedIn]);


    //const [isLoggedIn, setIsLoggedIn] = useState(null);
    //const [user, setUser] = useState(null);


    /*useEffect(() => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        //Check if logged in
        setIsLoggedIn(true)


        //set user info if logged in

        setUser({});
    },[]);

    //if user is not logged in, forward them to login page
    if(!isLoggedIn) return null;

    */

    return (
        
        <main> 
            <h1>User Profile</h1>
            <UserProfileCard user={userInformation} />
        </main> 
    ); 
}