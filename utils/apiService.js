import Axios from "axios";
import PropTypes from "prop-types";
import { BASE_URL } from "./constants";


const axiosCancelTokenSource = Axios.CancelToken.source();

const apiService = (url, type = "GET", data, headers) => {
  if (!url || typeof url !== "string") {
    axiosCancelTokenSource.cancel();
    throw new Error("Please pass a string url to this function: /path/to/api");
  }
  if (!type || typeof type !== "string") {
    axiosCancelTokenSource.cancel();
    throw new Error(
      "Please add string api request type: GET, POST, PUT, PATCH, DELETE"
    );
  }

  const headerContent = () => {
    if (headers) {
      if (headers["Content-Type"]) {
        return headers["Content-Type"];
      }
      return "application/json";
    }
    return "application/json";
  };

  

  const header = {
    "Content-Type": headerContent(),
    ...headers,
  };

  return new Promise((resolve, reject) => {
    Axios({
      method: type,
      url: `${BASE_URL}${url}`,
      data,
      headers: header,
      cancelToken: axiosCancelTokenSource.token,
    })
      .then((res) => {
        return resolve(res);
      })
      .catch((error) => {
        if (error && !error.response) {
          alert(
            "Could not connect to the server, please check your internet connection"
          );

          axiosCancelTokenSource.cancel();
          return reject(error);
        }
        return reject(JSON.stringify(error.response.data));
      });
  });
};

apiService.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  headers: PropTypes.object.isRequired,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login: (data) => apiService("/user/login", "POST", data),
  createUser: (data) => apiService("/user/register", "POST", data),
  createCar: (data) => apiService("/car/create_car", "POST", data),
  createTrip: (data) => apiService("/trip/create_trip", "POST", data),
  getAllTrips: (data) => apiService("/trip/trips", "GET", data),
  getAllCars: (data) => apiService("/car/cars", "GET", data),
  getSingleCar: (data) => apiService("/car/get_single_car/:id", "GET", data),
};
