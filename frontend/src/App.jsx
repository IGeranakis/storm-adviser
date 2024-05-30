import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';

import MyContent from './MyContent'

import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import ViewFiles from './ViewFiles';

const API_KEY="sk-proj-sOFcEKF62Aq1N4nTGqjQT3BlbkFJix6sRReOOIQoWnLpHtPd";

function App() 
{
  const [variables, setVariables] = useState({});
  const [pdfUrl, setPdfUrl] = useState('');

  return(
      <Routes>
        <Route path="/" element={<MainPage setVariables={setVariables} setPdfUrl={setPdfUrl} />} />
        <Route path="/content" element={<MyContent variables={variables}/>} />
        <Route path='/file:///:fileUrl' element={<ViewFiles />} />
      </Routes>
  )
  
}

export default App
