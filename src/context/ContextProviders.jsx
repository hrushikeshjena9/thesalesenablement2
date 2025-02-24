import React from 'react'
import { AuthProvider } from './AuthContext'
import { TabProvider } from './TabContext'
import { ContactApiProvider } from './ContactContextApi'

function ContextProviders({ children }) {
    return (
        <>
        <ContactApiProvider>
            <AuthProvider>
                <TabProvider>

                        {children}
                </TabProvider>
            </AuthProvider>
            </ContactApiProvider>

        </>
    )
}

export default ContextProviders