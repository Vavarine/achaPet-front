import { divIcon } from 'leaflet';

const getMapIcon = (imageUrl: string, status: 'perdido' | 'visto') => {
  console.log({ status });

  const styles = {
    span: `
      display: block;
      height: 100%;
      width: 100%;
      border: none;
      ${
        status === 'perdido'
          ? `background-color: #FFF5F5;`
          : `background-color: #FAFFF5;`
      }
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 3px 14px rgb(0 0 0 / 30%);
    `,
    image: `
      position: relative;
      height: 72px;
      width: 72px;
      border-radius: 10px;
      object-fit: cover;
      z-index: 2;
    `,
    tip: `
      position: absolute;
      ${status === 'perdido' ? `left: 0;` : `right: 0;`}
      bottom: -10px;
      z-index: 1;
    `,
  };

  return divIcon({
    className: 'custom-pin',
    iconSize: [80, 80],
    iconAnchor: [29, 68],
    popupAnchor: [200, 24],
    html: `
          <span style="${styles.span}">
            <img src="${imageUrl}" style="${styles.image}"/>
            <img src="/assets/point-left.png" style="${styles.tip}" />
          </span>
          `,
  });
};

export default getMapIcon;
