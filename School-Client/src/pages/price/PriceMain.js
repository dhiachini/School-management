import React, { useState, useEffect } from "react";
import axios from "axios"; 
import Breadcrumb from "../../components/Breadcrumb";
import shapeImg from "../../assets/img/price/shape-1.png";

const PriceMain = () => {
  const [frais, setFrais] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3700/api/frais"); 
        setFrais(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching frais:", error);
        setError("Failed to load data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  if (loading) {
    return <div>Chargement...</div>;
  }

 
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      <Breadcrumb title="Frais des scolarités" subTitle="Frais des scolarités" />

      <div className="it-price-area pt-120 pb-60">
        <div className="container">
          <div className="row">
            {frais.map((fraisData, index) => (
              <div key={index} className="col-xl-4 col-lg-6 col-md-6 mb-60">
                <div className="it-price-item-wrap p-relative z-index">
                  <div className="it-price-shape-1">
                    <img src={shapeImg} alt="Shape" />
                  </div>
                  <div className="it-price-category text-center">
                    <span>{fraisData.niveau}</span>
                  </div>
                  <div className="it-price-item">
                    <div className="it-price-category-wrap">
                      <div className="it-price-month text-center">
                        <span>
                          {fraisData.montantMensuelle}
                          <i> Annuel</i> 
                        </span>
                      </div>
                    </div>
                    <div className="it-price-list text-center">
                    <p>
                        Année Scolaire : {fraisData.anneeScolaire}
                      </p>
                      <ul>
                        <li>
                          <i className="fa-light fa-check"></i> Frais de dossier: {fraisData.fraisDossier}
                        </li>
                        <li>
                          <i className="fa-light fa-check"></i> Frais de réinscription: {fraisData.fraisReinscription}
                        </li>
                        <li>
                          <i className="fa-light fa-check"></i> Frais de première inscription: {fraisData.fraisPremiereInscription}
                        </li>
                        <li>
                          <i className="fa-light fa-check"></i> Service de la vie scolaire: {fraisData.serviceVieScolaire}
                        </li>
                        <li>
                          <i className="fa-light fa-check"></i> Panier: {fraisData.panier}
                        </li>
                        <li>
                          <i className="fa-light fa-check"></i> Cantine: {fraisData.cantine}
                        </li>
                        <li>
                          <i className="fa-light fa-check"></i> Garderie: {fraisData.garderie}
                        </li>
                        <li>
                          <i className="fa-light fa-check"></i> Bus scolaire: {fraisData.busScolaire}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PriceMain;
