import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const Editor: React.FC = () => {
  const [value, setValue] = useState('');

    useEffect(() => {
      if (typeof window !== 'undefined' && window.Quill) {
        // @ts-ignore
        window.Quill.register('modules/syntax', (Quill) => {
          // @ts-ignore
          Quill.import('modules/toolbar').DEFAULTS.handlers.syntax = () => {
            // You might want to add custom logic here, but for basic usage,
            // Quill will automatically toggle the code block format.
          };
        });
      }
    }, []);

  const modules = {
      toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']
      ],
    syntax: true, // Enable syntax highlighting
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'direction',
    'align',
    'link', 'image', 'video'
  ];

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      modules={modules}
      formats={formats}
      className="bg-white border rounded-md h-96"
    />
  );
};

export default Editor;
