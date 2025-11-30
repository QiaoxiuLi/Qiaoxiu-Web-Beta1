import React from 'react';
import { FileViewer } from '../components/FileViewer';

export const Club: React.FC = () => {
  return (
    <FileViewer 
      title="融高部技术指导小组" 
      configPath="/oss-config/club.txt"
      heroImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
      showSeparator={false}
    />
  );
};