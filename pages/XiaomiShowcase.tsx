import React from 'react';
import { FileViewer } from '../components/FileViewer';

export const XiaomiShowcase: React.FC = () => {
  return (
    <FileViewer 
      title="小米15周年发布会灯光复刻" 
      configPath="/oss-config/xiaomi-showcase.txt"
      heroImage="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
      showSeparator={false}
    />
  );
};