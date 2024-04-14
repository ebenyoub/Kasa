import Banner from "../components/Banner";
import background from "../assets/images/img_banner_2.png"
import Dropdown from "../components/Dropdown";
import { about } from "../data/object";

const About = () => {
    // console.log("About => rendering");
    
    return (
        <main>
            <Banner picture={background} darken="0.7" />
            <div className="info">
                {about.map((data, index) => (
                    <Dropdown key={index} data={data.content} id={index.toString()} width="80" title={data.title} />
            ))}
            </div>
        </main>
    );
}

export default About;
