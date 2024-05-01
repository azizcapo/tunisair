import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import OneDocument from './OneDocument'
import AddDocument from './AddDocument'


const Document = ({reunion}) => {
  const [reload ,setReload] = useState(false)
  const [Document,setDocument] = useState([])
  const [Documents,setDocuments] = useState([])

  const fetchDocuments = async () => {
    try {
      const response = await axios.get(`http://localhost:3010/api/document/getAllByReunion/${reunion.id}`)
      setDocuments(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchDocuments()
  },[reload])


  return (
    <div className='filiales'>  
    <div className='filiales-header'>
    <p className='filiales-titre'>Documents</p>
    <AddDocument reunion={reunion} reload={reload} setReload={setReload} />
    </div>
    <div className='filiales-container'>
        {
            Documents.map((document,index)=>{
                return <OneDocument key={index} document={document} reload={reload} setReload={setReload} />
            })
        }
    </div>
    <ToastContainer />
</div>
  )
}

export default Document