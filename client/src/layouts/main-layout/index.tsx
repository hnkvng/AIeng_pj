import { ReactElement } from "react"


const MainLayout = ({children} : {children: ReactElement}) : ReactElement => {
    return (
        <>
            {children}
        </>
    )
}

export default MainLayout;