import { useEffect , useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from "@/app/components/Header";
import firebaseConfig from "@/app/components/firebaseConfig";


export default function MyApp({Component, pageProps}){

    const [appInitialized, setAppInitialized] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInformation, setUserInformation] = useState(null);

    // initialize frebase
    useEffect(() => {
        initializeApp(firebaseConfig);
        setAppInitialized(true);

    }, []);

    //user has loaded page, check their status and set state accordingly

    useEffect(() => {
        if (appInitialized) {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    //User is signed in, see docs for a list of available 
                    setUserInformation(user);
                    setIsLoggedIn(true);
                }else{
                    //user is signed out
                    setUserInformation(null);
                    setIsLoggedIn(false);
                }
                //whenever state changes setLoading to false
                setIsLoading(false);
                
            });
        }
    }, [appInitialized]);

    if (isLoading) return null; 

    return (
        <>
            <Header />
            <Component
                {...pageProps}
                isLoggedIn={isLoggedIn}
                userInformation={userInformation}
            />
            
        </>
    );
}