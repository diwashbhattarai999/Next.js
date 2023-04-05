import Image from "next/image";
import img from '../public/1.jpg'

function AnimePage() {
  return (
    <div className="img-container">
        {/* <Image src={img} alt="anime" placeholder="blur" blurDataURL=" " width="320" height="220" />
      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="anime" width="320" height="220" />
          </div>
        );
      })} */}
    </div>
  );
}

export default AnimePage;


