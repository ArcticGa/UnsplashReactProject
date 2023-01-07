import { useState } from 'react'
import Unsplash, { toJson } from 'unsplash-js'

const unsplash = new Unsplash({
  accessKey: '25rxmyVvEuQNC8rrDexfuLxEEYtYe2sx2roxMOwb_5s',
})

export function SearchPhotos() {
  const [query, setQuery] = useState('')
  const [pics, setPics] = useState([])

  const searchP = async (e) => {
    e.preventDefault()
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        setPics(json.results)
      })
  }

  return (
    <div>
      <form className="form" onSubmit={searchP}>
        <label htmlFor="query" className="label">
          {' '}
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Попробуйте "Tokyo" или "Landscape"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Найти
        </button>
      </form>
      <div className="card-list">
        {pics.map((pic) => (
          <div className="card">
            <img
              src={pic.urls.full}
              alt={pic.alt_description}
              className="card-image"
              width="50%"
              height="50%"
            ></img>
          </div>
        ))}
      </div>
    </div>
  )
}
