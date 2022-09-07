
import Footer from "./Footer";
function Home(){

    // const resourcesdiv = document.getElementByID('resources');
    //             function myScrollFunc(){
    //                 let y = window.scrollY;
    //                 if (y >= 900){
    //                     resourcesdiv.className = 'resources'
    //                 }else{
    //                     resourcesdiv.className = 'resources-hide'
    //                 }
    //             };
    //             window.addEventListener("scroll", myScrollFunc);

    return ( 
        <>
            <div id="video">
                <video autoPlay muted >
                    <source src="https://videos.files.wordpress.com/8Mc1lvbc/jt-hero-section_hd.mp4" type="video/mp4"/>
                </video>
            </div>
            <div id="youtube-home-card">
                <h3>WHAT IS <span id="second">SECOND</span> <span id="thought">THOUGHT</span>?</h3>
                <p>
                    Second Thought is a channel that dives into the current events that drive the direction of our daily lives. Covering such topics as economics, politics, military policy, healthcare, and more, at both the domestic
                    (United States) and international level.
                </p>
                <div><button>EXPLORE THE LEFT</button></div>
                
                
            </div>

            <div id='resources' className="resources">
                <h2>RESOURCES</h2>
                <div id="resourcepara">
                    <p>A selection of video, audio, and print material that will further your education on leftist ideology. </p>
                </div>
                <div id="hr"><hr/></div>
                <div id="resource-links">
                    <button>VIDEO</button>
                    <button>AUDIO</button>
                    <button>PRINT</button>
                </div>
            </div>
            <div id="thankyou">
                <h3>THANK YOU</h3>
                <p>
                    This channel is made possible by the donations of generous viewers and fans.
                    As the topics I cover tend to be sensitive, my videos are often demonetized and avoided entirely by sponsors.
                    Donations allow me to continue to create engaging content and provide an avenue for leftist content that is 
                    grossly underrepresented in the YouTube community. If you would like to donate, please hit the ‘Buy Me a Coffee’
                    widget at the bottom of your screen or follow the link below to my Patreon.
                </p>
                <button>MAKE A DONATION</button>
            </div>
            <Footer/>
        </>
    );
}

export default Home;