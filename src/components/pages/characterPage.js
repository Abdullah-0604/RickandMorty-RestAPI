import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Characterpage() {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/");
  const [info, setInfo] = useState({});
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

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
      <h1>Rick and Morty Characters</h1>
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

      {results.map((result, index) => (
        <div class="card">
          <div class="row no-gutters charRow">
            <div class="col-sm-5 photo">
              <img src={result.image} alt={"pic of ${result.name}"} />
            </div>
            <div class="col-sm-7 content">
              <ul>
                <li>
                  <p>{"Name: " + result.name}</p>
                </li>
                <li>
                  <p>{"Orign: " + result.origin.name}</p>
                </li>
                <li>
                  <p>{"Locations: " + result.location.name}</p>
                </li>
                <li>
                  <p>{"Species: " + result.species}</p>
                </li>
                <li>
                  <p>{"Gender: " + result.gender}</p>
                </li>
                <li>
                  <p>{"Status: " + result.status}</p>
                </li>
                <li>
                  <p>{"Created at: " + result.created}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="charList">
        {results.map((result, index) => (
          <>
            <img src={result.image} alt={"pic of ${result.name}"} />
            <div className='charContent'>
              <ul>
                <li>
                <p>{"Name: " + result.name}</p>
                </li>
                <li>
                <p>{"Orign: " + result.origin.name}</p>
                </li>
                <li>
                <p>{"Locations: " + result.location.name}</p>
                </li>
                <li>
                <p>{"Species: " + result.species}</p>
                </li>
                <li>
                <p>{"Gender: " + result.gender}</p>
                </li>
                <li>
                <p>{"Status: " + result.status}</p>
                </li>
                <li>
                <p>{"Created at: " + result.created}</p>
                </li>
              </ul>
            </div>
          </>
        ))}
      </div> */}
    </>
  );
}
