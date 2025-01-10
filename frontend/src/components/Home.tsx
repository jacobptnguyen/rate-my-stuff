import '../styles/Home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Comment.css'

const Home = () => {

    const [stuffArray, setStuffArray] = useState<any>([])

    const fetchStuff = async () => {
        try{
            const res = await fetch('api/stuff', {
                method:"GET"
            })
            const data = await res.json()
            setStuffArray(data)
        } catch (error){
            console.log(`Error: ${error}`)
        }
    }

    useEffect(() => {
        fetchStuff()
    }, [])

    const [backgroundColor, setBackgroundColor] = useState('#ecf0f1')
    const [stuffColor, setStuffColor] = useState('#d0d3d4')
    const [textColor, setTextColor] = useState('black')
    const [mode, setMode] = useState('read')

    const readMode = () => {
        setMode('read')
    }

    const editMode = () => {
        setMode('edit')
    }

    const deleteMode = () => {
        setMode('delete')
    }

    const changeTheme = () => {
        if (backgroundColor === '#ecf0f1'){
            setBackgroundColor('#626567')
        }else{
            setBackgroundColor('#ecf0f1')
        }

        if (stuffColor === '#d0d3d4'){
            setStuffColor('#4d5656')
        }else{
            setStuffColor('#d0d3d4')
        }

        if (textColor === 'black'){
            setTextColor('#ecf0f1')
        }else{
            setTextColor('black')
        }
    }

    const heading = (
        <div className='home'>
            <Link to='/' className='link' style={{backgroundColor:backgroundColor, color:textColor}}>
                <h1>Rate My Stuff</h1>
            </Link>
            <div className='home'>
                <button className='link' style={{backgroundColor:backgroundColor, color:textColor}} onClick={changeTheme}>Change Theme</button>
                <button className='link' style={{backgroundColor:backgroundColor, color:textColor}} onClick={deleteMode}>Delete</button>
                <button className='link' style={{backgroundColor:backgroundColor, color:textColor}} onClick={editMode}>Edit</button>
                <Link to='/form' className='link' style={{backgroundColor:backgroundColor, color:textColor}}>Rate</Link>
            </div>
        </div>
    )

    const editHeading = (
        <div className='home'>
            <h1>Edit My Stuff</h1>
            <div className='home'>
                <button className='link' style={{backgroundColor:backgroundColor, color:textColor}} onClick={readMode}>Done</button>
            </div>
        </div>
    )

    const deleteHeading = (
        <div className='home'>
            <h1>Delete My Stuff</h1>
            <div className='home'>
                <button className='link' style={{backgroundColor:backgroundColor, color:textColor}} onClick={readMode}>Done</button>
            </div>
        </div>
    )

    useEffect(() => {
        document.body.style.backgroundColor = backgroundColor
    }, [backgroundColor, stuffColor, textColor])

    
    if (stuffArray.length === 0 && mode === 'read') {
        return (
            <>
                {heading}
                <div className='comment' style={{color:textColor}}>
                    No Ratings to Display
                </div>
            </>
        )
    }

    if (stuffArray.length === 0 && mode === 'edit') {
        return (
            <>
                {editHeading}
                <div className='comment' style={{color:textColor}}>
                    No Ratings to Edit
                </div>
            </>
        )
    }

    if (stuffArray.length === 0 && mode === 'delete') {
        return (
            <>
                {deleteHeading}
                <div className='comment' style={{color:textColor}}>
                    No Ratings to Delete
                </div>
            </>
        )
    }

    if (mode === 'read'){    
        return (
            <>
                {heading}
                <div className='homeDiv'>
                    {stuffArray.map((stuff: any) => {
                        return(
                            <div className='stuff' style={{backgroundColor:stuffColor}}>
                                <div className='stuffDiv'>
                                    <img src={stuff.image} alt={stuff.title}></img>
                                </div>
                                <div className='stuffDiv'>
                                    <p style={{color:textColor}}>{stuff.title}</p>
                                    {stuff.rating}
                                    <Link to={'/comment/' + stuff._id} className='link' style={{backgroundColor:stuffColor, color:textColor}}>Comments</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
    if (mode === 'edit'){
        return (
            <>
                {editHeading}
                <div className='homeDiv'>
                    {stuffArray.map((stuff: any) => {
                        return(
                            <Link to={'/edit/' + stuff._id} className='link'>
                                <div className='stuff' style={{backgroundColor:stuffColor}}>
                                    <div className='stuffDiv'>
                                        <img src={stuff.image} alt={stuff.title} style={{color:textColor}}></img>
                                    </div>
                                    <div className='stuffDiv'>
                                        <p style={{color:textColor}}>{stuff.title} </p>
                                        <div style={{color:textColor}}>{stuff.rating}</div>
                                        <div style={{color:textColor}}>comments</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </>
        )
    }
    if (mode === 'delete'){
        return (
            <>
                {deleteHeading}
                <div className='homeDiv'>
                    {stuffArray.map((stuff: any) => {
                        return(
                            <Link to={'/delete/' + stuff._id} className='link'>
                                <div className='stuff' style={{backgroundColor:stuffColor}}>
                                    <div className='stuffDiv'>
                                        <img src={stuff.image} alt={stuff.title} style={{color:textColor}}></img>
                                    </div>
                                    <div className='stuffDiv'>
                                        <p style={{color:textColor}}>{stuff.title} </p>
                                        <div style={{color:textColor}}>{stuff.rating}</div>
                                        <div style={{color:textColor}}>comments</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default Home