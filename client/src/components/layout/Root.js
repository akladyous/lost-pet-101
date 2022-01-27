import React from 'react';

import UserProvider from "../users/UserProvider.js";

export default function Root({children}) {
    return(
        <div>
            <UserProvider>
                {children}
            </UserProvider>
        </div>
    )
}
