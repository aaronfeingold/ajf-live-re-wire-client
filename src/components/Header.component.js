import React from "react";
import { formatDate, getOrdinalSuffix } from "../utils/formatDate";

const Header = () => {
  const today = new Date();
  const formattedDate = formatDate(today);
  const day = today.getDate();
  const ordinalSuffix = getOrdinalSuffix(day);

  // Split the formatted date to insert the ordinal suffix
  const [monthAndDay, year] = formattedDate.split(",");
  const [month, dayWithoutSuffix] = monthAndDay.split(" ");
  return (
    <div className="row justify-content-center">
      <h3 className="text-center">
        This is your AJF Live-re-Wire Music Calender for{" "}
        {`${month} ${dayWithoutSuffix}${ordinalSuffix},${year}`}
      </h3>
    </div>
  );
};

export default Header;
