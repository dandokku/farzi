import LandingVideo from "../../assets/Farzi-Cafe.mp4"

function Landing() {
  return (
    <div>
        <video src={LandingVideo}  className="w-screen min-h-screen"></video>
    </div>
  )
}

export default Landing