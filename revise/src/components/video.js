import React, { useState, useEffect } from "react";
import { Pagination } from "@mantine/core";
import LoadingIndicator from "./UI/LoadingIndicator";
import Showcard from "./showcard";
import axios from "axios";
import "./card.css";
function Video() {
  const [activePage, setPage] = useState(1);
  const [data, setdata] = useState();
  const [prev, setprev] = useState();
  const [curr, setcurr] = useState();
  const [pagetoken, setpagetoken] = useState();

  useEffect(() => {
   

    fetch("http://localhost:3000/api/v1/users/getyoutube",{pagetoken})
      .then((res) => res.json())
      .then((json) => {
        setpagetoken(json.data.nextPageToken)
        setdata(json.data.items);
      });
  }, [activePage]);

  return (
    <>
      {!data && <LoadingIndicator></LoadingIndicator>}

      {data && (
        <div>
          {console.log(data)}
          <div className="card">
            {data.map((item, int) => (
              <div className="carin">
                {" "}
                <Showcard
                  title={item.snippet.title}
                  description={item.snippet.description}
                  thumbnail={item.snippet.thumbnails.default.url}
                ></Showcard>
              </div>
            ))}
            d
          </div>

          <Pagination page={activePage} onChange={setPage} total={10} />
        </div>
      )}
    </>
  );
}

export default Video;
