import UserProvider from '../user/UserProvider.js'

export default function Root({children}) {
    return(
        <div className='main_container'>
            <UserProvider>
                {children}
            </UserProvider>
        </div>
    )
}
