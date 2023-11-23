import { useEffect } from 'react';
import axios from 'axios';

const LoginPage = () => {

  useEffect(() => {
    axios.get('/api/hello')
    .then(res => console.log('응답', res))
  }, [])

  return (
    <div>
      LoginPage
    </div>
  )
}

export default LoginPage