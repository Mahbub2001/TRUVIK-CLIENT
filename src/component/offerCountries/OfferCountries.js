import React from "react";
import "./OfferCountries.Module.css";
import france from "../../assets/countries/france.jpg";
import england from "../../assets/countries/england.jpg";
import newzeland from "../../assets/countries/newzeland.jpg";
import italy from "../../assets/countries/italy.jpg";
import russia from "../../assets/countries/russia.jpg";
import india from "../../assets/countries/india.jpg";
import uk from "../../assets/countries/london.jpg";
import australia from "../../assets/countries/australia.png";

const OfferCountries = () => {
  return (
    <div className="mt-16">
      <div className="text-center font-bold">
        <p className="text-sm text-slate-500">COUNTRIES I OFFER</p>
        <h3 className="mt-5 text-4xl text-slate-800">
          Immigration & visa services <br /> following{" "}
          <span className="text-red-600 italic">Countries</span>
        </h3>
      </div>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="display-countries grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
          <div className="">
            <div className="row">
              <div className="image">
                <img src={france} alt="" />
                <div className="details">
                  <h2>FRANCE</h2>
                  <p>
                  The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in... 
                  </p>
                </div>
              </div>
            </div>
            <div className="row"></div>
          </div>
          <div className="">
            <div className="row">
              <div className="image">
                <img src={england} alt="" />
                <div className="details">
                  <h2>ENGLAND</h2>
                  <p>
                  England is a country that is part of the United Kingdom...
                  </p>
                </div>
              </div>
            </div>
            <div className="row"></div>
          </div>
          <div className="">
            <div className="row">
              <div className="image">
                <img src={newzeland} alt="" />
                <div className="details">
                  <h2>NEW ZEALAND</h2>
                  <p>
                  New Zealand is an island country in the southwestern Pacific Ocean...
                  </p>
                </div>
              </div>
            </div>
            <div className="row"></div>
          </div>
          <div className="">
            <div className="row">
              <div className="image">
                <img src={italy} alt="" />
                <div className="details">
                  <h2>ITALY</h2>
                  <p>
                  Italy, a European country with a long Mediterranean coastline,..
                  </p>
                </div>
              </div>
            </div>
            <div className="row"></div>
          </div>
          <div className="">
            <div className="row">
              <div className="image">
                <img src={russia} alt="" />
                <div className="details">
                  <h2>RUSSIA</h2>
                  <p>
                  It is the largest country in the world, covering over...
                  </p>
                </div>
              </div>
            </div>
            <div className="row"></div>
          </div>
          <div className="">
            <div className="row">
              <div className="image">
                <img src={india} alt="" />
                <div className="details">
                  <h2>INDIA</h2>
                  <p>
                  India, officially the Republic of India, is a country in South...
                  </p>
                </div>
              </div>
            </div>
            <div className="row"></div>
          </div>
          <div className="">
            <div className="row">
              <div className="image">
                <img src={uk} alt="" />
                <div className="details">
                  <h2>UNITED KINGDOM</h2>
                  <p>
                  The United Kingdom, made up of England, Scotland, Wales... 
                  </p>
                </div>
              </div>
            </div>
            <div className="row"></div>
          </div>
          <div className="">
            <div className="row">
              <div className="image">
                <img src={australia} alt="" />
                <div className="details">
                  <h2>AUSTRALIA</h2>
                  <p>
                  Australia, officially the Commonwealth of Australia, is a sovereign country...
                  </p>
                </div>
              </div>
            </div>
            <div className="row"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCountries;
