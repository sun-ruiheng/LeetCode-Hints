
const PageNav = ({ hints, page, setPage }) => {
    let lastPage = Math.ceil(hints.length / 5); //change 5 if hintsPerPage changes
    
    return (
        <div className='pagenav'>
            <button style={page == 1 && 'visibility: hidden'} onClick={() => setPage(page - 1)}>Back</button>
            <span>{page}</span>
            <button style={page == lastPage && 'visibility: hidden'} onClick={() => setPage(page + 1)}>Next</button>
        </div>
    )
}

export default PageNav;
