//import { useState } from "react";
//import "tw-elements";
import Header from "../../Component/Header";
import ContentCard from "../../Component/ContentCard";
import Footer from "../../Component/Footer";
import Title from "../../Component/Title";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
//import Header from "../../Component/Header";
//Del momento solo esta como relleno para ir probando componentes
function Organizations() {


  const [organizations, setOrganizations] = useState([]);

    const getOrganizations = async () => {
      const organizationsFetch = await fetch('http://localhost:7500/organizations');
      const listOrganizations = await organizationsFetch.json();
      console.log(listOrganizations);
      setOrganizations(listOrganizations);
    };

    useEffect( ()=> {
      getOrganizations()
    }, [])

  return (
    <div className="bg-light-gold">
      <Header />
      <Title titleText="Organizaciones"/>
      {/*Div que contiene las 3 tarjetas POR EL MOMENTO, LUEGO DEBE SER TRAIDO DE LA BD*/}
      <div
        className="gap-8 justify-items-center py-4 mb-8 
      grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3
      px-4 md:px-8 lg:px-20"
      >
        {organizations.map((i, index) => {
          return (
            <ContentCard
              key={`cc_${index}`}
              image={i.images[0]}
              mainText={i.name}
              location={i.state}
              clickLink="PONERELIDELPERRITO"
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Organizations;
