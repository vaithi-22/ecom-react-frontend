import React from 'react';


export default function AboutPage() {
  return (
    <div className="container mt-5">
      <div className='row align-items-center'>
        <div className='col'>
          <h1>About E-Shop App!</h1>
          <p>This is where users can create a new account.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className='col'>
          <img className='m-5 ' src='https://picsum.photos/id/255/350' alt='photo' />
        </div>
      </div>
    </div>
  );
}