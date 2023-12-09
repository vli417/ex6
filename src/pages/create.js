import Header from "@/app/components/Header";

import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import CreateUserForm from "@/app/components/CreateUserForm";


export default function CreateUser({ isLoggedIn }){


    const router = useRouter();
    useEffect(() => {
        //if user is logged in, send them to profile
        if (isLoggedIn) router.push("/");
    }, [isLoggedIn]);


    return(
        
        <main>
            <h1>Create User</h1>
            <CreateUserForm /> 
        </main>
        
    );
};