import React from 'react';
import * as S from './InstitucionalMenu';

interface MenuItem {
  title: string;
  slug: string;
}
interface InstitucionalMenuProps {
  menuItems: MenuItem[];
  selectedSlug?: string;
}

function InstitutionalMenu({
  menuItems,
  selectedSlug,
}: InstitucionalMenuProps) {
  return (
    <S.MenuContainer>
      <div>
        <h2>AchaPet</h2>
        <ul>
          {menuItems.map(menuItem => {
            const { title, slug } = menuItem;

            return (
              <S.ListItem key={slug} selected={slug === selectedSlug}>
                <a href={`/institutional/${slug}`}>{title}</a>
              </S.ListItem>
            );
          })}
        </ul>
      </div>
    </S.MenuContainer>
  );
}

export default InstitutionalMenu;
