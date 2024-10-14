export interface CorePlugin {
  name: string;
  capabilities: 'executors' | 'generators' | 'executors,generators' | 'graph';
  link?: string;
}

export const CORE_PLUGINS: CorePlugin[] = [
  {
    name: 'nx',
    capabilities: 'executors',
  },
];
