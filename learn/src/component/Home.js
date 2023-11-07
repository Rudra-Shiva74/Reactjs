import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
    const [city, setCity] = useState("");
    const [lon, setLon] = useState('');
    const [lat, setLat] = useState('');
    const [cities, setCities] = useState([]);
    const [data, setData] = useState({
        feel_like: '',
        min_temp: '',
        max_temp: '',
        sun_rise: '',
        sun_set: '',
        temp: '',
        lat: '',
        long: '',
        city: '',
        country: '',
        humidity: '',
        description: ''
    });
    const cordination = (e) => {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lon=${position.coords.longitude}&lat=${position.coords.latitude}&appid=3e5e9660aa9001aa6bfcbab023b951f4`).then((response) => {
                console.log(response);
                setData({
                    feel_like: response.data.main.feels_like,
                    min_temp: response.data.main.temp_min,
                    max_temp: response.data.main.temp_max,
                    sun_rise: response.data.sys.sunrise,
                    sun_set: response.data.sys.sunset,
                    temp: response.data.main.temp,
                    lat: response.data.coord.lat,
                    long: response.data.coord.lon,
                    city: response.data.name,
                    country: response.data.sys.country,
                    humidity: response.data.main.humidity,
                    description: response.data.weather[0].description

                })
            }).catch((err) => {
                console.log(err);
            })
        })
    }
    useEffect(() => {
        if (data.feel_like !== '') {
            var flag = true;
            var weather = JSON.parse(localStorage.getItem("weather") || '[]');
            for (var i = 0; i < weather.length; i++) {
                if (weather[i].city === data.city && weather[i].country === data.country) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                weather.push(data);
                localStorage.setItem("weather", JSON.stringify(weather));
                toast.success("City Found..!", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else {
                toast.error("City Already Exist..!", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        }
        setCities(JSON.parse(localStorage.getItem("weather")));
    }, [data]);

    const update = async (e) => {
        e.preventDefault();
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3e5e9660aa9001aa6bfcbab023b951f4`).then((response) => {
            // console.log(response);
            // console.log()
            setData({
                feel_like: response.data.main.feels_like,
                min_temp: response.data.main.temp_min,
                max_temp: response.data.main.temp_max,
                sun_rise: response.data.sys.sunrise,
                sun_set: response.data.sys.sunset,
                temp: response.data.main.temp,
                lat: response.data.coord.lat,
                long: response.data.coord.lon,
                city: response.data.name,
                country: response.data.sys.country,
                humidity: response.data.main.humidity,
                description: response.data.weather[0].description

            })
        }).catch((err) => {
            if (err.response.status === 404) {
                toast.error(err.response.data.message, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        })
    }
    const celcius = (a, b) => {
        return (a - b).toFixed(1);
    }
    const sunset = (sunsetTimestamp) => {
        const sunriseDate = new Date(sunsetTimestamp * 1000);
        const sunsetTime = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return sunsetTime;
    }
    return (
        <div className='container'>
            <div className='row'>
                <form onSubmit={update} className='col-lg-6 my-3 '>
                    <div className="d-flex" style={{ width: "20rem" }}>
                        <input type="text" onChange={(e) => setCity(e.target.value)} placeholder='Enter your city' autoComplete='off' className="form-control" id="exampleFormControlInput1" />
                        <button type='submit' className='btn btn-danger'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
                <form onSubmit={cordination} className='my-3 col-lg-6'>
                    <input type="text" placeholder='Latitude' value={lat} onChange={(e) => setLat(e.target.value)} /> <input type="text" value={lon} onChange={(e) => setLon(e.target.value)} placeholder='Longitude' />
                    <button type="submit" className='btn btn-info'>Current City</button>
                </form>
            </div>
            <div className='row g-3'>
                {cities && cities.map((element) => {
                    return (
                        <div className='col-lg-4 col-md-4' key={element.city}>
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6 className="card-title text-center text-success">{element.city}, {element.country}</h6>
                                    <div className='row'>
                                        <div className='col-lg-6 col-6 col-md-6'>Temp: <span className='text-danger fw-bold'>{celcius(element.temp, 273.15)}<sup>o</sup>c</span></div>
                                        <div className='col-lg-6 col-6 col-md-6'>Sun Rice: <span className='text-danger fw-bold'>{sunset(element.sun_rise)}</span></div>
                                        <div className='col-lg-6 col-6 col-md-6'>Sun Set: <span className='text-danger fw-bold'>{sunset(element.sun_set)}</span></div>
                                        <div className='col-lg-6 col-6 col-md-6'>Feel Like: <span className='text-danger fw-bold'>{celcius(element.feel_like, 273.15)}<sup>o</sup>c</span></div>
                                        <div className='col-lg-6 col-6 col-md-6'>Min Temp: <span className='text-danger fw-bold'>{celcius(element.min_temp, 273.15)}<sup>o</sup>c</span></div>
                                        <div className='col-lg-6 col-6 col-md-6'>Max Temp: <span className='text-danger fw-bold'>{celcius(element.max_temp, 273.15)}<sup>o</sup>c</span></div>
                                        <div className='col-lg-6 col-6 col-md-6'>Humidity: <span className='text-danger fw-bold'>{element.humidity}%</span></div>
                                        <div className='col-lg-6 col-6 col-md-6'>Status: <span className='text-danger fw-bold'>{element.description}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ToastContainer />
        </div>

    )
}
