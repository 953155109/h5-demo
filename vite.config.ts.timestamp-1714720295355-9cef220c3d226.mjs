// vite.config.ts
import { resolve } from "node:path";
import { loadEnv } from "file:///D:/code/h5-demo/node_modules/.pnpm/vite@5.0.10_@types+node@20.10.5_less@4.2.0/node_modules/vite/dist/node/index.js";
import { format } from "file:///D:/code/h5-demo/node_modules/.pnpm/date-fns@3.0.6/node_modules/date-fns/index.mjs";

// build/utils.ts
import dotenv from "file:///D:/code/h5-demo/node_modules/.pnpm/dotenv@16.3.1/node_modules/dotenv/lib/main.js";
function isReportMode() {
  return process.env.REPORT === "true";
}
function wrapperEnv(envConf) {
  const ret = {};
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    realName = realName === "true" ? true : realName === "false" ? false : realName;
    if (envName === "VITE_PORT") {
      realName = Number(realName);
    }
    if (envName === "VITE_PROXY") {
      try {
        realName = JSON.parse(realName);
      } catch (error) {
      }
    }
    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}

// build/vite/plugin/index.ts
import Components from "file:///D:/code/h5-demo/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@4.9.1_vue@3.3.13/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///D:/code/h5-demo/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@4.9.1_vue@3.3.13/node_modules/unplugin-vue-components/dist/resolvers.js";
import vue from "file:///D:/code/h5-demo/node_modules/.pnpm/@vitejs+plugin-vue@5.0.0_vite@5.0.10_vue@3.3.13/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import UnoCSS from "file:///D:/code/h5-demo/node_modules/.pnpm/unocss@0.58.5_postcss@8.4.32_rollup@4.9.1_vite@5.0.10/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///D:/code/h5-demo/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.7.0_rollup@4.9.1/node_modules/unplugin-auto-import/dist/vite.js";

// build/vite/plugin/html.ts
import { createHtmlPlugin } from "file:///D:/code/h5-demo/node_modules/.pnpm/vite-plugin-html@3.2.2_vite@5.0.10/node_modules/vite-plugin-html/dist/index.mjs";

// package.json
var package_default = {
  name: "vue3-vant4-mobile",
  type: "module",
  version: "2.1.0",
  private: true,
  packageManager: "pnpm@8.6.10",
  author: {
    name: "xiangshu233",
    email: "xiangshu233@outlook.com",
    url: "https://github.com/xiangshu233"
  },
  license: "MIT",
  repository: {
    type: "git",
    url: "git+https://github.com/xiangshu233/vue3-vant4-mobile.git"
  },
  bugs: {
    url: "https://github.com/xiangshu233/vue3-vant4-mobile/issues"
  },
  engines: {
    node: "^18.18.0 || ^20.9.0 || >=21.1.0",
    pnpm: ">=8.6.10"
  },
  scripts: {
    preinstall: "npx only-allow pnpm",
    bootstrap: "pnpm install",
    serve: "npm run dev",
    dev: "cross-env VITE_CJS_IGNORE_WARNING=true vite dev",
    "dev:debugcjs": "cross-env VITE_CJS_TRACE=true vite dev",
    build: "cross-env NODE_ENV=production vite build && esno ./build/script/postBuild.ts",
    "build:no-cache": "pnpm clean:cache && npm run build",
    report: "cross-env REPORT=true npm run build",
    "type:check": "vue-tsc --noEmit --skipLibCheck",
    preview: "vite preview",
    "clean:cache": "rimraf node_modules/.cache/ && rimraf node_modules/.vite",
    "clean:lib": "rimraf node_modules"
  },
  dependencies: {
    "@types/lodash-es": "^4.17.12",
    "@unocss/reset": "^0.58.5",
    "@vueuse/core": "^10.7.0",
    axios: "^1.4.0",
    "crypto-js": "^4.2.0",
    "date-fns": "^3.0.6",
    echarts: "^5.4.3",
    "lodash-es": "^4.17.21",
    mockjs: "^1.1.0",
    nprogress: "^0.2.0",
    pinia: "^2.1.7",
    "pinia-plugin-persist": "^1.0.0",
    qs: "^6.11.2",
    vant: "^4.8.1",
    vue: "^3.3.13",
    "vue-router": "4.2.5",
    "weixin-js-sdk": "^1.6.5"
  },
  devDependencies: {
    "@commitlint/cli": "^18.4.3",
    "@commitlint/config-conventional": "^18.4.3",
    "@iconify/json": "^2.2.188",
    "@types/crypto-js": "^4.2.2",
    "@types/fs-extra": "^11.0.4",
    "@types/mockjs": "^1.0.10",
    "@types/node": "^20.10.5",
    "@types/nprogress": "^0.2.3",
    "@types/qs": "^6.9.11",
    "@unocss/preset-icons": "^0.58.5",
    "@unocss/preset-rem-to-px": "^0.58.5",
    "@unocss/transformer-directives": "^0.58.4",
    "@unocss/transformer-variant-group": "^0.58.4",
    "@vitejs/plugin-vue": "^5.0.0",
    autoprefixer: "^10.4.16",
    "cross-env": "^7.0.3",
    "cz-git": "^1.8.0",
    dotenv: "^16.3.1",
    esno: "^0.16.3",
    "fs-extra": "^11.2.0",
    less: "^4.2.0",
    "lint-staged": "^15.2.0",
    "only-allow": "^1.2.1",
    picocolors: "^1.0.0",
    postcss: "^8.4.32",
    "postcss-mobile-forever": "^4.0.0",
    rimraf: "^3.0.2",
    rollup: "^4.9.1",
    "rollup-plugin-visualizer": "^5.11.0",
    "simple-git-hooks": "^2.9.0",
    typescript: "^5.3.3",
    unocss: "^0.58.5",
    "unplugin-auto-import": "^0.17.5",
    "unplugin-vue-components": "^0.26.0",
    vite: "^5.0.10",
    "vite-plugin-compression": "^0.5.1",
    "vite-plugin-html": "^3.2.2",
    "vite-plugin-mock": "^2.9.8",
    "vite-plugin-svg-icons": "^2.0.1",
    "vue-tsc": "^1.8.27"
  },
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged",
    "commit-msg": "npx --no-install commitlint --edit $1"
  },
  config: {
    commitizen: {
      path: "node_modules/cz-git"
    }
  }
};

// build/constant.ts
var GLOB_CONFIG_FILE_NAME = "app.config.js";
var OUTPUT_DIR = "dist/vant-mobile";

// build/vite/plugin/html.ts
function configHtmlPlugin(env, isBuild) {
  const { VITE_GLOB_APP_TITLE, VITE_PUBLIC_PATH } = env;
  const path2 = VITE_PUBLIC_PATH.endsWith("/") ? VITE_PUBLIC_PATH : `${VITE_PUBLIC_PATH}/`;
  const getAppConfigSrc = () => {
    return `${path2 || "/"}${GLOB_CONFIG_FILE_NAME}?v=${package_default.version}-${(/* @__PURE__ */ new Date()).getTime()}`;
  };
  const htmlPlugin = createHtmlPlugin({
    minify: isBuild,
    inject: {
      // Inject data into ejs template
      // 需要注入 index.html ejs 模版的数据 使用在 html 中 ：<div><%= title %></div>
      data: {
        title: VITE_GLOB_APP_TITLE
      },
      // Embed the generated app.config.js file 需要注入的标签列表
      tags: isBuild ? [
        {
          tag: "script",
          attrs: {
            src: getAppConfigSrc()
          }
        }
      ] : []
    }
  });
  return htmlPlugin;
}

// build/vite/plugin/mock.ts
import { viteMockServe } from "file:///D:/code/h5-demo/node_modules/.pnpm/vite-plugin-mock@2.9.8_mockjs@1.1.0_vite@5.0.10/node_modules/vite-plugin-mock/dist/index.js";
function configMockPlugin(isBuild, prodMock) {
  return viteMockServe({
    ignore: /^\_/,
    mockPath: "mock",
    localEnabled: !isBuild,
    prodEnabled: isBuild && prodMock,
    injectCode: `
      import { setupProdMockServer } from '../mock/_createProductionServer';

      setupProdMockServer();
      `
  });
}

// build/vite/plugin/compress.ts
import compressPlugin from "file:///D:/code/h5-demo/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.0.10/node_modules/vite-plugin-compression/dist/index.mjs";
function configCompressPlugin(compress, deleteOriginFile = false) {
  const compressList = compress.split(",");
  const plugins = [];
  if (compressList.includes("gzip")) {
    plugins.push(
      compressPlugin({
        ext: ".gz",
        deleteOriginFile
      })
    );
  }
  if (compressList.includes("brotli")) {
    plugins.push(
      compressPlugin({
        ext: ".br",
        algorithm: "brotliCompress",
        deleteOriginFile
      })
    );
  }
  return plugins;
}

// build/vite/plugin/visualizer.ts
import visualizer from "file:///D:/code/h5-demo/node_modules/.pnpm/rollup-plugin-visualizer@5.11.0_rollup@4.9.1/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
function configVisualizerConfig() {
  if (isReportMode()) {
    return visualizer({
      filename: "./node_modules/.cache/visualizer/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true
    });
  }
  return [];
}

// build/vite/plugin/svgSprite.ts
import path from "node:path";
import { createSvgIconsPlugin } from "file:///D:/code/h5-demo/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.0.10/node_modules/vite-plugin-svg-icons/dist/index.mjs";
function configSvgIconsPlugin(isBuild) {
  const svgIconsPlugin = createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
    // 是否压缩
    svgoOptions: isBuild,
    // 指定symbolId格式
    symbolId: "icon-[dir]-[name]"
  });
  return svgIconsPlugin;
}

// build/vite/plugin/index.ts
function createVitePlugins(viteEnv, isBuild, prodMock) {
  const { VITE_USE_MOCK, VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;
  const vitePlugins = [
    // have to
    vue(),
    // 按需引入VantUi且自动创建组件声明
    Components({
      dts: true,
      resolvers: [VantResolver()],
      types: []
    }),
    // UnoCSS
    UnoCSS(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/
        // .vue
      ],
      imports: [
        // presets
        "vue",
        "vue-router",
        "pinia",
        "@vueuse/core"
      ],
      dts: "types/auto-imports.d.ts"
    })
  ];
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));
  vitePlugins.push(configVisualizerConfig());
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild, prodMock));
  vitePlugins.push(configSvgIconsPlugin(isBuild));
  if (isBuild) {
    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE)
    );
  }
  return vitePlugins;
}

// vite.config.ts
var { dependencies, devDependencies, name, version } = package_default;
function pathResolve(dir) {
  return resolve(process.cwd(), ".", dir);
}
var __APP_INFO__ = {
  // APP 后台管理信息
  pkg: { dependencies, devDependencies, name, version },
  // 最后编译时间
  lastBuildTime: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd HH:mm:ss")
};
var vite_config_default = ({ command, mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PUBLIC_PATH, VITE_DROP_CONSOLE, VITE_PORT, VITE_PROXY, VITE_GLOB_PROD_MOCK } = viteEnv;
  const prodMock = VITE_GLOB_PROD_MOCK;
  const isBuild = command === "build";
  return {
    base: VITE_PUBLIC_PATH,
    root,
    // 别名
    resolve: {
      alias: [
        // @/xxxx => src/xxxx
        {
          find: /\@\//,
          replacement: `${pathResolve("src")}/`
        },
        // #/xxxx => types/xxxx
        {
          find: /\#\//,
          replacement: `${pathResolve("types")}/`
        }
      ],
      dedupe: ["vue"]
    },
    // 定义全局常量替换方式
    define: {
      // 在生产中 启用/禁用 intlify-devtools 和 vue-devtools 支持，默认值 false
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    esbuild: {
      // 使用 esbuild 压缩 剔除 console.log
      drop: VITE_DROP_CONSOLE ? ["debugger", "console"] : []
      // minify: true, // minify: true, 等于 minify: 'esbuild',
    },
    build: {
      // 设置最终构建的浏览器兼容目标
      target: "es2015",
      minify: "esbuild",
      // 构建后是否生成 source map 文件(用于线上报错代码报错映射对应代码)
      sourcemap: false,
      cssTarget: "chrome80",
      // 指定输出路径（相对于 项目根目录)
      outDir: OUTPUT_DIR,
      // 只有 minify 为 terser 的时候, 本配置项才能起作用
      // terserOptions: {
      //   compress: {
      //     // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
      //     keep_infinity: true,
      //     // 打包是否自动删除 console
      //     drop_console: VITE_DROP_CONSOLE,
      //   },
      // },
      // 启用/禁用 gzip 压缩大小报告
      // 压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能
      reportCompressedSize: true,
      // chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 2e3,
      // 自定义底层的 Rollup 打包配置
      rollupOptions: {
        // 静态资源分类打包
        output: {
          chunkFileNames: "js/[name]-[hash].js",
          // 引入文件名的名称
          entryFileNames: "js/[name]-[hash].js",
          // 包的入口文件名称
          assetFileNames: "[ext]/[name]-[hash].[ext]",
          // 资源文件像 字体，图片等
          // 将 node_modules 三方依赖包最小化拆分
          manualChunks(id) {
            if (id.includes("node_modules")) {
              const paths = id.toString().split("node_modules/");
              if (paths[2]) {
                return paths[2].split("/")[0].toString();
              }
              return paths[1].split("/")[0].toString();
            }
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
          // 注入全局 less 变量
          additionalData: `@import "src/styles/var.less";`
        }
      }
    },
    server: {
      host: true,
      // 服务启动时是否自动打开浏览器
      open: true,
      // 服务端口号
      port: Number(VITE_PORT),
      // proxy: createProxy(VITE_PROXY),
      // 预热文件以降低启动期间的初始页面加载时长
      warmup: {
        // 预热的客户端文件：首页、views、 components
        clientFiles: ["./index.html", "./src/{views,components}/*"]
      }
      // proxy: {
      //     '/api': {
      //         target: '',
      //         changeOrigin: true,
      //         rewrite: (path) => path.replace(/^\/api/, '/api/v1')
      //     }
      // }
    },
    optimizeDeps: {
      /**
       * 依赖预构建，vite 启动时会将下面 include 里的模块，编译成 esm 格式并缓存到 node_modules/.vite 文件夹，
       * 页面加载到对应模块时如果浏览器有缓存就读取浏览器缓存，如果没有会读取本地缓存并按需加载
       * 尤其当您禁用浏览器缓存时（这种情况只应该发生在调试阶段）必须将对应模块加入到 include 里，
       * 否则会遇到开发环境切换页面卡顿的问题（vite 会认为它是一个新的依赖包会重新加载并强制刷新页面），
       * 因为它既无法使用浏览器缓存，又没有在本地 node_modules/.vite 里缓存
       * 温馨提示：如果你使用的第三方库是全局引入，也就是引入到 src/main.ts 文件里，
       * 就不需要再添加到 include 里了，因为 vite 会自动将它们缓存到 node_modules/.vite
       */
      include: [
        "pinia",
        "lodash-es",
        "axios"
      ],
      // 打包时强制排除的依赖项
      exclude: [
        // https://www.mulingyuer.com/archives/928/
        "vant",
        "@vant/use"
      ]
    },
    // 加载插件
    plugins: createVitePlugins(viteEnv, isBuild, prodMock)
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvdXRpbHMudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW4vaW5kZXgudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW4vaHRtbC50cyIsICJwYWNrYWdlLmpzb24iLCAiYnVpbGQvY29uc3RhbnQudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW4vbW9jay50cyIsICJidWlsZC92aXRlL3BsdWdpbi9jb21wcmVzcy50cyIsICJidWlsZC92aXRlL3BsdWdpbi92aXN1YWxpemVyLnRzIiwgImJ1aWxkL3ZpdGUvcGx1Z2luL3N2Z1Nwcml0ZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcaDUtZGVtb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFxoNS1kZW1vXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL2g1LWRlbW8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgdHlwZSB7IENvbmZpZ0VudiwgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB7IGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcclxuaW1wb3J0IHsgd3JhcHBlckVudiB9IGZyb20gJy4vYnVpbGQvdXRpbHMnXHJcbmltcG9ydCB7IGNyZWF0ZVZpdGVQbHVnaW5zIH0gZnJvbSAnLi9idWlsZC92aXRlL3BsdWdpbidcclxuaW1wb3J0IHsgT1VUUFVUX0RJUiB9IGZyb20gJy4vYnVpbGQvY29uc3RhbnQnXHJcbmltcG9ydCB7IGNyZWF0ZVByb3h5IH0gZnJvbSAnLi9idWlsZC92aXRlL3Byb3h5J1xyXG5pbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJ1xyXG5cclxuY29uc3QgeyBkZXBlbmRlbmNpZXMsIGRldkRlcGVuZGVuY2llcywgbmFtZSwgdmVyc2lvbiB9ID0gcGtnXHJcblxyXG4vLyBcdTVGNTNcdTRGN0ZcdTc1MjhcdTY1ODdcdTRFRjZcdTdDRkJcdTdFREZcdThERUZcdTVGODRcdTc2ODRcdTUyMkJcdTU0MERcdTY1RjZcdUZGMENcdThCRjdcdTU5Q0JcdTdFQzhcdTRGN0ZcdTc1MjhcdTdFRERcdTVCRjlcdThERUZcdTVGODRcdTMwMDJcdTc2RjhcdTVCRjlcdThERUZcdTVGODRcdTc2ODRcdTUyMkJcdTU0MERcdTUwM0NcdTRGMUFcdTUzOUZcdTVDMDFcdTRFMERcdTUyQThcdTU3MzBcdTg4QUJcdTRGN0ZcdTc1MjhcdUZGMENcdTU2RTBcdTZCNjRcdTY1RTBcdTZDRDVcdTg4QUJcdTZCNjNcdTVFMzhcdTg5RTNcdTY3OTBcdTMwMDJcclxuLy8gcGF0aC5yZXNvbHZlICgpIFx1NjVCOVx1NkNENVx1NzUyOFx1NEU4RVx1NUMwNlx1NEUwMFx1N0NGQlx1NTIxN1x1OERFRlx1NUY4NFx1NkJCNVx1ODlFM1x1Njc5MFx1NEUzQVx1N0VERFx1NUJGOVx1OERFRlx1NUY4NFx1MzAwMlx1NUI4M1x1OTAxQVx1OEZDN1x1NTkwNFx1NzQwNlx1NEVDRVx1NTNGM1x1NTIzMFx1NURFNlx1NzY4NFx1OERFRlx1NUY4NFx1NUU4Rlx1NTIxN1x1Njc2NVx1NURFNVx1NEY1Q1x1RkYwQ1x1NTcyOFx1NkJDRlx1NEUyQVx1OERFRlx1NUY4NFx1NEU0Qlx1NTI0RFx1NkRGQlx1NTJBMFx1RkYwQ1x1NzZGNFx1NTIzMFx1NTIxQlx1NUVGQVx1N0VERFx1NUJGOVx1OERFRlx1NUY4NFx1MzAwMlxyXG5mdW5jdGlvbiBwYXRoUmVzb2x2ZShkaXI6IHN0cmluZykge1xyXG4gIHJldHVybiByZXNvbHZlKHByb2Nlc3MuY3dkKCksICcuJywgZGlyKVxyXG59XHJcblxyXG5jb25zdCBfX0FQUF9JTkZPX18gPSB7XHJcbiAgLy8gQVBQIFx1NTQwRVx1NTNGMFx1N0JBMVx1NzQwNlx1NEZFMVx1NjA2RlxyXG4gIHBrZzogeyBkZXBlbmRlbmNpZXMsIGRldkRlcGVuZGVuY2llcywgbmFtZSwgdmVyc2lvbiB9LFxyXG4gIC8vIFx1NjcwMFx1NTQwRVx1N0YxNlx1OEJEMVx1NjVGNlx1OTVGNFxyXG4gIGxhc3RCdWlsZFRpbWU6IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCBISDptbTpzcycpLFxyXG59XHJcblxyXG4vKiogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9ICovXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGNvbW1hbmQsIG1vZGUgfTogQ29uZmlnRW52KTogVXNlckNvbmZpZyA9PiB7XHJcbiAgLy8gcHJvY2Vzcy5jd2QoKSBcdTY1QjlcdTZDRDVcdThGRDRcdTU2REUgTm9kZS5qcyBcdThGREJcdTdBMEJcdTc2ODRcdTVGNTNcdTUyNERcdTVERTVcdTRGNUNcdTc2RUVcdTVGNTVcclxuICAvLyBtb2RlIFx1OEZENFx1NTZERVx1NUU5NFx1NzUyOFx1NzY4NFx1NzNBRlx1NTg4M1x1NkEyMVx1NUYwRiBkZXZlbG9wbWVudFx1RkYwOFx1NUYwMFx1NTNEMVx1NzNBRlx1NTg4M1x1RkYwOSBcdTYyMTZcdTgwMDUgcHJvZHVjdGlvblx1RkYwOFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1x1RkYwOVxyXG4gIC8vIGNvbW1hbmQgXHU4RkQ0XHU1NkRFXHVGRjA4ZGV2L3NlcnZlIFx1NjIxNiBidWlsZFx1RkYwOVx1NTQ3RFx1NEVFNFx1NkEyMVx1NUYwRlx1RkYwQ3lhcm4gZGV2IFx1OEZENFx1NTZERSBkZXYvc2VydmUgeWFybiBidWlsZCBcdThGRDRcdTU2REUgYnVpbGRcclxuICBjb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKVxyXG4gIC8vIGxvYWRFbnYoKSBcdTY4MzlcdTYzNkUgbW9kZSBcdTY4QzBcdTY3RTUgcm9vdChcdTk4NzlcdTc2RUVcdTY4MzlcdThERUZcdTVGODQpIFx1OERFRlx1NUY4NFx1NEUwQiAuZW52XHUzMDAxLmVudi5kZXZlbG9wbWVudCBcdTczQUZcdTU4ODNcdTY1ODdcdTRFRjZcdUZGMENcdThGOTNcdTUxRkEgTk9ERV9FTlYgXHU1NDhDIFZJVEVfIFx1NUYwMFx1NTkzNFx1NzY4NFx1OTUyRVx1NTAzQ1x1OTYxRlxyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcm9vdClcclxuICAvLyBcdThCRkJcdTUzRDZcdTVFNzZcdTU5MDRcdTc0MDZcdTYyNDBcdTY3MDlcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjYgLmVudlxyXG4gIGNvbnN0IHZpdGVFbnYgPSB3cmFwcGVyRW52KGVudilcclxuXHJcbiAgY29uc3QgeyBWSVRFX1BVQkxJQ19QQVRILCBWSVRFX0RST1BfQ09OU09MRSwgVklURV9QT1JULCBWSVRFX1BST1hZLCBWSVRFX0dMT0JfUFJPRF9NT0NLIH1cclxuICAgID0gdml0ZUVudlxyXG5cclxuICBjb25zdCBwcm9kTW9jayA9IFZJVEVfR0xPQl9QUk9EX01PQ0tcclxuXHJcbiAgY29uc3QgaXNCdWlsZCA9IGNvbW1hbmQgPT09ICdidWlsZCdcclxuICAvLyBjb21tYW5kID09PSAnYnVpbGQnXHJcbiAgcmV0dXJuIHtcclxuICAgIGJhc2U6IFZJVEVfUFVCTElDX1BBVEgsXHJcbiAgICByb290LFxyXG5cclxuICAgIC8vIFx1NTIyQlx1NTQwRFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczogW1xyXG4gICAgICAgIC8vIEAveHh4eCA9PiBzcmMveHh4eFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpbmQ6IC9cXEBcXC8vLFxyXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IGAke3BhdGhSZXNvbHZlKCdzcmMnKX0vYCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICMveHh4eCA9PiB0eXBlcy94eHh4XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmluZDogL1xcI1xcLy8sXHJcbiAgICAgICAgICByZXBsYWNlbWVudDogYCR7cGF0aFJlc29sdmUoJ3R5cGVzJyl9L2AsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgZGVkdXBlOiBbJ3Z1ZSddLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBcdTVCOUFcdTRFNDlcdTUxNjhcdTVDNDBcdTVFMzhcdTkxQ0ZcdTY2RkZcdTYzNjJcdTY1QjlcdTVGMEZcclxuICAgIGRlZmluZToge1xyXG4gICAgICAvLyBcdTU3MjhcdTc1MUZcdTRFQTdcdTRFMkQgXHU1NDJGXHU3NTI4L1x1Nzk4MVx1NzUyOCBpbnRsaWZ5LWRldnRvb2xzIFx1NTQ4QyB2dWUtZGV2dG9vbHMgXHU2NTJGXHU2MzAxXHVGRjBDXHU5RUQ4XHU4QkE0XHU1MDNDIGZhbHNlXHJcbiAgICAgIF9fSU5UTElGWV9QUk9EX0RFVlRPT0xTX186IGZhbHNlLFxyXG4gICAgICBfX0FQUF9JTkZPX186IEpTT04uc3RyaW5naWZ5KF9fQVBQX0lORk9fXyksXHJcbiAgICB9LFxyXG5cclxuICAgIGVzYnVpbGQ6IHtcclxuICAgICAgLy8gXHU0RjdGXHU3NTI4IGVzYnVpbGQgXHU1MzhCXHU3RjI5IFx1NTI1NFx1OTY2NCBjb25zb2xlLmxvZ1xyXG4gICAgICBkcm9wOiBWSVRFX0RST1BfQ09OU09MRSA/IFsnZGVidWdnZXInLCAnY29uc29sZSddIDogW10sXHJcbiAgICAgIC8vIG1pbmlmeTogdHJ1ZSwgLy8gbWluaWZ5OiB0cnVlLCBcdTdCNDlcdTRFOEUgbWluaWZ5OiAnZXNidWlsZCcsXHJcbiAgICB9LFxyXG5cclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIC8vIFx1OEJCRVx1N0Y2RVx1NjcwMFx1N0VDOFx1Njc4NFx1NUVGQVx1NzY4NFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NTE3Q1x1NUJCOVx1NzZFRVx1NjgwN1xyXG4gICAgICB0YXJnZXQ6ICdlczIwMTUnLFxyXG4gICAgICBtaW5pZnk6ICdlc2J1aWxkJyxcclxuICAgICAgLy8gXHU2Nzg0XHU1RUZBXHU1NDBFXHU2NjJGXHU1NDI2XHU3NTFGXHU2MjEwIHNvdXJjZSBtYXAgXHU2NTg3XHU0RUY2KFx1NzUyOFx1NEU4RVx1N0VCRlx1NEUwQVx1NjJBNVx1OTUxOVx1NEVFM1x1NzgwMVx1NjJBNVx1OTUxOVx1NjYyMFx1NUMwNFx1NUJGOVx1NUU5NFx1NEVFM1x1NzgwMSlcclxuICAgICAgc291cmNlbWFwOiBmYWxzZSxcclxuICAgICAgY3NzVGFyZ2V0OiAnY2hyb21lODAnLFxyXG4gICAgICAvLyBcdTYzMDdcdTVCOUFcdThGOTNcdTUxRkFcdThERUZcdTVGODRcdUZGMDhcdTc2RjhcdTVCRjlcdTRFOEUgXHU5ODc5XHU3NkVFXHU2ODM5XHU3NkVFXHU1RjU1KVxyXG4gICAgICBvdXREaXI6IE9VVFBVVF9ESVIsXHJcbiAgICAgIC8vIFx1NTNFQVx1NjcwOSBtaW5pZnkgXHU0RTNBIHRlcnNlciBcdTc2ODRcdTY1RjZcdTUwMTksIFx1NjcyQ1x1OTE0RFx1N0Y2RVx1OTg3OVx1NjI0RFx1ODBGRFx1OEQ3N1x1NEY1Q1x1NzUyOFxyXG4gICAgICAvLyB0ZXJzZXJPcHRpb25zOiB7XHJcbiAgICAgIC8vICAgY29tcHJlc3M6IHtcclxuICAgICAgLy8gICAgIC8vIFx1OTYzMlx1NkI2MiBJbmZpbml0eSBcdTg4QUJcdTUzOEJcdTdGMjlcdTYyMTAgMS8wXHVGRjBDXHU4RkQ5XHU1M0VGXHU4MEZEXHU0RjFBXHU1QkZDXHU4MUY0IENocm9tZSBcdTRFMEFcdTc2ODRcdTYwMjdcdTgwRkRcdTk1RUVcdTk4OThcclxuICAgICAgLy8gICAgIGtlZXBfaW5maW5pdHk6IHRydWUsXHJcbiAgICAgIC8vICAgICAvLyBcdTYyNTNcdTUzMDVcdTY2MkZcdTU0MjZcdTgxRUFcdTUyQThcdTUyMjBcdTk2NjQgY29uc29sZVxyXG4gICAgICAvLyAgICAgZHJvcF9jb25zb2xlOiBWSVRFX0RST1BfQ09OU09MRSxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyB9LFxyXG4gICAgICAvLyBcdTU0MkZcdTc1MjgvXHU3OTgxXHU3NTI4IGd6aXAgXHU1MzhCXHU3RjI5XHU1OTI3XHU1QzBGXHU2MkE1XHU1NDRBXHJcbiAgICAgIC8vIFx1NTM4Qlx1N0YyOVx1NTkyN1x1NTc4Qlx1OEY5M1x1NTFGQVx1NjU4N1x1NEVGNlx1NTNFRlx1ODBGRFx1NEYxQVx1NUY4OFx1NjE2Mlx1RkYwQ1x1NTZFMFx1NkI2NFx1Nzk4MVx1NzUyOFx1OEJFNVx1NTI5Rlx1ODBGRFx1NTNFRlx1ODBGRFx1NEYxQVx1NjNEMFx1OUFEOFx1NTkyN1x1NTc4Qlx1OTg3OVx1NzZFRVx1NzY4NFx1Njc4NFx1NUVGQVx1NjAyN1x1ODBGRFxyXG4gICAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogdHJ1ZSxcclxuICAgICAgLy8gY2h1bmsgXHU1OTI3XHU1QzBGXHU4QjY2XHU1NDRBXHU3Njg0XHU5NjUwXHU1MjM2XHVGRjA4XHU0RUU1IGticyBcdTRFM0FcdTUzNTVcdTRGNERcdUZGMDlcclxuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAyMDAwLFxyXG4gICAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTVFOTVcdTVDNDJcdTc2ODQgUm9sbHVwIFx1NjI1M1x1NTMwNVx1OTE0RFx1N0Y2RVxyXG4gICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgLy8gXHU5NzU5XHU2MDAxXHU4RDQ0XHU2RTkwXHU1MjA2XHU3QzdCXHU2MjUzXHU1MzA1XHJcbiAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2pzL1tuYW1lXS1baGFzaF0uanMnLCAvLyBcdTVGMTVcdTUxNjVcdTY1ODdcdTRFRjZcdTU0MERcdTc2ODRcdTU0MERcdTc5RjBcclxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnanMvW25hbWVdLVtoYXNoXS5qcycsIC8vIFx1NTMwNVx1NzY4NFx1NTE2NVx1NTNFM1x1NjU4N1x1NEVGNlx1NTQwRFx1NzlGMFxyXG4gICAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdbZXh0XS9bbmFtZV0tW2hhc2hdLltleHRdJywgLy8gXHU4RDQ0XHU2RTkwXHU2NTg3XHU0RUY2XHU1MENGIFx1NUI1N1x1NEY1M1x1RkYwQ1x1NTZGRVx1NzI0N1x1N0I0OVxyXG4gICAgICAgICAgLy8gXHU1QzA2IG5vZGVfbW9kdWxlcyBcdTRFMDlcdTY1QjlcdTRGOURcdThENTZcdTUzMDVcdTY3MDBcdTVDMEZcdTUzMTZcdTYyQzZcdTUyMDZcclxuICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xyXG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGF0aHMgPSBpZC50b1N0cmluZygpLnNwbGl0KCdub2RlX21vZHVsZXMvJylcclxuICAgICAgICAgICAgICBpZiAocGF0aHNbMl0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXRoc1syXS5zcGxpdCgnLycpWzBdLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiBwYXRoc1sxXS5zcGxpdCgnLycpWzBdLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBjc3M6IHtcclxuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICAgIGxlc3M6IHtcclxuICAgICAgICAgIG1vZGlmeVZhcnM6IHt9LFxyXG4gICAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAvLyBcdTZDRThcdTUxNjVcdTUxNjhcdTVDNDAgbGVzcyBcdTUzRDhcdTkxQ0ZcclxuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCBcInNyYy9zdHlsZXMvdmFyLmxlc3NcIjtgLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBob3N0OiB0cnVlLFxyXG4gICAgICAvLyBcdTY3MERcdTUyQTFcdTU0MkZcdTUyQThcdTY1RjZcdTY2MkZcdTU0MjZcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcdTZENEZcdTg5QzhcdTU2NjhcclxuICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgLy8gXHU2NzBEXHU1MkExXHU3QUVGXHU1M0UzXHU1M0Y3XHJcbiAgICAgIHBvcnQ6IE51bWJlcihWSVRFX1BPUlQpLFxyXG4gICAgICAvLyBwcm94eTogY3JlYXRlUHJveHkoVklURV9QUk9YWSksXHJcbiAgICAgIC8vIFx1OTg4NFx1NzBFRFx1NjU4N1x1NEVGNlx1NEVFNVx1OTY0RFx1NEY0RVx1NTQyRlx1NTJBOFx1NjcxRlx1OTVGNFx1NzY4NFx1NTIxRFx1NTlDQlx1OTg3NVx1OTc2Mlx1NTJBMFx1OEY3RFx1NjVGNlx1OTU3RlxyXG4gICAgICB3YXJtdXA6IHtcclxuICAgICAgICAvLyBcdTk4ODRcdTcwRURcdTc2ODRcdTVCQTJcdTYyMzdcdTdBRUZcdTY1ODdcdTRFRjZcdUZGMUFcdTk5OTZcdTk4NzVcdTMwMDF2aWV3c1x1MzAwMSBjb21wb25lbnRzXHJcbiAgICAgICAgY2xpZW50RmlsZXM6IFsnLi9pbmRleC5odG1sJywgJy4vc3JjL3t2aWV3cyxjb21wb25lbnRzfS8qJ10sXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIHByb3h5OiB7XHJcbiAgICAgIC8vICAgICAnL2FwaSc6IHtcclxuICAgICAgLy8gICAgICAgICB0YXJnZXQ6ICcnLFxyXG4gICAgICAvLyAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgLy8gICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJy9hcGkvdjEnKVxyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wdGltaXplRGVwczoge1xyXG4gICAgICAvKipcclxuICAgICAgICogXHU0RjlEXHU4RDU2XHU5ODg0XHU2Nzg0XHU1RUZBXHVGRjBDdml0ZSBcdTU0MkZcdTUyQThcdTY1RjZcdTRGMUFcdTVDMDZcdTRFMEJcdTk3NjIgaW5jbHVkZSBcdTkxQ0NcdTc2ODRcdTZBMjFcdTU3NTdcdUZGMENcdTdGMTZcdThCRDFcdTYyMTAgZXNtIFx1NjgzQ1x1NUYwRlx1NUU3Nlx1N0YxM1x1NUI1OFx1NTIzMCBub2RlX21vZHVsZXMvLnZpdGUgXHU2NTg3XHU0RUY2XHU1OTM5XHVGRjBDXHJcbiAgICAgICAqIFx1OTg3NVx1OTc2Mlx1NTJBMFx1OEY3RFx1NTIzMFx1NUJGOVx1NUU5NFx1NkEyMVx1NTc1N1x1NjVGNlx1NTk4Mlx1Njc5Q1x1NkQ0Rlx1ODlDOFx1NTY2OFx1NjcwOVx1N0YxM1x1NUI1OFx1NUMzMVx1OEJGQlx1NTNENlx1NkQ0Rlx1ODlDOFx1NTY2OFx1N0YxM1x1NUI1OFx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NEYxQVx1OEJGQlx1NTNENlx1NjcyQ1x1NTczMFx1N0YxM1x1NUI1OFx1NUU3Nlx1NjMwOVx1OTcwMFx1NTJBMFx1OEY3RFxyXG4gICAgICAgKiBcdTVDMjRcdTUxNzZcdTVGNTNcdTYwQThcdTc5ODFcdTc1MjhcdTZENEZcdTg5QzhcdTU2NjhcdTdGMTNcdTVCNThcdTY1RjZcdUZGMDhcdThGRDlcdTc5Q0RcdTYwQzVcdTUxQjVcdTUzRUFcdTVFOTRcdThCRTVcdTUzRDFcdTc1MUZcdTU3MjhcdThDMDNcdThCRDVcdTk2MzZcdTZCQjVcdUZGMDlcdTVGQzVcdTk4N0JcdTVDMDZcdTVCRjlcdTVFOTRcdTZBMjFcdTU3NTdcdTUyQTBcdTUxNjVcdTUyMzAgaW5jbHVkZSBcdTkxQ0NcdUZGMENcclxuICAgICAgICogXHU1NDI2XHU1MjE5XHU0RjFBXHU5MDQ3XHU1MjMwXHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXHU1MjA3XHU2MzYyXHU5ODc1XHU5NzYyXHU1MzYxXHU5ODdGXHU3Njg0XHU5NUVFXHU5ODk4XHVGRjA4dml0ZSBcdTRGMUFcdThCQTRcdTRFM0FcdTVCODNcdTY2MkZcdTRFMDBcdTRFMkFcdTY1QjBcdTc2ODRcdTRGOURcdThENTZcdTUzMDVcdTRGMUFcdTkxQ0RcdTY1QjBcdTUyQTBcdThGN0RcdTVFNzZcdTVGM0FcdTUyMzZcdTUyMzdcdTY1QjBcdTk4NzVcdTk3NjJcdUZGMDlcdUZGMENcclxuICAgICAgICogXHU1NkUwXHU0RTNBXHU1QjgzXHU2NUUyXHU2NUUwXHU2Q0Q1XHU0RjdGXHU3NTI4XHU2RDRGXHU4OUM4XHU1NjY4XHU3RjEzXHU1QjU4XHVGRjBDXHU1M0M4XHU2Q0ExXHU2NzA5XHU1NzI4XHU2NzJDXHU1NzMwIG5vZGVfbW9kdWxlcy8udml0ZSBcdTkxQ0NcdTdGMTNcdTVCNThcclxuICAgICAgICogXHU2RTI5XHU5OUE4XHU2M0QwXHU3OTNBXHVGRjFBXHU1OTgyXHU2NzlDXHU0RjYwXHU0RjdGXHU3NTI4XHU3Njg0XHU3QjJDXHU0RTA5XHU2NUI5XHU1RTkzXHU2NjJGXHU1MTY4XHU1QzQwXHU1RjE1XHU1MTY1XHVGRjBDXHU0RTVGXHU1QzMxXHU2NjJGXHU1RjE1XHU1MTY1XHU1MjMwIHNyYy9tYWluLnRzIFx1NjU4N1x1NEVGNlx1OTFDQ1x1RkYwQ1xyXG4gICAgICAgKiBcdTVDMzFcdTRFMERcdTk3MDBcdTg5ODFcdTUxOERcdTZERkJcdTUyQTBcdTUyMzAgaW5jbHVkZSBcdTkxQ0NcdTRFODZcdUZGMENcdTU2RTBcdTRFM0Egdml0ZSBcdTRGMUFcdTgxRUFcdTUyQThcdTVDMDZcdTVCODNcdTRFRUNcdTdGMTNcdTVCNThcdTUyMzAgbm9kZV9tb2R1bGVzLy52aXRlXHJcbiAgICAgICAqL1xyXG4gICAgICBpbmNsdWRlOiBbXHJcbiAgICAgICAgJ3BpbmlhJyxcclxuICAgICAgICAnbG9kYXNoLWVzJyxcclxuICAgICAgICAnYXhpb3MnLFxyXG4gICAgICBdLFxyXG4gICAgICAvLyBcdTYyNTNcdTUzMDVcdTY1RjZcdTVGM0FcdTUyMzZcdTYzOTJcdTk2NjRcdTc2ODRcdTRGOURcdThENTZcdTk4NzlcclxuICAgICAgZXhjbHVkZTogW1xyXG4gICAgICAgIC8vIGh0dHBzOi8vd3d3Lm11bGluZ3l1ZXIuY29tL2FyY2hpdmVzLzkyOC9cclxuICAgICAgICAndmFudCcsXHJcbiAgICAgICAgJ0B2YW50L3VzZScsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFx1NTJBMFx1OEY3RFx1NjNEMlx1NEVGNlxyXG4gICAgcGx1Z2luczogY3JlYXRlVml0ZVBsdWdpbnModml0ZUVudiwgaXNCdWlsZCwgcHJvZE1vY2spLFxyXG4gIH1cclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcaDUtZGVtb1xcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFxoNS1kZW1vXFxcXGJ1aWxkXFxcXHV0aWxzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL2g1LWRlbW8vYnVpbGQvdXRpbHMudHNcIjtpbXBvcnQgZnMgZnJvbSAnbm9kZTpmcydcclxuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RldkZuKG1vZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBtb2RlID09PSAnZGV2ZWxvcG1lbnQnXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2RGbihtb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICByZXR1cm4gbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIHRvIGdlbmVyYXRlIHBhY2thZ2UgcHJldmlld1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVwb3J0TW9kZSgpOiBib29sZWFuIHtcclxuICByZXR1cm4gcHJvY2Vzcy5lbnYuUkVQT1JUID09PSAndHJ1ZSdcclxufVxyXG5cclxuLy8gUmVhZCBhbGwgZW52aXJvbm1lbnQgdmFyaWFibGUgY29uZmlndXJhdGlvbiBmaWxlcyB0byBwcm9jZXNzLmVudlxyXG4vLyBcdThCRkJcdTUzRDZcdTVFNzZcdTU5MDRcdTc0MDZcdTYyNDBcdTY3MDlcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjYgLmVudlxyXG5leHBvcnQgZnVuY3Rpb24gd3JhcHBlckVudihlbnZDb25mOiBSZWNvcmRhYmxlKTogVml0ZUVudiB7XHJcbiAgY29uc3QgcmV0OiBhbnkgPSB7fVxyXG5cclxuICBmb3IgKGNvbnN0IGVudk5hbWUgb2YgT2JqZWN0LmtleXMoZW52Q29uZikpIHtcclxuICAgIC8vIFx1NTNCQlx1OTY2NFx1N0E3QVx1NjgzQ1xyXG4gICAgbGV0IHJlYWxOYW1lID0gZW52Q29uZltlbnZOYW1lXS5yZXBsYWNlKC9cXFxcbi9nLCAnXFxuJylcclxuICAgIHJlYWxOYW1lID0gcmVhbE5hbWUgPT09ICd0cnVlJyA/IHRydWUgOiByZWFsTmFtZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogcmVhbE5hbWVcclxuXHJcbiAgICBpZiAoZW52TmFtZSA9PT0gJ1ZJVEVfUE9SVCcpIHtcclxuICAgICAgcmVhbE5hbWUgPSBOdW1iZXIocmVhbE5hbWUpXHJcbiAgICB9XHJcbiAgICBpZiAoZW52TmFtZSA9PT0gJ1ZJVEVfUFJPWFknKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmVhbE5hbWUgPSBKU09OLnBhcnNlKHJlYWxOYW1lKVxyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIChlcnJvcikge31cclxuICAgIH1cclxuICAgIHJldFtlbnZOYW1lXSA9IHJlYWxOYW1lXHJcbiAgICBwcm9jZXNzLmVudltlbnZOYW1lXSA9IHJlYWxOYW1lXHJcbiAgfVxyXG4gIHJldHVybiByZXRcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIHN0YXJ0aW5nIHdpdGggdGhlIHNwZWNpZmllZCBwcmVmaXhcclxuICogQHBhcmFtIG1hdGNoIHByZWZpeFxyXG4gKiBAcGFyYW0gY29uZkZpbGVzIGV4dFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVudkNvbmZpZyhtYXRjaCA9ICdWSVRFX0dMT0JfJywgY29uZkZpbGVzID0gWycuZW52JywgJy5lbnYucHJvZHVjdGlvbiddKSB7XHJcbiAgbGV0IGVudkNvbmZpZyA9IHt9XHJcbiAgY29uZkZpbGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGVudiA9IGRvdGVudi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGl0ZW0pKSlcclxuICAgICAgZW52Q29uZmlnID0geyAuLi5lbnZDb25maWcsIC4uLmVudiB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgfSlcclxuXHJcbiAgT2JqZWN0LmtleXMoZW52Q29uZmlnKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYF4oJHttYXRjaH0pYClcclxuICAgIGlmICghcmVnLnRlc3Qoa2V5KSkge1xyXG4gICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGVudkNvbmZpZywga2V5KVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIGVudkNvbmZpZ1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVzZXIgcm9vdCBkaXJlY3RvcnlcclxuICogQHBhcmFtIGRpciBmaWxlIHBhdGhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290UGF0aCguLi5kaXI6IHN0cmluZ1tdKSB7XHJcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAuLi5kaXIpXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGg1LWRlbW9cXFxcYnVpbGRcXFxcdml0ZVxcXFxwbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcaDUtZGVtb1xcXFxidWlsZFxcXFx2aXRlXFxcXHBsdWdpblxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29kZS9oNS1kZW1vL2J1aWxkL3ZpdGUvcGx1Z2luL2luZGV4LnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgeyBWYW50UmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgeyBjb25maWdIdG1sUGx1Z2luIH0gZnJvbSAnLi9odG1sJ1xyXG5pbXBvcnQgeyBjb25maWdNb2NrUGx1Z2luIH0gZnJvbSAnLi9tb2NrJ1xyXG5pbXBvcnQgeyBjb25maWdDb21wcmVzc1BsdWdpbiB9IGZyb20gJy4vY29tcHJlc3MnXHJcbmltcG9ydCB7IGNvbmZpZ1Zpc3VhbGl6ZXJDb25maWcgfSBmcm9tICcuL3Zpc3VhbGl6ZXInXHJcbmltcG9ydCB7IGNvbmZpZ1N2Z0ljb25zUGx1Z2luIH0gZnJvbSAnLi9zdmdTcHJpdGUnXHJcblxyXG4vKipcclxuICogXHU5MTREXHU3RjZFIHZpdGUgXHU2M0QyXHU0RUY2XHJcbiAqIEBwYXJhbSB2aXRlRW52IHZpdGUgXHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHU5NTJFXHU1MDNDXHU5NjFGIG9iamVjdFxyXG4gKiBAcGFyYW0gaXNCdWlsZCBcdTY2MkZcdTU0MjZcdTY2MkYgYnVpbGQgXHU3M0FGXHU1ODgzIHRydWUvZmFsc2VcclxuICogQHJldHVybnMgdml0ZVBsdWdpbnNbXVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpdGVQbHVnaW5zKHZpdGVFbnY6IFZpdGVFbnYsIGlzQnVpbGQ6IGJvb2xlYW4sIHByb2RNb2NrOiBib29sZWFuKSB7XHJcbiAgLy8gVklURV9CVUlMRF9DT01QUkVTUyBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjggZ3ppcCBcdTUzOEJcdTdGMjlcdTYyMTYgYnJvdGxpIFx1NTM4Qlx1N0YyOVxyXG4gIC8vIFx1NTNFRlx1OTAwOTogZ3ppcCB8IGJyb3RsaSB8IG5vbmVcdUZGMENcclxuICAvLyBcdTU5ODJcdTY3OUNcdTRGNjBcdTk3MDBcdTg5ODFcdTU5MUFcdTc5Q0RcdTVGNjJcdTVGMEZcdUZGMENcdTRGNjBcdTUzRUZcdTRFRTVcdTc1MjgnLCdcdTY3NjVcdTUyMDZcdTk2OTRcclxuXHJcbiAgLy8gVklURV9CVUlMRF9DT01QUkVTU19ERUxFVEVfT1JJR0lOX0ZJTEUgXHU2MjUzXHU1MzA1XHU0RjdGXHU3NTI4XHU1MzhCXHU3RjI5XHU2NUY2XHU2NjJGXHU1NDI2XHU1MjIwXHU5NjY0XHU1MzlGXHU1OUNCXHU2NTg3XHU0RUY2XHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBIGZhbHNlXHJcbiAgY29uc3QgeyBWSVRFX1VTRV9NT0NLLCBWSVRFX0JVSUxEX0NPTVBSRVNTLCBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRSB9ID0gdml0ZUVudlxyXG5cclxuICBjb25zdCB2aXRlUGx1Z2luczogKFBsdWdpbk9wdGlvbiB8IFBsdWdpbk9wdGlvbltdKVtdID0gW1xyXG4gICAgLy8gaGF2ZSB0b1xyXG4gICAgdnVlKCksXHJcbiAgICAvLyBcdTYzMDlcdTk3MDBcdTVGMTVcdTUxNjVWYW50VWlcdTRFMTRcdTgxRUFcdTUyQThcdTUyMUJcdTVFRkFcdTdFQzRcdTRFRjZcdTU4RjBcdTY2MEVcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICBkdHM6IHRydWUsXHJcbiAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXSxcclxuICAgICAgdHlwZXM6IFtdLFxyXG4gICAgfSksXHJcbiAgICAvLyBVbm9DU1NcclxuICAgIFVub0NTUygpLFxyXG5cclxuICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICAvLyB0YXJnZXRzIHRvIHRyYW5zZm9ybVxyXG4gICAgICBpbmNsdWRlOiBbXHJcbiAgICAgICAgL1xcLlt0al1zeD8kLywgLy8gLnRzLCAudHN4LCAuanMsIC5qc3hcclxuICAgICAgICAvXFwudnVlJC8sXHJcbiAgICAgICAgL1xcLnZ1ZVxcP3Z1ZS8sIC8vIC52dWVcclxuICAgICAgXSxcclxuICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgIC8vIHByZXNldHNcclxuICAgICAgICAndnVlJyxcclxuICAgICAgICAndnVlLXJvdXRlcicsXHJcbiAgICAgICAgJ3BpbmlhJyxcclxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcclxuICAgICAgXSxcclxuICAgICAgZHRzOiAndHlwZXMvYXV0by1pbXBvcnRzLmQudHMnLFxyXG4gICAgfSksXHJcbiAgXVxyXG5cclxuICAvLyBcdTUyQTBcdThGN0QgaHRtbCBcdTYzRDJcdTRFRjYgdml0ZS1wbHVnaW4taHRtbFxyXG4gIHZpdGVQbHVnaW5zLnB1c2goY29uZmlnSHRtbFBsdWdpbih2aXRlRW52LCBpc0J1aWxkKSlcclxuXHJcbiAgLy8gcm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXHJcbiAgdml0ZVBsdWdpbnMucHVzaChjb25maWdWaXN1YWxpemVyQ29uZmlnKCkpXHJcblxyXG4gIC8vIHZpdGUtcGx1Z2luLW1vY2tcclxuICBWSVRFX1VTRV9NT0NLICYmIHZpdGVQbHVnaW5zLnB1c2goY29uZmlnTW9ja1BsdWdpbihpc0J1aWxkLCBwcm9kTW9jaykpXHJcblxyXG4gIC8vIHZpdGUtcGx1Z2luLXN2Zy1pY29uc1xyXG4gIHZpdGVQbHVnaW5zLnB1c2goY29uZmlnU3ZnSWNvbnNQbHVnaW4oaXNCdWlsZCkpXHJcblxyXG4gIGlmIChpc0J1aWxkKSB7XHJcbiAgICAvLyByb2xsdXAtcGx1Z2luLWd6aXBcclxuICAgIC8vIFx1NTJBMFx1OEY3RCBnemlwIFx1NjI1M1x1NTMwNVxyXG4gICAgdml0ZVBsdWdpbnMucHVzaChcclxuICAgICAgY29uZmlnQ29tcHJlc3NQbHVnaW4oVklURV9CVUlMRF9DT01QUkVTUywgVklURV9CVUlMRF9DT01QUkVTU19ERUxFVEVfT1JJR0lOX0ZJTEUpLFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZpdGVQbHVnaW5zXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGg1LWRlbW9cXFxcYnVpbGRcXFxcdml0ZVxcXFxwbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcaDUtZGVtb1xcXFxidWlsZFxcXFx2aXRlXFxcXHBsdWdpblxcXFxodG1sLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL2g1LWRlbW8vYnVpbGQvdml0ZS9wbHVnaW4vaHRtbC50c1wiOy8qKlxyXG4gKiBQbHVnaW4gdG8gbWluaW1pemUgYW5kIHVzZSBlanMgdGVtcGxhdGUgc3ludGF4IGluIGluZGV4Lmh0bWwuXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbm5jd2Ivdml0ZS1wbHVnaW4taHRtbFxyXG4gKi9cclxuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4taHRtbCdcclxuaW1wb3J0IHBrZyBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nXHJcbmltcG9ydCB7IEdMT0JfQ09ORklHX0ZJTEVfTkFNRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0h0bWxQbHVnaW4oZW52OiBWaXRlRW52LCBpc0J1aWxkOiBib29sZWFuKSB7XHJcbiAgY29uc3QgeyBWSVRFX0dMT0JfQVBQX1RJVExFLCBWSVRFX1BVQkxJQ19QQVRIIH0gPSBlbnZcclxuXHJcbiAgY29uc3QgcGF0aCA9IFZJVEVfUFVCTElDX1BBVEguZW5kc1dpdGgoJy8nKSA/IFZJVEVfUFVCTElDX1BBVEggOiBgJHtWSVRFX1BVQkxJQ19QQVRIfS9gXHJcblxyXG4gIGNvbnN0IGdldEFwcENvbmZpZ1NyYyA9ICgpID0+IHtcclxuICAgIHJldHVybiBgJHtwYXRoIHx8ICcvJ30ke0dMT0JfQ09ORklHX0ZJTEVfTkFNRX0/dj0ke3BrZy52ZXJzaW9ufS0ke25ldyBEYXRlKCkuZ2V0VGltZSgpfWBcclxuICB9XHJcblxyXG4gIC8vIFx1NUY1M1x1NjI2N1x1ODg0QyB5YXJuIGJ1aWxkIFx1Njc4NFx1NUVGQVx1OTg3OVx1NzZFRVx1NEU0Qlx1NTQwRVx1RkYwQ1x1NEYxQVx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMCBfYXBwLmNvbmZpZy5qcyBcdTY1ODdcdTRFRjZcdTVFNzZcdTYzRDJcdTUxNjUgaW5kZXguaHRtbFxyXG4gIC8vIF9hcHAuY29uZmlnLmpzIFx1NzUyOFx1NEU4RVx1OTg3OVx1NzZFRVx1NTcyOFx1NjI1M1x1NTMwNVx1NTQwRVx1RkYwQ1x1OTcwMFx1ODk4MVx1NTJBOFx1NjAwMVx1NEZFRVx1NjUzOVx1OTE0RFx1N0Y2RVx1NzY4NFx1OTcwMFx1NkM0Mlx1RkYwQ1x1NTk4Mlx1NjNBNVx1NTNFM1x1NTczMFx1NTc0MFxyXG4gIC8vIFx1NEUwRFx1NzUyOFx1OTFDRFx1NjVCMFx1OEZEQlx1ODg0Q1x1NjI1M1x1NTMwNVx1RkYwQ1x1NTNFRlx1NTcyOFx1NjI1M1x1NTMwNVx1NTQwRVx1NEZFRVx1NjUzOSAvZGlzdC9fYXBwLmNvbmZpZy5qcyBcdTUxODVcdTc2ODRcdTUzRDhcdTkxQ0ZcdUZGMENcdTUyMzdcdTY1QjBcdTUzNzNcdTUzRUZcdTY2RjRcdTY1QjBcdTRFRTNcdTc4MDFcdTUxODVcdTc2ODRcdTVDNDBcdTkwRThcdTUzRDhcdTkxQ0ZcclxuXHJcbiAgY29uc3QgaHRtbFBsdWdpbjogUGx1Z2luT3B0aW9uW10gPSBjcmVhdGVIdG1sUGx1Z2luKHtcclxuICAgIG1pbmlmeTogaXNCdWlsZCxcclxuICAgIGluamVjdDoge1xyXG4gICAgICAvLyBJbmplY3QgZGF0YSBpbnRvIGVqcyB0ZW1wbGF0ZVxyXG4gICAgICAvLyBcdTk3MDBcdTg5ODFcdTZDRThcdTUxNjUgaW5kZXguaHRtbCBlanMgXHU2QTIxXHU3MjQ4XHU3Njg0XHU2NTcwXHU2MzZFIFx1NEY3Rlx1NzUyOFx1NTcyOCBodG1sIFx1NEUyRCBcdUZGMUE8ZGl2PjwlPSB0aXRsZSAlPjwvZGl2PlxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGU6IFZJVEVfR0xPQl9BUFBfVElUTEUsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyBFbWJlZCB0aGUgZ2VuZXJhdGVkIGFwcC5jb25maWcuanMgZmlsZSBcdTk3MDBcdTg5ODFcdTZDRThcdTUxNjVcdTc2ODRcdTY4MDdcdTdCN0VcdTUyMTdcdTg4NjhcclxuICAgICAgdGFnczogaXNCdWlsZFxyXG4gICAgICAgID8gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGFnOiAnc2NyaXB0JyxcclxuICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgc3JjOiBnZXRBcHBDb25maWdTcmMoKSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIDogW10sXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgcmV0dXJuIGh0bWxQbHVnaW5cclxufVxyXG4iLCAie1xuICBcIm5hbWVcIjogXCJ2dWUzLXZhbnQ0LW1vYmlsZVwiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMi4xLjBcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwicGFja2FnZU1hbmFnZXJcIjogXCJwbnBtQDguNi4xMFwiLFxuICBcImF1dGhvclwiOiB7XG4gICAgXCJuYW1lXCI6IFwieGlhbmdzaHUyMzNcIixcbiAgICBcImVtYWlsXCI6IFwieGlhbmdzaHUyMzNAb3V0bG9vay5jb21cIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS94aWFuZ3NodTIzM1wiXG4gIH0sXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS94aWFuZ3NodTIzMy92dWUzLXZhbnQ0LW1vYmlsZS5naXRcIlxuICB9LFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3hpYW5nc2h1MjMzL3Z1ZTMtdmFudDQtbW9iaWxlL2lzc3Vlc1wiXG4gIH0sXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiXjE4LjE4LjAgfHwgXjIwLjkuMCB8fCA+PTIxLjEuMFwiLFxuICAgIFwicG5wbVwiOiBcIj49OC42LjEwXCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcInByZWluc3RhbGxcIjogXCJucHggb25seS1hbGxvdyBwbnBtXCIsXG4gICAgXCJib290c3RyYXBcIjogXCJwbnBtIGluc3RhbGxcIixcbiAgICBcInNlcnZlXCI6IFwibnBtIHJ1biBkZXZcIixcbiAgICBcImRldlwiOiBcImNyb3NzLWVudiBWSVRFX0NKU19JR05PUkVfV0FSTklORz10cnVlIHZpdGUgZGV2XCIsXG4gICAgXCJkZXY6ZGVidWdjanNcIjogXCJjcm9zcy1lbnYgVklURV9DSlNfVFJBQ0U9dHJ1ZSB2aXRlIGRldlwiLFxuICAgIFwiYnVpbGRcIjogXCJjcm9zcy1lbnYgTk9ERV9FTlY9cHJvZHVjdGlvbiB2aXRlIGJ1aWxkICYmIGVzbm8gLi9idWlsZC9zY3JpcHQvcG9zdEJ1aWxkLnRzXCIsXG4gICAgXCJidWlsZDpuby1jYWNoZVwiOiBcInBucG0gY2xlYW46Y2FjaGUgJiYgbnBtIHJ1biBidWlsZFwiLFxuICAgIFwicmVwb3J0XCI6IFwiY3Jvc3MtZW52IFJFUE9SVD10cnVlIG5wbSBydW4gYnVpbGRcIixcbiAgICBcInR5cGU6Y2hlY2tcIjogXCJ2dWUtdHNjIC0tbm9FbWl0IC0tc2tpcExpYkNoZWNrXCIsXG4gICAgXCJwcmV2aWV3XCI6IFwidml0ZSBwcmV2aWV3XCIsXG4gICAgXCJjbGVhbjpjYWNoZVwiOiBcInJpbXJhZiBub2RlX21vZHVsZXMvLmNhY2hlLyAmJiByaW1yYWYgbm9kZV9tb2R1bGVzLy52aXRlXCIsXG4gICAgXCJjbGVhbjpsaWJcIjogXCJyaW1yYWYgbm9kZV9tb2R1bGVzXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHR5cGVzL2xvZGFzaC1lc1wiOiBcIl40LjE3LjEyXCIsXG4gICAgXCJAdW5vY3NzL3Jlc2V0XCI6IFwiXjAuNTguNVwiLFxuICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwiXjEwLjcuMFwiLFxuICAgIFwiYXhpb3NcIjogXCJeMS40LjBcIixcbiAgICBcImNyeXB0by1qc1wiOiBcIl40LjIuMFwiLFxuICAgIFwiZGF0ZS1mbnNcIjogXCJeMy4wLjZcIixcbiAgICBcImVjaGFydHNcIjogXCJeNS40LjNcIixcbiAgICBcImxvZGFzaC1lc1wiOiBcIl40LjE3LjIxXCIsXG4gICAgXCJtb2NranNcIjogXCJeMS4xLjBcIixcbiAgICBcIm5wcm9ncmVzc1wiOiBcIl4wLjIuMFwiLFxuICAgIFwicGluaWFcIjogXCJeMi4xLjdcIixcbiAgICBcInBpbmlhLXBsdWdpbi1wZXJzaXN0XCI6IFwiXjEuMC4wXCIsXG4gICAgXCJxc1wiOiBcIl42LjExLjJcIixcbiAgICBcInZhbnRcIjogXCJeNC44LjFcIixcbiAgICBcInZ1ZVwiOiBcIl4zLjMuMTNcIixcbiAgICBcInZ1ZS1yb3V0ZXJcIjogXCI0LjIuNVwiLFxuICAgIFwid2VpeGluLWpzLXNka1wiOiBcIl4xLjYuNVwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjb21taXRsaW50L2NsaVwiOiBcIl4xOC40LjNcIixcbiAgICBcIkBjb21taXRsaW50L2NvbmZpZy1jb252ZW50aW9uYWxcIjogXCJeMTguNC4zXCIsXG4gICAgXCJAaWNvbmlmeS9qc29uXCI6IFwiXjIuMi4xODhcIixcbiAgICBcIkB0eXBlcy9jcnlwdG8tanNcIjogXCJeNC4yLjJcIixcbiAgICBcIkB0eXBlcy9mcy1leHRyYVwiOiBcIl4xMS4wLjRcIixcbiAgICBcIkB0eXBlcy9tb2NranNcIjogXCJeMS4wLjEwXCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC4xMC41XCIsXG4gICAgXCJAdHlwZXMvbnByb2dyZXNzXCI6IFwiXjAuMi4zXCIsXG4gICAgXCJAdHlwZXMvcXNcIjogXCJeNi45LjExXCIsXG4gICAgXCJAdW5vY3NzL3ByZXNldC1pY29uc1wiOiBcIl4wLjU4LjVcIixcbiAgICBcIkB1bm9jc3MvcHJlc2V0LXJlbS10by1weFwiOiBcIl4wLjU4LjVcIixcbiAgICBcIkB1bm9jc3MvdHJhbnNmb3JtZXItZGlyZWN0aXZlc1wiOiBcIl4wLjU4LjRcIixcbiAgICBcIkB1bm9jc3MvdHJhbnNmb3JtZXItdmFyaWFudC1ncm91cFwiOiBcIl4wLjU4LjRcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl41LjAuMFwiLFxuICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMTZcIixcbiAgICBcImNyb3NzLWVudlwiOiBcIl43LjAuM1wiLFxuICAgIFwiY3otZ2l0XCI6IFwiXjEuOC4wXCIsXG4gICAgXCJkb3RlbnZcIjogXCJeMTYuMy4xXCIsXG4gICAgXCJlc25vXCI6IFwiXjAuMTYuM1wiLFxuICAgIFwiZnMtZXh0cmFcIjogXCJeMTEuMi4wXCIsXG4gICAgXCJsZXNzXCI6IFwiXjQuMi4wXCIsXG4gICAgXCJsaW50LXN0YWdlZFwiOiBcIl4xNS4yLjBcIixcbiAgICBcIm9ubHktYWxsb3dcIjogXCJeMS4yLjFcIixcbiAgICBcInBpY29jb2xvcnNcIjogXCJeMS4wLjBcIixcbiAgICBcInBvc3Rjc3NcIjogXCJeOC40LjMyXCIsXG4gICAgXCJwb3N0Y3NzLW1vYmlsZS1mb3JldmVyXCI6IFwiXjQuMC4wXCIsXG4gICAgXCJyaW1yYWZcIjogXCJeMy4wLjJcIixcbiAgICBcInJvbGx1cFwiOiBcIl40LjkuMVwiLFxuICAgIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI6IFwiXjUuMTEuMFwiLFxuICAgIFwic2ltcGxlLWdpdC1ob29rc1wiOiBcIl4yLjkuMFwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjMuM1wiLFxuICAgIFwidW5vY3NzXCI6IFwiXjAuNTguNVwiLFxuICAgIFwidW5wbHVnaW4tYXV0by1pbXBvcnRcIjogXCJeMC4xNy41XCIsXG4gICAgXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50c1wiOiBcIl4wLjI2LjBcIixcbiAgICBcInZpdGVcIjogXCJeNS4wLjEwXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiOiBcIl4wLjUuMVwiLFxuICAgIFwidml0ZS1wbHVnaW4taHRtbFwiOiBcIl4zLjIuMlwiLFxuICAgIFwidml0ZS1wbHVnaW4tbW9ja1wiOiBcIl4yLjkuOFwiLFxuICAgIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI6IFwiXjIuMC4xXCIsXG4gICAgXCJ2dWUtdHNjXCI6IFwiXjEuOC4yN1wiXG4gIH0sXG4gIFwic2ltcGxlLWdpdC1ob29rc1wiOiB7XG4gICAgXCJwcmUtY29tbWl0XCI6IFwicG5wbSBsaW50LXN0YWdlZFwiLFxuICAgIFwiY29tbWl0LW1zZ1wiOiBcIm5weCAtLW5vLWluc3RhbGwgY29tbWl0bGludCAtLWVkaXQgJDFcIlxuICB9LFxuICBcImNvbmZpZ1wiOiB7XG4gICAgXCJjb21taXRpemVuXCI6IHtcbiAgICAgIFwicGF0aFwiOiBcIm5vZGVfbW9kdWxlcy9jei1naXRcIlxuICAgIH1cbiAgfVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGg1LWRlbW9cXFxcYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcaDUtZGVtb1xcXFxidWlsZFxcXFxjb25zdGFudC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29kZS9oNS1kZW1vL2J1aWxkL2NvbnN0YW50LnRzXCI7LyoqXHJcbiAqIFRoZSBuYW1lIG9mIHRoZSBjb25maWd1cmF0aW9uIGZpbGUgZW50ZXJlZCBpbiB0aGUgcHJvZHVjdGlvbiBlbnZpcm9ubWVudFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEdMT0JfQ09ORklHX0ZJTEVfTkFNRSA9ICdhcHAuY29uZmlnLmpzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IE9VVFBVVF9ESVIgPSAnZGlzdC92YW50LW1vYmlsZSdcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGg1LWRlbW9cXFxcYnVpbGRcXFxcdml0ZVxcXFxwbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcaDUtZGVtb1xcXFxidWlsZFxcXFx2aXRlXFxcXHBsdWdpblxcXFxtb2NrLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL2g1LWRlbW8vYnVpbGQvdml0ZS9wbHVnaW4vbW9jay50c1wiOy8qKlxyXG4gKiBNb2NrIHBsdWdpbiBmb3IgZGV2ZWxvcG1lbnQgYW5kIHByb2R1Y3Rpb24uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbm5jd2Ivdml0ZS1wbHVnaW4tbW9ja1xyXG4gKi9cclxuaW1wb3J0IHsgdml0ZU1vY2tTZXJ2ZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnTW9ja1BsdWdpbihpc0J1aWxkOiBib29sZWFuLCBwcm9kTW9jazogYm9vbGVhbikge1xyXG4gIHJldHVybiB2aXRlTW9ja1NlcnZlKHtcclxuICAgIGlnbm9yZTogL15cXF8vLFxyXG4gICAgbW9ja1BhdGg6ICdtb2NrJyxcclxuICAgIGxvY2FsRW5hYmxlZDogIWlzQnVpbGQsXHJcbiAgICBwcm9kRW5hYmxlZDogaXNCdWlsZCAmJiBwcm9kTW9jayxcclxuICAgIGluamVjdENvZGU6IGBcclxuICAgICAgaW1wb3J0IHsgc2V0dXBQcm9kTW9ja1NlcnZlciB9IGZyb20gJy4uL21vY2svX2NyZWF0ZVByb2R1Y3Rpb25TZXJ2ZXInO1xyXG5cclxuICAgICAgc2V0dXBQcm9kTW9ja1NlcnZlcigpO1xyXG4gICAgICBgLFxyXG4gIH0pXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGg1LWRlbW9cXFxcYnVpbGRcXFxcdml0ZVxcXFxwbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcaDUtZGVtb1xcXFxidWlsZFxcXFx2aXRlXFxcXHBsdWdpblxcXFxjb21wcmVzcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29kZS9oNS1kZW1vL2J1aWxkL3ZpdGUvcGx1Z2luL2NvbXByZXNzLnRzXCI7LyoqXHJcbiAqIFVzZWQgdG8gcGFja2FnZSBhbmQgb3V0cHV0IGd6aXAuIE5vdGUgdGhhdCB0aGlzIGRvZXMgbm90IHdvcmsgcHJvcGVybHkgaW4gVml0ZSwgdGhlIHNwZWNpZmljIHJlYXNvbiBpcyBzdGlsbCBiZWluZyBpbnZlc3RpZ2F0ZWRcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2FubmN3Yi92aXRlLXBsdWdpbi1jb21wcmVzc2lvblxyXG4gKi9cclxuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xyXG5cclxuaW1wb3J0IGNvbXByZXNzUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWNvbXByZXNzaW9uJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0NvbXByZXNzUGx1Z2luKFxyXG4gIGNvbXByZXNzOiAnZ3ppcCcgfCAnYnJvdGxpJyB8ICdub25lJyxcclxuICBkZWxldGVPcmlnaW5GaWxlID0gZmFsc2UsXHJcbik6IFBsdWdpbk9wdGlvbiB8IFBsdWdpbk9wdGlvbltdIHtcclxuICBjb25zdCBjb21wcmVzc0xpc3QgPSBjb21wcmVzcy5zcGxpdCgnLCcpXHJcblxyXG4gIGNvbnN0IHBsdWdpbnM6IFBsdWdpbk9wdGlvbltdID0gW11cclxuXHJcbiAgaWYgKGNvbXByZXNzTGlzdC5pbmNsdWRlcygnZ3ppcCcpKSB7XHJcbiAgICBwbHVnaW5zLnB1c2goXHJcbiAgICAgIGNvbXByZXNzUGx1Z2luKHtcclxuICAgICAgICBleHQ6ICcuZ3onLFxyXG4gICAgICAgIGRlbGV0ZU9yaWdpbkZpbGUsXHJcbiAgICAgIH0pLFxyXG4gICAgKVxyXG4gIH1cclxuICBpZiAoY29tcHJlc3NMaXN0LmluY2x1ZGVzKCdicm90bGknKSkge1xyXG4gICAgcGx1Z2lucy5wdXNoKFxyXG4gICAgICBjb21wcmVzc1BsdWdpbih7XHJcbiAgICAgICAgZXh0OiAnLmJyJyxcclxuICAgICAgICBhbGdvcml0aG06ICdicm90bGlDb21wcmVzcycsXHJcbiAgICAgICAgZGVsZXRlT3JpZ2luRmlsZSxcclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgfVxyXG4gIHJldHVybiBwbHVnaW5zXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGg1LWRlbW9cXFxcYnVpbGRcXFxcdml0ZVxcXFxwbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcaDUtZGVtb1xcXFxidWlsZFxcXFx2aXRlXFxcXHBsdWdpblxcXFx2aXN1YWxpemVyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL2g1LWRlbW8vYnVpbGQvdml0ZS9wbHVnaW4vdmlzdWFsaXplci50c1wiOy8qKlxyXG4gKiBQYWNrYWdlIGZpbGUgdm9sdW1lIGFuYWx5c2lzXHJcbiAqL1xyXG5pbXBvcnQgdmlzdWFsaXplciBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInXHJcbmltcG9ydCB0eXBlIHsgUGx1Z2luT3B0aW9uIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgaXNSZXBvcnRNb2RlIH0gZnJvbSAnLi4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnVmlzdWFsaXplckNvbmZpZygpIHtcclxuICBpZiAoaXNSZXBvcnRNb2RlKCkpIHtcclxuICAgIHJldHVybiB2aXN1YWxpemVyKHtcclxuICAgICAgZmlsZW5hbWU6ICcuL25vZGVfbW9kdWxlcy8uY2FjaGUvdmlzdWFsaXplci9zdGF0cy5odG1sJyxcclxuICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgZ3ppcFNpemU6IHRydWUsXHJcbiAgICAgIGJyb3RsaVNpemU6IHRydWUsXHJcbiAgICB9KSBhcyBQbHVnaW5PcHRpb25cclxuICB9XHJcbiAgcmV0dXJuIFtdXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGg1LWRlbW9cXFxcYnVpbGRcXFxcdml0ZVxcXFxwbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcaDUtZGVtb1xcXFxidWlsZFxcXFx2aXRlXFxcXHBsdWdpblxcXFxzdmdTcHJpdGUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvaDUtZGVtby9idWlsZC92aXRlL3BsdWdpbi9zdmdTcHJpdGUudHNcIjsvKipcclxuICogIFZpdGUgUGx1Z2luIGZvciBmYXN0IGNyZWF0aW5nIFNWRyBzcHJpdGVzLlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5uY3diL3ZpdGUtcGx1Z2luLXN2Zy1pY29uc1xyXG4gKi9cclxuXHJcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnU3ZnSWNvbnNQbHVnaW4oaXNCdWlsZDogYm9vbGVhbikge1xyXG4gIC8vIFx1NjMwN1x1NUI5QVx1OTcwMFx1ODk4MVx1N0YxM1x1NUI1OFx1NzY4NFx1NTZGRVx1NjgwN1x1NjU4N1x1NEVGNlx1NTkzOVxyXG4gIGNvbnN0IHN2Z0ljb25zUGx1Z2luID0gY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xyXG4gICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMvaWNvbnMnKV0sXHJcbiAgICAvLyBcdTY2MkZcdTU0MjZcdTUzOEJcdTdGMjlcclxuICAgIHN2Z29PcHRpb25zOiBpc0J1aWxkLFxyXG4gICAgLy8gXHU2MzA3XHU1QjlBc3ltYm9sSWRcdTY4M0NcdTVGMEZcclxuICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxyXG4gIH0pXHJcbiAgcmV0dXJuIHN2Z0ljb25zUGx1Z2luXHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxTyxTQUFTLGVBQWU7QUFFN1AsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsY0FBYzs7O0FDRHZCLE9BQU8sWUFBWTtBQWFaLFNBQVMsZUFBd0I7QUFDdEMsU0FBTyxRQUFRLElBQUksV0FBVztBQUNoQztBQUlPLFNBQVMsV0FBVyxTQUE4QjtBQUN2RCxRQUFNLE1BQVcsQ0FBQztBQUVsQixhQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sR0FBRztBQUUxQyxRQUFJLFdBQVcsUUFBUSxPQUFPLEVBQUUsUUFBUSxRQUFRLElBQUk7QUFDcEQsZUFBVyxhQUFhLFNBQVMsT0FBTyxhQUFhLFVBQVUsUUFBUTtBQUV2RSxRQUFJLFlBQVksYUFBYTtBQUMzQixpQkFBVyxPQUFPLFFBQVE7QUFBQSxJQUM1QjtBQUNBLFFBQUksWUFBWSxjQUFjO0FBQzVCLFVBQUk7QUFDRixtQkFBVyxLQUFLLE1BQU0sUUFBUTtBQUFBLE1BQ2hDLFNBQ08sT0FBTztBQUFBLE1BQUM7QUFBQSxJQUNqQjtBQUNBLFFBQUksT0FBTyxJQUFJO0FBQ2YsWUFBUSxJQUFJLE9BQU8sSUFBSTtBQUFBLEVBQ3pCO0FBQ0EsU0FBTztBQUNUOzs7QUN6Q0EsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjs7O0FDQXZCLFNBQVMsd0JBQXdCOzs7QUNMakM7QUFBQSxFQUNFLE1BQVE7QUFBQSxFQUNSLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLFNBQVc7QUFBQSxFQUNYLGdCQUFrQjtBQUFBLEVBQ2xCLFFBQVU7QUFBQSxJQUNSLE1BQVE7QUFBQSxJQUNSLE9BQVM7QUFBQSxJQUNULEtBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFXO0FBQUEsRUFDWCxZQUFjO0FBQUEs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
