import { react } from "react";
function Skill() {
    return(<div>
        <h1>---------SKILLS----------</h1>
        
        
        <br></br>
        <label>
        HTML
        <input 
        required
          type={'checkbox'} 
          value = "HTML"
          />
        </label>
        
        <br></br><br></br>
        <label>
        CSS
        <input 
        required
        value = "CSS"
          type={'checkbox'}/>
        </label>
        
        <br></br><br></br>
        <label>
        JavaScript
        <input 
        
        value = "JavaScript"
          type={'checkbox'}/>
        </label>
        
        <br></br><br></br>
        <label>
        React
        <input 
        
        value = "React"
          type={'checkbox'}/>
        </label>
        
        <br></br><br></br>
        <label>
        TypeScript
        <input 
        
        value = "TypeScript"
          type={'checkbox'}/>
        </label>
        
        <br></br><br></br>
        
        <label>
        JQuerry
        <input 
        
        value = "JQuerry"
          type={'checkbox'}/>
        </label>
        
        <br></br><br></br>
        
        
        <input type="date" required  name="date" />TO<input/>
        <br></br><br></br>
        
        <input type="date" required  name="date" />FROM<input/>
        <br></br><br></br>
        </div>)
}

export default Skill;