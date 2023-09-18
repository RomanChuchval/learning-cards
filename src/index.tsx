import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from 'app'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { theme, router } from 'common'
import 'react-toastify/dist/ReactToastify.css'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </Provider>
)

reportWebVitals()
