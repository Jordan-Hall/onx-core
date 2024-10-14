'use client';
import { Menu, MenuItem, MenuSection } from '@nx/nx-dev/models-menu';
import { Sidebar, SidebarMobile } from './sidebar';
import { useMemo } from 'react';

export function SidebarContainer({
  menu,
  navIsOpen,
  toggleNav,
}: {
  menu: Menu;
  navIsOpen: boolean;
  toggleNav: (value: boolean) => void;
}): JSX.Element {
  const finalMenu = useMemo(() => {
    const sections = menu.sections;
    return {
      ...menu,
      sections,
    };
  }, [menu]);

  return (
    <div id="sidebar" data-testid="sidebar">
      <SidebarMobile
        menu={finalMenu}
        toggleNav={toggleNav}
        navIsOpen={navIsOpen}
      />
      <div className="hidden h-full w-72 flex-col border-r border-slate-200 md:flex dark:border-slate-700 dark:bg-slate-900">
        <div className="relative flex flex-grow overflow-y-scroll p-4">
          <Sidebar menu={finalMenu} />
        </div>
        {/*<div className="relative flex flex-col space-y-1 border-t border-slate-200 px-4 py-2 dark:border-slate-700">*/}
        {/*  // another section.*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
