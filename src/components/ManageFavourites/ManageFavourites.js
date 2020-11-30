import React from 'react';

const ManageFavourites = (props) => {
  if (props.action === 'add') { 
     return (
       <>
         <span className='mr-2'>Add to favourites ...</span>
         <svg width='1em' height='1em' viewBox='0 0 16 16' className='bi bi-heart-fill' fill='red' xmlns='http://www.w3.org/2000/svg'>
           <path fillRule='evenodd' d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z' />
         </svg>
       </>
     );
  } else if (props.action === 'remove') {
     return (
       <>
         <span className='mr-2'>Remove from favourites ...</span>
         <svg width='1em' height='1em' viewBox='0 0 16 16' className='bi bi-file-x-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
           <path
             fillRule='evenodd'
             d='M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146a.5.5 0 1 0-.708.708L7.293 8 6.146 9.146a.5.5 0 1 0 .708.708L8 8.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 8l1.147-1.146a.5.5 0 0 0-.708-.708L8 7.293 6.854 6.146z'
           />
         </svg>
       </>
     );
  } else {
    return <h3>Not selected</h3>;
    
  }
 
}

export default ManageFavourites;