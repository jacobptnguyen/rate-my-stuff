import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = () => {

    const [stuff, setStuff] = useState<any>({
        title:'',
        rating:'',
        comment:'',
        image:''
    })

    let navigate = useNavigate()
    let params = useParams()
    

    const fetchStuff = async () => {
        try{
            const res = await fetch('/api/stuff/' + params.id, {
                method:'GET'
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

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        
        await fetch('/api/stuff/' + params.id, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(stuff)
        })
        navigate('/')
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input className='formInput' placeholder='title' onChange={(e) => setStuff({...stuff, title: e.target.value})} required value={stuff.title}></input>
            <input className='formInput' placeholder='rating' onChange={(e) => setStuff({...stuff, rating: e.target.value})} required value={stuff.rating}></input>
            <input className='formInput' placeholder='comments' onChange={(e) => setStuff({...stuff, comment: e.target.value})} required value={stuff.comment}></input>
            <input className='formInput' placeholder='image url' onChange={(e) => setStuff({...stuff, image: e.target.value})} required value={stuff.image}></input>
            <button className='submit' type='submit' >Submit</button>
        </form>
    )
}

export default Edit