import React from 'react';
import {
  ListItem,
  MenuContainer,
} from '../../styles/components/InstitucionalMenu';

interface MenuItem {
  title: string;
  slug: string;
}
interface InstitucionalMenuProps {
  menuItems: MenuItem[];
  selectedSlug: string;
}

function InstitutionalMenu({
  menuItems,
  selectedSlug,
}: InstitucionalMenuProps) {
  return (
    <MenuContainer>
      <div>
        <h2>AchaPet</h2>
        <ul>
          {menuItems.map(menuItem => {
            const { title, slug } = menuItem;

            return (
              <ListItem key={slug} selected={slug === selectedSlug}>
                <a href={`/institutional/${slug}`}>{title}</a>
              </ListItem>
            );
          })}
        </ul>
      </div>
    </MenuContainer>
  );
}

export default InstitutionalMenu;
