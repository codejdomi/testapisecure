import { useState, useEffect } from 'react'
import './App.css'

const apitest = import.meta.env.VITE_WEATHER_API_KEY;

const url = 'https://real-time-news-data.p.rapidapi.com/topic-news-by-section?topic=TECHNOLOGY&section=CAQiW0NCQVNQZ29JTDIwdk1EZGpNWFlTQW1WdUdnSlZVeUlQQ0FRYUN3b0pMMjB2TURKdFpqRnVLaGtLRndvVFIwRkVSMFZVWDFORlExUkpUMDVmVGtGTlJTQUJLQUEqKggAKiYICiIgQ0JBU0Vnb0lMMjB2TURkak1YWVNBbVZ1R2dKVlV5Z0FQAVAB&limit=500&country=US&lang=en';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': apitest,
		'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
	}
};

function App() {
  
  const [news, setNews] = useState([]);

  useEffect(() => {
        const fetchNews = async () => {
            try {
              const response = await fetch(url, options);
              const result = await response.json();
              console.log(result);
              setNews(result.data);
            } catch (err) {
              console.log(err);
            }
        }
        fetchNews();
  }, []);

  return (
    <>
      
    </>
  )
}

export default App
