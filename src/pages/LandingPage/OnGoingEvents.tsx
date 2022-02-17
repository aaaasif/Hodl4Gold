import React from "react";
import { Link } from "react-router-dom";

import event1 from "../../assets/images/event1.png";
import { Button } from "../../components";

const eventsArr = [1, 2, 3];

const OnGoingEvents: React.FC = () => {
  return (
    <div className="events">
      <div className="events_header">
        <h2 className="mb-10">Ongoing events</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus nunc sollicitudin at ut
          lobortis in phasellus est. Mollis semper id vitae in eget.{" "}
        </p>
      </div>
      <div className="events_wrapper">
        {eventsArr.map((event) => {
          return (
            <div key={event} className="events_block">
              <div className="events_block-left">
                <img src={event1} alt="event" />
              </div>
              <div className="events_block-right">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae congue mi.</h3>
                <b>1 Feb 2022</b>
                <p>
                  pLorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis volutpat
                  tristique tempor id faucibus eget eleifend porta amet. Egestas velit purus semper
                  sit a, vulputate semper faucibus et. Sagittis vitae imperdiet faucibus facilisis
                  vitae at. Adipiscing feugiat feugiat amet facilisi sollicitudin hac egestas felis
                  duis. Quis nec ac tortor nunc ipsum sed lectus nunc suscipit. Egestas rutrum
                  tempor, nam magnis rhoncus. In quis massa quis varius. Bibendum ullamcorper sit
                  sed viverra dui fringilla nisi consectetur. Odio morbi commodo viverra eget. Read
                  more
                </p>
                <Link to={`/event/${event}`}>
                  <Button>Read more</Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnGoingEvents;
