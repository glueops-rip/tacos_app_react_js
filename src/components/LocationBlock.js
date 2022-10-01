import React from "react";
import { UserContext, saveData } from "../contexts/UserContext";
import geoAlt from "../assets/geo-alt.svg"

class LocationBlock extends React.Component {
  static contextType = UserContext;

  render() {
    const { dispatch } = this.context;

    return (
      <div class="left-block" id="location-block">
        <h1 class="block-title">2. Confirm Location</h1>
        <hr />
        <div class="location-radio">
          <input
            id="door-option"
            type="radio"
            name="deliveryOption"
            value="door"
            onChange={(e) => saveData(dispatch, e.target.name, e.target.value)}
          />
          <label for="door-option">Deliver to door</label>
          <input
            id="outside-option"
            type="radio"
            name="deliveryOption"
            value="outside"
            onChange={(e) => saveData(dispatch, e.target.name, e.target.value)}
          />
          <label for="outside-option">Pick up outside</label>
        </div>
        <div class="input-div">
          <img src={geoAlt} alt="geo" />
          <input
            type="text"
            name="location"
            onChange={(e) => saveData(dispatch, e.target.name, e.target.value)}
          />
        </div>
        <div class="input-div">
          <label>Apt</label>
          <input
            type="text"
            name="apt"
            onChange={(e) => saveData(dispatch, e.target.name, e.target.value)}
          />
        </div>
        <textarea
          name="deliveryNote"
          cols="30"
          rows="1"
          placeholder="Add delivery note"
          onChange={(e) => saveData(dispatch, e.target.name, e.target.value)}
        ></textarea>
      </div>
    );
  }
}

export default LocationBlock;
