import React from "react";
import { MDBView, MDBMask } from "mdbreact";
import '../../index.css';
import backGrndImg from '../../assets/images/Music.jpg'


const BackgroundImage = () => {
  return (
      <MDBView>
          <img src={backGrndImg} className="img-fluid w-100" alt="" />
          <MDBMask overlay="black-strong"></MDBMask>
      </MDBView>

      // <div className="bg">
      //   <img src={backGrndImg} className="img-fluid w-100" alt="" />
      //   <div className="mask" style= {{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
      // </div>
  );
}

export default BackgroundImage;