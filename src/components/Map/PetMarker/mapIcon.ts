import { divIcon } from 'leaflet';

const getMapIcon = (imageUrl: string, status: 'perdido' | 'visto') => {
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
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.5));
    `,
    image: `
      position: relative;
      height: 72px;
      width: 72px;
      border-radius: 14px;
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
    popupAnchor: [status === 'perdido' ? 140 : -120, 24],
    html: `
          <span style="${styles.span}">
            <img src="${imageUrl}" style="${styles.image}"/>
            <img src="/assets/point-${
              status === 'perdido' ? `left` : `right`
            }.png" style="${styles.tip}" />
          </span>
          `,
  });
};

export default getMapIcon;
