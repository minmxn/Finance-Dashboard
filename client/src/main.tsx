import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import '@/index.css'
import {Provider}  from "react-redux"
import { configureStore } from '@reduxjs/toolkit'
import {api} from "@/state/api"
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer : {[api.reducerPath] : api.reducer},
  middleware: (getDefault) => getDefault().concat(api.middleware),
})
setupListeners(store.dispatch)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store = {store}>
    <App />
  </Provider>,
)