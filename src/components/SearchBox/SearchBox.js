import React from 'react';

const SearchBox = (props) => {
  const onChangeInput = (event) => {
    // props.setSearchValue = event.target.value;
    props.setSearchValue(event.target.value)
  }

  return (
    <div className='col col-sm-4'>
      <input className='form-control' value={props.value} onChange={onChangeInput} placeholder='Type to search ...' />
    </div>
  );
}

export default SearchBox;