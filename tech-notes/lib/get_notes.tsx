import path from 'path';

import { scan } from 'dree';

import type {Dree} from 'dree';

const postsDirectory = path.join(process.cwd(), 'contents');

export function get_content_tree(): Dree {
    const options = {
        stat: false,
        size: false,
        sizeInBytes: false,
        hash: true,
        isSymbolicLink: false,
        extensions: [ 'md', 'rst' ]
      };
    const dir_tree = scan(postsDirectory, options)
    
    return dir_tree
}