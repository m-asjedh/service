import React from "react";
import AirFilter from "../assets/AirFilter.jpeg";
import BodyWash from "../assets/BodyWash.jpeg";
import FullService from "../assets/FullService.jpg";
import OilChange from "../assets/OilChange.jpeg";
import Painting from "../assets/Painting.jpeg";
import TyreChange from "../assets/TyreChange.jpeg";

const servicesData = [
  { image: AirFilter, name: "Air Filter Change", price: 1500 },
  { image: BodyWash, name: "Body Wash", price: 750 },
  { image: FullService, name: "Full Service", price: 5000 },
  { image: OilChange, name: "Oil Change", price: 1000 },
  { image: Painting, name: "Painting", price: 3000 },
  { image: TyreChange, name: "Tyre Change", price: 2000 },
];

const Services = () => {
  return (
    <div className="m-10 grid grid-cols-2 md:grid-cols-3 gap-4">
      {servicesData.map((service, index) => (
        <div key={index} className="relative border border-gray-300 rounded-lg overflow-hidden">
          <img
            className="h-auto w-full"
            src={service.image}
            alt={service.name}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold">
            {service.name}
          </div>
          <div className="absolute bottom-0 right-0 p-2 bg-white text-gray-800">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {`$${service.price}`}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;


