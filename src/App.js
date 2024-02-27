import Navbar from './Components/Navbar';
import Tick from '../src/Components/asset/IMAGE (8).svg'
import info from '../src/Components/asset/IMAGE (9).svg'
import darrow from '../src/Components/asset/darrow.png'
import rarrow from '../src/Components/asset/rarrow.svg'
import trophy from '../src/Components/asset/trophy.svg'
import firstcard from '../src/Components/asset/first-card.svg'
import showArrow from '../src/Components/asset/IMAGE (1).svg'
import rating from '../src/Components/asset/IMAGE (2).svg'
import icon from '../src/Components/asset/IMAGE (3).svg'
import image2 from '../src/Components/asset/IMAGE (4).svg'
import image4 from '../src/Components/asset/IMAGE (5).svg'
import image5 from '../src/Components/asset/IMAGE (6).svg'
import image7 from '../src/Components/asset/Vector (1).svg'


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className=" container  " >
        <div className='heading'>
          <h2 className='head-text'>Best Website builder in the US <hr /></h2>
          <div className='head-line '>
         <div className='top-text '>
        <div className='p-2 d-flex gap-2'>
              <img className="tick" src={Tick} alt="" />
              <span className='text-secondary'>Last Updated - February 22, 2020</span>
            </div>
            <div className='p-2 d-flex gap-2'>
              <img className='info' src={info} alt="" />
              <span className='text-secondary'>Advertising Disclosure</span>
            </div>
   </div>
            
            <div className='relevent-text-box'>
              <span className='text-secondary'>Top relevent</span>
              <img className='darrow' src={darrow} alt="" />
            </div>
          </div>
          <div className='hr'>
          </div>
        </div>




        <div class=" tools d-flex  gap-3">
          <div class="p-3 text-secondary">Tools</div>
          <div class="p-3 text-secondary">AWS Builder</div>
          <div class="p-3 text-secondary ">Start Build</div>
          <div class="p-3 text-secondary ">Build Supplies</div>
          <div class="p-3 text-secondary ">Tooling</div>
          <div class="p-3 text-secondary ">BlueHosting</div>
        </div>
        <div class=" hosting d-flex p-2  ">
          <div class=" p-2 text-secondary">Home<img src={rarrow} alt="" /></div>
          <div class=" p-2 text-secondary">Hosting for all <img src={rarrow} alt="" /></div>
          <div class=" p-2 text-secondary ">Hosting <img src={rarrow} alt="" /></div>
          <div class=" p-2 text-secondary ">Hosting6 <img src={rarrow} alt="" /></div>
          <div class=" p-2 text-secondary ">Hosting5 </div>

        </div>

        <div className='pt-2'>
          <div >
            <div className='box gap-1'>
              <img className='trophy' src={trophy} alt="" />
              <span>Best choice</span></div>
          </div>
        </div>
        <div className='first-container '>
          <div className='first '>
            <span class="p-2 text-secondary ">1</span>
          </div>
          <div className='img-card'>
            <img src={firstcard} alt="" />
            <span className='build'>builder 1</span>
          </div>

          <div className='first-box'>

            <div className='mid-part'>

              <div className='d-flex'>
                <div className='first-caption'><b>WixPro 72-Inch Responsive Website Builder-</b><p> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p></div>
              </div>

              <h6 >Main highlights</h6>
              <div className='second-caption'><p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p></div>


              <div className='showmore' ><span>Show more</span><img className="arrow" src={showArrow} alt="" /></div>
            </div>
          </div>

          <div className='rating-container'>
            <div className='rating-card'>
              <div className='rating1'>
                <img className='I-icon' src={icon} alt="" />
                <span>9.8</span>
                <p>Exceptional</p>
                <img className='R-icon' src={rating} alt="" /></div>

              <button className='btn-view'>View</button>
            </div>
          </div>



        </div>
        <div className='pt-5'>
          <div >
            <div className='box gap-1'>
              <img className='trophy' src={trophy} alt="" />
              <span>Best choice</span></div>
          </div>
        </div>
        <div className='first-container'>
          <div className='first'>
            <span class="p-2 text-secondary">2</span>
          </div>
          <div className='img-card'>
            <img src={firstcard} alt="" />
            <span className='build'>Builder</span></div>
          <div className='first-box'>


            <div className='mid-part' >

              <div className='d-flex'>
                <div className='first-caption'><b>SiteCraft 68-Inch Ultimate Web Design Studio-</b><p>Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p></div>
              </div>

              <h6 >Main highlights</h6>
              <div className='second-caption'><p>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p></div>


              <div className='showmore' ><span>Show more</span><img className="arrow" src={showArrow} alt="" /></div>
            </div>
          </div>

          <div className='rating-container'>
            <div className='rating-card'>
              <div className='rating1'>
                <img className='I-icon' src={icon} alt="" />
                <span>9.5</span>
                <p>Excellent</p>
                <img className='R-icon' src={image2} alt="" /></div>

              <button className='btn-view'>View</button>
            </div>
          </div>



        </div>
        <div className='pt-5'>

        </div>
        <div className='first-container '>
          <div className='first'>
            <span class="p-2 text-secondary ">3</span>
          </div>

          <div className='img-card'>
            <img src={firstcard} alt="" />
            <span className='build'>Builder 1</span>
          </div>

          <div className='first-box'>



          <div className='mid-part'>
              <div className='d-flex'>
                <div className='first-caption'><b>WixPro 72-Inch Responsive Website Builder-</b>
                  <p> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                </div>
              </div>

              <h6 >Main highlights</h6>
              <div className='second-caption'><p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p></div>


              <div className='showmore' ><span>Show more</span><img className="arrow" src={showArrow} alt="" /></div>
            </div>
          </div>

          <div className='rating-container'>
            <div className='rating-card'>
              <div className='rating1'>
                <img className='I-icon' src={icon} alt="" />
                <span>9.3</span>
                <p>Exceptional</p>
                <img className='R-icon' src={rating} alt="" /></div>

              <button className='btn-view'>View</button>
            </div>
          </div>
          div




        </div>
        <div className='pt-5'>
          <div >

          </div>
        </div>
        <div className='first-container '>
          <div className='first '>
            <span class="p-2 text-secondary ">4</span>
          </div>
          <div className='img-card'><img src={firstcard} alt="" />
            <span className='build'>cdk</span></div>
          <div className='first-box'>



            <div className='mid-part' >
              <div className='d-flex'>
                <div className='first-caption'><b>CDK Resposive Builder:</b><p>  An extensive library of widgets and apps, and detailed step-by-step guides</p></div>
              </div>
              <div><span className='four-s'>26% Off</span></div>

              <h6 >Main highlights</h6>
              <div className='fourth-card'>
                <div className='list '>
                  <div className='d-flex gap-4 '>
                    <span className='list-rate '>9.9</span>
                    <span className='li-word'>Building responsive</span>
                  </div>
                  <div className='d-flex gap-2 '>
                    <span className='list-rate'>9.9</span>
                    <span className='li-word'>Cool</span>
                  </div>
                  <div className='d-flex gap-2 '>
                    <span className='list-rate'>9.9</span>
                    <span className='li-word'>Docs</span>
                  </div>

                </div>
              </div>

              <div className='fourth-box gap-4 '>
                <span className='fourth-box-head'>Why we love it</span>
                <div className=' fourth-box-head-IS d-flex gap-2'><img className='correct'src={image5} /><span>Documentation</span></div>
                <div className='d-flex gap-2'><img className='correct' src={image5} /><span >Easy Use</span></div>
                <div className='d-flex gap-2'><img className='correct'src={image5} /><span >Out of box</span></div>

              </div>


              <div className='showmore' ><span>Show more</span><img className="arrow" src={showArrow} alt="" /></div>
            </div>
          </div>

          <div className='rating-container'>
            <div className='rating-card'>
              <div className='rating1'>
                <img className='I-icon' src={icon} alt="" />
                <span>9.1</span>
                <p>Very Good</p>
                <img className='R-icon' src={image4} alt="" /></div>

              <button className='btn-view'>View</button>
            </div>
          </div>
        </div>

        <div className='card-heading my-5'>
          <h3>Related deals you might like for</h3>
        </div>

        <div className='main-card'>
          < div className='Card d-flex justify-content-center'>

            <div className='  p-5'>
              <img className='img' src={firstcard} alt="" />
            </div>


            <div className=' card-word d-flex gap-2 '>
              <span>20% Off</span><span>Limited time</span>
            </div>


            <div className='p-2'>
              <span >
                <b style={{ color: '#626E79' }} >Webbuilder 1</b>
              </span>
            </div>

            <div className='caption '>
              <span style={{ color: '#626E79' }}>Computer  Modern clasic with wix support</span>
            </div>

            <div className=' dollar p-2 d-flex gap-2'>
              <b >$39.96</b>
              <span className='sec-dollar'>$49.96</span>
              <span className='off'>(20% Off)</span></div>

            <div>
              <button className='btn-deal'>View Deal</button>
            </div>

          </div>
          < div className='Card d-flex justify-content-center'>

            <div className='  p-5'>
              <img className='img' src={firstcard} alt="" />
            </div>


            <div className=' card-word d-flex gap-2 '>
              <span>20% Off</span><span>Limited time</span>
            </div>


            <div className='p-2'>
              <span >
                <b style={{ color: '#626E79' }} >Webbuilder 1</b>
              </span>
            </div>

            <div className='caption '>
              <span style={{ color: '#626E79' }}>Computer  Modern clasic with wix support</span>
            </div>

            <div className=' dollar p-2 d-flex gap-2'>
              <b >$39.96</b>
              <span className='sec-dollar'>$49.96</span>
              <span className='off'>(20% Off)</span></div>

            <div>
              <button className='btn-deal'>View Deal</button>
            </div>



          </div>
          < div className='Card d-flex justify-content-center'>

            <div className='  p-5'>
              <img className='img' src={firstcard} alt="" />
            </div>


            <div className=' card-word d-flex gap-2 '>
              <span>20% Off</span><span>Limited time</span>
            </div>


            <div className='p-2'>
              <span >
                <b style={{ color: '#626E79' }} >Webbuilder 1</b>
              </span>
            </div>

            <div className='caption '>
              <span style={{ color: '#626E79' }}>Computer  Modern clasic with wix support</span>
            </div>

            <div className=' dollar p-2 d-flex gap-2'>
              <b >$39.96</b>
              <span className='sec-dollar'>$49.96</span>
              <span className='off'>(20% Off)</span></div>

            <div>
              <button className='btn-deal'>View Deal</button>
            </div>



          </div>
        </div>
        
        < div className='signup my-4'>
          <span>Sign up and get exclusive special deals</span>
          <div><span className='signup-btn'>Sign Up</span></div>
          </div>
        

       
        </div>
        <div className='black-box '>
          < div className='category d-flex gap-3'>

            <div  className='first-span'><span>CATEGORIES</span></div>
          <span >Web Builder</span>
            <span >Hosting</span>
            <span >Data Center</span>
            <span  >Robotic-Automation</span>



          </div>
          <div className='category d-flex gap-3'>
          <div  className='first-span'><span className=''>CONTACT</span></div>
            <span >Privacy Policy</span>
            <span>contact</span>
            <span>Terms of Services</span>
            <span>category</span>
            <span>About</span>

          </div>
          <div className='category  d-flex gap-3'>
            <div className='united' ><span >United States</span><img src={image7} alt="" /></div>
          </div>
        </div>




      </div>
  



  );
}

export default App;
