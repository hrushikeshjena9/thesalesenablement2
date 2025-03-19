import React from 'react'
import { AuthProvider } from './AuthContext'
import { TabProvider } from './TabContext'
import { ContactApiProvider } from './ContactContextApi'
import { ServiceApiProvider } from './ServiceContextApi'

function ContextProviders({ children }) {
    return (
        <>
        <ServiceApiProvider>
            <ContactApiProvider>
                <AuthProvider>
                    <TabProvider>
                        {children}
                    </TabProvider>
                </AuthProvider>
            </ContactApiProvider>
        </ServiceApiProvider>

        </>
    )
}

export default ContextProviders