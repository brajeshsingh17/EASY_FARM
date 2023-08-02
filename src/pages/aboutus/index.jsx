import "./aboutstyle.css"
const AboutUs = () =>{
    
    return (
        
        <div class="about">
        
        <div class="inner-section">
            <h1>About Us</h1>
            <p class="text">
            We're out on our own journeys to maximise - be the best at what we 
            choose and care about the most - whether it be our impact, voice, potential, ideas, 
            influence, well-being or more. Because when we maximise ourselves
            in our inclusive teams, EasyFarm is able to deliver the best imaginable value for
            our customers!
            </p>
            <div class="buttonclass">
                <button><a style={{ textDecoration: 'none' }} href={'/contactus'}>Contact Us</a></button>
            </div>
        </div>
    </div>
    );
  }
  export default AboutUs