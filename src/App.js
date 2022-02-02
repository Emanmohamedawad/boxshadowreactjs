import React ,{useState} from 'react';
import './App.css';

function App() {
  const [H,setHori] = useState(10)
  const [V,setVeri] = useState(10)
  const [Blur,setBlur] = useState(10)
  const [color,setColor] = useState("black")
  const [checkon,setcheckon] = useState(false)
  return (
    <div className="App">

        <div className="output">
                <div className="box" style={{ boxShadow: `${checkon ?"inset":""} ${H}px ${V}px ${Blur}px ${color}` }}>
                  <p>box-shadow: {H}px {V}px {Blur}px {color}</p>

                </div>
        </div>



      <div className="controls">
          <label className="labelcontrol">Hoeizontal length</label>
          <input type="range" min="-200" max="200" value={H} onChange={(e)=>setHori(e.target.value)} />

          <label className="labelcontrol">Vertical length</label>
          <input type="range" min="-200" max="200" value={V} onChange={(e)=>setVeri(e.target.value)} />

          <label className="labelcontrol">Blur</label>
          <input type="range" min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} />

          <br></br>
          <br></br>

          <label className="labelcontrol">Color</label>
          <input type="color" min="0" max="200" value={color} onChange={(e)=>setColor(e.target.value)} />

            <br></br>
            <br></br>
    
          <div class="switch">
              <label className="labelcontrol">
                Outline
                <input type="checkbox" checked={checkon} onChange={()=>setcheckon(!checkon)}/>
                <span class="lever"></span>
                inset
              </label>
            </div>
        
        
      </div>

       
    </div>
  );
}

export default App;
