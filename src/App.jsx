import Testimonials from "./components/Testimonials";
import Presentation from "./components/Presentation";

const App = () => {
  return (
    <div style={{display:"flex" , flexDirection  : "row"}}>
    <div>
    <Testimonials 
        image="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800"
        name="John Doe"
        content="Give everyone you work with -- inside"
        star={[0, 1, 2, 3, 4]}
      />
      <Testimonials 
        image="https://sneakernews.com/wp-content/uploads/2022/03/kobe-bryant-nike-contract-2022.jpg"
        name="Kobe Bryant"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sGive everyone you work with -- inside"
        star={[0, 1, 2]}
      />
      <Testimonials
        image="https://www.topgear.com/sites/default/files/2022/07/Aspark_Owl_static_front.jpg"
        name="orgil munkh"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sGive everyone you work with -- inside"
        star={[0, 1, 2, 3]}
      />
    </div>
     <div>

     <Presentation floorImg = "https://mclaren.scene7.com/is/image/mclaren/DSC00052_6:crop-1x1?wid=1200&hei=1200"
      contet = "Why do we use it? "
      fontContent= "  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
      juctTime='2nd January ,2022'
      name = 'mukhorgil'/>


<Presentation floorImg = "https://mclaren.scene7.com/is/image/mclaren/DSC00052_6:crop-1x1?wid=1200&hei=1200"
      contet = "Why do we use it? "
      fontContent= "  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
      juctTime='2nd January ,2022'
      name = 'mukhorgil'/>

<Presentation floorImg = "https://mclaren.scene7.com/is/image/mclaren/DSC00052_6:crop-1x1?wid=1200&hei=1200"
      contet = "Why do we use it? "
      fontContent= "  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
      juctTime='2nd January ,2022'
      name = 'mukhorgil'/>
     </div>
    </div>
  );
};

export default App;
