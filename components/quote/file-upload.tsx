'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Upload, X, File } from 'lucide-react'

interface FileUploadProps {
  files: any[]
  onUpdateFiles: (files: any[]) => void
}

export function FileUpload({ files, onUpdateFiles }: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified
      }))
      
      onUpdateFiles([...files, ...newFiles])
    }
  }
  
  const removeFile = (index: number) => {
    const updatedFiles = [...files]
    updatedFiles.splice(index, 1)
    onUpdateFiles(updatedFiles)
  }
  
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' bytes'
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB'
    else return (bytes / 1048576).toFixed(1) + ' MB'
  }
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold mb-4">Загрузить файлыs</h3>
      
      <div className="space-y-2">
        <Label htmlFor="file-upload">Загрузите свои файлы дизайна или ссылки</Label>
        <div 
          className="border-2 border-dashed rounded-lg p-10 text-center cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground mb-2">Перетащите ваши файлы сюда или нажмите для просмотра</p>
          <p className="text-sm text-muted-foreground">
            Допустимые форматы: PDF, AI, PSD, JPG, PNG, EPS (не более 50 МБ)
          </p>
          <Input
            ref={fileInputRef}
            id="file-upload"
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
      
      {files.length > 0 && (
        <div className="space-y-4">
          <h4 className="font-medium">Загруженные файлы</h4>
          <div className="border rounded-lg divide-y">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <File className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-muted-foreground">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => removeFile(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="instructions">Особые указания (необязательно)</Label>
        <textarea
          id="instructions"
          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Какие-либо конкретные инструкции по работе с вашими файлами или дополнительная информация о вашем дизайне."
        />
      </div>
    </div>
  )
}