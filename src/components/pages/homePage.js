import React, { Component, useState, useEffect } from "react";
import axios from "axios";

export default function Homepage() {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/episode/");
  const [info, setInfo] = useState({});
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   console.log('url:',url)
  //   console.log('info:',info)
  //   console.log('results:',results)
  //   console.log('search:',search)
  // },[url,info,results,search])

  useEffect(() => {
    axios
      .get(url + "?page=" + page)
      .then((result) => {
        //console.log(result)
        setInfo(result.data.info);
        setResults(result.data.results);
      })
      .catch((error) => {
        console.log(error);
        setPage(1);
      });
  }, [page]);

  useEffect(() => {
    axios
      .get(url + "?name=" + search)
      .then((result) => {
        //console.log(result)
        setInfo(result.data.info);
        setResults(result.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  const nextHandler = (event) => {
    event.preventDefault();
    if (page < info.pages) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  const prevHandler = (event) => {
    event.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(info.pages);
    }
  };

  return (
    <>
      <h1>Rick and Morty Episodes</h1>
      <div className="homeContent">
        <button className="btn" onClick={(event) => prevHandler(event)}>
          {" "}
          prev
        </button>
        <p>
          Page:{page}/{info.pages}
        </p>
        <button className="btn" onClick={(event) => nextHandler(event)}>
          next
        </button>
        <p>Search:</p>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          type="text"
        />
      </div>
      <main>
        <div className="episodes">
          {results.map((result, index) => (
            // <div className="cards" key={index}>
            //   <p>Name: {result.name}</p>
            //   <p>Release_Date: {result.air_date}</p>
            //   <p>Episode: {result.episode}</p>
            // </div>
            <div class="card">
              <div class="row no-gutters charRow">
                <div class="col-sm-7 content">
                  <ul>
                    <li>
                      <p>Name: {result.name}</p>
                    </li>
                    <li>
                      <p>Release_Date: {result.air_date}</p>
                    </li>
                    <li>
                      <p>Episode: {result.episode}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
