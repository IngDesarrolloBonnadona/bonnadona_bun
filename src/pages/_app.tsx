import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';

import themeonfig from '@/theme/themeConfig';

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={themeonfig}>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;