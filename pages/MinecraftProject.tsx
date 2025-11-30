import React from 'react';
import { FileViewer } from '../components/FileViewer';

export const MinecraftProject: React.FC = () => {
  return (
    <FileViewer 
      title="中学生心理健康与教育服务平台" 
      configPath="/oss-config/minecraft-project.txt"
      heroImage="https://images.unsplash.com/photo-1605218427306-022ba78fa068?q=80&w=2038&auto=format&fit=crop"
      showSeparator={false}
    />
  );
};