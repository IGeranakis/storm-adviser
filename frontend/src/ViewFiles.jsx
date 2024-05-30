// import React from 'react';
// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';

// const ViewFiles = ({ pdfUrlΑΑ }) => {
//     // Set the URL of the PDF.js worker
//     const pdfUrl = decodeURIComponent(localStorage.getItem('pdfUrl') || '');
//     const workerUrl = `//unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js`;
//     return (
//         <div style={{ height: '750px', width: '100%' }}>
//             <Worker workerUrl={workerUrl}>
//                 <Viewer fileUrl={pdfUrl} />
//             </Worker>
//         </div>
//     );
// };

// export default ViewFiles;

import React from 'react';
import { useParams } from 'react-router-dom';

const ViewFiles = () => {
  const { fileUrl } = useParams();

  return (
    <div>
      <h1>Viewing File: {fileUrl}</h1>
      <iframe src={fileUrl} style={{ width: '100%', height: '800px' }} />
    </div>
  );
};

export default ViewFiles;