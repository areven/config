// =============================================================================
// tsup configuration
// =============================================================================

import {defineConfig} from 'tsup';


const config: ReturnType<typeof defineConfig> = defineConfig({
  tsconfig: './tsconfig.build.json',
  entry: ['src/index.ts'],
  clean: true,
  format: ['cjs'],
  dts: true
});

export default config;
