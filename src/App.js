import { useEffect } from 'react'
import { AuthProvider } from '@descope/react-sdk'

let count = 0;
function Inner() {

  useEffect(() => {
		count++;
    console.log("Inner", count);
  }, []);

  return (
    <p>Inner</p>
  );
}

function App() {
  return (
    <>
      <AuthProvider projectId="...">
        <Inner />
      </AuthProvider>
    </>
  )
}

export default App
