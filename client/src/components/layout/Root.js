import UserProvider from '../user/UserProvider.js'


export default function Root({children}) {
    return(
        <div className='root_container'>
            <UserProvider>
                {children}
            </UserProvider>
        </div>
    )
}
