import "./index.css";
import arrowleft from "../../assets/left.png";

interface DrawerComponentProps {
  isExpand: boolean;
  onClick: (e: any) => void;
}

const DrawerComponent = ({ isExpand, onClick }: DrawerComponentProps) => {
  return (
    <div
      className="drawer-main-container"
      style={{ display: isExpand ? "flex" : "none" }}
    >
      <div className="home-page-left-small-container-bg">
        <div className="home-page-left-small-container">
          <div className="home-page-left-small-c-left">
            {/* <div className="home-page-left-small-container-logo">Sew</div> */}
            <div className="home-page-left-small-container-tabs">
              <a
                href="#"
                className="home-page-left-small-container-tab"
                style={{
                    cursor:"pointer"
                }}
              >
                Home
              </a>
              <a href="#" className="home-page-left-small-container-tab">
                Projects
              </a>
              <a href="#" className="home-page-left-small-container-tab">
                Experience
              </a>
              <a href="#" className="home-page-left-small-container-tab">
                Contact Me
              </a>
            </div>
          </div>
          <div className="home-page-left-small-c-right">
            <img
              src={arrowleft}
              className="home-page-left-small-arrow-right"
              onClick={onClick}
              alt="Arrow Left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerComponent;
