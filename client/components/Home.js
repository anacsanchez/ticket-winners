import React, { useState, useEffect } from 'react';
import { Show } from './index';
import axios from 'axios';

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
    <div id="main">
    {
      isLoading ? <div>Loading shows...</div> : shows.map(show => <Show key={show.id} show={show} />)
    }
    </div>
  );
};

export default Home;
