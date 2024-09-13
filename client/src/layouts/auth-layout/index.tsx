import { ReactElement } from "react"


const AuthLayout = ({children} : {children: ReactElement}) : ReactElement => {
    return (
        <>
            {children}
        </>
    )
}

export default AuthLayout;