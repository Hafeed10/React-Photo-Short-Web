import React from 'react'
import './about.css'
import img from '../imag/1934823-e1540532501723.jpg'

function Aboutpage() {
  const descrption = [
    {
      id: 1,
      title: 'Lorem Ipusm',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quo, quas, ad labore nisi corporis harum ex dignissimos voluptatibus consequuntur sequi necessitatibus exercitationemnemo eaque commodi suscipit laboriosam? Blanditiis, ipsa eveniet.Quo, quas, ad labore nisi corporis harum ex dignissimosvoluptatibus consequuntur sequi necessitatibus exercitationemnemo eaque commodi suscipit laboriosam? Blanditiis, ipsa eveniet Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quo, quas, ad labore nisi corporis harum ex dignissimos voluptatibus consequuntur sequi necessitatibus exercitationemnemo eaque commodi suscipit laboriosam? Blanditiis, ipsa eveniet.Quo, quas, ad labore nisi corporis harum ex dignissimosvoluptatibus consequuntur sequi necessitatibus exercitationemnemo eaque commodi suscipit laboriosam? Blanditiis, ipsa eveniet'
      
    },
  ]
  return (
    <div className='about'>
      <div className="about-section">
        <h1>About</h1>
        <div className="section-wrapper">
          <img src={img} alt="" />
          <div className="left">
            <h2>
              {
                descrption[0].title
              }
            </h2>
            {descrption.map((item) => {
              return (
                <p className='ppo'>
                  {item.text}
                </p>
              )
            })}
          </div>
        </div>

      </div>

    </div>
  )
}

export default Aboutpage
