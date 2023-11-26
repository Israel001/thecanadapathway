/* eslint-disable react/display-name */
import { useEffect, useState } from "react";
import Loading from '@/components/Loading';
import axios from "axios";
import { useRouter } from "next/navigation";

const withDashboardContext = (Component: () => JSX.Element) => {
  return () => {
    const router = useRouter();
    const [isLoading, setLoading] = useState(true);

    const testToken = async (accessToken: string) => {
      await axios
        .get(`${process.env.BACKEND_URL || 'https://backend.thecanadapathway.com'}/test-token`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .catch((error) => {
          if (error.response?.data?.statusCode === 401) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
            localStorage.removeItem("date");
            router.push("/");
          }
        });
      return true;
    };

    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken");
      const user = localStorage.getItem("user");
      const date = localStorage.getItem("date");
      const expiredToken = date && new Date().getTime() - +date > 3.6e6;
      if (!accessToken || !user || expiredToken !== false) router.push("/");
      testToken(accessToken!);
      setLoading(false);
    }, []);

    return isLoading ? <Loading /> : <Component />;
  };
};

export default withDashboardContext;
