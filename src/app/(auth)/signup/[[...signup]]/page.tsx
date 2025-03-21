import { SignUp } from "@clerk/nextjs";

export default function userSignUp(){
    return(
        <div className="flex items-center justify-center h-screen">
            <SignUp forceRedirectUrl={'dashboard'}/>
        </div>
    );
}