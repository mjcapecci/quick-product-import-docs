import React from 'react';
import usePossibleHeaders from '../../utils/usePossibleHeaders';

const DefaultTemplate = () => {
  const allPossibleHeaders = usePossibleHeaders().all;
  const headers = allPossibleHeaders.map((header) => header.label);

  const downloadDefaultTemplate = () => {
    const csvContent = 'data:text/csv;charset=utf-8,' + headers;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'QuickProductImport_Template.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <button onClick={() => downloadDefaultTemplate()}>
      Download Default Template
    </button>
  );
};

export default DefaultTemplate;
