import React, { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import "../../utils.css";
import axios from "axios";
import SuperCards from "./SuperCards";
import "./superhero.css";

const SuperInput = () => {
  //search field state
  const [inputval, setInputval] = useState("");

  // loading state
  const [isloading, setIsloading] = useState(false);

  const url = "http://localhost:5000/search/";

  // super hero data
  const [hero, setHero] = useState([]);

  const apiCaller = async (input) => {
    try {
      const new_url = url + input;
      const res = await axios.get(new_url);
      console.log(url + input);
      setHero(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  // checking for hero to be updated
  useEffect(() => {
    // console.log(hero)
    console.log("hero updated", hero);
  }, [hero]);

  return (
    <>
      <div className="flex flex-col gap-10 justify-start items-center w-full">
        <h1>SuperInput</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 h-20">
          <input
            type="text"
            placeholder="search hero"
            value={inputval}
            onChange={(e) => setInputval(() => e.target.value)}
            className=" focus:outline-none w-[90%] border-2 rounded-2xl p-5 md:p-3 h-[10vh] md:h-[full]"
          />
          <button
            onClick={() => {
              apiCaller(inputval);
            }}
            className="btn-hover border-2 rounded-2xl p-3 h-full w-20 flex justify-center items-center"
          >
            <SearchIcon />
          </button>
        </div>
        {/* Here is the card area */}
        <div className="wrapper h-fit w-full">
          <div className=" card-container ">
            {hero.map((h) => (
              <SuperCards
                key={h.id}
                name={h.name}
                url={`http://localhost:5000/img?id=${h.id}`}
                full_name={h.biography["full-name"]}
                POB={h.biography["place-of-birth"]}
                FA={h.biography["first-appearance"]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperInput;
