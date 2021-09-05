import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { parseCookies } from 'nookies';
import useAuth from '../../hooks/useAuth';
import { User } from '../../types';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { HomeContainer } from '../../styles/pages/home';
import { AsideMenu } from '../../components/AsideMenu';

interface HomeProps {
  user: User;
}

function Login({ user }: HomeProps) {
  return (
    <div>
      <Head>
        <title>AchaPet</title>
      </Head>
      <HomeContainer>
        <AsideMenu user={user} />
        <div>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: 400, width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </HomeContainer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { ['achapet.user']: user } = parseCookies(ctx);

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: JSON.parse(user),
    },
  };
};

export default Login;
