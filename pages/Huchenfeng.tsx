import React from 'react';
import { FileViewer } from '../components/FileViewer';

export const Huchenfeng: React.FC = () => {
  return (
    <FileViewer 
      title="户晨风录播 / 媒体文件" 
      configPath="/oss-config/huchenfeng.txt"
      heroImage="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2068&auto=format&fit=crop"
      showSeparator={false}
    />
  );
};