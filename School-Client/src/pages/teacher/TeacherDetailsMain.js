import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SectionTitle from "../../components/SectionTitle";
import SingleFeature from "../../components/Feature";

const TeacherDetailsMain = () => {
  return (
    <main>
      <Breadcrumb title="Mot de la direction" subTitle="Mot de la direction" />

      <div className="it-teacher-details-area pt-120 pb-120">
        <div className="container">
          <div className="it-teacher-details-wrap">
            <div className="row">
              <div className="">
                <div className="it-teacher-details-right">
                  <div className="it-teacher-details-right-title-box">
                    <h4>Chers parents et tuteurs,</h4>
                    <p>
                      Il nous fait grand plaisir de vous souhaiter la bienvenue
                      à l’École Canadienne de Sousse. Nous sommes fiers d’offrir
                      un enseignement de qualité en faisant appel à l’innovation
                      pédagogique provenant du Canada. L’École Canadienne de
                      Sousse a pour ambition première de créer un milieu propice
                      à l’épanouissement et au bien-être de tous les élèves...
                    </p>
                    <p>
                      C’est en croyant en nos élèves que nous élevons leur
                      motivation et leur permettons de réaliser leur plein
                      potentiel...
                    </p>
                  </div>
                  <div className="it-teacher-details-right-content mb-40">
                    <h4>Notre projet éducatif</h4>
                    <p>
                      Notre projet éducatif privilégie la curiosité, le
                      dépassement de soi et l’ouverture sur le monde...
                    </p>
                  </div>
                  <div className="it-teacher-details-right-content mb-40">
                    <h4>Notre mission</h4>
                    <p>
                      L’École Canadienne de Sousse engage tous les élèves, de la
                      maternelle à la 12e année, dans leur développement
                      global...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="it-feature-3-area it-feature-3-bg inner-style pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-7 col-md-8">
              <SectionTitle
                titleClass="it-section-title-3"
                title="Nos valeurs"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <SingleFeature
                icon="fas fa-handshake"
                title="Engagement"
                description="S’engager à apprendre, à grandir et à contribuer positivement à notre communauté scolaire."
              />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <SingleFeature
                icon="fas fa-users"
                title="Respect"
                description="Développer et entretenir des relations harmonieuses au sein de notre communauté scolaire."
              />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <SingleFeature
                icon="fas fa-hand-holding-heart"
                title="Responsabilité"
                description="Développer un sens de la responsabilité envers le bien-être des membres de sa communauté scolaire."
              />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <SingleFeature
                icon="fas fa-award"
                title="Excellence scolaire"
                description="Appliquer les exigences les plus élevées pour la réussite de nos élèves."
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeacherDetailsMain;
