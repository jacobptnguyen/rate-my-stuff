import { Link, useParams } from 'react-router-dom'
import '../styles/Comment.css'
import { useState, useEffect } from 'react'

const Comment = () => {

    const [stuff, setStuff] = useState<any>([])

    let params = useParams()

    const fetchStuff = async () => {
        try{
            const res = await fetch('/api/stuff/' + params.id, {
                method:"GET"
            })
            const data = await res.json()
            setStuff(data)
        } catch (error){
            console.log(`Error: ${error}`)
        }
    }

    useEffect(() => {
        fetchStuff()
    }, [])

    return (
        <div className='comment'>
            {stuff.comment}
            <Link to='/' className='link'>Done</Link>
        </div>
    )
}

export default Comment