import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddVehicle = () => {
  const [car_type, setCar_type] = useState("");
  const [car_no, setCar_no] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [serviceType, setserviceType] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const url = "http://localhost:8080/car/add";

  const serviceTypes = {
    "Full Service": 5000,
    "Oil change": 1000,
    "Tyre Change": 2000,
    "Air Filter change": 1500,
    "Body Wash": 750,
    Painting: 3000,
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (phone_number.length !== 10 || isNaN(phone_number)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      await axios.post(url, {
        car_type,
        car_no,
        first_name,
        last_name,
        serviceType,
        phone_number,
        price,
      });

      setCar_type("");
      setCar_no("");
      setFirst_name("");
      setLast_name("");
      setserviceType("");
      setPhone_number("");
      setPrice("");

      navigate("/manage-vehicle");
    } catch (error) {
      console.error("Error adding vehicle:", error);
    }
  };

  const handleServiceTypeChange = (selectedType) => {
    setserviceType(selectedType);
    setPrice(serviceTypes[selectedType] || 0);
  };

  const handleCancel = () => {
    setCar_type("");
    setCar_no("");
    setFirst_name("");
    setLast_name("");
    setserviceType("");
    setPhone_number("");
    setPrice("");
  };

  return (
    <div className="flex h-auto items-center justify-center  w-full bg-blue-100">
      <form
        onSubmit={handleClick}
        className="bg-white flex items-center justify-center shadow-md rounded-lg p-8 max-w-2xl w-full"
      >
        <div className="container w-11/12 md:w-2/3 max-w-lg">
          <div className="relative py-4 px-5 md:px-10 bg-white shadow-xl rounded border border-gray-400">
            <div className="w-full flex mx-auto text-gray-600 mb-3"></div>
            <h1 className="flex items-center justify-center text-lg text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
              Enter Car Details
            </h1>
            <label className="text-gray-800 text-lg font-bold leading-tight tracking-normal">
              Car Number
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
              <input
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-base border-gray-300 rounded border"
                placeholder="AAA-1111"
                value={car_no}
                onChange={(e) => setCar_no(e.target.value)}
              />
            </div>
            <label className="text-gray-800 text-lg font-bold leading-tight tracking-normal">
              Car Type
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
              <input
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-base border-gray-300 rounded border"
                placeholder="Toyota"
                value={car_type}
                onChange={(e) => setCar_type(e.target.value)}
              />
            </div>

            <label className="text-gray-800 text-lg font-bold leading-tight tracking-normal">
              First Name
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
              <input
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-base border-gray-300 rounded border"
                placeholder="Mohamed"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </div>
            <label className="text-gray-800 text-lg font-bold leading-tight tracking-normal">
              Last Name
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
              <input
                className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-base border-gray-300 rounded border"
                placeholder="Asjedh"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
              />
            </div>

            <label className="text-gray-800 text-lg font-bold leading-tight tracking-normal">
              Service Type
            </label>
            <div className="relative mb-5 mt-2">
              <select
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-base border-gray-300 rounded border"
                value={serviceType}
                onChange={(e) => handleServiceTypeChange(e.target.value)}
              >
                <option value="" disabled>
                  Select Service Type
                </option>
                {Object.keys(serviceTypes).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <label className="text-gray-800 text-lg font-bold leading-tight tracking-normal">
              Price
            </label>
            <div className="relative mb-5 mt-2">
              <input
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-base border-gray-300 rounded border"
                value={price}
                readOnly
              />
            </div>

            <label className="text-gray-800 text-lg font-bold leading-tight tracking-normal">
              Phone Number
            </label>
            <div className="relative mb-5 mt-2 ">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
              <input
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-base border-gray-300 rounded border"
                placeholder="0741146366"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between w-full">
              <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-lg">
                Submit
              </button>
              <button
                type="button"
                className="flex items-center justify-start focus:outline-none ml-3 bg-red-500 transition duration-150 text-white ease-in-out hover:border-gray-400 hover:bg-red-400 border rounded px-8 py-2 text-lg"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddVehicle;
