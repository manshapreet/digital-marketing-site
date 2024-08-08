import React, { useEffect } from 'react'
import './About.css'
import photo from '../../assets/bg2.jpg'

const About = ({scrollvar}) => {

    useEffect(()=>{
        if(scrollvar>15){
          const cards = document.querySelectorAll('.aboutCardsHead')
          cards[0].classList.add('one');
          cards[1].classList.add('two');
          cards[2].classList.add('three');
          cards[3].classList.add('four');
        }
      }, [scrollvar])


  return (
    <div className='About'>
        
        <div className='AboutMain'>

            <div className='aboutImg'>
                <img src={photo} alt="" />
            </div>

            <div className='aboutBox1'>
                <div className='aboutHead'>About Us</div>

                <div className='aboutText'>
                    At TechTonic, we're dedicated to helping businesses succeed with innovative digital marketing strategies. Our experienced team delivers tailored solutions to enhance your online presence and achieve your goals. We leverage the latest technologies to stay ahead of the curve and ensure exceptional service and measurable results.
                </div>

                <button className='aboutBtn'>
                    Learn More
                </button>
            </div>

            <div className='aboutBox2'>
                <div className='aboutHead'>
                    Why Choose Us?
                </div>
                <div>
                    Expertise: Years of industry experience and proven success.
                    <br />Innovation: Cutting-edge strategies and tools.
                    <br />Personalized Service: Tailored solutions for your unique needs.
                    <br />Results-Driven: Focus on delivering measurable results.
                    <br />Customer-Centric: Your success is our top priority.
                </div>
            </div>
        </div>

        <div className='AboutNumbers'>
            <div className='aboutCards'>
                <div className='aboutCardsHead'></div>
                <div className='aboutCardsText'>Years of Experience</div>
            </div>
            <div className='aboutCards'>
                <div className='aboutCardsHead'></div>
                <div className='aboutCardsText'>Happy Clients</div>
            </div>
            <div className='aboutCards'>
                <div className='aboutCardsHead'></div>
                <div className='aboutCardsText'>Projects Delivered</div>
            </div>
            <div className='aboutCards'>
                <div className='aboutCardsHead'></div>
                <div className='aboutCardsText'>Star Ratings</div>
            </div>
        </div>
    </div>
  )
}

export default About