
const PageNav = ({ hasNext, page, setPage }) => {
    return (
        <div className='pagenav'>
            <button style={page === 1 ? {visibility: 'hidden'} : {visibility: 'visible'}} onClick={() => setPage(page - 1)}>Back</button>
            <span>{page}</span>
            <button style={hasNext ? {visibility: 'visible'} : {visibility: 'hidden'}} onClick={() => setPage(page + 1)}>Next</button>
        </div>
    )
}

export default PageNav;
