import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { jsPDF } from "jspdf";

const ManagePosts = () => {
  const [cars, setCars] = useState([]);

  const url = "http://localhost:8080/car/getAll";

  const handleDelete = async (id) => {
    try {
      console.log(
        await axios.delete(`http://localhost:8080/car/deleteCar/${id}`)
      );

      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const generatePDF = (car) => {
    const doc = new jsPDF();
    doc.text(`- Car Details - `, 20, 10);
    doc.text(`ID: ${car.id}`, 20, 20);
    doc.text(`Car Number: ${car.car_no}`, 20, 30);
    doc.text(`Car Type: ${car.car_type}`, 20, 40);
    doc.text(`Owner: ${car.first_name} ${car.last_name}`, 20, 50);
    doc.text(`Service Type: ${car.serviceType}`, 20, 60);
    doc.text(`Phone Number: ${car.phone_number}`, 20, 70);
    doc.text(`Price: Rs. ${car.price}`, 20, 80);

    doc.save(`car_details_${car.id}.pdf`);
  };

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {cars.map((car, index) => (
        <div key={car.id} className="bg-blue-200 p-6 shadow-md rounded-md">
          <div className="flex items-center border-b border-black pb-4">
            <div className="w-full">
              <p className="text-xl font-medium leading-5 text-black">
                <h1>#{car.id}</h1>
              </p>
              <p className="text-xl leading-normal pt-2 text-black">
                {car.car_no}
              </p>
            </div>
          </div>
          <div className="px-2">
            <p className="text-lg leading-5 py-4 text-black">
              {car.car_type}
              <br />
              {car.first_name} {car.last_name}
              <br />
              {car.serviceType}
              <br />
              {car.phone_number}
            </p>
            <div className="flex items-center justify-end font-bold text-2xl text-black">
              Rs. {car.price}
            </div>
            <div className="flex mt-4">
              <Link
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-5"
                to={`/edituser/${car.id}`}
              >
                <RiEdit2Line size={30} />
              </Link>

              <button
                onClick={() => {
                  generatePDF(car);
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
              >
                <TbReport size={30} />
              </button>

              <button
                onClick={() => {
                  handleDelete(car.id);
                }}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                <MdDelete size={30} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManagePosts;
