import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  // src/**를 넣으면 앱 코드가 전부 검사에서 빠지므로 넣지 않는다.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    // 빌드 산출물 및 로컬 상태 (검사 대상 아님)
    '.open-next/**',
    '.wrangler/**',
  ]),
]);

export default eslintConfig;
