"use client";

import type React from "react";

import { useState } from "react";
import {
  IconFolder,
  IconUsers,
  IconDotsVertical,
  IconDownload,
  IconTrash,
  IconPlus
} from "@tabler/icons-react";



interface FileItem {
  id: string;
  name: string;
  type: "folder" | "file";
  size?: string;
  members?: number;
  date: string;
}

export default function FileManager() {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<FileItem[]>([
    {
      id: "1",
      name: "Design Assets",
      type: "folder",
      members: 3,
      date: "2 days ago",
    },
    {
      id: "2",
      name: "Documents",
      type: "folder",
      members: 5,
      date: "1 week ago",
    },
    {
      id: "3",
      name: "Project Report.pdf",
      type: "file",
      size: "2.4 MB",
      date: "3 days ago",
    },
    {
      id: "4",
      name: "Presentation.pptx",
      type: "file",
      size: "5.1 MB",
      date: "5 days ago",
    },
  ]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    console.log("Dropped files:", droppedFiles);
    // Handle file upload logic here
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      console.log("Selected files:", Array.from(selectedFiles));
      // Handle file upload logic here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50/30">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-balance text-2xl font-bold text-slate-900">
                My Workspace
              </h1>
              <p className="text-sm text-slate-500">Manage your folders</p>
            </div>
          </div>
        </div>

     

        {/* Files and Folders List */}
        <div className="space-y-3">

          {files.map((item) => (
            <div
              key={item.id}
              className="group flex items-center justify-between rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all duration-200 hover:shadow-md hover:ring-violet-600/20"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl
                       "bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white bg-slate-100 text-slate-600 group-hover:bg-slate-600 group-hover:text-white"
                   transition-all duration-200`}
                >
                  <IconFolder size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">{item.name}</h3>
                  <div className="mt-1 flex items-center gap-3 text-sm text-slate-500">
                    {item.size && <span>{item.size}</span>}
                    {item.members && (
                      <span className="flex items-center gap-1">
                        <IconUsers size={14} />
                        {item.members}
                      </span>
                    )}
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-violet-100 hover:text-violet-600">
                  <IconDownload size={18} />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-red-100 hover:text-red-600">
                  <IconTrash size={18} />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100">
                  <IconDotsVertical size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>


           {/* Upload Area */}
        <div className="mt-8">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`group relative overflow-hidden rounded-2xl border-2 border-dashed bg-white p-5 transition-all duration-300 ${
              isDragging
                ? "border-violet-600 bg-violet-50/50 shadow-lg shadow-violet-600/10"
                : "border-slate-200 hover:border-violet-400 hover:bg-violet-50/30"
            }`}
          >
            <div className="flex flex-row items-center justify-center ">
                <IconPlus size={28} className="text-violet-600 mb-3" />
                <p>Sozdat papku</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
