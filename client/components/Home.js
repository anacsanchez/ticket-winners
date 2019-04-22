import React, { useState, useEffect } from 'react';
import { Show } from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
axios.defaults.baseURL = "/ticket-winners";

const Home = () => {
  const [shows, setShows] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const showsData = await axios.get('/api/shows');

      setShows(showsData.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div id="header"><a href="https://github.com/anacsanchez/ticket-winners">Check out on Github <FontAwesomeIcon icon={faGithub} size="1x"/></a></div>
      <div id="main">
      {
        isLoading ? <div>Loading shows...</div> : shows.map(show => <Show key={show.id} show={show} />)
      }
      </div>
    </div>
  );
};

export default Home;
