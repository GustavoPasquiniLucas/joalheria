import Menu from "./menu"

import ColorSchemesExample from "../navbar"
import { Navbar } from "react-bootstrap"
import BasicExample from "../../card"
import BasicExample2 from "../../card2"
import BasicExample3 from "../../card3"
import Footer from '../../footer' 


function Home(){
    return(
        <div class="Nav">    
       <ColorSchemesExample height={100} width={100}>
       </ColorSchemesExample >
        <div class="HomeFundo">
         
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
      
    <div class="carousel-item active">
        
    <img src={'https://th.bing.com/th/id/OIP.uj5elmggxdpcsY8270wDWQHaEK?pid=ImgDet&rs=1'} alt="Workflow" height={500} width={1250}     />

        
    </div>
    <div class="carousel-item">
    <img src={'https://th.bing.com/th/id/OIP.ahgTsOcKGkk3-8jMXHHVmAHaE6?pid=ImgDet&rs=1'} alt="Workflow"   height={500} width={1250}  />
    </div>
    <div class="carousel-item">
    <img src={'https://th.bing.com/th/id/R.f67ab72eefe59de9a2c320c82af98891?rik=DbJ1m3k%2bAwPy4Q&riu=http%3a%2f%2f1.bp.blogspot.com%2f-_dt3Cgetjag%2fU6pFNg51cBI%2fAAAAAAAAFUA%2fQS8IVhLRLC0%2fs1600%2fcolar%2bp%c3%a9rolas%2bsouth%2bseas%2bdiamantes%2bouro%2bsc%c3%a1pin%2bj%c3%b3ias%2bluxo%2bj%c3%b3ias%2bdiego%2bsc%c3%a1pin%2bj%c3%b3ias.jpg&ehk=aqhJQHG3Z55XmJUkfub1bN2uIV5vdwe%2bKqhPsn9oC4w%3d&risl=&pid=ImgRaw&r=0'}  alt="Workflow" height={500} width={1250} />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <div className="espacoB1">
        <BasicExample></BasicExample>  
        <BasicExample2></BasicExample2>  
        <BasicExample3></BasicExample3>  
        </div>
        
        <Footer />
       
        </div>
        </div>
    )
}
export default Home