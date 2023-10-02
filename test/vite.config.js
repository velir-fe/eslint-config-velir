import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
 const regexArr=[/^(\/modules\/custom\/ahri_search\/dist\/)/,/(.min)/,/(\?v=1)/];

// https://vitejs.dev/config/

export default defineConfig({
  server: {
    cors: true,
    host: true,
    hmr: {
      host: 'localhost'
    },
    proxy: {
      "/mock": {
        target:
          "http://ahridrupalhostingdev.prod.acquia-sites.com/api/v2/search",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mock/, ""),
      },
      "/proxy": {
        target: "http://ahridrupalhostingdev.prod.acquia-sites.com",
        changeOrigin: true,
        secure: false,      
        ws: true,
        rewrite: (path) => path.replace(/^\/proxy/, ""),
      },
      //any paths to assets needed from proxied site
      "^(\/modules\/contrib|\/sites|\/themes)(.*)$": {
        target: "http://ahridrupalhostingdev.prod.acquia-sites.com",
        changeOrigin: true,
      },
      "^(\/modules\/custom\/ahri_search\/dist\/)(.*)$": {
        target: "http://localhost:3000/",
        changeOrigin: false,
        ws: true,
        rewrite: (path) => regexArr.reduce((a, b)=> path.replace(b,"")+a,"")
        },
      //any paths to assets needed from proxied site
     },
    build: {
      // generate manifest.json in outDir
      target: "es2015",
      emptyOutDir: true,
      sourcemap: true,
      manifest: true,
      minify: true,
      reportCompressedSize: false,

      rollupOptions: {
        output: {
          entryFileNames: "[name].test.js",
          assetFileNames: "[name][extname]",
          // assetFileNames: `[name].[ext]`,
          // format: "umd"
        },
      },
    },
  },
  plugins: [
    splitVendorChunkPlugin(),
    react({
    babel: {
      babelrc: false,
    },
  })
]
})
