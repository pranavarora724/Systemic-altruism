import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';


function ImageSlider() {

    gsap.registerPlugin(ScrollTrigger);   
    ScrollTrigger.refresh();


    gsap.from('.box' , {
        y:20,
        duration:0.5,
        delay:0.5,
        opacity:0
    })

    useGSAP(()=>{
        gsap.from('.box_scroll_trigger',{
          y:10,
          opacity:0,
          duration:1,
          stagger:0.2,
    
          scrollTrigger:{
            trigger:'.box_scroll_trigger',
            markers:true,
            scroller:'body',
            start:'top 80%',
            // end:'bottom top',
            // scrub:true
    
          }
    
        })
    })
    

    const {contextSafe} = useGSAP();

    
    const transition_handler = contextSafe(()=>{     
        gsap.from('.box' , {
            y:20,
            duration:0.5,
            delay:0.5,
            opacity:0
        })
})


    return (
        <div>

            {/* First way */}
            {/* <div className=''>
                <Fade>
                    {fadeImages.map((fadeImage, index) => (
                        <div key={index} className='h-[45vh] min-[500px]:h-[50vh] min-[600px]:h-[60vh]  md:h-[65vh] min-[870px]:h-[85Svh] min-[1000px]:h-[100vh] border-2 border-red-400'>
                            <img style={{ width: '100%' }} src={fadeImage.url} />
                        </div>
                    ))}
                </Fade>
            </div> */}

            
            {/* Second WAY */}
            <div className='bg-black relative'>
                <Fade
                arrows={false}
                autoplay={true}
                infinite={true}
                duration={4000}
                pauseOnHover={false}
                onStartChange={transition_handler}
                transitionDuration={500}
                >
                   
                   {/* First */}
                    <div style={{backgroundColor:' rgba(0, 0, 0, 0.400)' , backgroundBlendMode:'overlay'}} className=" w-[100%] h-[70vh] min-[600px]:h-[80vh] md:h-[100vh] flex justify-center  items-center border-none  bg-center bg-no-repeat bg-cover bg-[url('https://images.squarespace-cdn.com/content/v1/5e6e7c66ddeb2e162edb8cf4/45f21523-bc6d-48c6-a49a-98c7e7de54db/Neighbors.jpg')] ">
                       
                        <div className='z-40 w-[250px] sm:w-[40%]  -translate-x-20  md:-translate-x-32 '>
                            <div className='text-3xl text-white font-bold'>Neighbourly Bonds <span className='text-orange-500'> One Click Away </span></div>
                            <div className='text-sm text-black mt-10'>Too shy to connect with neighbours ? Don't worry we got your back</div>
                            <div className='px-4 py-1 rounded-full text-white bg-orange-500 mt-10 w-fit'>Get Started</div>

                            {/* blur box */}
                            <div className='absolute top-0 -z-10 left-0 w-[100%]  h-[100%] bg-gray-400  blur-2xl  bg-opacity-50'></div>
                        </div>

                    </div>
                    {
                        ScrollTrigger.refresh()
                    }

                   <div style={{backgroundColor:' rgba(0, 0, 0, 0.400)' , backgroundBlendMode:'overlay'}} className=" w-[100%] h-[70vh] min-[600px]:h-[80vh] md:h-[100vh] flex justify-center items-center bg-center bg-no-repeat bg-cover border-2 border-red-400 bg-[url('https://distinctive-liv.com/wp-content/uploads/2022/04/group-of-seniors-smiling-1024x672.jpg')] ">

                   <div className='box relative z-20 opacity-100 w-[250px] sm:w-[40%]  translate-x-20  md:translate-x-32 '>
                            <div className='text-3xl text-white font-bold'>Empowering Elders <span className='text-orange-500'>Enriching Communities </span></div>
                            <div className='text-sm text-black mt-10'>Too shy to connect with neighbours ? Don't worry we got your back</div>
                            <div className='px-4 py-1 rounded-full text-white bg-orange-500 mt-10 w-fit'>Get Started</div>

                            {/* blur box */}
                            <div className='absolute top-0 -z-10 left-0 w-[100%] h-[100%] bg-gray-400  blur-2xl  bg-opacity-50'></div>
                        </div>

                   </div>
                   {
                        ScrollTrigger.refresh()
                    }

                    <div style={{backgroundColor:' rgba(0, 0, 0, 0.400)' , backgroundBlendMode:'overlay'}} className=" w-[100%] h-[70vh] min-[600px]:h-[80vh] md:h-[100vh] flex justify-center items-center bg-center bg-no-repeat bg-cover border-2 border-red-400 bg-[url('https://www.genesisland.com/wp-content/uploads/2022/08/August-4-Section-01-Photo-1.png')] ">

                    <div className='box relative z-20  w-[250px] sm:w-[40%]  -translate-x-20  md:-translate-x-32 '>
                            <div className='text-3xl text-white font-bold'> Neighbourly Compassion <span className='text-orange-500'> Get Assistance </span></div>
                            <div className='text-sm text-black mt-10'>Too shy to connect with neighbours ? Don't worry we got your back</div>
                            <div className='px-4 py-1 rounded-full text-white bg-orange-500 mt-10 w-fit'>Get Started</div>

                            {/* blur box */}
                            <div className='absolute top-0 -z-10 left-0 w-[100%]  h-[100%] bg-gray-400 blur-2xl  bg-opacity-50 '></div>
                        </div>

                    </div>
                    {
                        ScrollTrigger.refresh()
                    }

                </Fade>
            </div>

            <div className='mt-10  box_scroll_trigger border-2    z-50 w-[100%]  flex md:flex-row flex-col gap-x-4 justify-center items-center mx-auto'>
               
                {/* 1st box */}
                <div className='box2   md:flex md:flex-col w-[300px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <div className='w-[100%] h-[200px]'>
                    <img style={{background:'linear-gradient(to bottom, rgba(255,255,255,1) 100%,rgba(255,255,255,0) 0%)'}} className='w-[100%] h-[100%]' src='https://neighborgood.io/assets/infoImage-C2-7ME4C.webp'></img>
                    </div>
                    <div className='text-2xl text-orange-500 font-semibold mt-2'>About NeighborGood</div>
                    <div>NeighborGood is on a mission to provide the simplest platform for neighborhoods to form connections & community. </div>
                </div>

                 {/* 2nd box */}
                 <div className=' box2  w-[300px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <div className='w-[100%] h-[200px] bg-gradient-to-b from-100% to-0%'>
                    <img style={{background:'linear-gradient(to bottom, rgba(255,255,255,1) 100%,rgba(255,255,255,0) 0%)'}} className='w-[100%] h-[100%] [background:linear-gradient(to bottom, rgba(255,255,255,1) 100%,rgba(255,255,255,0) 0%)]' src='https://neighborgood.io/assets/service1-CcE7s0vJ.webp'></img>
                    </div>
                    <div className='text-2xl text-orange-500 font-semibold mt-2'>Our Approach</div>
                    <div>NeighborGood is on a mission to provide the simplest platform for neighborhoods to form connections & community.</div>
                </div>

                 {/* 3rd box */}
                 <div className='box2  w-[300px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <div className='w-[100%] h-[200px] bg-gradient-to-b from-100% to-0%'>
                    <img  className=' w-[100%] h-[100%]  bg-gradient-to-b' src='https://neighborgood.io/assets/service3-D1ddwG5F.webp'></img>
                    </div>
                    <div className='text-2xl text-orange-500 font-semibold mt-2'>Our Solutions</div>
                    <div>NeighborGood is on a mission to provide the simplest platform for neighborhoods to form connections & community. </div>
                </div>

            </div>


            
            {/* <div className='h-[200px] w-[100%] bg-sky-200'></div> */}
        </div>
    )
}

export default ImageSlider;