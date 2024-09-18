import { SearchIcon } from '@chakra-ui/icons'
import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('q') ?? ''

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = Object.fromEntries(searchParams.entries())
    query.q = e.target.value
    setSearchParams(query)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSearch(e as unknown as ChangeEvent<HTMLInputElement>)
    }
  }

  return (
    <div className='search' style={{ marginTop: '15px' }}>
      <input
        type='text'
        value={searchQuery}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
      />
      <button
        className='close'
        onClick={() => setSearchParams({ q: searchQuery })}
      >
        <SearchIcon />
      </button>
    </div>
  )
}

export default Search
