import React, { useState } from 'react'

function searchBar({value, updateSearch, style}) {
    const [value, setValue] = useState()
    return (
        <div className='"search'>
            <div className='searchInput'>
                <input type="text"/>

                <div className='searchIcon'></div>
            </div>

            <div className='returnedData'>

            </div>
        </div>
    )
}

export default searchBar