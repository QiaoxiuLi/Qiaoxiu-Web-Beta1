import React from 'react';
import { FileViewer } from '../components/FileViewer';

export const JinanProject: React.FC = () => {
  return (
    <FileViewer 
      title="济安复刻项目" 
      configPath="/oss-config/jinan-project.txt"
      heroImage="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop"
      showSeparator={false}
    />
  );
};