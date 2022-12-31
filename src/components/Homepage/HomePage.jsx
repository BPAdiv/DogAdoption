import './homepage.css'
import { NavLink } from 'react-router-dom'
import mainVid from "../dogspages/pictures/video.mp4"
import logo from '../dogspages/pictures/icons8-paw-64.png'
import banner from '../dogspages/pictures/banner.jpg'
import secMainVid from '../dogspages/pictures/pexels-anna-bondarenko-9252757.mp4'
function HomePage() {

    return (
        <div>
            {/* <NavLink to="/adoption"><button>Adobt now</button></NavLink> */}
            <section className="home-main">
                <video src={mainVid} autoPlay muted loop></video>
                <video className='video' src={secMainVid}></video>
                <div className="home-heading">

                    <h1> Come look for a dog</h1>
                    <div className='text-h'>
                        <NavLink to="/adoption"><button>Adobt now</button></NavLink>
                    </div>
                </div>
            </section>
            <section className="home-des" >
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Aliquam officiis magnam harum.
                    Molestias praesentium exercitationem, numquam veritatis
                    necessitatibus distinctio aperiam delectus eveniet cum sit quos id. Ratione autem sequi hic
                    Doloremque numquam iste harum nobis ratione repellendus quasi placeat
                    explicabo asperiores atque. Tenetur error perferendis iste eligendi perspiciatis
                    delectus ipsam optio architecto harum. Accusamus quisquam, magni pariatur
                    iusto eaque asperiores.</p>
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Aliquam officiis magnam harum.
                    Molestias praesentium exercitationem, numquam veritatis
                    necessitatibus distinctio aperiam delectus eveniet cum sit quos id. Ratione autem sequi hic
                    Doloremque numquam iste harum nobis ratione repellendus quasi placeat
                    explicabo asperiores atque. Tenetur error perferendis iste eligendi perspiciatis
                    delectus ipsam optio architecto harum. Accusamus quisquam, magni pariatur
                    iusto eaque asperiores.</p>
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Aliquam officiis magnam harum.
                    Molestias praesentium exercitationem, numquam veritatis
                    necessitatibus distinctio aperiam delectus eveniet cum sit quos id. Ratione autem sequi hic
                    Doloremque numquam iste harum nobis ratione repellendus quasi placeat
                    explicabo asperiores atque. Tenetur error perferendis iste eligendi perspiciatis
                    delectus ipsam optio architecto harum. Accusamus quisquam, magni pariatur
                    iusto eaque asperiores.</p>

            </section>

            <div className='banners'>
                <div className='banner-wrapper'>
                    <img src={banner} alt="" />
                    <img src={banner} alt="" />
                    <img src={banner} alt="" />
                    <img src={banner} alt="" />
                    <img src={banner} alt="" />
                    <img src={banner} alt="" />
                </div>


            </div>




        </div>


    )



}
export default HomePage