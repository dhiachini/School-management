import React from "react";
import SingleCategory from "../../components/Category";
import SectionTitle from "../../components/SectionTitle";

import shapeImg from "../../assets/img/category/ed-shape-1.png";

const Category = () => {
  return (
    <div className="ed-category-area pt-120 p-relative pb-120">
      <div className="ed-category-shape-1">
        <img src={shapeImg} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <SectionTitle
              itemClass="ed-category-title-box text-center mb-70"
              subTitle="Clubs"
              title="Clubs Extrascolaires"
            />
          </div>
        </div>
        <div className="row gx-35">
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <SingleCategory
              itemClass="ed-category-item ed-category-style-1 d-flex align-items-center mb-35"
              icon={
                <svg
                  fill="#1B75E8"
                  height="50px"
                  width="50px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.001 512.001"
                  stroke="#1B75E8"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <g>
                        <path d="M509.627,81.138c-1.973-6.073-7.222-10.499-13.542-11.416l-57.415-8.343L412.994,9.351C410.169,3.624,404.337,0,397.952,0 c-6.385,0-12.217,3.625-15.043,9.35l-25.677,52.028l-57.415,8.343c-6.318,0.917-11.569,5.343-13.542,11.416 c-1.974,6.074-0.328,12.74,4.244,17.196l41.546,40.499l-9.808,57.183c-1.079,6.294,1.507,12.654,6.673,16.408 c5.164,3.751,12.012,4.249,17.666,1.277l51.354-27l51.355,27c5.649,2.969,12.5,2.477,17.666-1.278 c5.166-3.752,7.753-10.113,6.673-16.407l-9.808-57.183l41.546-40.498C509.955,93.878,511.601,87.212,509.627,81.138z M434.105,120.964c-3.953,3.854-5.757,9.406-4.824,14.848l5.552,32.374L405.758,152.9c-2.444-1.284-5.125-1.927-7.806-1.927 c-2.681,0-5.362,0.642-7.806,1.927l-29.075,15.286l5.552-32.374c0.933-5.442-0.871-10.994-4.824-14.848l-23.522-22.929 l32.508-4.724c5.464-0.794,10.187-4.225,12.63-9.176l14.537-29.457l14.538,29.457c2.444,4.951,7.167,8.382,12.63,9.176 l32.506,4.724L434.105,120.964z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M500.361,299.326c-6.315-3.812-14.383-3.051-19.874,1.879c-36.233,32.524-81.655,48.663-126.99,48.658 c-48.689-0.003-97.275-18.623-134.208-55.556c-71.321-71.321-74.351-186.054-6.897-261.2c4.928-5.49,5.691-13.556,1.879-19.874 c-3.813-6.317-11.307-9.398-18.46-7.599c-45.132,11.371-86.233,34.627-118.861,67.255c-100.524,100.524-100.533,263.225,0,363.758 c100.411,100.412,263.224,100.532,363.757,0c32.626-32.627,55.883-73.729,67.253-118.86 C509.761,310.631,506.678,303.138,500.361,299.326z M416.983,412.923c-87.207,87.206-229.103,87.206-316.311,0 c-87.412-87.413-87.42-228.891,0-316.312c16.148-16.146,34.693-29.655,54.922-40.118 c-44.315,84.658-30.479,191.086,39.971,261.535C266.014,388.478,372.441,402.312,457.1,358 C446.636,378.23,433.129,396.776,416.983,412.923z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              }
              title="Club d’enseignement religieux"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <SingleCategory
              itemClass="ed-category-item ed-category-style-2 d-flex align-items-center mb-35"
              icon={
                <svg
                  fill="#FF6881"
                  height="60px"
                  width="60px"
                  viewBox="0 -64 640 640"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M206.86 245.15c-35.88 10.45-59.95 41.2-57.53 74.1 11.4-12.72 28.81-23.7 49.9-30.92l7.63-43.18zM95.81 295L64.08 115.49c-.29-1.62.28-2.62.24-2.65 57.76-32.06 123.12-49.01 189.01-49.01 1.61 0 3.23.17 4.85.19 13.95-13.47 31.73-22.83 51.59-26 18.89-3.02 38.05-4.55 57.18-5.32-9.99-13.95-24.48-24.23-41.77-27C301.27 1.89 277.24 0 253.32 0 176.66 0 101.02 19.42 33.2 57.06 9.03 70.48-3.92 98.48 1.05 126.58l31.73 179.51c14.23 80.52 136.33 142.08 204.45 142.08 3.59 0 6.75-.46 10.01-.8-13.52-17.08-28.94-40.48-39.5-67.58-47.61-12.98-106.06-51.62-111.93-84.79zm97.55-137.46c-.73-4.12-2.23-7.87-4.07-11.4-8.25 8.91-20.67 15.75-35.32 18.32-14.65 2.58-28.67.4-39.48-5.17-.52 3.94-.64 7.98.09 12.1 3.84 21.7 24.58 36.19 46.34 32.37 21.75-3.82 36.28-24.52 32.44-46.22zM606.8 120.9c-88.98-49.38-191.43-67.41-291.98-51.35-27.31 4.36-49.08 26.26-54.04 54.36l-31.73 179.51c-15.39 87.05 95.28 196.27 158.31 207.35 63.03 11.09 204.47-53.79 219.86-140.84l31.73-179.51c4.97-28.11-7.98-56.11-32.15-69.52zm-273.24 96.8c3.84-21.7 24.58-36.19 46.34-32.36 21.76 3.83 36.28 24.52 32.45 46.22-.73 4.12-2.23 7.87-4.07 11.4-8.25-8.91-20.67-15.75-35.32-18.32-14.65-2.58-28.67-.4-39.48 5.17-.53-3.95-.65-7.99.08-12.11zm70.47 198.76c-55.68-9.79-93.52-59.27-89.04-112.9 20.6 25.54 56.21 46.17 99.49 53.78 43.28 7.61 83.82.37 111.93-16.6-14.18 51.94-66.71 85.51-122.38 75.72zm130.3-151.34c-8.25-8.91-20.68-15.75-35.33-18.32-14.65-2.58-28.67-.4-39.48 5.17-.52-3.94-.64-7.98.09-12.1 3.84-21.7 24.58-36.19 46.34-32.37 21.75 3.83 36.28 24.52 32.45 46.22-.73 4.13-2.23 7.88-4.07 11.4z"></path>
                  </g>
                </svg>
              }
              title="Club de théâtre"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-6  wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <SingleCategory
              itemClass="ed-category-item ed-category-style-3 d-flex align-items-center mb-35"
              icon={
                <svg
                  fill="#00BC65"
                  height="50px"
                  width="50px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 326.845 326.845"
                  stroke="#00BC65"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M264.693,326.845h-38.079c-4.418,0-8-3.582-8-8v-30.464H108.231v30.464c0,4.418-3.582,8-8,8H62.152c-4.418,0-8-3.582-8-8v-6.939H24.074c-4.418,0-8-3.582-8-8V224.03c0-4.418,3.582-8,8-8h30.077v-6.938c0-4.418,3.582-8,8-8h38.079c4.418,0,8,3.582,8,8v30.464h110.384v-30.464c0-4.418,3.582-8,8-8h38.079c4.418,0,8,3.582,8,8v6.938h30.077c4.418,0,8,3.582,8,8v79.875c0,4.418-3.582,8-8,8h-30.077v6.939C272.693,323.263,269.112,326.845,264.693,326.845z M234.615,310.845h22.079v-93.753h-22.079V310.845z M70.152,310.845h22.079v-93.753H70.152V310.845z M272.693,295.905h22.077V232.03h-22.077V295.905z M32.074,295.905h22.077V232.03H32.074V295.905z M108.231,272.381h110.384v-16.825H108.231V272.381z M145.443,223.376c-1.331,0-2.68-0.332-3.922-1.032c-3.849-2.17-5.209-7.05-3.04-10.898c14.273-25.312,33.543-46.712,56.214-63.181c-9.894-13.703-21.197-26.173-33.681-37.227c-31.019,33.403-73.355,55.896-120.395,61.599c1.042,4.209,2.303,8.368,3.784,12.468c1.501,4.155-0.65,8.741-4.806,10.242c-4.158,1.502-8.741-0.651-10.242-4.807c-5.571-15.424-8.396-31.599-8.396-48.077C20.959,63.908,84.868,0,163.423,0c78.554,0,142.462,63.908,142.462,142.463c0,14.179-2.104,28.201-6.255,41.68c-1.301,4.223-5.78,6.589-10,5.291c-4.223-1.3-6.591-5.777-5.291-10c3.68-11.951,5.546-24.39,5.546-36.971c0-4.869-0.276-9.673-0.814-14.4c-25.871,2.997-50.403,11.521-72.172,24.662c4.713,7.504,9.017,15.253,12.873,23.202c1.928,3.975,0.269,8.761-3.706,10.689c-3.975,1.925-8.762,0.269-10.689-3.707c-3.573-7.366-7.501-14.486-11.761-21.341c-20.629,15.091-38.175,34.642-51.196,57.736C150.948,221.911,148.236,223.376,145.443,223.376z M66.601,61.193c-18.492,21.994-29.642,50.354-29.642,81.27c0,4.834,0.274,9.639,0.819,14.399c43.257-5.019,82.233-25.484,110.873-56.012C124.555,82.391,96.76,68.814,66.601,61.193z M171.329,98.998c13.625,12.048,25.936,25.664,36.611,40.442c23.598-14.378,50.218-23.758,78.307-27.155c-9.987-40.635-39.667-73.615-78.299-88.194C201.125,51.937,188.433,77.333,171.329,98.998z M79.321,48.096c28.682,8.458,55.914,22.357,79.681,40.709c15.771-20.065,27.435-43.606,33.62-69.402C183.248,17.179,173.468,16,163.423,16C131.162,16,101.686,28.14,79.321,48.096z"></path>
                  </g>
                </svg>
              }
              title="Club de sport"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-6  wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <SingleCategory
              itemClass="ed-category-item ed-category-style-4 d-flex align-items-center mb-35"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  height="50px"
                  width="50px"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#F2A700"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M10.0909 11.9629L19.3636 8.63087V14.1707C18.8126 13.8538 18.1574 13.67 17.4545 13.67C15.4964 13.67 13.9091 15.096 13.9091 16.855C13.9091 18.614 15.4964 20.04 17.4545 20.04C19.4126 20.04 21 18.614 21 16.855C21 16.855 21 16.8551 21 16.855L21 7.49236C21 6.37238 21 5.4331 20.9123 4.68472C20.8999 4.57895 20.8852 4.4738 20.869 4.37569C20.7845 3.86441 20.6352 3.38745 20.347 2.98917C20.2028 2.79002 20.024 2.61055 19.8012 2.45628C19.7594 2.42736 19.716 2.39932 19.6711 2.3722L19.6621 2.36679C18.8906 1.90553 18.0233 1.93852 17.1298 2.14305C16.2657 2.34086 15.1944 2.74368 13.8808 3.23763L11.5963 4.09656C10.9806 4.32806 10.4589 4.52419 10.0494 4.72734C9.61376 4.94348 9.23849 5.1984 8.95707 5.57828C8.67564 5.95817 8.55876 6.36756 8.50501 6.81203C8.4545 7.22978 8.45452 7.7378 8.45455 8.33743V16.1307C7.90347 15.8138 7.24835 15.63 6.54545 15.63C4.58735 15.63 3 17.056 3 18.815C3 20.574 4.58735 22 6.54545 22C8.50355 22 10.0909 20.574 10.0909 18.815C10.0909 18.815 10.0909 18.8151 10.0909 18.815L10.0909 11.9629Z"
                      fill=""
                    ></path>
                  </g>
                </svg>
              }
              title="Club de musique"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <SingleCategory
              itemClass="ed-category-item ed-category-style-5 d-flex align-items-center mb-35"
              icon={
                <svg
                  fill="#4500D0"
                  height="50px"
                  width="50px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 325.04 325.04"
                  xmlSpace="preserve"
                  stroke="#4500D0"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path d="M117.866,234.088c-2.956,14.532-4.875,21.558-16.092,22.458c-2.764,0.222-5.015,2.308-5.446,5.047 c-0.432,2.738,1.069,5.416,3.631,6.477c0.721,0.298,17.877,7.308,37.921,7.309c0.003,0,0.005,0,0.007,0 c13.968,0,25.95-3.386,35.612-10.063c11.45-7.912,19.344-20.294,23.541-36.788l-38.572-38.88 C125.871,194.924,121.253,217.436,117.866,234.088z"></path>
                      <path d="M322.745,63.336c-1.037-1.046-2.887-2.293-5.806-2.293c-3.423,0-12.516,0-67.74,46.992 c-25.509,21.706-54.92,48.559-78.314,71.41l36.603,36.894c24.061-25.009,52.129-56.355,74.451-83.258 c14.096-16.986,24.935-31.002,32.216-41.657C323.799,77.311,328.023,68.655,322.745,63.336z"></path>
                      <path d="M182.595,278.479c-12.387,8.56-27.429,12.899-44.716,12.899c-22.753-0.001-41.919-7.649-44.046-8.527 c-9.425-3.906-14.898-13.673-13.31-23.749c1.555-9.871,9.463-17.373,19.341-18.446c0.861-2.571,1.813-7.254,2.323-9.758 c1.878-9.23,4.449-21.873,12.358-33.126c8.637-12.287,21.656-20.165,38.751-23.466c9.811-9.737,21.005-20.443,32.686-31.308 c-5.905-1.281-11.185-5.127-14.017-10.944c-4.875-10.02-0.623-22.073,9.484-26.895c10.133-4.834,22.287-0.612,27.155,9.423 c0.961,1.978,1.555,4.033,1.832,6.096c9.688-8.677,19.309-17.099,28.392-24.828c0.054-0.046,0.105-0.09,0.16-0.136 c-10.209-19.536-24.849-36.845-42.687-50.098c-25.614-19.031-56.114-29.096-88.2-29.104c-0.01,0-0.017,0-0.025,0 c-21.654,0-47.976,7.566-68.697,19.749C13.981,51.193-0.005,71.163,0,92.49c0.008,25.748,14.53,36.518,26.199,45.171 c9.515,7.057,17.03,12.63,17.034,24.844c0.003,12.213-7.508,17.781-17.018,24.831c-11.665,8.648-26.184,19.412-26.176,45.163 c0.006,21.324,14.001,41.299,39.406,56.244c20.736,12.198,47.072,19.78,68.73,19.786c0.015,0,0.028,0,0.042,0 c39.305,0,76.254-15.171,104.044-42.72c20.837-20.655,34.656-46.416,40.273-74.442c-13.952,15.471-27.997,30.493-40.563,43.322 C206.641,253.965,196.773,268.682,182.595,278.479z M111.054,77.103c2.498-10.871,13.4-17.657,24.354-15.167 c10.939,2.478,17.793,13.282,15.313,24.138c-2.499,10.844-13.407,17.631-24.362,15.154 C115.411,98.764,108.554,87.947,111.054,77.103z M45.054,114.152c-7.005-8.716-5.565-21.401,3.216-28.339 c8.78-6.925,21.571-5.505,28.589,3.195c6.99,8.703,5.545,21.388-3.229,28.34C64.869,124.288,52.058,122.853,45.054,114.152z M55.746,247.168c-8.786-6.944-10.231-19.629-3.226-28.342c7-8.696,19.796-10.122,28.581-3.18 c8.778,6.943,10.224,19.629,3.225,28.327C77.327,252.686,64.53,254.111,55.746,247.168z"></path>
                    </g>
                  </g>
                </svg>
              }
              title="Club d’art"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <SingleCategory
              itemClass="ed-category-item ed-category-style-6 d-flex align-items-center mb-35"
              icon={
                <svg
                  fill="#BB0064"
                  height="50px"
                  width="50px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M 8 4 L 8 6 L 4.8007812 6 L 6.0742188 12 L 6 12 C 5.4 12 5 12.4 5 13 C 5 13.6 5.4 14 6 14 L 6.109375 14 L 5.0917969 21 L 5 21 C 4.4 21 4 21.4 4 22 C 4 22.31975 4.119476 22.576073 4.3164062 22.751953 L 3 24.699219 L 3 27 L 15 27 L 15.099609 27 L 15.099609 24.699219 L 13.744141 22.693359 C 13.903452 22.520011 14 22.285236 14 22 C 14 21.4 13.6 21 13 21 L 12.890625 21 L 11.808594 14 L 12 14 C 12.6 14 13 13.6 13 13 C 13 12.4 12.6 12 12 12 L 11.949219 12 L 13.300781 6 L 10 6 L 10 4 L 8 4 z M 7.1992188 8 L 10.800781 8 L 9.9003906 12 L 8.0996094 12 L 7.1992188 8 z M 19 9 L 19 11 L 19 12 L 19 15.400391 L 19.900391 16.300781 L 19.128906 21 L 19 21 C 18.4 21 18 21.4 18 22 C 18 22.31975 18.119476 22.576073 18.316406 22.751953 L 17 24.699219 L 17 27 L 29 27 L 29.099609 27 L 29.099609 24.699219 L 27.744141 22.693359 C 27.903452 22.520011 28 22.285236 28 22 C 28 21.4 27.6 21 27 21 L 26.871094 21 L 26.099609 16.300781 L 27 15.400391 L 27 12 L 27 11 L 27 9 L 25 9 L 25 11 L 24 11 L 24 9 L 22 9 L 22 11 L 21 11 L 21 9 L 19 9 z M 21 13 L 25 13 L 25 14.599609 L 23.900391 15.699219 L 24.800781 21 L 21.199219 21 L 22.099609 15.699219 L 21 14.599609 L 21 13 z M 8.1992188 14 L 9.9003906 14 L 10.900391 21 L 7.1992188 21 L 8.1992188 14 z M 6.5 23 L 11.5 23 L 12.800781 25 L 5.1992188 25 L 6.5 23 z M 20.599609 23 L 25.5 23 L 26.800781 25 L 19.199219 25 L 20.599609 23 z"></path>
                  </g>
                </svg>
              }
              title="Club de jeu d’échecs"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <SingleCategory
              itemClass="ed-category-item ed-category-style-7 d-flex align-items-center mb-35"
              icon={
                <svg
                  height="50px"
                  width="50px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  fill="#0011BB"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <style type="text/css">{`.st0{fill:#0011BB;}`}</style>
                    <g>
                      <path
                        className="st0"
                        d="M314.685,210.72c-8.365,0-15.028-1.612-20.383-4.096c-8.012-3.71-13.202-9.427-16.468-15.135c-1.628-2.838-2.755-5.66-3.463-8.144c-0.708-2.476-0.987-4.656-0.979-5.956c0-2.484-2.007-4.491-4.483-4.491c-2.476,0-4.484,2.007-4.484,4.491c0,1.613,0.198,3.39,0.593,5.347c0.69,3.43,1.973,7.378,4.088,11.466c3.15,6.096,8.168,12.503,15.67,17.357c1.884,1.242,3.898,2.352,6.087,3.34c0.345,1.488,0.83,4.096,0.823,7.263c0,2.294-0.255,4.845-0.946,7.469c-0.692,2.624-1.818,5.289-3.628,7.896c-1.39,2.048-0.896,4.828,1.143,6.235c2.032,1.407,4.821,0.906,6.227-1.134c2.451-3.53,4.006-7.206,4.928-10.702c0.913-3.505,1.233-6.844,1.233-9.764c0-1.456-0.082-2.83-0.197-4.063c4.31,0.995,9.032,1.587,14.238,1.587c2.476,0,4.484-2.006,4.484-4.483C319.169,212.728,317.162,210.72,314.685,210.72z"
                      ></path>
                      <path
                        className="st0"
                        d="M334.558,153.042c-2.155-1.201-4.878-0.461-6.103,1.703c-1.217,2.147-0.452,4.878,1.703,6.103c3.306,1.892,5.314,3.981,6.663,6.145c-5.528,1.94-10.414,2.747-14.749,2.747c-6.326-0.008-11.499-1.678-15.876-4.244c-4.352-2.558-7.864-6.07-10.537-9.698c-4.4-6.005-10.117-11.343-16.862-15.242c-6.745-3.882-14.535-6.317-22.908-6.317c-7.329,0-15.053,1.892-22.719,6.095c-3.126,1.712-5.848,3.718-8.209,5.915c-9.32,3.586-17.34,4.886-24.142,4.886c-9.681-0.017-16.904-2.6-21.74-5.15c-2.41-1.283-4.212-2.55-5.379-3.471c-0.584-0.468-1.02-0.83-1.284-1.077l-0.263-0.255l-0.05-0.049c-1.719-1.76-4.541-1.81-6.326-0.1c-1.776,1.719-1.826,4.549-0.115,6.334c0.263,0.256,3.332,3.397,9.229,6.532c2.582,1.365,5.741,2.706,9.394,3.8c-0.97,1.365-2.296,3.372-3.742,5.905c-2.772,4.895-5.956,11.771-7.568,19.858c-0.502,2.442,1.078,4.795,3.504,5.28c2.427,0.494,4.779-1.094,5.264-3.521c1.358-6.818,4.154-12.889,6.597-17.191c1.226-2.172,2.352-3.874,3.167-5.042c0.411-0.568,0.732-1.02,0.954-1.3c0.107-0.14,0.19-0.238,0.238-0.304l0.066-0.066l0.008-0.016c0.404-0.502,0.675-1.07,0.831-1.678c2.278,0.296,4.672,0.461,7.214,0.461c4.705,0,9.871-0.559,15.431-1.818c-2.772,5.931-3.899,12.133-3.908,17.809c0.017,5.708,1.103,10.907,3.053,15.037c1.06,2.229,3.734,3.192,5.963,2.13c2.229-1.062,3.192-3.726,2.13-5.964c-1.242-2.584-2.197-6.68-2.18-11.204c-0.008-4.886,1.061-10.249,3.587-15.16c2.541-4.902,6.473-9.369,12.585-12.725c6.441-3.538,12.61-4.985,18.409-5.002c6.622,0.017,12.856,1.924,18.433,5.133c5.561,3.2,10.414,7.724,14.115,12.766c3.257,4.45,7.617,8.826,13.219,12.133c5.593,3.307,12.469,5.487,20.416,5.47c5.256,0,10.964-0.937,17.117-3.026l0.008,0.313c0,2.196-0.345,4.194-0.683,5.61c-0.164,0.691-0.337,1.258-0.46,1.612c-0.058,0.181-0.099,0.313-0.132,0.395l-0.024,0.066v0.008c-0.904,2.294,0.197,4.886,2.492,5.807c2.303,0.913,4.911-0.205,5.832-2.492c0.123-0.321,1.908-4.804,1.933-11.005c0-3.554-0.617-7.732-2.698-11.853C343.401,159.984,339.855,156.028,334.558,153.042z"
                      ></path>
                      <path
                        className="st0"
                        d="M219.572,119.564c3.086-3.636,7.47-6.498,12.462-8.415c4.993-1.942,10.554-2.904,15.769-2.904c5.067,0,9.797,0.929,13.252,2.55c2.262,1.036,4.918,0.05,5.946-2.188c1.037-2.246,0.058-4.919-2.18-5.938c-5.001-2.32-10.891-3.356-17.019-3.365c-6.3,0-12.864,1.127-18.993,3.48c-6.103,2.352-11.779,5.947-16.056,11.006c-1.612,1.883-1.374,4.705,0.51,6.3C215.155,121.702,217.993,121.456,219.572,119.564z"
                      ></path>
                      <path
                        className="st0"
                        d="M288.782,0.457C178.362-6.338,85.38,63.128,87.485,176.304l-0.082,10.242l-47.972,84.716c-2.583,4.565-2.814,10.101-0.625,14.872c2.188,4.771,6.531,8.201,11.68,9.221l29.646,8.176l9.311,89.824c0.247,8.661,4.097,16.822,10.628,22.506c6.531,5.692,15.152,8.382,23.756,7.419l23.673,1.884c4.622-0.51,9.246,0.962,12.708,4.072c3.463,3.093,5.446,7.526,5.446,12.174V512h200.302c0,0,0-34.226,0-47.881c0-13.663,4.721-44.887,13.654-59.184c32.475-51.92,85.333-79.542,94.25-186.014C482.784,112.432,419.233,8.494,288.782,0.457zM422.046,183.049c-4.491,7.42-11.754,12.042-19.684,13.408c-2.434,0.428-4.08,2.731-3.668,5.174c0.436,2.434,2.747,4.088,5.182,3.652c1.818-0.313,3.611-0.765,5.38-1.333c1.908,3.956,2.862,8.209,2.862,12.445c0,4.524-1.077,9.015-3.142,13.078c-2.057,4.056-5.1,7.667-9.098,10.48c-5.026,3.528-10.743,5.206-16.418,5.215c-0.452,0-0.897-0.049-1.341-0.058c-0.099-0.749-0.19-1.489-0.321-2.221v-0.009c-0.978-5.19-3.01-9.944-5.782-14.074l-0.338-0.501l-0.46-0.395c-3.389-2.912-7.889-7.683-11.36-12.544c-1.752-2.426-3.24-4.886-4.244-7.074c-1.012-2.196-1.481-4.105-1.464-5.232c0-0.502,0.074-0.848,0.173-1.078c0.082-0.222,0.164-0.354,0.337-0.535c1.744-1.736,1.744-4.582,0-6.342c-1.752-1.736-4.581-1.736-6.325,0c-1.103,1.086-1.926,2.401-2.427,3.792c-0.518,1.366-0.708,2.788-0.708,4.162c0.016,3.101,0.954,6.046,2.27,8.958c1.999,4.352,4.976,8.67,8.209,12.618c3.036,3.702,6.252,7.033,9.148,9.583c1.999,3.052,3.454,6.507,4.17,10.315c0.296,1.605,0.452,3.2,0.485,4.722v0.033c0,0.197,0.008,0.395,0.008,0.608c0,6.762-2.41,13.17-6.548,18.212c-4.145,5.034-9.977,8.694-16.895,9.994c-1.802,0.345-3.595,0.51-5.356,0.51c-9.5,0.008-18.286-4.771-23.566-12.355c2.846-2.887,5.273-6.268,7.115-10.11v0.008c2.295-4.746,3.504-9.78,3.718-14.764c0.107-2.468-1.801-4.557-4.269-4.664c-2.484-0.115-4.566,1.809-4.681,4.277c-0.156,3.8-1.077,7.608-2.829,11.244l-0.008,0.017c-1.884,3.89-4.5,7.148-7.626,9.723l-0.016,0.008c-5.149,4.203-11.64,6.523-18.277,6.523c-4.178,0-8.423-0.913-12.454-2.863c-7.46-3.586-12.642-9.977-14.937-17.29h-0.008c-0.872-2.772-1.324-5.692-1.324-8.62c0-4.187,0.913-8.432,2.862-12.47c1.078-2.229,0.132-4.91-2.097-5.972c-2.221-1.077-4.894-0.148-5.972,2.082c-2.533,5.264-3.759,10.866-3.759,16.361c0,2.665,0.313,5.297,0.856,7.871c-3.496,1.909-7.436,3.134-11.697,3.438h-0.008c-0.699,0.05-1.382,0.082-2.073,0.082c-6.729,0-12.955-2.336-17.891-6.293c-4.318-3.454-7.624-8.102-9.385-13.515c3.142-3.1,5.758-6.744,7.674-10.783c1.053-2.238,0.098-4.903-2.138-5.956c-2.229-1.061-4.919-0.107-5.964,2.138c-1.769,3.752-4.352,7.083-7.502,9.74c-4.491,3.792-10.151,6.227-16.451,6.68h-0.008c-0.699,0.049-1.382,0.082-2.064,0.082c-14.214,0-26.355-10.504-28.412-24.553l-0.008-0.041v-0.024c-0.115-0.675-0.189-1.374-0.238-2.098c-0.049-0.683-0.074-1.39-0.074-2.081c0-1.802,0.173-3.586,0.494-5.306c0.436-2.435-1.167-4.771-3.602-5.223c-2.418-0.436-4.762,1.152-5.223,3.586c-0.404,2.253-0.625,4.573-0.625,6.942l0.008,0.271c-4.03-0.452-7.938-1.744-11.434-3.792c-4.426-2.582-8.185-6.366-10.784-11.22c-2.311-4.335-3.406-8.949-3.406-13.523c0-5.906,1.835-11.704,5.216-16.55c1.308,1.842,2.78,3.578,4.433,5.206c3.784,3.71,8.16,6.457,12.791,8.25c2.311,0.906,4.895-0.247,5.791-2.566c0.905-2.303-0.255-4.894-2.55-5.791c-3.545-1.366-6.869-3.454-9.748-6.284v-0.008c-2.55-2.484-4.524-5.314-5.931-8.349c-1.809-3.85-2.714-8.036-2.714-12.19c0.007-7.288,2.722-14.51,8.2-20.103c4.664-4.755,10.537-7.536,16.632-8.382h0.008h0.016c1.3-0.165,2.599-0.255,3.899-0.255c7.272,0.008,14.502,2.748,20.112,8.218c1.769,1.719,4.598,1.702,6.334-0.074c1.728-1.76,1.695-4.59-0.066-6.326c-7.14-6.992-16.385-10.57-25.64-10.734c1.044-4.286,3.052-8.274,5.865-11.631c3.907-4.655,9.246-8.094,15.629-9.566c2.172-0.485,4.31-0.732,6.44-0.732c3.751,0,7.403,0.756,10.776,2.122c-0.954,3.34-1.481,6.844-1.481,10.48c0,2.467,2,4.466,4.475,4.466c2.475,0,4.474-1.999,4.474-4.466c0-3.916,0.799-7.658,2.197-11.055c2.163-5.199,5.824-9.624,10.422-12.75c4.614-3.126,10.134-4.943,16.13-4.943c8.637,0,16.345,3.775,21.625,9.804c4.45,5.059,7.124,11.672,7.124,18.944c0,2.467,2.016,4.466,4.483,4.466c2.476,0,4.491-1.999,4.491-4.466c0-8.276-2.681-15.95-7.214-22.16c2.32-3.208,5.273-5.939,8.694-7.962c4.277-2.517,9.254-3.973,14.593-3.973c6.152,0,11.803,1.917,16.467,5.19c4.681,3.274,8.333,7.914,10.398,13.301h-0.008c1.218,3.2,1.884,6.638,1.884,10.266c0,2.468,2.015,4.474,4.483,4.474c2.468,0,4.491-2.006,4.491-4.474c0-3.702-0.568-7.263-1.563-10.644c5.314-4.935,12.347-7.732,19.61-7.732c3.792,0,7.642,0.749,11.359,2.336c5.182,2.246,9.345,5.791,12.314,10.118c2.97,4.335,4.713,9.418,5.018,14.682c0.033,0.543,0.058,1.078,0.058,1.62c-0.017,3.801-0.766,7.634-2.361,11.36c-0.978,2.271,0.074,4.903,2.344,5.873c2.278,0.979,4.902-0.066,5.889-2.336c1.662-3.866,2.616-7.856,2.937-11.861c4.392,0.312,8.669,1.645,12.454,3.882c4.318,2.55,8.011,6.284,10.529,11.071c2.204,4.187,3.24,8.637,3.249,13.046c0,2.015-0.247,4.014-0.682,5.972c-2.682-1.053-5.478-1.76-8.267-2.172c-2.435-0.337-4.714,1.374-5.042,3.825c-0.354,2.452,1.357,4.713,3.792,5.051c2.821,0.402,5.593,1.209,8.242,2.459c0.461,0.766,1.168,1.399,2.056,1.786c0.543,0.238,1.127,0.354,1.695,0.354c1.653,1.102,3.158,2.344,4.5,3.701l0.008,0.008c5.379,5.42,8.266,12.733,8.266,20.21C426.233,173.252,424.892,178.385,422.046,183.049z"
                      ></path>
                      <path
                        className="st0"
                        d="M375.522,143.452c-2.221-1.917-4.606-3.488-7.132-4.59c-2.534-1.119-5.199-1.785-7.921-1.785c-2.476,0-4.475,2.007-4.475,4.483c0,2.476,1.999,4.475,4.475,4.475c1.645,0,3.718,0.568,5.922,1.835c3.282,1.883,6.696,5.272,9.164,9.5c2.501,4.236,4.096,9.262,4.08,14.469c-0.017,5.717-1.818,11.689-6.704,17.619c-1.563,1.9-1.3,4.73,0.608,6.301c1.909,1.588,4.738,1.308,6.31-0.584c6.144-7.428,8.768-15.653,8.76-23.336c0-4.672-0.954-9.147-2.517-13.227C383.723,152.5,379.956,147.284,375.522,143.452z"
                      ></path>

                      <path
                        className="st0"
                        d="M344.545,123.142c-12.314,0-22.193-4.54-29.037-10.471c-3.422-2.962-6.038-6.268-7.757-9.443c-1.744-3.167-2.534-6.186-2.517-8.448c0-2.467-2.007-4.474-4.475-4.474c-2.476,0-4.483,2.007-4.483,4.474 c0.016,4.204,1.333,8.53,3.603,12.726c2.394,4.376,5.882,8.628,10.299,12.362c-0.889,1.234-2.114,2.846-3.694,4.549 c-3.406,3.726-8.324,7.847-14.206,9.945c-2.311,0.822-3.537,3.38-2.706,5.716c0.83,2.336,3.381,3.537,5.725,2.714 c7.971-2.862,13.926-8.085,17.981-12.536c1.802-1.974,3.2-3.791,4.245-5.239c7.403,4.269,16.558,7.091,27.021,7.091c2.476,0,4.474-2.007,4.474-4.475C349.019,125.158,347.02,123.142,344.545,123.142z"
                      ></path>
                    </g>
                  </g>
                </svg>
              }
              title="Club de calcul mental et résolution de problèmes mathématiques"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <SingleCategory
              itemClass="ed-category-item ed-category-style-8 d-flex align-items-center mb-35"
              icon={
                <svg
                  fill="#D16900"
                  viewBox="0 0 50 50"
                  height="50px"
                  width="50px"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M19.3125 0.03125C19.121094 0.03125 18.933594 0.078125 18.75 0.15625L11.59375 3.125C10.855469 3.433594 10.484375 4.292969 10.78125 5.03125C10.78125 5.042969 10.78125 5.050781 10.78125 5.0625L11.5625 6.9375C11.867188 7.679688 12.753906 8.03125 13.5 7.71875L14.25 7.40625L15.125 9.65625L14.96875 9.71875C14.683594 9.832031 14.457031 9.902344 14.21875 10.03125C13.980469 10.160156 13.632813 10.40625 13.46875 10.8125C13.304688 11.21875 13.394531 11.585938 13.46875 11.84375C13.542969 12.101563 13.636719 12.3125 13.75 12.59375C13.75 12.605469 13.75 12.613281 13.75 12.625L13.9375 13.125L13.5 13.28125C8.296875 15.398438 5.769531 21.367188 7.875 26.5625C7.875 26.574219 7.875 26.582031 7.875 26.59375L10.15625 32C9.375 33.140625 8.90625 34.523438 8.90625 36C8.90625 39.410156 11.339844 42.273438 14.5625 42.9375C14.5625 42.957031 14.5625 42.980469 14.5625 43C14.757813 43.34375 14.96875 43.671875 15.1875 44L9.875 44C8.261719 44 7 45.386719 7 47L7 49C7 49.550781 7.449219 50 8 50L42 50C42.550781 50 43 49.550781 43 49L43 47C43 45.386719 41.738281 44 40.125 44L37.3125 44C39.160156 43.210938 40.101563 41.105469 39.375 39.21875C38.816406 37.769531 37.4375 36.832031 35.96875 36.78125C35.480469 36.765625 34.984375 36.84375 34.5 37.03125L24.65625 40.84375C24.644531 40.84375 24.636719 40.84375 24.625 40.84375C24.242188 40.996094 23.753906 40.984375 23.1875 40.75C22.753906 40.570313 22.332031 40.242188 21.9375 39.875C22.667969 38.761719 23.09375 37.421875 23.09375 36C23.09375 35.542969 23.019531 35.089844 22.9375 34.65625L35.875 29.375C36.410156 29.238281 36.730469 28.691406 36.59375 28.15625C36.457031 27.621094 35.910156 27.300781 35.375 27.4375C35.289063 27.449219 35.207031 27.46875 35.125 27.5L22.28125 32.78125C21.234375 30.75 19.257813 29.273438 16.90625 28.96875L14.84375 23.75C14.292969 22.386719 14.945313 20.839844 16.3125 20.28125C16.324219 20.28125 16.332031 20.28125 16.34375 20.28125L16.84375 20.0625L18.34375 23.71875C18.359375 23.78125 18.378906 23.847656 18.40625 23.90625L19.40625 26.34375C19.507813 26.582031 19.699219 26.773438 19.9375 26.875L22.8125 28.09375C23.054688 28.191406 23.320313 28.191406 23.5625 28.09375L27.65625 26.46875C27.894531 26.367188 28.085938 26.175781 28.1875 25.9375L29.4375 23.0625C29.535156 22.820313 29.535156 22.554688 29.4375 22.3125L28.46875 20C28.46875 19.980469 28.46875 19.957031 28.46875 19.9375L28.46875 19.90625C28.457031 19.894531 28.449219 19.886719 28.4375 19.875C28.4375 19.855469 28.4375 19.832031 28.4375 19.8125C28.417969 19.769531 28.398438 19.726563 28.375 19.6875L23.75 8.5C23.636719 8.21875 23.5625 8.015625 23.4375 7.78125C23.3125 7.546875 23.101563 7.207031 22.6875 7.03125C22.273438 6.855469 21.910156 6.925781 21.65625 7C21.402344 7.074219 21.1875 7.167969 20.90625 7.28125L20.71875 7.34375L19.8125 5.09375L20.65625 4.75C21.382813 4.445313 21.761719 3.582031 21.46875 2.84375L21.46875 2.8125L20.6875 0.9375C20.449219 0.390625 19.886719 0.0351563 19.3125 0.03125 Z M 19.03125 2.1875L19.4375 3.09375L13.21875 5.6875L12.8125 4.78125 Z M 17.96875 5.84375L18.875 8.125L17 8.90625L16.09375 6.625 Z M 21.84375 9.09375C21.871094 9.15625 21.875 9.171875 21.90625 9.25C21.90625 9.261719 21.90625 9.269531 21.90625 9.28125L26.21875 19.6875L19.875 22.21875L15.59375 11.875C15.589844 11.863281 15.597656 11.855469 15.59375 11.84375C15.554688 11.75 15.527344 11.730469 15.5 11.65625C15.574219 11.625 15.585938 11.601563 15.6875 11.5625C15.699219 11.5625 15.707031 11.5625 15.71875 11.5625L21.65625 9.15625C21.75 9.117188 21.769531 9.121094 21.84375 9.09375 Z M 14.71875 14.9375L16.0625 18.21875L15.5625 18.40625C13.191406 19.375 12.039063 22.125 13 24.5L14.78125 29.03125C13.617188 29.234375 12.554688 29.707031 11.65625 30.40625L9.71875 25.8125C8.027344 21.636719 10.046875 16.882813 14.21875 15.15625C14.234375 15.152344 14.234375 15.128906 14.25 15.125 Z M 26.96875 21.5625L27.4375 22.65625L26.5 24.78125L23.21875 26.09375L21.09375 25.1875L20.65625 24.09375 Z M 16 31.09375C18.726563 31.09375 20.90625 33.273438 20.90625 36C20.90625 38.726563 18.726563 40.90625 16 40.90625C13.273438 40.90625 11.09375 38.726563 11.09375 36C11.09375 33.273438 13.273438 31.09375 16 31.09375 Z M 35.90625 38.78125C36.59375 38.804688 37.234375 39.246094 37.5 39.9375C37.855469 40.859375 37.390625 41.863281 36.46875 42.21875L31.8125 44L17.6875 44C17.464844 43.75 17.222656 43.410156 16.96875 43.03125C18.335938 42.84375 19.585938 42.265625 20.59375 41.40625C21.140625 41.902344 21.757813 42.3125 22.4375 42.59375C23.34375 42.96875 24.386719 43.085938 25.375 42.6875L35.21875 38.90625C35.449219 38.816406 35.675781 38.773438 35.90625 38.78125 Z M 9.875 46L40.125 46C40.582031 46 41 46.402344 41 47L41 48L9 48L9 47C9 46.402344 9.417969 46 9.875 46Z"></path>
                  </g>
                </svg>
              }
              title="Club de sciences"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <SingleCategory
              itemClass="ed-category-item ed-category-style-9 d-flex align-items-center mb-35"
              icon={
                <svg
                  fill="#00A9ED"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#00A9ED"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <circle cx="237.52" cy="129.73" r="9.56"></circle>
                    <path d="M398.65,227.36a29.42,29.42,0,0,0-7.66,1.12l-22.88-22.89a42.18,42.18,0,0,0,4.29-18.31V175.57a5.33,5.33,0,0,0-5.33-5.33H301.6V131h14.33v14.6a5.33,5.33,0,1,0,10.66,0v-39a5.33,5.33,0,1,0-10.66,0v13.77H301.6V106.54a5.32,5.32,0,0,0-5.33-5.33H215.73a5.32,5.32,0,0,0-5.33,5.33v13.77H196.07V106.54a5.33,5.33,0,1,0-10.66,0v39a5.33,5.33,0,0,0,10.66,0V131H210.4v39.27H144.93a5.33,5.33,0,0,0-5.33,5.33v11.71a42.18,42.18,0,0,0,4.29,18.31L121,228.48a29.34,29.34,0,0,0-7.65-1.12A29.88,29.88,0,0,0,83.5,257.21a5.33,5.33,0,1,0,10.66,0,19.19,19.19,0,1,1,19.19,19.19,5.33,5.33,0,1,0,0,10.66,29.88,29.88,0,0,0,29.85-29.85c0-.79-.17-1.54-.23-2.32l26.66-26.66c.1-.1.14-.24.23-.35a42.36,42.36,0,0,0,7.68,1.58,67.73,67.73,0,0,0-.61,8.6v58.8c-12.11,5.67-51.82,28.42-51.82,83.62a5.33,5.33,0,0,0,5.33,5.34h23.28v1.1a23.87,23.87,0,0,0,47.74,0v-1.1h30.61v1.1a23.87,23.87,0,0,0,47.74,0v-1.1h30.73v1.1a23.87,23.87,0,1,0,47.74,0v-1.1h23.28a5.33,5.33,0,0,0,5.33-5.34c0-55.2-39.71-78-51.82-83.62v-58.8a67.73,67.73,0,0,0-.61-8.6,42.36,42.36,0,0,0,7.68-1.58c.09.11.13.25.23.35L369,254.89c-.06.78-.23,1.53-.23,2.32a29.88,29.88,0,0,0,29.85,29.85,5.33,5.33,0,0,0,0-10.66,19.19,19.19,0,1,1,19.19-19.19,5.33,5.33,0,1,0,10.66,0A29.88,29.88,0,0,0,398.65,227.36ZM256.06,346.28l-.06,0-.06,0H228.29c-3.65-10.41-15.55-38.54-40.7-49.55V238.06a57.06,57.06,0,0,1,26.18-47.9v64a42.21,42.21,0,0,0,42.17,42.16h.12a42.21,42.21,0,0,0,42.17-42.16v-64a57.06,57.06,0,0,1,26.18,47.9v58.67c-25.15,11-37.05,39.14-40.7,49.55Zm-.12-165.38h11.3a56.81,56.81,0,0,1,20.33,3.9v69.34a31.54,31.54,0,0,1-31.51,31.5h-.12a31.54,31.54,0,0,1-31.51-31.5V184.8a56.81,56.81,0,0,1,20.33-3.9Zm-34.88-69h69.88v58.37H221.06Zm-81.5,131.35a29.9,29.9,0,0,0-8.4-9.82l18.7-18.7a42.46,42.46,0,0,0,9.68,8.55Zm10.7-55.94V180.9H208.4A68,68,0,0,0,179.7,219,32,32,0,0,1,150.26,187.28ZM190.8,386.92a13.21,13.21,0,0,1-26.42,0v-1.1H190.8Zm78.35,0a13.21,13.21,0,1,1-26.42,0v-1.1h26.42Zm78.47,0a13.21,13.21,0,1,1-26.42,0v-1.1h26.42Zm28.48-11.77H135.9c2.5-47.53,37.83-65.41,46.31-69,26.57,10.82,37,46.56,37.06,46.93a5.34,5.34,0,0,0,5.13,3.9h63.2a5.32,5.32,0,0,0,5.13-3.9c.1-.37,10.39-36.08,37.06-46.93C338.27,309.74,373.6,327.62,376.1,375.15ZM303.6,180.9h58.14v6.38A32,32,0,0,1,332.3,219,68,68,0,0,0,303.6,180.9Zm48.86,42.35a42.46,42.46,0,0,0,9.68-8.55l18.7,18.7a29.78,29.78,0,0,0-8.4,9.82Z"></path>
                    <path d="M274.48,139.29a9.57,9.57,0,1,0-9.57-9.56A9.56,9.56,0,0,0,274.48,139.29Z"></path>
                  </g>
                </svg>
              }
              title="Club de robotique"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
