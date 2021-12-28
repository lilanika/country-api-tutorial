import React, { useState, useEffect } from "react"
import "./country.css"
import Header from "./components/Header"

const Country = () => {
  const [data, setCountry] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://restcountries.com/v2/all`
      )
      const data = await response.json()
      setCountry(data)
    }

    fetchData()
  }, [])

  return (
    <>
    <Header/>
 

      <section className="country">
       
        {data.map((countrys) => {
          const {
            numericCode,
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            languages,
        
          } = countrys


          const columns = data[0] && Object.keys(data[0]);
          return (
            <article key={numericCode}>
              <div className="country-inner">
                <div className="flag">
                  <img src={flag} alt={name} />
                </div>

                <div className="country-details">
                  <div>
                    <h2>{name}</h2>
                    <h5>
                      Native Name: <span>{nativeName}</span>
                    </h5>
                    <h5>
                      Population: <span>{population.toLocaleString()}</span>
                    </h5>
                    <h5>
                      Region: <span>{region}</span>
                    </h5>
                    <h5>
                      Sub Region: <span>{subregion}</span>
                    </h5>
                    <h5>
                      Capital: <span>{capital}</span>{" "}
                    </h5>
                  </div>

                  <div>
                    <h5>
                      Top Level Domain: <span>{topLevelDomain}</span>
                    </h5>
                    <h5>
                      Languages: <span>{languages[0].name}</span>
                    </h5>
                  </div>
                </div>
              </div>

       
            </article>
          )
        })}
      </section>
    </>



  )
}

export default Country
