import { divIcon } from 'leaflet';

const getMapIcon = () => {
  const styles = {
    span: `
      display: block;
      height: 100%;
      width: 100%;
      border: none;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    image: `
      height: 62px;
      width: 62px;
      border-radius: 10px;
    `,
  };

  return divIcon({
    className: 'custom-pin',
    iconSize: [70, 70],
    iconAnchor: [29, 68],
    popupAnchor: [180, -4],
    html: `<span style="${styles.span}"><img src="/assets/petLogoBold.png" style="${styles.image}"/></span>`,
  });
};

export default getMapIcon;
