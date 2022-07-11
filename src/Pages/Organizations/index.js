import Header from "../../Component/Header";
import ContentCard from "../../Component/ContentCard";
import Footer from "../../Component/Footer";
import Title from "../../Component/Title";
import { useState, useEffect } from "react";
import Loader from "../../Component/Loader";

function Organizations() {
  const [organizations, setOrganizations] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  let listOrganizations;
  const getOrganizations = async () => {
    const organizationsFetch = await fetch(
      "http://localhost:7500/organizations"
    );
    listOrganizations = await organizationsFetch.json();
    setIsLoaded(true);
    setOrganizations(listOrganizations);
  };

  useEffect(() => {
    getOrganizations();
  }, []);

  return (
    <div className="bg-light-gold">
      <Header />
      <Title titleText="Organizaciones" />
      {!isLoaded && (
        <div className="flex justify-center">
          <Loader />
        </div>
      )}

      {isLoaded && (
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
                clickLink={`/organization_info/${i.id}`}
              />
            );
          })}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Organizations;
