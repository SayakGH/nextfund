import { SignIn } from "@clerk/nextjs";

export default function userSignIn(){
    return(
        <div className="flex items-center justify-center h-screen">
            <SignIn forceRedirectUrl={'dashboard'} />
        </div>
    );
}