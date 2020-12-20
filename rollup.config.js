import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const build = (input, file) => {
    return {
        input: input,
        output: [
            {
                file,
                format: 'cjs',
            },
        ],
    };
};

const components = [
    { input: 'src/index.ts', file: pkg.main },
    { input: 'src/components/atoms/Loading/index.ts', file: 'lib/Loading/index.js' },
    { input: 'src/components/atoms/Square/index.ts', file: 'lib/Square/index.js' },
    { input: 'src/components/molecules/Dropdown/index.ts', file: 'lib/Dropdown/index.js' },
    { input: 'src/components/molecules/DynamicTable/index.ts', file: 'lib/DynamicTable/index.js' },
];

const common = {
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [
        postcss({
            plugins: [],
            extract: true,
            extract: 'styles.css',
        }),
        typescript({
            typescript: require('typescript'),
        }),
    ],
};

const deploy = components.map((component) => ({ ...common, ...build(component.input, component.file) }));

export default deploy;
