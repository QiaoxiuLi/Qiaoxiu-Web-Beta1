import React from 'react';
import { Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            联系李某
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            无论是项目咨询还是相关合作，我随时期待您的来信，或者在下方填写您的信息，如果我有空的话，会看看。
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 w-full">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">联系方式</h3>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-100 text-brand-600">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h5 className="text-lg font-medium text-slate-900">发送邮件</h5>
                <p className="mt-1 text-slate-500">mcliqiaoxiu@outlook.com</p>
                <p className="text-sm text-slate-400">希望我会在24小时内回复</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 w-full">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">姓名</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-slate-50 border p-3" 
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">电话</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-slate-50 border p-3" 
                    placeholder="联系电话"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">邮箱</label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-slate-50 border p-3" 
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">需求描述</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-slate-50 border p-3" 
                  placeholder="请简要描述您的项目需求..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <Send className="mr-2 h-4 w-4" />
                提交信息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};