import React from 'react'
import { Categories } from '../assets/mockData'

const Home = () => {
  return (
    <div>
      <div>
        <div> 
          <div>
            <div>Shop By category</div>
             <ul>
            {Categories.map((categories, ind)=>(
              <li key={ind}>
                <div className=''></div>
                {categories}
              </li>
            ))}
          </ul>
          </div>
         
          <div>
          <img src={Heroimage} alt="" />
          </div>

          </div>
      </div>
    </div>
  )
}

export default Home