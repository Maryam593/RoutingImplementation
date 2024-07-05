import React from 'react'

const Error = () => {
  return (
  <>
     <div className="flex items-center justify-center min-h-screen" style={{ background: 'linear-gradient(114.3deg, rgb(19, 126, 57) 0.2%, rgb(8, 65, 91) 68.5%)' }}>
      <div className="text-center p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h1 className="text-9xl font-extrabold text-green-800">404</h1>
        <h2 className="text-4xl font-bold text-[rgb(19, 126, 57)] mt-4">Page Not Found</h2>
        <p className="mt-4 text-gray-600">
          Sorry, the page you're looking for doesn't exist.
        </p>
     
    </div>
    </div>
  </>
  )
}

export default Error
