import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [userStories, setUserStories] = useState([]);

  useEffect(() => {
    axios.get('/api/user-stories/')
      .then(response => setUserStories(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Mobile Performance User Stories</h1>
      {userStories.map(story => (
        <div key={story.id}>
          <h2>{story.title}</h2>
          <p>{story.description}</p>
          {story.image && (
            <img
              src={story.image}
              alt={story.title}
              style={{ maxWidth: '100%', height: 'auto' }}
              loading="lazy"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
