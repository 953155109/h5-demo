// vite.config.ts
import { resolve } from "node:path";
import { loadEnv } from "file:///E:/studyCode/vue3-vant4-mobile/node_modules/.pnpm/vite@5.0.10_@types+node@20.10.5_less@4.2.0/node_modules/vite/dist/node/index.js";
import { format } from "file:///E:/studyCode/vue3-vant4-mobile/node_modules/.pnpm/date-fns@3.0.6/node_modules/date-fns/index.mjs";

// build/utils.ts
import dotenv from "file:///E:/studyCode/vue3-vant4-mobile/node_modules/.pnpm/dotenv@16.3.1/node_modules/dotenv/lib/main.js";
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
import Components from "file:///E:/studyCode/vue3-vant4-mobile/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@4.9.1_vue@3.3.13/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///E:/studyCode/vue3-vant4-mobile/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@4.9.1_vue@3.3.13/node_modules/unplugin-vue-components/dist/resolvers.js";
import vue from "file:///E:/studyCode/vue3-vant4-mobile/node_modules/.pnpm/@vitejs+plugin-vue@5.0.0_vite@5.0.10_vue@3.3.13/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import UnoCSS from "file:///E:/studyCode/vue3-vant4-mobile/node_modules/.pnpm/unocss@0.58.5_postcss@8.4.32_rollup@4.9.1_vite@5.0.10/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///E:/studyCode/vue3-vant4-mobile/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.7.0_rollup@4.9.1/node_modules/unplugin-auto-import/dist/vite.js";

// build/vite/plugin/html.ts
import { createHtmlPlugin } from "file:///E:/studyCode/vue3-vant4-mobile/node_modules/.pnpm/vite-plugin-html@3.2.2_vite@5.0.10/node_modules/vite-plugin-html/dist/index.mjs";

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
    "clean:lib": "rimraf node_modules",
    lint: "eslint .",
    "lint:fix": "eslint . --fix",
    "lint:lint-staged": "lint-staged"
  },
  dependencies: {
    "@types/lodash-es": "^4.17.12",
    "@unocss/reset": "^0.58.5",
    "@vueuse/core": "^10.7.0",
    axios: "^1.4.0",
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
    "vue-router": "4.2.5"
  },
  devDependencies: {
    "@antfu/eslint-config": "^2.6.3",
    "@commitlint/cli": "^18.4.3",
    "@commitlint/config-conventional": "^18.4.3",
    "@iconify/json": "^2.2.188",
    "@types/fs-extra": "^11.0.4",
    "@types/mockjs": "^1.0.10",
    "@types/node": "^20.10.5",
    "@types/nprogress": "^0.2.3",
    "@types/qs": "^6.9.11",
    "@unocss/eslint-plugin": "^0.58.4",
    "@unocss/preset-icons": "^0.58.5",
    "@unocss/preset-rem-to-px": "^0.58.5",
    "@unocss/transformer-directives": "^0.58.4",
    "@unocss/transformer-variant-group": "^0.58.4",
    "@vitejs/plugin-vue": "^5.0.0",
    autoprefixer: "^10.4.16",
    "cross-env": "^7.0.3",
    "cz-git": "^1.8.0",
    dotenv: "^16.3.1",
    eslint: "^8.56.0",
    "eslint-plugin-format": "^0.1.0",
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
  "lint-staged": {
    "*": "eslint --fix"
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
import { viteMockServe } from "file:///E:/studyCode/vue3-vant4-mobile/node_modules/.pnpm/vite-plugin-mock@2.9.8_mockjs@1.1.0_vite@5.0.10/node_modules/vite-plugin-mock/dist/index.js";
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
import compressPlugin from "file:///E:/studyCode/vue3-vant4-mobile/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.0.10/node_modules/vite-plugin-compression/dist/index.mjs";
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
import visualizer from "file:///E:/studyCode/vue3-vant4-mobile/node_modules/.pnpm/rollup-plugin-visualizer@5.11.0_rollup@4.9.1/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
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
import { createSvgIconsPlugin } from "file:///E:/studyCode/vue3-vant4-mobile/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.0.10/node_modules/vite-plugin-svg-icons/dist/index.mjs";
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

// build/vite/proxy.ts
var httpsRE = /^https:\/\//;
function createProxy(list = []) {
  const ret = {};
  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target);
    ret[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: (path2) => path2.replace(new RegExp(`^${prefix}`), ""),
      // https is require secure=false
      // 如果您secure="true"只允许来自 HTTPS 的请求，则secure="false"意味着允许来自 HTTP 和 HTTPS 的请求。
      ...isHttps ? { secure: false } : {}
    };
  }
  return ret;
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
      proxy: createProxy(VITE_PROXY),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvdXRpbHMudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW4vaW5kZXgudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW4vaHRtbC50cyIsICJwYWNrYWdlLmpzb24iLCAiYnVpbGQvY29uc3RhbnQudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW4vbW9jay50cyIsICJidWlsZC92aXRlL3BsdWdpbi9jb21wcmVzcy50cyIsICJidWlsZC92aXRlL3BsdWdpbi92aXN1YWxpemVyLnRzIiwgImJ1aWxkL3ZpdGUvcGx1Z2luL3N2Z1Nwcml0ZS50cyIsICJidWlsZC92aXRlL3Byb3h5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcc3R1ZHlDb2RlXFxcXHZ1ZTMtdmFudDQtbW9iaWxlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxzdHVkeUNvZGVcXFxcdnVlMy12YW50NC1tb2JpbGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3N0dWR5Q29kZS92dWUzLXZhbnQ0LW1vYmlsZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB0eXBlIHsgQ29uZmlnRW52LCBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5pbXBvcnQgeyB3cmFwcGVyRW52IH0gZnJvbSAnLi9idWlsZC91dGlscydcclxuaW1wb3J0IHsgY3JlYXRlVml0ZVBsdWdpbnMgfSBmcm9tICcuL2J1aWxkL3ZpdGUvcGx1Z2luJ1xyXG5pbXBvcnQgeyBPVVRQVVRfRElSIH0gZnJvbSAnLi9idWlsZC9jb25zdGFudCdcclxuaW1wb3J0IHsgY3JlYXRlUHJveHkgfSBmcm9tICcuL2J1aWxkL3ZpdGUvcHJveHknXHJcbmltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlLmpzb24nXHJcblxyXG5jb25zdCB7IGRlcGVuZGVuY2llcywgZGV2RGVwZW5kZW5jaWVzLCBuYW1lLCB2ZXJzaW9uIH0gPSBwa2dcclxuXHJcbi8vIFx1NUY1M1x1NEY3Rlx1NzUyOFx1NjU4N1x1NEVGNlx1N0NGQlx1N0VERlx1OERFRlx1NUY4NFx1NzY4NFx1NTIyQlx1NTQwRFx1NjVGNlx1RkYwQ1x1OEJGN1x1NTlDQlx1N0VDOFx1NEY3Rlx1NzUyOFx1N0VERFx1NUJGOVx1OERFRlx1NUY4NFx1MzAwMlx1NzZGOFx1NUJGOVx1OERFRlx1NUY4NFx1NzY4NFx1NTIyQlx1NTQwRFx1NTAzQ1x1NEYxQVx1NTM5Rlx1NUMwMVx1NEUwRFx1NTJBOFx1NTczMFx1ODhBQlx1NEY3Rlx1NzUyOFx1RkYwQ1x1NTZFMFx1NkI2NFx1NjVFMFx1NkNENVx1ODhBQlx1NkI2M1x1NUUzOFx1ODlFM1x1Njc5MFx1MzAwMlxyXG4vLyBwYXRoLnJlc29sdmUgKCkgXHU2NUI5XHU2Q0Q1XHU3NTI4XHU0RThFXHU1QzA2XHU0RTAwXHU3Q0ZCXHU1MjE3XHU4REVGXHU1Rjg0XHU2QkI1XHU4OUUzXHU2NzkwXHU0RTNBXHU3RUREXHU1QkY5XHU4REVGXHU1Rjg0XHUzMDAyXHU1QjgzXHU5MDFBXHU4RkM3XHU1OTA0XHU3NDA2XHU0RUNFXHU1M0YzXHU1MjMwXHU1REU2XHU3Njg0XHU4REVGXHU1Rjg0XHU1RThGXHU1MjE3XHU2NzY1XHU1REU1XHU0RjVDXHVGRjBDXHU1NzI4XHU2QkNGXHU0RTJBXHU4REVGXHU1Rjg0XHU0RTRCXHU1MjREXHU2REZCXHU1MkEwXHVGRjBDXHU3NkY0XHU1MjMwXHU1MjFCXHU1RUZBXHU3RUREXHU1QkY5XHU4REVGXHU1Rjg0XHUzMDAyXHJcbmZ1bmN0aW9uIHBhdGhSZXNvbHZlKGRpcjogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy4nLCBkaXIpXHJcbn1cclxuXHJcbmNvbnN0IF9fQVBQX0lORk9fXyA9IHtcclxuICAvLyBBUFAgXHU1NDBFXHU1M0YwXHU3QkExXHU3NDA2XHU0RkUxXHU2MDZGXHJcbiAgcGtnOiB7IGRlcGVuZGVuY2llcywgZGV2RGVwZW5kZW5jaWVzLCBuYW1lLCB2ZXJzaW9uIH0sXHJcbiAgLy8gXHU2NzAwXHU1NDBFXHU3RjE2XHU4QkQxXHU2NUY2XHU5NUY0XHJcbiAgbGFzdEJ1aWxkVGltZTogZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkIEhIOm1tOnNzJyksXHJcbn1cclxuXHJcbi8qKiBAdHlwZSB7aW1wb3J0KCd2aXRlJykuVXNlckNvbmZpZ30gKi9cclxuZXhwb3J0IGRlZmF1bHQgKHsgY29tbWFuZCwgbW9kZSB9OiBDb25maWdFbnYpOiBVc2VyQ29uZmlnID0+IHtcclxuICAvLyBwcm9jZXNzLmN3ZCgpIFx1NjVCOVx1NkNENVx1OEZENFx1NTZERSBOb2RlLmpzIFx1OEZEQlx1N0EwQlx1NzY4NFx1NUY1M1x1NTI0RFx1NURFNVx1NEY1Q1x1NzZFRVx1NUY1NVxyXG4gIC8vIG1vZGUgXHU4RkQ0XHU1NkRFXHU1RTk0XHU3NTI4XHU3Njg0XHU3M0FGXHU1ODgzXHU2QTIxXHU1RjBGIGRldmVsb3BtZW50XHVGRjA4XHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXHVGRjA5IFx1NjIxNlx1ODAwNSBwcm9kdWN0aW9uXHVGRjA4XHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHVGRjA5XHJcbiAgLy8gY29tbWFuZCBcdThGRDRcdTU2REVcdUZGMDhkZXYvc2VydmUgXHU2MjE2IGJ1aWxkXHVGRjA5XHU1NDdEXHU0RUU0XHU2QTIxXHU1RjBGXHVGRjBDeWFybiBkZXYgXHU4RkQ0XHU1NkRFIGRldi9zZXJ2ZSB5YXJuIGJ1aWxkIFx1OEZENFx1NTZERSBidWlsZFxyXG4gIGNvbnN0IHJvb3QgPSBwcm9jZXNzLmN3ZCgpXHJcbiAgLy8gbG9hZEVudigpIFx1NjgzOVx1NjM2RSBtb2RlIFx1NjhDMFx1NjdFNSByb290KFx1OTg3OVx1NzZFRVx1NjgzOVx1OERFRlx1NUY4NCkgXHU4REVGXHU1Rjg0XHU0RTBCIC5lbnZcdTMwMDEuZW52LmRldmVsb3BtZW50IFx1NzNBRlx1NTg4M1x1NjU4N1x1NEVGNlx1RkYwQ1x1OEY5M1x1NTFGQSBOT0RFX0VOViBcdTU0OEMgVklURV8gXHU1RjAwXHU1OTM0XHU3Njg0XHU5NTJFXHU1MDNDXHU5NjFGXHJcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCByb290KVxyXG4gIC8vIFx1OEJGQlx1NTNENlx1NUU3Nlx1NTkwNFx1NzQwNlx1NjI0MFx1NjcwOVx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNiAuZW52XHJcbiAgY29uc3Qgdml0ZUVudiA9IHdyYXBwZXJFbnYoZW52KVxyXG5cclxuICBjb25zdCB7IFZJVEVfUFVCTElDX1BBVEgsIFZJVEVfRFJPUF9DT05TT0xFLCBWSVRFX1BPUlQsIFZJVEVfUFJPWFksIFZJVEVfR0xPQl9QUk9EX01PQ0sgfVxyXG4gICAgPSB2aXRlRW52XHJcblxyXG4gIGNvbnN0IHByb2RNb2NrID0gVklURV9HTE9CX1BST0RfTU9DS1xyXG5cclxuICBjb25zdCBpc0J1aWxkID0gY29tbWFuZCA9PT0gJ2J1aWxkJ1xyXG4gIC8vIGNvbW1hbmQgPT09ICdidWlsZCdcclxuICByZXR1cm4ge1xyXG4gICAgYmFzZTogVklURV9QVUJMSUNfUEFUSCxcclxuICAgIHJvb3QsXHJcblxyXG4gICAgLy8gXHU1MjJCXHU1NDBEXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiBbXHJcbiAgICAgICAgLy8gQC94eHh4ID0+IHNyYy94eHh4XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmluZDogL1xcQFxcLy8sXHJcbiAgICAgICAgICByZXBsYWNlbWVudDogYCR7cGF0aFJlc29sdmUoJ3NyYycpfS9gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gIy94eHh4ID0+IHR5cGVzL3h4eHhcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaW5kOiAvXFwjXFwvLyxcclxuICAgICAgICAgIHJlcGxhY2VtZW50OiBgJHtwYXRoUmVzb2x2ZSgndHlwZXMnKX0vYCxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBkZWR1cGU6IFsndnVlJ10sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFx1NUI5QVx1NEU0OVx1NTE2OFx1NUM0MFx1NUUzOFx1OTFDRlx1NjZGRlx1NjM2Mlx1NjVCOVx1NUYwRlxyXG4gICAgZGVmaW5lOiB7XHJcbiAgICAgIC8vIFx1NTcyOFx1NzUxRlx1NEVBN1x1NEUyRCBcdTU0MkZcdTc1MjgvXHU3OTgxXHU3NTI4IGludGxpZnktZGV2dG9vbHMgXHU1NDhDIHZ1ZS1kZXZ0b29scyBcdTY1MkZcdTYzMDFcdUZGMENcdTlFRDhcdThCQTRcdTUwM0MgZmFsc2VcclxuICAgICAgX19JTlRMSUZZX1BST0RfREVWVE9PTFNfXzogZmFsc2UsXHJcbiAgICAgIF9fQVBQX0lORk9fXzogSlNPTi5zdHJpbmdpZnkoX19BUFBfSU5GT19fKSxcclxuICAgIH0sXHJcblxyXG4gICAgZXNidWlsZDoge1xyXG4gICAgICAvLyBcdTRGN0ZcdTc1MjggZXNidWlsZCBcdTUzOEJcdTdGMjkgXHU1MjU0XHU5NjY0IGNvbnNvbGUubG9nXHJcbiAgICAgIGRyb3A6IFZJVEVfRFJPUF9DT05TT0xFID8gWydkZWJ1Z2dlcicsICdjb25zb2xlJ10gOiBbXSxcclxuICAgICAgLy8gbWluaWZ5OiB0cnVlLCAvLyBtaW5pZnk6IHRydWUsIFx1N0I0OVx1NEU4RSBtaW5pZnk6ICdlc2J1aWxkJyxcclxuICAgIH0sXHJcblxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgLy8gXHU4QkJFXHU3RjZFXHU2NzAwXHU3RUM4XHU2Nzg0XHU1RUZBXHU3Njg0XHU2RDRGXHU4OUM4XHU1NjY4XHU1MTdDXHU1QkI5XHU3NkVFXHU2ODA3XHJcbiAgICAgIHRhcmdldDogJ2VzMjAxNScsXHJcbiAgICAgIG1pbmlmeTogJ2VzYnVpbGQnLFxyXG4gICAgICAvLyBcdTY3ODRcdTVFRkFcdTU0MEVcdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTAgc291cmNlIG1hcCBcdTY1ODdcdTRFRjYoXHU3NTI4XHU0RThFXHU3RUJGXHU0RTBBXHU2MkE1XHU5NTE5XHU0RUUzXHU3ODAxXHU2MkE1XHU5NTE5XHU2NjIwXHU1QzA0XHU1QkY5XHU1RTk0XHU0RUUzXHU3ODAxKVxyXG4gICAgICBzb3VyY2VtYXA6IGZhbHNlLFxyXG4gICAgICBjc3NUYXJnZXQ6ICdjaHJvbWU4MCcsXHJcbiAgICAgIC8vIFx1NjMwN1x1NUI5QVx1OEY5M1x1NTFGQVx1OERFRlx1NUY4NFx1RkYwOFx1NzZGOFx1NUJGOVx1NEU4RSBcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTUpXHJcbiAgICAgIG91dERpcjogT1VUUFVUX0RJUixcclxuICAgICAgLy8gXHU1M0VBXHU2NzA5IG1pbmlmeSBcdTRFM0EgdGVyc2VyIFx1NzY4NFx1NjVGNlx1NTAxOSwgXHU2NzJDXHU5MTREXHU3RjZFXHU5ODc5XHU2MjREXHU4MEZEXHU4RDc3XHU0RjVDXHU3NTI4XHJcbiAgICAgIC8vIHRlcnNlck9wdGlvbnM6IHtcclxuICAgICAgLy8gICBjb21wcmVzczoge1xyXG4gICAgICAvLyAgICAgLy8gXHU5NjMyXHU2QjYyIEluZmluaXR5IFx1ODhBQlx1NTM4Qlx1N0YyOVx1NjIxMCAxLzBcdUZGMENcdThGRDlcdTUzRUZcdTgwRkRcdTRGMUFcdTVCRkNcdTgxRjQgQ2hyb21lIFx1NEUwQVx1NzY4NFx1NjAyN1x1ODBGRFx1OTVFRVx1OTg5OFxyXG4gICAgICAvLyAgICAga2VlcF9pbmZpbml0eTogdHJ1ZSxcclxuICAgICAgLy8gICAgIC8vIFx1NjI1M1x1NTMwNVx1NjYyRlx1NTQyNlx1ODFFQVx1NTJBOFx1NTIyMFx1OTY2NCBjb25zb2xlXHJcbiAgICAgIC8vICAgICBkcm9wX2NvbnNvbGU6IFZJVEVfRFJPUF9DT05TT0xFLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIC8vIFx1NTQyRlx1NzUyOC9cdTc5ODFcdTc1MjggZ3ppcCBcdTUzOEJcdTdGMjlcdTU5MjdcdTVDMEZcdTYyQTVcdTU0NEFcclxuICAgICAgLy8gXHU1MzhCXHU3RjI5XHU1OTI3XHU1NzhCXHU4RjkzXHU1MUZBXHU2NTg3XHU0RUY2XHU1M0VGXHU4MEZEXHU0RjFBXHU1Rjg4XHU2MTYyXHVGRjBDXHU1NkUwXHU2QjY0XHU3OTgxXHU3NTI4XHU4QkU1XHU1MjlGXHU4MEZEXHU1M0VGXHU4MEZEXHU0RjFBXHU2M0QwXHU5QUQ4XHU1OTI3XHU1NzhCXHU5ODc5XHU3NkVFXHU3Njg0XHU2Nzg0XHU1RUZBXHU2MDI3XHU4MEZEXHJcbiAgICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxyXG4gICAgICAvLyBjaHVuayBcdTU5MjdcdTVDMEZcdThCNjZcdTU0NEFcdTc2ODRcdTk2NTBcdTUyMzZcdUZGMDhcdTRFRTUga2JzIFx1NEUzQVx1NTM1NVx1NEY0RFx1RkYwOVxyXG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwMDAsXHJcbiAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NUU5NVx1NUM0Mlx1NzY4NCBSb2xsdXAgXHU2MjUzXHU1MzA1XHU5MTREXHU3RjZFXHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAvLyBcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTUyMDZcdTdDN0JcdTYyNTNcdTUzMDVcclxuICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnanMvW25hbWVdLVtoYXNoXS5qcycsIC8vIFx1NUYxNVx1NTE2NVx1NjU4N1x1NEVGNlx1NTQwRFx1NzY4NFx1NTQwRFx1NzlGMFxyXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdqcy9bbmFtZV0tW2hhc2hdLmpzJywgLy8gXHU1MzA1XHU3Njg0XHU1MTY1XHU1M0UzXHU2NTg3XHU0RUY2XHU1NDBEXHU3OUYwXHJcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF0nLCAvLyBcdThENDRcdTZFOTBcdTY1ODdcdTRFRjZcdTUwQ0YgXHU1QjU3XHU0RjUzXHVGRjBDXHU1NkZFXHU3MjQ3XHU3QjQ5XHJcbiAgICAgICAgICAvLyBcdTVDMDYgbm9kZV9tb2R1bGVzIFx1NEUwOVx1NjVCOVx1NEY5RFx1OEQ1Nlx1NTMwNVx1NjcwMFx1NUMwRlx1NTMxNlx1NjJDNlx1NTIwNlxyXG4gICAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcclxuICAgICAgICAgICAgICBjb25zdCBwYXRocyA9IGlkLnRvU3RyaW5nKCkuc3BsaXQoJ25vZGVfbW9kdWxlcy8nKVxyXG4gICAgICAgICAgICAgIGlmIChwYXRoc1syXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGhzWzJdLnNwbGl0KCcvJylbMF0udG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhdGhzWzFdLnNwbGl0KCcvJylbMF0udG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGNzczoge1xyXG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgICAgbGVzczoge1xyXG4gICAgICAgICAgbW9kaWZ5VmFyczoge30sXHJcbiAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIC8vIFx1NkNFOFx1NTE2NVx1NTE2OFx1NUM0MCBsZXNzIFx1NTNEOFx1OTFDRlxyXG4gICAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwic3JjL3N0eWxlcy92YXIubGVzc1wiO2AsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgIGhvc3Q6IHRydWUsXHJcbiAgICAgIC8vIFx1NjcwRFx1NTJBMVx1NTQyRlx1NTJBOFx1NjVGNlx1NjYyRlx1NTQyNlx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMFx1NkQ0Rlx1ODlDOFx1NTY2OFxyXG4gICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICAvLyBcdTY3MERcdTUyQTFcdTdBRUZcdTUzRTNcdTUzRjdcclxuICAgICAgcG9ydDogTnVtYmVyKFZJVEVfUE9SVCksXHJcbiAgICAgIHByb3h5OiBjcmVhdGVQcm94eShWSVRFX1BST1hZKSxcclxuICAgICAgLy8gXHU5ODg0XHU3MEVEXHU2NTg3XHU0RUY2XHU0RUU1XHU5NjREXHU0RjRFXHU1NDJGXHU1MkE4XHU2NzFGXHU5NUY0XHU3Njg0XHU1MjFEXHU1OUNCXHU5ODc1XHU5NzYyXHU1MkEwXHU4RjdEXHU2NUY2XHU5NTdGXHJcbiAgICAgIHdhcm11cDoge1xyXG4gICAgICAgIC8vIFx1OTg4NFx1NzBFRFx1NzY4NFx1NUJBMlx1NjIzN1x1N0FFRlx1NjU4N1x1NEVGNlx1RkYxQVx1OTk5Nlx1OTg3NVx1MzAwMXZpZXdzXHUzMDAxIGNvbXBvbmVudHNcclxuICAgICAgICBjbGllbnRGaWxlczogWycuL2luZGV4Lmh0bWwnLCAnLi9zcmMve3ZpZXdzLGNvbXBvbmVudHN9LyonXSxcclxuICAgICAgfSxcclxuICAgICAgLy8gcHJveHk6IHtcclxuICAgICAgLy8gICAgICcvYXBpJzoge1xyXG4gICAgICAvLyAgICAgICAgIHRhcmdldDogJycsXHJcbiAgICAgIC8vICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAvLyAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnL2FwaS92MScpXHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBcdTRGOURcdThENTZcdTk4ODRcdTY3ODRcdTVFRkFcdUZGMEN2aXRlIFx1NTQyRlx1NTJBOFx1NjVGNlx1NEYxQVx1NUMwNlx1NEUwQlx1OTc2MiBpbmNsdWRlIFx1OTFDQ1x1NzY4NFx1NkEyMVx1NTc1N1x1RkYwQ1x1N0YxNlx1OEJEMVx1NjIxMCBlc20gXHU2ODNDXHU1RjBGXHU1RTc2XHU3RjEzXHU1QjU4XHU1MjMwIG5vZGVfbW9kdWxlcy8udml0ZSBcdTY1ODdcdTRFRjZcdTU5MzlcdUZGMENcclxuICAgICAgICogXHU5ODc1XHU5NzYyXHU1MkEwXHU4RjdEXHU1MjMwXHU1QkY5XHU1RTk0XHU2QTIxXHU1NzU3XHU2NUY2XHU1OTgyXHU2NzlDXHU2RDRGXHU4OUM4XHU1NjY4XHU2NzA5XHU3RjEzXHU1QjU4XHU1QzMxXHU4QkZCXHU1M0Q2XHU2RDRGXHU4OUM4XHU1NjY4XHU3RjEzXHU1QjU4XHVGRjBDXHU1OTgyXHU2NzlDXHU2Q0ExXHU2NzA5XHU0RjFBXHU4QkZCXHU1M0Q2XHU2NzJDXHU1NzMwXHU3RjEzXHU1QjU4XHU1RTc2XHU2MzA5XHU5NzAwXHU1MkEwXHU4RjdEXHJcbiAgICAgICAqIFx1NUMyNFx1NTE3Nlx1NUY1M1x1NjBBOFx1Nzk4MVx1NzUyOFx1NkQ0Rlx1ODlDOFx1NTY2OFx1N0YxM1x1NUI1OFx1NjVGNlx1RkYwOFx1OEZEOVx1NzlDRFx1NjBDNVx1NTFCNVx1NTNFQVx1NUU5NFx1OEJFNVx1NTNEMVx1NzUxRlx1NTcyOFx1OEMwM1x1OEJENVx1OTYzNlx1NkJCNVx1RkYwOVx1NUZDNVx1OTg3Qlx1NUMwNlx1NUJGOVx1NUU5NFx1NkEyMVx1NTc1N1x1NTJBMFx1NTE2NVx1NTIzMCBpbmNsdWRlIFx1OTFDQ1x1RkYwQ1xyXG4gICAgICAgKiBcdTU0MjZcdTUyMTlcdTRGMUFcdTkwNDdcdTUyMzBcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcdTUyMDdcdTYzNjJcdTk4NzVcdTk3NjJcdTUzNjFcdTk4N0ZcdTc2ODRcdTk1RUVcdTk4OThcdUZGMDh2aXRlIFx1NEYxQVx1OEJBNFx1NEUzQVx1NUI4M1x1NjYyRlx1NEUwMFx1NEUyQVx1NjVCMFx1NzY4NFx1NEY5RFx1OEQ1Nlx1NTMwNVx1NEYxQVx1OTFDRFx1NjVCMFx1NTJBMFx1OEY3RFx1NUU3Nlx1NUYzQVx1NTIzNlx1NTIzN1x1NjVCMFx1OTg3NVx1OTc2Mlx1RkYwOVx1RkYwQ1xyXG4gICAgICAgKiBcdTU2RTBcdTRFM0FcdTVCODNcdTY1RTJcdTY1RTBcdTZDRDVcdTRGN0ZcdTc1MjhcdTZENEZcdTg5QzhcdTU2NjhcdTdGMTNcdTVCNThcdUZGMENcdTUzQzhcdTZDQTFcdTY3MDlcdTU3MjhcdTY3MkNcdTU3MzAgbm9kZV9tb2R1bGVzLy52aXRlIFx1OTFDQ1x1N0YxM1x1NUI1OFxyXG4gICAgICAgKiBcdTZFMjlcdTk5QThcdTYzRDBcdTc5M0FcdUZGMUFcdTU5ODJcdTY3OUNcdTRGNjBcdTRGN0ZcdTc1MjhcdTc2ODRcdTdCMkNcdTRFMDlcdTY1QjlcdTVFOTNcdTY2MkZcdTUxNjhcdTVDNDBcdTVGMTVcdTUxNjVcdUZGMENcdTRFNUZcdTVDMzFcdTY2MkZcdTVGMTVcdTUxNjVcdTUyMzAgc3JjL21haW4udHMgXHU2NTg3XHU0RUY2XHU5MUNDXHVGRjBDXHJcbiAgICAgICAqIFx1NUMzMVx1NEUwRFx1OTcwMFx1ODk4MVx1NTE4RFx1NkRGQlx1NTJBMFx1NTIzMCBpbmNsdWRlIFx1OTFDQ1x1NEU4Nlx1RkYwQ1x1NTZFMFx1NEUzQSB2aXRlIFx1NEYxQVx1ODFFQVx1NTJBOFx1NUMwNlx1NUI4M1x1NEVFQ1x1N0YxM1x1NUI1OFx1NTIzMCBub2RlX21vZHVsZXMvLnZpdGVcclxuICAgICAgICovXHJcbiAgICAgIGluY2x1ZGU6IFtcclxuICAgICAgICAncGluaWEnLFxyXG4gICAgICAgICdsb2Rhc2gtZXMnLFxyXG4gICAgICAgICdheGlvcycsXHJcbiAgICAgIF0sXHJcbiAgICAgIC8vIFx1NjI1M1x1NTMwNVx1NjVGNlx1NUYzQVx1NTIzNlx1NjM5Mlx1OTY2NFx1NzY4NFx1NEY5RFx1OEQ1Nlx1OTg3OVxyXG4gICAgICBleGNsdWRlOiBbXHJcbiAgICAgICAgLy8gaHR0cHM6Ly93d3cubXVsaW5neXVlci5jb20vYXJjaGl2ZXMvOTI4L1xyXG4gICAgICAgICd2YW50JyxcclxuICAgICAgICAnQHZhbnQvdXNlJyxcclxuICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gXHU1MkEwXHU4RjdEXHU2M0QyXHU0RUY2XHJcbiAgICBwbHVnaW5zOiBjcmVhdGVWaXRlUGx1Z2lucyh2aXRlRW52LCBpc0J1aWxkLCBwcm9kTW9jayksXHJcbiAgfVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcc3R1ZHlDb2RlXFxcXHZ1ZTMtdmFudDQtbW9iaWxlXFxcXGJ1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxzdHVkeUNvZGVcXFxcdnVlMy12YW50NC1tb2JpbGVcXFxcYnVpbGRcXFxcdXRpbHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3N0dWR5Q29kZS92dWUzLXZhbnQ0LW1vYmlsZS9idWlsZC91dGlscy50c1wiO2ltcG9ydCBmcyBmcm9tICdub2RlOmZzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGV2Rm4obW9kZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIG1vZGUgPT09ICdkZXZlbG9wbWVudCdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZEZuKG1vZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBtb2RlID09PSAncHJvZHVjdGlvbidcclxufVxyXG5cclxuLyoqXHJcbiAqIFdoZXRoZXIgdG8gZ2VuZXJhdGUgcGFja2FnZSBwcmV2aWV3XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNSZXBvcnRNb2RlKCk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBwcm9jZXNzLmVudi5SRVBPUlQgPT09ICd0cnVlJ1xyXG59XHJcblxyXG4vLyBSZWFkIGFsbCBlbnZpcm9ubWVudCB2YXJpYWJsZSBjb25maWd1cmF0aW9uIGZpbGVzIHRvIHByb2Nlc3MuZW52XHJcbi8vIFx1OEJGQlx1NTNENlx1NUU3Nlx1NTkwNFx1NzQwNlx1NjI0MFx1NjcwOVx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNiAuZW52XHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwcGVyRW52KGVudkNvbmY6IFJlY29yZGFibGUpOiBWaXRlRW52IHtcclxuICBjb25zdCByZXQ6IGFueSA9IHt9XHJcblxyXG4gIGZvciAoY29uc3QgZW52TmFtZSBvZiBPYmplY3Qua2V5cyhlbnZDb25mKSkge1xyXG4gICAgLy8gXHU1M0JCXHU5NjY0XHU3QTdBXHU2ODNDXHJcbiAgICBsZXQgcmVhbE5hbWUgPSBlbnZDb25mW2Vudk5hbWVdLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKVxyXG4gICAgcmVhbE5hbWUgPSByZWFsTmFtZSA9PT0gJ3RydWUnID8gdHJ1ZSA6IHJlYWxOYW1lID09PSAnZmFsc2UnID8gZmFsc2UgOiByZWFsTmFtZVxyXG5cclxuICAgIGlmIChlbnZOYW1lID09PSAnVklURV9QT1JUJykge1xyXG4gICAgICByZWFsTmFtZSA9IE51bWJlcihyZWFsTmFtZSlcclxuICAgIH1cclxuICAgIGlmIChlbnZOYW1lID09PSAnVklURV9QUk9YWScpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZWFsTmFtZSA9IEpTT04ucGFyc2UocmVhbE5hbWUpXHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2ggKGVycm9yKSB7fVxyXG4gICAgfVxyXG4gICAgcmV0W2Vudk5hbWVdID0gcmVhbE5hbWVcclxuICAgIHByb2Nlc3MuZW52W2Vudk5hbWVdID0gcmVhbE5hbWVcclxuICB9XHJcbiAgcmV0dXJuIHJldFxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc3RhcnRpbmcgd2l0aCB0aGUgc3BlY2lmaWVkIHByZWZpeFxyXG4gKiBAcGFyYW0gbWF0Y2ggcHJlZml4XHJcbiAqIEBwYXJhbSBjb25mRmlsZXMgZXh0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW52Q29uZmlnKG1hdGNoID0gJ1ZJVEVfR0xPQl8nLCBjb25mRmlsZXMgPSBbJy5lbnYnLCAnLmVudi5wcm9kdWN0aW9uJ10pIHtcclxuICBsZXQgZW52Q29uZmlnID0ge31cclxuICBjb25mRmlsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZW52ID0gZG90ZW52LnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgaXRlbSkpKVxyXG4gICAgICBlbnZDb25maWcgPSB7IC4uLmVudkNvbmZpZywgLi4uZW52IH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge31cclxuICB9KVxyXG5cclxuICBPYmplY3Qua2V5cyhlbnZDb25maWcpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChgXigke21hdGNofSlgKVxyXG4gICAgaWYgKCFyZWcudGVzdChrZXkpKSB7XHJcbiAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoZW52Q29uZmlnLCBrZXkpXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gZW52Q29uZmlnXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdXNlciByb290IGRpcmVjdG9yeVxyXG4gKiBAcGFyYW0gZGlyIGZpbGUgcGF0aFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RQYXRoKC4uLmRpcjogc3RyaW5nW10pIHtcclxuICByZXR1cm4gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIC4uLmRpcilcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXHN0dWR5Q29kZVxcXFx2dWUzLXZhbnQ0LW1vYmlsZVxcXFxidWlsZFxcXFx2aXRlXFxcXHBsdWdpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcc3R1ZHlDb2RlXFxcXHZ1ZTMtdmFudDQtbW9iaWxlXFxcXGJ1aWxkXFxcXHZpdGVcXFxccGx1Z2luXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9zdHVkeUNvZGUvdnVlMy12YW50NC1tb2JpbGUvYnVpbGQvdml0ZS9wbHVnaW4vaW5kZXgudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCB7IGNvbmZpZ0h0bWxQbHVnaW4gfSBmcm9tICcuL2h0bWwnXHJcbmltcG9ydCB7IGNvbmZpZ01vY2tQbHVnaW4gfSBmcm9tICcuL21vY2snXHJcbmltcG9ydCB7IGNvbmZpZ0NvbXByZXNzUGx1Z2luIH0gZnJvbSAnLi9jb21wcmVzcydcclxuaW1wb3J0IHsgY29uZmlnVmlzdWFsaXplckNvbmZpZyB9IGZyb20gJy4vdmlzdWFsaXplcidcclxuaW1wb3J0IHsgY29uZmlnU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICcuL3N2Z1Nwcml0ZSdcclxuXHJcbi8qKlxyXG4gKiBcdTkxNERcdTdGNkUgdml0ZSBcdTYzRDJcdTRFRjZcclxuICogQHBhcmFtIHZpdGVFbnYgdml0ZSBcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcdTk1MkVcdTUwM0NcdTk2MUYgb2JqZWN0XHJcbiAqIEBwYXJhbSBpc0J1aWxkIFx1NjYyRlx1NTQyNlx1NjYyRiBidWlsZCBcdTczQUZcdTU4ODMgdHJ1ZS9mYWxzZVxyXG4gKiBAcmV0dXJucyB2aXRlUGx1Z2luc1tdXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVml0ZVBsdWdpbnModml0ZUVudjogVml0ZUVudiwgaXNCdWlsZDogYm9vbGVhbiwgcHJvZE1vY2s6IGJvb2xlYW4pIHtcclxuICAvLyBWSVRFX0JVSUxEX0NPTVBSRVNTIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOCBnemlwIFx1NTM4Qlx1N0YyOVx1NjIxNiBicm90bGkgXHU1MzhCXHU3RjI5XHJcbiAgLy8gXHU1M0VGXHU5MDA5OiBnemlwIHwgYnJvdGxpIHwgbm9uZVx1RkYwQ1xyXG4gIC8vIFx1NTk4Mlx1Njc5Q1x1NEY2MFx1OTcwMFx1ODk4MVx1NTkxQVx1NzlDRFx1NUY2Mlx1NUYwRlx1RkYwQ1x1NEY2MFx1NTNFRlx1NEVFNVx1NzUyOCcsJ1x1Njc2NVx1NTIwNlx1OTY5NFxyXG5cclxuICAvLyBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRSBcdTYyNTNcdTUzMDVcdTRGN0ZcdTc1MjhcdTUzOEJcdTdGMjlcdTY1RjZcdTY2MkZcdTU0MjZcdTUyMjBcdTk2NjRcdTUzOUZcdTU5Q0JcdTY1ODdcdTRFRjZcdUZGMENcdTlFRDhcdThCQTRcdTRFM0EgZmFsc2VcclxuICBjb25zdCB7IFZJVEVfVVNFX01PQ0ssIFZJVEVfQlVJTERfQ09NUFJFU1MsIFZJVEVfQlVJTERfQ09NUFJFU1NfREVMRVRFX09SSUdJTl9GSUxFIH0gPSB2aXRlRW52XHJcblxyXG4gIGNvbnN0IHZpdGVQbHVnaW5zOiAoUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10pW10gPSBbXHJcbiAgICAvLyBoYXZlIHRvXHJcbiAgICB2dWUoKSxcclxuICAgIC8vIFx1NjMwOVx1OTcwMFx1NUYxNVx1NTE2NVZhbnRVaVx1NEUxNFx1ODFFQVx1NTJBOFx1NTIxQlx1NUVGQVx1N0VDNFx1NEVGNlx1NThGMFx1NjYwRVxyXG4gICAgQ29tcG9uZW50cyh7XHJcbiAgICAgIGR0czogdHJ1ZSxcclxuICAgICAgcmVzb2x2ZXJzOiBbVmFudFJlc29sdmVyKCldLFxyXG4gICAgICB0eXBlczogW10sXHJcbiAgICB9KSxcclxuICAgIC8vIFVub0NTU1xyXG4gICAgVW5vQ1NTKCksXHJcblxyXG4gICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgIC8vIHRhcmdldHMgdG8gdHJhbnNmb3JtXHJcbiAgICAgIGluY2x1ZGU6IFtcclxuICAgICAgICAvXFwuW3RqXXN4PyQvLCAvLyAudHMsIC50c3gsIC5qcywgLmpzeFxyXG4gICAgICAgIC9cXC52dWUkLyxcclxuICAgICAgICAvXFwudnVlXFw/dnVlLywgLy8gLnZ1ZVxyXG4gICAgICBdLFxyXG4gICAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgLy8gcHJlc2V0c1xyXG4gICAgICAgICd2dWUnLFxyXG4gICAgICAgICd2dWUtcm91dGVyJyxcclxuICAgICAgICAncGluaWEnLFxyXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxyXG4gICAgICBdLFxyXG4gICAgICBkdHM6ICd0eXBlcy9hdXRvLWltcG9ydHMuZC50cycsXHJcbiAgICB9KSxcclxuICBdXHJcblxyXG4gIC8vIFx1NTJBMFx1OEY3RCBodG1sIFx1NjNEMlx1NEVGNiB2aXRlLXBsdWdpbi1odG1sXHJcbiAgdml0ZVBsdWdpbnMucHVzaChjb25maWdIdG1sUGx1Z2luKHZpdGVFbnYsIGlzQnVpbGQpKVxyXG5cclxuICAvLyByb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcclxuICB2aXRlUGx1Z2lucy5wdXNoKGNvbmZpZ1Zpc3VhbGl6ZXJDb25maWcoKSlcclxuXHJcbiAgLy8gdml0ZS1wbHVnaW4tbW9ja1xyXG4gIFZJVEVfVVNFX01PQ0sgJiYgdml0ZVBsdWdpbnMucHVzaChjb25maWdNb2NrUGx1Z2luKGlzQnVpbGQsIHByb2RNb2NrKSlcclxuXHJcbiAgLy8gdml0ZS1wbHVnaW4tc3ZnLWljb25zXHJcbiAgdml0ZVBsdWdpbnMucHVzaChjb25maWdTdmdJY29uc1BsdWdpbihpc0J1aWxkKSlcclxuXHJcbiAgaWYgKGlzQnVpbGQpIHtcclxuICAgIC8vIHJvbGx1cC1wbHVnaW4tZ3ppcFxyXG4gICAgLy8gXHU1MkEwXHU4RjdEIGd6aXAgXHU2MjUzXHU1MzA1XHJcbiAgICB2aXRlUGx1Z2lucy5wdXNoKFxyXG4gICAgICBjb25maWdDb21wcmVzc1BsdWdpbihWSVRFX0JVSUxEX0NPTVBSRVNTLCBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRSksXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gdml0ZVBsdWdpbnNcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXHN0dWR5Q29kZVxcXFx2dWUzLXZhbnQ0LW1vYmlsZVxcXFxidWlsZFxcXFx2aXRlXFxcXHBsdWdpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcc3R1ZHlDb2RlXFxcXHZ1ZTMtdmFudDQtbW9iaWxlXFxcXGJ1aWxkXFxcXHZpdGVcXFxccGx1Z2luXFxcXGh0bWwudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3N0dWR5Q29kZS92dWUzLXZhbnQ0LW1vYmlsZS9idWlsZC92aXRlL3BsdWdpbi9odG1sLnRzXCI7LyoqXHJcbiAqIFBsdWdpbiB0byBtaW5pbWl6ZSBhbmQgdXNlIGVqcyB0ZW1wbGF0ZSBzeW50YXggaW4gaW5kZXguaHRtbC5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2FubmN3Yi92aXRlLXBsdWdpbi1odG1sXHJcbiAqL1xyXG5pbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJ1xyXG5pbXBvcnQgcGtnIGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbidcclxuaW1wb3J0IHsgR0xPQl9DT05GSUdfRklMRV9OQU1FIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnSHRtbFBsdWdpbihlbnY6IFZpdGVFbnYsIGlzQnVpbGQ6IGJvb2xlYW4pIHtcclxuICBjb25zdCB7IFZJVEVfR0xPQl9BUFBfVElUTEUsIFZJVEVfUFVCTElDX1BBVEggfSA9IGVudlxyXG5cclxuICBjb25zdCBwYXRoID0gVklURV9QVUJMSUNfUEFUSC5lbmRzV2l0aCgnLycpID8gVklURV9QVUJMSUNfUEFUSCA6IGAke1ZJVEVfUFVCTElDX1BBVEh9L2BcclxuXHJcbiAgY29uc3QgZ2V0QXBwQ29uZmlnU3JjID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGAke3BhdGggfHwgJy8nfSR7R0xPQl9DT05GSUdfRklMRV9OQU1FfT92PSR7cGtnLnZlcnNpb259LSR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YFxyXG4gIH1cclxuXHJcbiAgLy8gXHU1RjUzXHU2MjY3XHU4ODRDIHlhcm4gYnVpbGQgXHU2Nzg0XHU1RUZBXHU5ODc5XHU3NkVFXHU0RTRCXHU1NDBFXHVGRjBDXHU0RjFBXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwIF9hcHAuY29uZmlnLmpzIFx1NjU4N1x1NEVGNlx1NUU3Nlx1NjNEMlx1NTE2NSBpbmRleC5odG1sXHJcbiAgLy8gX2FwcC5jb25maWcuanMgXHU3NTI4XHU0RThFXHU5ODc5XHU3NkVFXHU1NzI4XHU2MjUzXHU1MzA1XHU1NDBFXHVGRjBDXHU5NzAwXHU4OTgxXHU1MkE4XHU2MDAxXHU0RkVFXHU2NTM5XHU5MTREXHU3RjZFXHU3Njg0XHU5NzAwXHU2QzQyXHVGRjBDXHU1OTgyXHU2M0E1XHU1M0UzXHU1NzMwXHU1NzQwXHJcbiAgLy8gXHU0RTBEXHU3NTI4XHU5MUNEXHU2NUIwXHU4RkRCXHU4ODRDXHU2MjUzXHU1MzA1XHVGRjBDXHU1M0VGXHU1NzI4XHU2MjUzXHU1MzA1XHU1NDBFXHU0RkVFXHU2NTM5IC9kaXN0L19hcHAuY29uZmlnLmpzIFx1NTE4NVx1NzY4NFx1NTNEOFx1OTFDRlx1RkYwQ1x1NTIzN1x1NjVCMFx1NTM3M1x1NTNFRlx1NjZGNFx1NjVCMFx1NEVFM1x1NzgwMVx1NTE4NVx1NzY4NFx1NUM0MFx1OTBFOFx1NTNEOFx1OTFDRlxyXG5cclxuICBjb25zdCBodG1sUGx1Z2luOiBQbHVnaW5PcHRpb25bXSA9IGNyZWF0ZUh0bWxQbHVnaW4oe1xyXG4gICAgbWluaWZ5OiBpc0J1aWxkLFxyXG4gICAgaW5qZWN0OiB7XHJcbiAgICAgIC8vIEluamVjdCBkYXRhIGludG8gZWpzIHRlbXBsYXRlXHJcbiAgICAgIC8vIFx1OTcwMFx1ODk4MVx1NkNFOFx1NTE2NSBpbmRleC5odG1sIGVqcyBcdTZBMjFcdTcyNDhcdTc2ODRcdTY1NzBcdTYzNkUgXHU0RjdGXHU3NTI4XHU1NzI4IGh0bWwgXHU0RTJEIFx1RkYxQTxkaXY+PCU9IHRpdGxlICU+PC9kaXY+XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0aXRsZTogVklURV9HTE9CX0FQUF9USVRMRSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vIEVtYmVkIHRoZSBnZW5lcmF0ZWQgYXBwLmNvbmZpZy5qcyBmaWxlIFx1OTcwMFx1ODk4MVx1NkNFOFx1NTE2NVx1NzY4NFx1NjgwN1x1N0I3RVx1NTIxN1x1ODg2OFxyXG4gICAgICB0YWdzOiBpc0J1aWxkXHJcbiAgICAgICAgPyBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0YWc6ICdzY3JpcHQnLFxyXG4gICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICBzcmM6IGdldEFwcENvbmZpZ1NyYygpLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgOiBbXSxcclxuICAgIH0sXHJcbiAgfSlcclxuICByZXR1cm4gaHRtbFBsdWdpblxyXG59XHJcbiIsICJ7XHJcbiAgXCJuYW1lXCI6IFwidnVlMy12YW50NC1tb2JpbGVcIixcclxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcclxuICBcInZlcnNpb25cIjogXCIyLjEuMFwiLFxyXG4gIFwicHJpdmF0ZVwiOiB0cnVlLFxyXG4gIFwicGFja2FnZU1hbmFnZXJcIjogXCJwbnBtQDguNi4xMFwiLFxyXG4gIFwiYXV0aG9yXCI6IHtcclxuICAgIFwibmFtZVwiOiBcInhpYW5nc2h1MjMzXCIsXHJcbiAgICBcImVtYWlsXCI6IFwieGlhbmdzaHUyMzNAb3V0bG9vay5jb21cIixcclxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3hpYW5nc2h1MjMzXCJcclxuICB9LFxyXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxyXG4gIFwicmVwb3NpdG9yeVwiOiB7XHJcbiAgICBcInR5cGVcIjogXCJnaXRcIixcclxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS94aWFuZ3NodTIzMy92dWUzLXZhbnQ0LW1vYmlsZS5naXRcIlxyXG4gIH0sXHJcbiAgXCJidWdzXCI6IHtcclxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3hpYW5nc2h1MjMzL3Z1ZTMtdmFudDQtbW9iaWxlL2lzc3Vlc1wiXHJcbiAgfSxcclxuICBcImVuZ2luZXNcIjoge1xyXG4gICAgXCJub2RlXCI6IFwiXjE4LjE4LjAgfHwgXjIwLjkuMCB8fCA+PTIxLjEuMFwiLFxyXG4gICAgXCJwbnBtXCI6IFwiPj04LjYuMTBcIlxyXG4gIH0sXHJcbiAgXCJzY3JpcHRzXCI6IHtcclxuICAgIFwicHJlaW5zdGFsbFwiOiBcIm5weCBvbmx5LWFsbG93IHBucG1cIixcclxuICAgIFwiYm9vdHN0cmFwXCI6IFwicG5wbSBpbnN0YWxsXCIsXHJcbiAgICBcInNlcnZlXCI6IFwibnBtIHJ1biBkZXZcIixcclxuICAgIFwiZGV2XCI6IFwiY3Jvc3MtZW52IFZJVEVfQ0pTX0lHTk9SRV9XQVJOSU5HPXRydWUgdml0ZSBkZXZcIixcclxuICAgIFwiZGV2OmRlYnVnY2pzXCI6IFwiY3Jvc3MtZW52IFZJVEVfQ0pTX1RSQUNFPXRydWUgdml0ZSBkZXZcIixcclxuICAgIFwiYnVpbGRcIjogXCJjcm9zcy1lbnYgTk9ERV9FTlY9cHJvZHVjdGlvbiB2aXRlIGJ1aWxkICYmIGVzbm8gLi9idWlsZC9zY3JpcHQvcG9zdEJ1aWxkLnRzXCIsXHJcbiAgICBcImJ1aWxkOm5vLWNhY2hlXCI6IFwicG5wbSBjbGVhbjpjYWNoZSAmJiBucG0gcnVuIGJ1aWxkXCIsXHJcbiAgICBcInJlcG9ydFwiOiBcImNyb3NzLWVudiBSRVBPUlQ9dHJ1ZSBucG0gcnVuIGJ1aWxkXCIsXHJcbiAgICBcInR5cGU6Y2hlY2tcIjogXCJ2dWUtdHNjIC0tbm9FbWl0IC0tc2tpcExpYkNoZWNrXCIsXHJcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIixcclxuICAgIFwiY2xlYW46Y2FjaGVcIjogXCJyaW1yYWYgbm9kZV9tb2R1bGVzLy5jYWNoZS8gJiYgcmltcmFmIG5vZGVfbW9kdWxlcy8udml0ZVwiLFxyXG4gICAgXCJjbGVhbjpsaWJcIjogXCJyaW1yYWYgbm9kZV9tb2R1bGVzXCIsXHJcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgLlwiLFxyXG4gICAgXCJsaW50OmZpeFwiOiBcImVzbGludCAuIC0tZml4XCIsXHJcbiAgICBcImxpbnQ6bGludC1zdGFnZWRcIjogXCJsaW50LXN0YWdlZFwiXHJcbiAgfSxcclxuICBcImRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcIkB0eXBlcy9sb2Rhc2gtZXNcIjogXCJeNC4xNy4xMlwiLFxyXG4gICAgXCJAdW5vY3NzL3Jlc2V0XCI6IFwiXjAuNTguNVwiLFxyXG4gICAgXCJAdnVldXNlL2NvcmVcIjogXCJeMTAuNy4wXCIsXHJcbiAgICBcImF4aW9zXCI6IFwiXjEuNC4wXCIsXHJcbiAgICBcImRhdGUtZm5zXCI6IFwiXjMuMC42XCIsXHJcbiAgICBcImVjaGFydHNcIjogXCJeNS40LjNcIixcclxuICAgIFwibG9kYXNoLWVzXCI6IFwiXjQuMTcuMjFcIixcclxuICAgIFwibW9ja2pzXCI6IFwiXjEuMS4wXCIsXHJcbiAgICBcIm5wcm9ncmVzc1wiOiBcIl4wLjIuMFwiLFxyXG4gICAgXCJwaW5pYVwiOiBcIl4yLjEuN1wiLFxyXG4gICAgXCJwaW5pYS1wbHVnaW4tcGVyc2lzdFwiOiBcIl4xLjAuMFwiLFxyXG4gICAgXCJxc1wiOiBcIl42LjExLjJcIixcclxuICAgIFwidmFudFwiOiBcIl40LjguMVwiLFxyXG4gICAgXCJ2dWVcIjogXCJeMy4zLjEzXCIsXHJcbiAgICBcInZ1ZS1yb3V0ZXJcIjogXCI0LjIuNVwiXHJcbiAgfSxcclxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcIkBhbnRmdS9lc2xpbnQtY29uZmlnXCI6IFwiXjIuNi4zXCIsXHJcbiAgICBcIkBjb21taXRsaW50L2NsaVwiOiBcIl4xOC40LjNcIixcclxuICAgIFwiQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbFwiOiBcIl4xOC40LjNcIixcclxuICAgIFwiQGljb25pZnkvanNvblwiOiBcIl4yLjIuMTg4XCIsXHJcbiAgICBcIkB0eXBlcy9mcy1leHRyYVwiOiBcIl4xMS4wLjRcIixcclxuICAgIFwiQHR5cGVzL21vY2tqc1wiOiBcIl4xLjAuMTBcIixcclxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTAuNVwiLFxyXG4gICAgXCJAdHlwZXMvbnByb2dyZXNzXCI6IFwiXjAuMi4zXCIsXHJcbiAgICBcIkB0eXBlcy9xc1wiOiBcIl42LjkuMTFcIixcclxuICAgIFwiQHVub2Nzcy9lc2xpbnQtcGx1Z2luXCI6IFwiXjAuNTguNFwiLFxyXG4gICAgXCJAdW5vY3NzL3ByZXNldC1pY29uc1wiOiBcIl4wLjU4LjVcIixcclxuICAgIFwiQHVub2Nzcy9wcmVzZXQtcmVtLXRvLXB4XCI6IFwiXjAuNTguNVwiLFxyXG4gICAgXCJAdW5vY3NzL3RyYW5zZm9ybWVyLWRpcmVjdGl2ZXNcIjogXCJeMC41OC40XCIsXHJcbiAgICBcIkB1bm9jc3MvdHJhbnNmb3JtZXItdmFyaWFudC1ncm91cFwiOiBcIl4wLjU4LjRcIixcclxuICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI6IFwiXjUuMC4wXCIsXHJcbiAgICBcImF1dG9wcmVmaXhlclwiOiBcIl4xMC40LjE2XCIsXHJcbiAgICBcImNyb3NzLWVudlwiOiBcIl43LjAuM1wiLFxyXG4gICAgXCJjei1naXRcIjogXCJeMS44LjBcIixcclxuICAgIFwiZG90ZW52XCI6IFwiXjE2LjMuMVwiLFxyXG4gICAgXCJlc2xpbnRcIjogXCJeOC41Ni4wXCIsXHJcbiAgICBcImVzbGludC1wbHVnaW4tZm9ybWF0XCI6IFwiXjAuMS4wXCIsXHJcbiAgICBcImVzbm9cIjogXCJeMC4xNi4zXCIsXHJcbiAgICBcImZzLWV4dHJhXCI6IFwiXjExLjIuMFwiLFxyXG4gICAgXCJsZXNzXCI6IFwiXjQuMi4wXCIsXHJcbiAgICBcImxpbnQtc3RhZ2VkXCI6IFwiXjE1LjIuMFwiLFxyXG4gICAgXCJvbmx5LWFsbG93XCI6IFwiXjEuMi4xXCIsXHJcbiAgICBcInBpY29jb2xvcnNcIjogXCJeMS4wLjBcIixcclxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuMzJcIixcclxuICAgIFwicG9zdGNzcy1tb2JpbGUtZm9yZXZlclwiOiBcIl40LjAuMFwiLFxyXG4gICAgXCJyaW1yYWZcIjogXCJeMy4wLjJcIixcclxuICAgIFwicm9sbHVwXCI6IFwiXjQuOS4xXCIsXHJcbiAgICBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiOiBcIl41LjExLjBcIixcclxuICAgIFwic2ltcGxlLWdpdC1ob29rc1wiOiBcIl4yLjkuMFwiLFxyXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuMy4zXCIsXHJcbiAgICBcInVub2Nzc1wiOiBcIl4wLjU4LjVcIixcclxuICAgIFwidW5wbHVnaW4tYXV0by1pbXBvcnRcIjogXCJeMC4xNy41XCIsXHJcbiAgICBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzXCI6IFwiXjAuMjYuMFwiLFxyXG4gICAgXCJ2aXRlXCI6IFwiXjUuMC4xMFwiLFxyXG4gICAgXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiOiBcIl4wLjUuMVwiLFxyXG4gICAgXCJ2aXRlLXBsdWdpbi1odG1sXCI6IFwiXjMuMi4yXCIsXHJcbiAgICBcInZpdGUtcGx1Z2luLW1vY2tcIjogXCJeMi45LjhcIixcclxuICAgIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI6IFwiXjIuMC4xXCIsXHJcbiAgICBcInZ1ZS10c2NcIjogXCJeMS44LjI3XCJcclxuICB9LFxyXG4gIFwic2ltcGxlLWdpdC1ob29rc1wiOiB7XHJcbiAgICBcInByZS1jb21taXRcIjogXCJwbnBtIGxpbnQtc3RhZ2VkXCIsXHJcbiAgICBcImNvbW1pdC1tc2dcIjogXCJucHggLS1uby1pbnN0YWxsIGNvbW1pdGxpbnQgLS1lZGl0ICQxXCJcclxuICB9LFxyXG4gIFwibGludC1zdGFnZWRcIjoge1xyXG4gICAgXCIqXCI6IFwiZXNsaW50IC0tZml4XCJcclxuICB9LFxyXG4gIFwiY29uZmlnXCI6IHtcclxuICAgIFwiY29tbWl0aXplblwiOiB7XHJcbiAgICAgIFwicGF0aFwiOiBcIm5vZGVfbW9kdWxlcy9jei1naXRcIlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXHN0dWR5Q29kZVxcXFx2dWUzLXZhbnQ0LW1vYmlsZVxcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcc3R1ZHlDb2RlXFxcXHZ1ZTMtdmFudDQtbW9iaWxlXFxcXGJ1aWxkXFxcXGNvbnN0YW50LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9zdHVkeUNvZGUvdnVlMy12YW50NC1tb2JpbGUvYnVpbGQvY29uc3RhbnQudHNcIjsvKipcclxuICogVGhlIG5hbWUgb2YgdGhlIGNvbmZpZ3VyYXRpb24gZmlsZSBlbnRlcmVkIGluIHRoZSBwcm9kdWN0aW9uIGVudmlyb25tZW50XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgR0xPQl9DT05GSUdfRklMRV9OQU1FID0gJ2FwcC5jb25maWcuanMnXHJcblxyXG5leHBvcnQgY29uc3QgT1VUUFVUX0RJUiA9ICdkaXN0L3ZhbnQtbW9iaWxlJ1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXHN0dWR5Q29kZVxcXFx2dWUzLXZhbnQ0LW1vYmlsZVxcXFxidWlsZFxcXFx2aXRlXFxcXHBsdWdpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcc3R1ZHlDb2RlXFxcXHZ1ZTMtdmFudDQtbW9iaWxlXFxcXGJ1aWxkXFxcXHZpdGVcXFxccGx1Z2luXFxcXG1vY2sudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3N0dWR5Q29kZS92dWUzLXZhbnQ0LW1vYmlsZS9idWlsZC92aXRlL3BsdWdpbi9tb2NrLnRzXCI7LyoqXHJcbiAqIE1vY2sgcGx1Z2luIGZvciBkZXZlbG9wbWVudCBhbmQgcHJvZHVjdGlvbi5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2FubmN3Yi92aXRlLXBsdWdpbi1tb2NrXHJcbiAqL1xyXG5pbXBvcnQgeyB2aXRlTW9ja1NlcnZlIH0gZnJvbSAndml0ZS1wbHVnaW4tbW9jaydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdNb2NrUGx1Z2luKGlzQnVpbGQ6IGJvb2xlYW4sIHByb2RNb2NrOiBib29sZWFuKSB7XHJcbiAgcmV0dXJuIHZpdGVNb2NrU2VydmUoe1xyXG4gICAgaWdub3JlOiAvXlxcXy8sXHJcbiAgICBtb2NrUGF0aDogJ21vY2snLFxyXG4gICAgbG9jYWxFbmFibGVkOiAhaXNCdWlsZCxcclxuICAgIHByb2RFbmFibGVkOiBpc0J1aWxkICYmIHByb2RNb2NrLFxyXG4gICAgaW5qZWN0Q29kZTogYFxyXG4gICAgICBpbXBvcnQgeyBzZXR1cFByb2RNb2NrU2VydmVyIH0gZnJvbSAnLi4vbW9jay9fY3JlYXRlUHJvZHVjdGlvblNlcnZlcic7XHJcblxyXG4gICAgICBzZXR1cFByb2RNb2NrU2VydmVyKCk7XHJcbiAgICAgIGAsXHJcbiAgfSlcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXHN0dWR5Q29kZVxcXFx2dWUzLXZhbnQ0LW1vYmlsZVxcXFxidWlsZFxcXFx2aXRlXFxcXHBsdWdpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcc3R1ZHlDb2RlXFxcXHZ1ZTMtdmFudDQtbW9iaWxlXFxcXGJ1aWxkXFxcXHZpdGVcXFxccGx1Z2luXFxcXGNvbXByZXNzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9zdHVkeUNvZGUvdnVlMy12YW50NC1tb2JpbGUvYnVpbGQvdml0ZS9wbHVnaW4vY29tcHJlc3MudHNcIjsvKipcclxuICogVXNlZCB0byBwYWNrYWdlIGFuZCBvdXRwdXQgZ3ppcC4gTm90ZSB0aGF0IHRoaXMgZG9lcyBub3Qgd29yayBwcm9wZXJseSBpbiBWaXRlLCB0aGUgc3BlY2lmaWMgcmVhc29uIGlzIHN0aWxsIGJlaW5nIGludmVzdGlnYXRlZFxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5uY3diL3ZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXHJcbiAqL1xyXG5pbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnXHJcblxyXG5pbXBvcnQgY29tcHJlc3NQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnQ29tcHJlc3NQbHVnaW4oXHJcbiAgY29tcHJlc3M6ICdnemlwJyB8ICdicm90bGknIHwgJ25vbmUnLFxyXG4gIGRlbGV0ZU9yaWdpbkZpbGUgPSBmYWxzZSxcclxuKTogUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10ge1xyXG4gIGNvbnN0IGNvbXByZXNzTGlzdCA9IGNvbXByZXNzLnNwbGl0KCcsJylcclxuXHJcbiAgY29uc3QgcGx1Z2luczogUGx1Z2luT3B0aW9uW10gPSBbXVxyXG5cclxuICBpZiAoY29tcHJlc3NMaXN0LmluY2x1ZGVzKCdnemlwJykpIHtcclxuICAgIHBsdWdpbnMucHVzaChcclxuICAgICAgY29tcHJlc3NQbHVnaW4oe1xyXG4gICAgICAgIGV4dDogJy5neicsXHJcbiAgICAgICAgZGVsZXRlT3JpZ2luRmlsZSxcclxuICAgICAgfSksXHJcbiAgICApXHJcbiAgfVxyXG4gIGlmIChjb21wcmVzc0xpc3QuaW5jbHVkZXMoJ2Jyb3RsaScpKSB7XHJcbiAgICBwbHVnaW5zLnB1c2goXHJcbiAgICAgIGNvbXByZXNzUGx1Z2luKHtcclxuICAgICAgICBleHQ6ICcuYnInLFxyXG4gICAgICAgIGFsZ29yaXRobTogJ2Jyb3RsaUNvbXByZXNzJyxcclxuICAgICAgICBkZWxldGVPcmlnaW5GaWxlLFxyXG4gICAgICB9KSxcclxuICAgIClcclxuICB9XHJcbiAgcmV0dXJuIHBsdWdpbnNcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXHN0dWR5Q29kZVxcXFx2dWUzLXZhbnQ0LW1vYmlsZVxcXFxidWlsZFxcXFx2aXRlXFxcXHBsdWdpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcc3R1ZHlDb2RlXFxcXHZ1ZTMtdmFudDQtbW9iaWxlXFxcXGJ1aWxkXFxcXHZpdGVcXFxccGx1Z2luXFxcXHZpc3VhbGl6ZXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3N0dWR5Q29kZS92dWUzLXZhbnQ0LW1vYmlsZS9idWlsZC92aXRlL3BsdWdpbi92aXN1YWxpemVyLnRzXCI7LyoqXHJcbiAqIFBhY2thZ2UgZmlsZSB2b2x1bWUgYW5hbHlzaXNcclxuICovXHJcbmltcG9ydCB2aXN1YWxpemVyIGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcidcclxuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgeyBpc1JlcG9ydE1vZGUgfSBmcm9tICcuLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdWaXN1YWxpemVyQ29uZmlnKCkge1xyXG4gIGlmIChpc1JlcG9ydE1vZGUoKSkge1xyXG4gICAgcmV0dXJuIHZpc3VhbGl6ZXIoe1xyXG4gICAgICBmaWxlbmFtZTogJy4vbm9kZV9tb2R1bGVzLy5jYWNoZS92aXN1YWxpemVyL3N0YXRzLmh0bWwnLFxyXG4gICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICBnemlwU2l6ZTogdHJ1ZSxcclxuICAgICAgYnJvdGxpU2l6ZTogdHJ1ZSxcclxuICAgIH0pIGFzIFBsdWdpbk9wdGlvblxyXG4gIH1cclxuICByZXR1cm4gW11cclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXHN0dWR5Q29kZVxcXFx2dWUzLXZhbnQ0LW1vYmlsZVxcXFxidWlsZFxcXFx2aXRlXFxcXHBsdWdpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcc3R1ZHlDb2RlXFxcXHZ1ZTMtdmFudDQtbW9iaWxlXFxcXGJ1aWxkXFxcXHZpdGVcXFxccGx1Z2luXFxcXHN2Z1Nwcml0ZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovc3R1ZHlDb2RlL3Z1ZTMtdmFudDQtbW9iaWxlL2J1aWxkL3ZpdGUvcGx1Z2luL3N2Z1Nwcml0ZS50c1wiOy8qKlxyXG4gKiAgVml0ZSBQbHVnaW4gZm9yIGZhc3QgY3JlYXRpbmcgU1ZHIHNwcml0ZXMuXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbm5jd2Ivdml0ZS1wbHVnaW4tc3ZnLWljb25zXHJcbiAqL1xyXG5cclxuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdTdmdJY29uc1BsdWdpbihpc0J1aWxkOiBib29sZWFuKSB7XHJcbiAgLy8gXHU2MzA3XHU1QjlBXHU5NzAwXHU4OTgxXHU3RjEzXHU1QjU4XHU3Njg0XHU1NkZFXHU2ODA3XHU2NTg3XHU0RUY2XHU1OTM5XHJcbiAgY29uc3Qgc3ZnSWNvbnNQbHVnaW4gPSBjcmVhdGVTdmdJY29uc1BsdWdpbih7XHJcbiAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2Fzc2V0cy9pY29ucycpXSxcclxuICAgIC8vIFx1NjYyRlx1NTQyNlx1NTM4Qlx1N0YyOVxyXG4gICAgc3Znb09wdGlvbnM6IGlzQnVpbGQsXHJcbiAgICAvLyBcdTYzMDdcdTVCOUFzeW1ib2xJZFx1NjgzQ1x1NUYwRlxyXG4gICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXScsXHJcbiAgfSlcclxuICByZXR1cm4gc3ZnSWNvbnNQbHVnaW5cclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXHN0dWR5Q29kZVxcXFx2dWUzLXZhbnQ0LW1vYmlsZVxcXFxidWlsZFxcXFx2aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxzdHVkeUNvZGVcXFxcdnVlMy12YW50NC1tb2JpbGVcXFxcYnVpbGRcXFxcdml0ZVxcXFxwcm94eS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovc3R1ZHlDb2RlL3Z1ZTMtdmFudDQtbW9iaWxlL2J1aWxkL3ZpdGUvcHJveHkudHNcIjsvKipcclxuICogVXNlZCB0byBwYXJzZSB0aGUgLmVudi5kZXZlbG9wbWVudCBwcm94eSBjb25maWd1cmF0aW9uXHJcbiAqL1xyXG5pbXBvcnQgdHlwZSB7IFByb3h5T3B0aW9ucyB9IGZyb20gJ3ZpdGUnXHJcblxyXG50eXBlIFByb3h5SXRlbSA9IFtzdHJpbmcsIHN0cmluZ11cclxuXHJcbnR5cGUgUHJveHlMaXN0ID0gUHJveHlJdGVtW11cclxuXHJcbnR5cGUgUHJveHlUYXJnZXRMaXN0ID0gUmVjb3JkPHN0cmluZywgUHJveHlPcHRpb25zICYgeyByZXdyaXRlOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmcgfT5cclxuXHJcbmNvbnN0IGh0dHBzUkUgPSAvXmh0dHBzOlxcL1xcLy9cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZSBwcm94eVxyXG4gKiBAcGFyYW0gbGlzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb3h5KGxpc3Q6IFByb3h5TGlzdCA9IFtdKSB7XHJcbiAgY29uc3QgcmV0OiBQcm94eVRhcmdldExpc3QgPSB7fVxyXG4gIGZvciAoY29uc3QgW3ByZWZpeCwgdGFyZ2V0XSBvZiBsaXN0KSB7XHJcbiAgICBjb25zdCBpc0h0dHBzID0gaHR0cHNSRS50ZXN0KHRhcmdldClcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaHR0cC1wYXJ0eS9ub2RlLWh0dHAtcHJveHkjb3B0aW9uc1xyXG4gICAgcmV0W3ByZWZpeF0gPSB7XHJcbiAgICAgIHRhcmdldCxcclxuICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICB3czogdHJ1ZSxcclxuICAgICAgcmV3cml0ZTogcGF0aCA9PiBwYXRoLnJlcGxhY2UobmV3IFJlZ0V4cChgXiR7cHJlZml4fWApLCAnJyksXHJcbiAgICAgIC8vIGh0dHBzIGlzIHJlcXVpcmUgc2VjdXJlPWZhbHNlXHJcbiAgICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NjBBOHNlY3VyZT1cInRydWVcIlx1NTNFQVx1NTE0MVx1OEJCOFx1Njc2NVx1ODFFQSBIVFRQUyBcdTc2ODRcdThCRjdcdTZDNDJcdUZGMENcdTUyMTlzZWN1cmU9XCJmYWxzZVwiXHU2MTBGXHU1NDczXHU3NzQwXHU1MTQxXHU4QkI4XHU2NzY1XHU4MUVBIEhUVFAgXHU1NDhDIEhUVFBTIFx1NzY4NFx1OEJGN1x1NkM0Mlx1MzAwMlxyXG4gICAgICAuLi4oaXNIdHRwcyA/IHsgc2VjdXJlOiBmYWxzZSB9IDoge30pLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldFxyXG5cclxuICAvLyByZXRcclxuICAvLyB7XHJcbiAgLy8gICAnL3Rlc3QvYXBpJzoge1xyXG4gIC8vICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwODAvdGVzdC9hcGknLFxyXG4gIC8vICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgLy8gICAgIHdzOiB0cnVlLFxyXG4gIC8vICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKG5ldyBSZWdFeHAoL15cXC90ZXN0L2FwaS8pLCAnJyksXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgJy91cGxvYWQnOiB7XHJcbiAgLy8gICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMS91cGxvYWQnLFxyXG4gIC8vICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgLy8gICAgIHdzOiB0cnVlLFxyXG4gIC8vICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKG5ldyBSZWdFeHAoL15cXC91cGxvYWQvKSwgJycpLFxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtSLFNBQVMsZUFBZTtBQUUxUyxTQUFTLGVBQWU7QUFDeEIsU0FBUyxjQUFjOzs7QUNEdkIsT0FBTyxZQUFZO0FBYVosU0FBUyxlQUF3QjtBQUN0QyxTQUFPLFFBQVEsSUFBSSxXQUFXO0FBQ2hDO0FBSU8sU0FBUyxXQUFXLFNBQThCO0FBQ3ZELFFBQU0sTUFBVyxDQUFDO0FBRWxCLGFBQVcsV0FBVyxPQUFPLEtBQUssT0FBTyxHQUFHO0FBRTFDLFFBQUksV0FBVyxRQUFRLE9BQU8sRUFBRSxRQUFRLFFBQVEsSUFBSTtBQUNwRCxlQUFXLGFBQWEsU0FBUyxPQUFPLGFBQWEsVUFBVSxRQUFRO0FBRXZFLFFBQUksWUFBWSxhQUFhO0FBQzNCLGlCQUFXLE9BQU8sUUFBUTtBQUFBLElBQzVCO0FBQ0EsUUFBSSxZQUFZLGNBQWM7QUFDNUIsVUFBSTtBQUNGLG1CQUFXLEtBQUssTUFBTSxRQUFRO0FBQUEsTUFDaEMsU0FDTyxPQUFPO0FBQUEsTUFBQztBQUFBLElBQ2pCO0FBQ0EsUUFBSSxPQUFPLElBQUk7QUFDZixZQUFRLElBQUksT0FBTyxJQUFJO0FBQUEsRUFDekI7QUFDQSxTQUFPO0FBQ1Q7OztBQ3pDQSxPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZ0JBQWdCOzs7QUNBdkIsU0FBUyx3QkFBd0I7OztBQ0xqQztBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsU0FBVztB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
