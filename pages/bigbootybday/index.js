import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const Page = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti width={width} height={1000} style={{margin: "auto"}}/>
      <h1 style={{ textAlign: "center", marginTop: "30vh" }}>We're going to Hamilton!</h1>
      <div className="event">
        <div className="event-side">
          <div className="dotted-line-separator">
            <span className="line"></span>
          </div>
          <div className="event-icon">
            <span className="fa fa-users"></span>
          </div>
          <div className="event-date">Dec 8</div>
          <div className="event-time">
            1:35 PM <span className="to">to </span>3 PM
          </div>
          <div className="cut-out"></div>
        </div>
        <div className="event-body">
          <div className="event-image">
            <a href="#">
              <span className="image" />
            </a>
          </div>
          <div className="event-location">Bass Concert Hall, Austin, TX</div>
          <div className="event-title">
            <h3>Hamilton</h3>
          </div>
          <div className="event-details">Rap and shit.</div>
        </div>
      </div>
    </>
  );
};

export default Page;
