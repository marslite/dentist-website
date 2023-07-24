import React from "react";
import "./Procedures.css"

const Procedures = () => {
    return (
      <div className="div_bar">
        <button className="proc_btn">Procedures</button>

        <p>
          Here at Dentist Office we provide a wide variety of procedures. We
          accept all sorts of insurance and have competitive uninsured payment
          plans. Find the service you need and visit our contact page to find
          out how to reach out to us to make the appointment you need!
        </p>
        <div className="list_div">
        <ul className="procedures">
          <li className="proc_li"><button className="btn_list">General Checkups</button></li>
          <li className="proc_li"><button className="btn_list">Teeth Cleaning</button></li>
          <li className="proc_li"><button className="btn_list">Cavity Screenings</button></li>
          <li className="proc_li"><button className="btn_list">Cavity Fillings</button></li>
          <li className="proc_li"><button className="btn_list">Chipped Tooth Fix</button></li>
          <li className="proc_li"><button className="btn_list">Tooth Removal</button></li>
          <li className="proc_li"><button className="btn_list">Root Canals</button></li>
        </ul>
        </div>
      </div>
    );
}

export default Procedures;
