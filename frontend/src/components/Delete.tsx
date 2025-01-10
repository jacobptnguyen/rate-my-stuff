import '../styles/Comment.css'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Delete = () => {

    let navigate = useNavigate()
    let params = useParams()

    const deleteStuff = async () => {
        try{
            await fetch('/api/stuff/' + params.id, {
                method:"DELETE"
            })
            navigate('/')
        } catch (error){
            console.log(`Error: ${error}`)
        }
    }

    useEffect(() => {
        deleteStuff()
    }, [])

    return (
        <div className='comment'>
            Deleting...
        </div>
    )
}

export default Delete