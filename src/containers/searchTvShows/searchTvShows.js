import React, { useEffect, useState } from "react";
import { Form, FloatingLabel, Card } from 'react-bootstrap';
import axios from "axios";
import './searchTvShows.css';
import SpinnerUI from "../../components/UI/Spinner/Spinner";

const SearchTVShows = () => {
  const [state, setState] = useState([]);
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  console.log(state)

  const searchChangeHandler = (event) => {
    setValue(event.target.value);
  }

  const itemClickHandler = (event) => {
    setValue(event.target.textContent)
    setIsOpen(!isOpen);
  }

  const inputClickHandler = () => {
    setIsOpen(true);
  }

  useEffect(() => {
    if (value !== null) {
      setIsLoading(true)
      axios.get(`http://api.tvmaze.com/search/shows?q=${value}`)
        .then(res => {
          setIsLoading(false)
          setState(res.data)
        });

    }
  }, [value]);


  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Search for TV Shows"
        className="mb-3"
      >
        <Form.Control
          className="search"
          placeholder="Search for TV Shows"
          type="text" value={value}
          onChange={searchChangeHandler}
          onClick={inputClickHandler} />
        {value && isOpen
          ?
          <ul className="autocomplete">
            {state.map((movies) => {
              return (
                <li
                  key={movies.show.id}
                  className="autocomplete_item"
                  onClick={itemClickHandler}
                >
                  {movies.show.name}
                </li>
              )
            })}
          </ul>
          : null}
      </FloatingLabel>
      {isLoading ? <SpinnerUI /> :
        state !== null ?
          <div className="main_card" >
            {state.map(el => (

              <Card
                key={el.show.id}
                className="mb-2"
                bg="dark"
                style={{ width: '20rem' }}
                text={'white'}>
                <Card.Img
                  variant="top"
                  src={el.show.image ? el.show.image.original : null}
                />
                <Card.Body>
                  <Card.Title>{el.show.name}</Card.Title>
                  <Card.Subtitle style={{ height: '100%' }}>{el.show.summary}</Card.Subtitle>
                </Card.Body>
              </Card>

            ))}
          </div> : null}
    </>
  )
}



export default SearchTVShows;