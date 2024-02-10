import path from 'path';

import { scan } from 'dree';

import type {Dree, ScanOptions} from 'dree';
import { List } from 'postcss/lib/list';

const postsDirectory = path.join(process.cwd(), 'contents');

export function get_content_tree(): Dree {
    const options = {
        stat: false,
        size: false,
        sizeInBytes: false,
        hash: true,
        isSymbolicLink: false,
        exclude: ['/README.md', '**/img'],
        extensions: [ 'md', 'rst' ]
      };
    const dir_tree = scan(postsDirectory, options)
    
    return dir_tree
}

class DirTree {
    public tree: Dree
    private postsDir: string
    private OPTIONS: ScanOptions = {
        stat: false,
        size: false,
        sizeInBytes: false,
        hash: true,
        symbolicLinks: false,
        exclude: ['/README.md', '**/img'],
        extensions: [ 'md', 'rst' ]
      };

    constructor() {
        this.postsDir = path.join(process.cwd(), 'contents')
        this.tree = this.generate_tree()
    }

    private generate_tree(): Dree {
        var dir_tree = scan(this.postsDir, this.OPTIONS)
        return dir_tree
    }

    public generate_list(): string[][] {
        var dir_list: string[][] = []
        function helper(sub_tree: Dree): void {
            sub_tree.type == 'directory' ? (
                sub_tree.children &&
                sub_tree.children.map(
                    (child) => (helper(child))
                )
            ) : (
                dir_list.push(sub_tree.relativePath.split("/"))
            )

        }
        helper(this.tree)
        return dir_list
    }
}

export var tree = new DirTree()
