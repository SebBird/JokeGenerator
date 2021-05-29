import React, { useState } from 'react';
import Button from './Button';

const Joke = () => {
  const [jokeType, setJokeType] = useState();
  const [setup, setSetup] = useState();
  const [delivery, setDelivery] = useState();
  const [singleJoke, setSingleJoke] = useState();

  const fetchJoke = () => {
    fetch(
      'https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,religious,nsfw'
    )
      .then((res) => res.json())
      .then((res) => {
        const { type } = res;
        if (type === 'single') {
          setJokeType('single');
          setSingleJoke(res.joke);
        }
        if (type === 'twopart') {
          setJokeType('twopart');
          setSetup(res.setup);
          setDelivery(res.delivery);
        }
      })
      .catch(() => {
        setJokeType('single');
        setSingleJoke('Error: No Joke Found');
      });
  };

  if (jokeType === 'single') {
    return (
      <>
        <p>{singleJoke}</p>
        <Button func={fetchJoke} wording="Get Another Joke" />
      </>
    );
  }
  if (jokeType === 'twopart') {
    return (
      <div className="twopart" id="twopart">
        <p>{setup}</p>
        <p>{delivery}</p>
        <Button func={fetchJoke} wording="Get Another Joke" />
      </div>
    );
  }
  return <Button func={fetchJoke} wording="Get a Joke" />;
};

export default Joke;
