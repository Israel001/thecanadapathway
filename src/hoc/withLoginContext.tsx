import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const withLoginContext = (Component: () => JSX.Element) => {
  // eslint-disable-next-line react/display-name
  return () => {
    const router = useRouter();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');
      const user = localStorage.getItem('user');
      const date = localStorage.getItem('date');
      const expiredToken = date && new Date().getTime() - +date > 3.6e6;
      if (accessToken && user && expiredToken === false) {
        router?.push("/dashboard");
      } else {
        setLoading(false);
      }
    }, []);

    return isLoading ? <Loading /> : <Component />;
  };
};

export default withLoginContext;