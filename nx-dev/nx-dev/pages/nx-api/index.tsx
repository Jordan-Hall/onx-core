import { Heading1 } from '@nx/nx-dev/feature-package-schema-viewer';
import { getPackagesSections } from '@nx/nx-dev/data-access-menu';
import {
  filterMigrationPackages,
  sortCorePackagesFirst,
} from '@nx/nx-dev/data-access-packages';
import { Menu, MenuItem, MenuSection } from '@nx/nx-dev/models-menu';
import { IntrinsicPackageMetadata } from '@nx/nx-dev/models-package';
import {
  Breadcrumbs,
  DocumentationHeader,
  Footer,
  SidebarContainer,
} from '@nx/nx-dev/ui-common';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { menusApi } from '../../lib/menus.api';
import { useNavToggle } from '../../lib/navigation-toggle.effect';
import { nxPackagesApi } from '../../lib/packages.api';
import { ScrollableContent } from '@nx/ui-scrollable-content';

export default function Packages({
  packages,
  menu,
}: {
  packages: IntrinsicPackageMetadata[];
  menu: MenuItem[];
}): JSX.Element {
  const router = useRouter();
  const { toggleNav, navIsOpen } = useNavToggle();

  const vm: { menu: Menu; packages: IntrinsicPackageMetadata[] } = {
    menu: {
      sections: sortCorePackagesFirst<MenuSection>(
        getPackagesSections(menu),
        'id'
      ),
    },
    packages: useMemo(() => {
      const storybookIdx = packages.findIndex((p) => p.name === 'storybook');
      const packagesWithRspack = [
        ...packages.slice(0, storybookIdx),
        {
          description:
            'The Nx Plugin for Rspack contains executors and generators that support building applications using Rspack.',
          githubRoot: 'https://github.com/Jordan-Hall/onx-core/blob/master',
          name: 'rspack',
          packageName: '@nrwl/rspack',
          path: '/nx-api/rspack',
          root: '/nx-api/rspack',
          source: '/nx-api/rspack/src',
        },
        ...packages.slice(storybookIdx),
      ];
      return sortCorePackagesFirst<IntrinsicPackageMetadata>(
        filterMigrationPackages<IntrinsicPackageMetadata>(packagesWithRspack),
        'name'
      );
    }, [packages]),
  };

  return (
    <>
      <NextSeo
        title="Reference: Official Packages & API"
        description="Reference: Official Packages & API"
        openGraph={{
          url: 'https://nx.dev' + router.asPath,
          title: 'Reference: Official Packages & API',
          description: 'Reference: Official Packages & API',
          images: [
            {
              url: 'https://nx.dev/socials/nx-media.png',
              width: 1200,
              height: 600,
              alt: 'Nx: Smart Monorepos · Fast CI',
              type: 'image/png',
            },
          ],
          siteName: 'NxDev',
          type: 'website',
        }}
      />
      <div id="shell" className="flex h-full flex-col">
        <div className="w-full flex-shrink-0">
          <DocumentationHeader isNavOpen={navIsOpen} toggleNav={toggleNav} />
        </div>
        <main
          id="main"
          role="main"
          className="flex h-full flex-1 overflow-y-hidden"
        >
          <SidebarContainer
            menu={vm.menu}
            navIsOpen={navIsOpen}
            toggleNav={toggleNav}
          />
          <ScrollableContent>
            <Footer />
          </ScrollableContent>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps(): Promise<{
  props: {
    packages: IntrinsicPackageMetadata[];
    menu: MenuItem[];
  };
}> {
  return {
    props: {
      packages: nxPackagesApi.getRootPackageIndex(),
      menu: menusApi.getMenu('nx-api', ''),
    },
  };
}
