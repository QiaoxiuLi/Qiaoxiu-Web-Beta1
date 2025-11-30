import React from 'react';
import { FileViewer } from '../components/FileViewer';

export const SchoolMedia: React.FC = () => {
  return (
    <FileViewer 
      title={<>学校播控任务中<br />遗留下来的媒体文件</>} 
      configPath="/oss-config/school-media.txt" 
      heroImage="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2070&auto=format&fit=crop"
      showSeparator={false}
    />
  );
};