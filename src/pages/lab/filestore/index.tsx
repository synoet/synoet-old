import React, { useEffect, useState, useCallback } from "react"
import { Layout } from "@components"
import { Title } from "~/components/Atoms"
import DropZone from 'react-dropzone';
import axios from 'axios';

type FileItemProps = {
  name: string,
  type: string,
  date: string,
  content: string,
}

const FileItem = ({name, type, date, content}: FileItemProps) => {
  
  return (
    <div className = "flex text-primary w-full h-10flex-row space-x-5 rounded-md justify-between items-center w-full bg-tertiary p-4">
      <div className = "rounded-full border-2 border-accent  w-10 h-10 flex flex-col justify-center items-center">
       <p className = "text-white text-xs">{type}</p>
      </div>
      <p className = "text-primary text-xs">{name.substring(0, 10)}...</p>
      {console.log(content)}
      <div className = "hover:opacity-50"><a download={name} href={content}><DownloadIcon /></a></div>
    </div>
  )
}

function DownloadIcon(props: any) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 100-18 9 9 0 000 18zM11 7v6.586l-2.293-2.293-1.414 1.414L12 17.414l4.707-4.707-1.414-1.414L13 13.586V7h-2z"
        fill="#94A3B8"
      />
    </svg>
  )
}


const FileStore = () => {
  const [selectedFile, setSelectedFile] = useState<any>(undefined);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [increment, setIncrement] = useState<number>(0);
  const [allFiles, setFilesAll] = useState<any>(undefined);

  useEffect(() => {
    fetch('https://oueapgyk3k.execute-api.us-east-1.amazonaws.com/files', {
      method: 'GET'
    }).then(res => res.json() 
    ).then((res: any) => {
      setFilesAll(res);
    }).catch(error => {
      console.log(error);
    })
  }, [increment])

  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const binaryStr = reader.result;
        const fileData = {
          info: {
            path: file.path,
            size: file.size,
            type: file.type
          },
          content: binaryStr
        }
        setSelectedFile(fileData);
        console.log(fileData);
        
      }

      reader.readAsDataURL(file);
    
    })
  }, [])

  const onCancel = () => 
    setSelectedFile(undefined);
  
  const onUpload = () => {
    setIsUploading(true);
    console.log(selectedFile);
    fetch('https://oueapgyk3k.execute-api.us-east-1.amazonaws.com/files/upload', {
      method: 'POST',
      body: JSON.stringify(selectedFile)
    }).then((res: any) => {
      console.log(res);
      setIncrement(increment + 1);
      setIsUploading(false);
      setSelectedFile(undefined);
    }).catch(err => {
      console.log(err);
    })
  }
  
    
  return (
    <Layout>
      <div className="mb-5 space-y-2">
        <p className="text-xl text-white">
          teonys:<span className="border-none text-accent">lab</span>:
          <span className="border-none text-tertiary">filestore</span>
        </p>
        <p className="text-md text-white text-secondary">
          Chunked B64 Files stored in dynamodb, build with serverless/typescript
        </p>
      </div>
      <div className="h-auto w-full border-2 border-tertiary p-4 grid grid-cols-2">
        <div className = "flex p-4 flex-col justify-center items-center">
          <div className="p-10 w-full h-full border-2 border-accent bg-transparent rounded-md  flex flex-col space-y-4 justify-center items-center">
            {!selectedFile && 
            <DropZone
              onDrop = {onDrop}
              accept = "image/*,application/pdf"
            >
                {({getRootProps, getInputProps}) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className = 'text-center'>
                      <p>Drag files to upload</p>
                      <p className = "text-sm">or <span className = "hover:text-accent cursor-pointer">browse</span></p>
                    </div>
                  </div>
                )}
            </DropZone>
            }
            {selectedFile && !isUploading &&
              <div className = ' flex flex-col items-start'>
                <p className = "text-primary text-xs">File Name: {selectedFile.info.path}</p>
                <p className = "text-xs">Size: {selectedFile.info.size} bytes</p>
                <p className = "text-xs">Type: {selectedFile.info.type}</p>
                <div className = "flex flex-row w-full justify-start space-x-5 mt-5">
                  <button onClick = {onUpload} className = "text-accent hover:text-tertiary">Upload</button>
                  <button onClick = {onCancel} className = "text-error hover:text-tertiary">Cancel</button>
                </div>
              </div>
            }
            {isUploading &&
              <div className ="w-full h-full flex flex-col items-center justify-center">
                <div className = "dot-pulse" />
              </div>
              
            }
          </div>
        </div>
        <div className = "flex p-2 flex-col w-full justify-center items-center">
          <Title>UPLOADED FILES</Title>
          <div className = "flex flex-col overflow-y-scroll h-full p-4  side_bar space-y-5">
            {allFiles &&
              allFiles.map((file: any) => {
                return (
                  <FileItem name = {file.name} type = {file.type.substr(file.type.indexOf("/") + 1).toUpperCase()} date = {file.date} content = {file.content}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FileStore
