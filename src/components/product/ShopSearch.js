import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import BaseUrl from '../../BaseUrl'; // Adjust the import path as needed
import { useTranslation } from 'react-i18next';

const ShopSearch = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');

  console.log('query',query)

  const handleSearch = async (event) => {
    event.preventDefault();
    setSearchQuery(query); // Pass the query to the parent component

    try {
      let url = `${BaseUrl.baseurl}/api/products/get?q=${query}`;
      const response = await axios.get(url);
      // Handle the response (e.g., update product data in parent component)
      console.log('search.data',response.data); // Check the API response
    } catch (error) {
      console.error(error);
      Swal.fire({
        showCloseButton: true,
        toast: true,
        icon: 'error',
        title: 'An error occurred while searching',
        animation: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
    }
  };

  const {t} = useTranslation();

  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">{t("shop.search")}</h4>
      <div className="pro-sidebar-search mb-50 mt-25">
        <form className="pro-sidebar-search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={t("shop.search_input")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">
            <i className="pe-7s-search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopSearch;
