import React from 'react'
import Editor from './Editor'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-700">React Quill Editor</h1>
      <div className="w-full max-w-3xl shadow-lg rounded-lg overflow-hidden">
        <Editor />
      </div>
    </div>
  )
}

export default App
