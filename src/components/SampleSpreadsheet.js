import React from 'react';
import SampleCSV from '../../utils/sample';

const SampleSpreadsheet = () => {
  const downloadSampleSpreadsheet = () => {
    const csvContent = 'data:text/csv;charset=utf-8,' + SampleCSV();
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'QuickProductImport_Sample.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <button onClick={() => downloadSampleSpreadsheet()}>Download Sample</button>
  );
};

export default SampleSpreadsheet;
