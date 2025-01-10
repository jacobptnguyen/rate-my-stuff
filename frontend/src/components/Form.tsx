import '../styles/Form.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const [stuff, setStuff] = useState<any>({
        title:'',
        rating:'',
        comment:'',
        image:''
    })

    let navigate = useNavigate()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        
        await fetch('/api/stuff', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(stuff)
        })
        navigate('/')
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input className='formInput' placeholder='title' onChange={(e) => setStuff({...stuff, title: e.target.value})} required></input>
            <input className='formInput' placeholder='rating (e.g., 5/5)' onChange={(e) => setStuff({...stuff, rating: e.target.value})} required></input>
            <input className='formInput' placeholder='comments' onChange={(e) => setStuff({...stuff, comment: e.target.value})} required></input>
            <input className='formInput' placeholder='image url' onChange={(e) => setStuff({...stuff, image: e.target.value})} required></input>
            <button className='submit' type='submit'>Submit</button>
        </form>
    )
}

export default Form