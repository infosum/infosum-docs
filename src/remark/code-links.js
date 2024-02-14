import { visit } from 'unist-util-visit';

const plugin = () => {
    const transformer = async(ast) => {
        if (!process.env.BASE_URL) {
            visit(ast, 'code', (node, index, parent) => {
                parent.children[index].value = node.value.replace(
                    'https://api.integration.k8s.is',
                    'https://api.infosum.com'
                );
            });
        }
    };
    return transformer
};

export default plugin;