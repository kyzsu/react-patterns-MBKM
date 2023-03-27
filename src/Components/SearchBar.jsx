const SearchBar = () => {
  return (
    <div className="mt-1 relative rounded-md shadow-sm w-1/2">
      <input
        type="text"
        name="account-number"
        id="account-number"
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-white rounded-md shadow-md"
        placeholder="Enter an address, city, or zip code"
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        {/* <QuestionMarkCircleIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  )
}

export default SearchBar
