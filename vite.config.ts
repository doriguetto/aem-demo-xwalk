import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {existsSync, readdirSync} from 'fs';
import {resolve} from 'path';
import {config} from "./config.ts";

const getBlockEntry = (blockName: string, fileType: string): string | null => {
    const filePath = resolve(__dirname, `src/blocks/${blockName}/${blockName}.${fileType}`);
    return existsSync(filePath) ? filePath : null;
};

const getBlockNamesFromSrcFolder = (): string[] => {
    const blocksPath = resolve(__dirname, 'src/blocks');
    try {
        return readdirSync(blocksPath);
    } catch (error) {
        console.error(`Failed to read directory at ${blocksPath}`, error);
        return [];
    }
};

const getTsEntry = (blockName: string): Record<string, string> | null => {
    const tsPath = getBlockEntry(blockName, 'ts');
    return tsPath !== null ? {[blockName]: tsPath} : null;
};

export const generateBlockEntries = () => {
    const blockNames = getBlockNamesFromSrcFolder();
    let entries = {};
    blockNames.forEach((blockName) => {
        const tsEntry = getTsEntry(blockName);
        entries = {...entries, ...tsEntry};
    });
    return entries;
};

export default defineConfig((configEnv) => {
    // const { mainTsPath, mainScssPath, fontsScssPath, lazyStylesScssPath, sidekickLibraryStylesScssPath } = config;
    const {mainScssPath, lazyStylesScssPath, fontsScssPath} = config;
    const blocksEntries = generateBlockEntries();

    // @ts-ignore
    const inputOptions: InputOption = {
        // main: resolve(__dirname, mainTsPath),
        styles: resolve(__dirname, mainScssPath),
        ...blocksEntries,
    };

    console.log(inputOptions);

    if (fontsScssPath) inputOptions.fonts = resolve(__dirname, fontsScssPath);
    if (lazyStylesScssPath) inputOptions.lazyStyles = resolve(__dirname, lazyStylesScssPath);
    // if (sidekickLibraryStylesScssPath) {
    //   inputOptions.sidekickLibraryStyles = resolve(__dirname, sidekickLibraryStylesScssPath);
    // }

    return {
        base: '/blocks',
        plugins: [
            svelte(),
        ],
        css: {
            devSourcemap: true,
            preprocessorOptions: {
                // Path to mixins, variables, and other necessary files for transpiling SCSS: '../path/to/styles.scss'
                //  scss: {
                //    additionalData: `@import 'src/styles/<your file path>';`,
                //  },
            },
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
                Blocks: resolve(__dirname, 'src/blocks'),
                // Components: resolve(__dirname, 'src/components'),
                // Directives: resolve(__dirname, 'src/directives'),
                // Services: resolve(__dirname, 'src/services'),
                // Helpers: resolve(__dirname, 'src/helpers'),
                // Constants: resolve(__dirname, 'src/constants'),
                // Types: resolve(__dirname, 'src/types'),
                // Utils: resolve(__dirname, 'src/utils'),
            },
        },
        build: {
            sourcemap: true,
            minify: true,
            cssMinify: true,
            commonjsOptions: {
                include: ['node_modules/**'],
            },
            emptyOutDir: true,
            rollupOptions: {
                cache: false,
                preserveEntrySignatures: 'strict',
                input: inputOptions,
                output: {
                    assetFileNames: ({name}) => {
                        console.log(name)
                        if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
                            return 'assets/img/[name]-[hash][extname]';
                        }

                        if (/\.css$/.test(name ?? '')) {
                            return '[name]/[name][extname]';
                        }

                        if (/.(png|woff|woff2|eot|ttf)/.test(name ?? '')) {
                            return 'assets/fonts/[name][extname]';
                        }
                        return 'assets/[name]-[hash][extname]';
                    },

                    dir: 'blocks',
                    // assetFileNames: () => {
                    //     return '[name]/[name][extname]';
                    // },
                    // manualChunks(id) {
                    //     // Match the directory structure of the entry points
                    //     console.log('chuck>>> ',id)
                    //     const match = id.match(/src\/blocks\/(.+?)\//);
                    //     if (match) {
                    //         return `${match[1]}`; // Group by subfolder under /src/blocks
                    //     }
                    //     return id
                    // },
                    chunkFileNames: 'chunks/[name].[hash].js',
                    entryFileNames: '[name]/[name].js',
                },

                // plugins: [svelte()],
            },
        },
    };
});

