import React,{useState,useEffect} from 'react';

export default function DarkMode() {
    
    const[btn,setbtn]=useState("Enable Dark Mode");

    const[myStyle,setmyStyle] = useState({
        color: 'black',
        backgroundColor:'white'
    })

    const changeMode = () => {
        if(myStyle.backgroundColor==='white')
        {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            setbtn("Enable Light Mode");
        }
        else
        {
            setmyStyle({
                color:'black',
                backgroundColor: 'white'
            });
            setbtn("Enable Dark Mode");
        }
    }

    useEffect(() => {
        document.body.style.backgroundColor = myStyle.backgroundColor;
        document.body.style.color = myStyle.color;
    }, [myStyle]); // Runs whenever myStyle changes

    return (
        <div style={myStyle} className="DivdarkBtn">
            <button className="darkBtn" onClick={changeMode}>{btn}</button>
        </div>
    )

    
}