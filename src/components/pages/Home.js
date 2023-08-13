import React, { useState, useEffect, useContext } from 'react'
import Tabs from '../Tabs'
import pic1 from '../../img/full.png'
import pic2 from '../../img/front-back.png'
import pic3 from '../../img/detail.png'
import pic4 from '../../img/full-length.png'
import Carousel from '../Carousel'
import CartContext from '../context/CartContext'

const Home = () => {

    const { addToCart } = useContext(CartContext)
    
    const f_name = "JONATHAN"
    const l_name = "SIMKHAI"
    const item = "Lurex Linen Viscose Jacket in Conchiglia"
    const price = 225

    const [color, setColor] = useState()
    const [sizevalue, setSizeValue] = useState()
    const [width, setWidth] = useState(window.innerWidth);


    const size = [{
        name: 'XS',
        availavle : true
    },
    {
        name: 'S',
        availavle : true
    },
    {
        name: 'M',
        availavle : false
    },
    {
        name: 'L',
        availavle : true
    },
    {
        name: 'XXL',
        availavle : true
    }
]

    const image = [{
        url : pic1,
        alt : 'pic1'
    },
    {
        url : pic2,
        alt : 'pic2'
    },
    {
        url : pic3,
        alt : 'pic3'
    },
    {
        url : pic4,
        alt : 'pic4'
    }
    ]

    const imageColor = [{
        url : pic1,
        alt: 'pic1',
        color: 'CONCHIGILA'
    },
    {
        url : pic2,
        alt: 'pic2',
        color: 'GREY'
    }]

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [])
    
    
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

console.log(color)
const handleSubmit = (e) => {
    e.preventDefault()
 
   var payload = {
        f_name,
        l_name,
        item,
        price,
        color,
        sizevalue
    }
    
    console.log("payload", payload)
    }
    
  return (
    <div className='home'>
        <div className='home-tab'>
            <Tabs />
        </div>
        <div className='home-img'>
            {
              width <= 820 ? (
                    <Carousel />
                ):(
                    <>
                    <div>
            <i className="icon bi bi-suit-heart"></i>
            </div>
            {image && image.map((img, i) => {
                return(
                    <img key={i} src={img.url} alt={img.alt} />
                )
            })}
            <div className='footer'>
                <ul>
                    <li><a href="!#">JONATHAN SIMKHAI</a></li>
                    <li><a href="!#">BLAZERS</a></li>
                    <li><a href="!#">BLAZERS</a></li>
                </ul>

                <div className='quote'>
                    <h5>A NOTE FROM THE EDITOR</h5>
                    <blockquote className="quote-1">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, <br /><br />
                    <cite> <a href="!#">By MINNA SHIM</a> Fashion Editor</cite>
                </blockquote>
                </div>
            </div></>
                )
            }
            
        </div>

        <div className='home-details'>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div className='home-details-card'>
                <h1>{f_name}</h1>
                <h1>{l_name}</h1>
                <p>{item}</p>
                <p><b>${price}</b></p><br />
                <p><b>COLOR </b> {color} </p>
                      <div className='home-details-img'>
                          {
                              imageColor.map((img, i) => {
                                  return (
                                      <label>
                                            <input onChange={(e) => setColor(e.target.value)} key={i} type="radio" name='test' value={img.color} />
                                            <img src={img.url} alt={img.alt} />
                                       </label>
                                  )
                              })
                          }
                          
                    {/* <img src={pic1} alt="pic1" />
                    <img src={pic2} alt="pic2" /> */}
                </div>
                <div className='home-details-size'>
                    <p><b>Size </b> {sizevalue}</p>
                    <p><a href="!#">Size Guide</a></p>
                </div>
                <div className='home-details-size-btn'>
                    {
                        size && size.map((s,i) => {
                            return(
                                <div className={s.availavle === false ? "button button-disabled" : "button"}>
                                    <input value={s.name} onChange={(e) => setSizeValue(e.target.value)}  disabled={s.availavle === false ? true : false} type="radio" id={i} name="check-substitution-2" />
                                    <label className="btn btn-default" for={i}>{s.name}</label>
                                </div>
                            )
                        })
                    }
                    
                </div>
                <div className='home-bag-btn'>
                    <button onClick={() => addToCart(f_name, l_name, item, price, color, sizevalue)} className='bag-btn'>ADD TO BAG <i class="bi bi-arrow-right"></i></button>
                </div>
                <p>Get 4 intreast-free payments of $196.25 with clarna <br />
                <a href="!#">Learn More</a><br /><br />
                <p>Speak to a personal Stylist <a href="!#">Chat Now</a></p>
                </p>
                
            </div>
        </form>    
        </div>

        
    </div>

  )
}

export default Home