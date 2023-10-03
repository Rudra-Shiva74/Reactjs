import React, { useEffect, useState } from 'react';
import CarItem from './CarItem';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

export default function Car() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // Add search query state
  const itemsPerPage = 6;
  const location = useLocation();

  useEffect(() => {
    axios
      .get('http://localhost:8000/cars')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const pageParam = new URLSearchParams(location.search).get('page');
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    setCurrentPage(page);
  }, [location.search]);

  if (data.length > 60) {
    data.length = 60;
  }

  const filteredData = data.filter((d) => {
    // Add conditions for filtering based on your desired attributes (e.g., name, model)
    return (
      String(d.name).toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(d.model).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedData = filteredData.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToNextPage = () => {
    goToPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    goToPage(currentPage - 1);
  };

  // Add a function to handle search input changes
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='container'>
      {/* Add a search input field */}
      <div className='mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Search by name or model'
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className='row'>
        {displayedData.map((d, i) => (
          <div key={i} className='col-lg-4 col-md-4 col-12 d-flex justify-content-center'>
            <CarItem
              name={d.name}
              model={d.model}
              people={d.people}
              mileage={d.mileage}
              category={d.category}
              gearbox={d.gearbox}
              sales={d.sales}
              image={d.image}
            />
          </div>
        ))}
      </div>
      {/* Pagination */}<nav aria-label='Page navigation'>
        <ul className='pagination'>
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <Link
              to={`?page=${currentPage - 1}`}
              className='page-link'
              onClick={() => goToPrevPage()}
            >
              Previous
            </Link>
          </li>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
            >
              <Link
                to={`?page=${index + 1}`}
                className='page-link'
                onClick={() => goToPage(index + 1)}
              >
                {index + 1}
              </Link>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <Link
              to={`?page=${currentPage + 1}`}
              className='page-link'
              onClick={() => goToNextPage()}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  );
}







