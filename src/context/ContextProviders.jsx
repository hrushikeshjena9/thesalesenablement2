import React from 'react'
import { AuthProvider } from './AuthContext'
import { TabProvider } from './TabContext'
import { ContactApiProvider } from './ContactContextApi'
import { ServiceApiProvider } from './ServiceContextApi'
import { CourseApiProvider } from './CourseContextApi'

function ContextProviders({ children }) {
    return (
        <>
        <CourseApiProvider>
            <ServiceApiProvider>
            <ContactApiProvider>
                <AuthProvider>
                    <TabProvider>
                        {children}
                    </TabProvider>
                </AuthProvider>
            </ContactApiProvider>
        </ServiceApiProvider>
        </CourseApiProvider>

        </>
    )
}

export default ContextProviders