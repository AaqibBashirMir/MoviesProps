import React from 'react';

function Movies(props) {
    return (
        <div style={{
            margin: '40px'
        }}>
            <div>
                <div style={{
                    display: 'flex',
                    background:"linear-gradient( black,white)",
                    width:"700px",
                    height:"250px",
                    alignItems:'center',
                    justifyContent:"space-between",
                    paddingLeft:"40px",
                    border:"2px solid gray",
                    borderRadius:'10px'
                
                }}>
                    <img src={props.img} height="100px" width="80px"></img>
                    <div style={{
                        display:'flex',
                        flexDirection:"column",
                        fontFamily:"cursive",
                        color:"white"

                    }}>
                        {props.title}<br></br>
                        Year:{props.year}<br></br>
                        Rating: {props.rating}/10

                    </div>
                    <div>
                <img src={props.img} height="200px" width="500px"></img>

                </div>
          
                </div>
              
            </div>
        </div>

    )
}

export default Movies