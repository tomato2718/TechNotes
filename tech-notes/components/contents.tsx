import type { ReactElement } from 'react';
import type { Dree } from 'dree';
import Link from 'next/link';

import { get_content_tree } from '@/lib/get_notes';

export function NoteContents(): ReactElement {
    let tree = get_content_tree()
    return (
        <ul className='flex flex-col list-none gap-4' id='NoteContents'>
        {
            tree.children &&
            tree.children.map(
                (child) => (
                    render_tree(child)
                )
            )
        }
        </ul>
    )
}

function render_tree(tree: Dree): ReactElement {
    return (
        <li className='ms-2' key={tree.hash}>
            {
                tree.type == 'directory' ? 
                (
                    <>
                    <h5 className='line-clamp-1	hover:line-clamp-none'>{tree.name}</h5>
                    <ul className='flex flex-col list-none border-s border-slate-500 hover:border-white gap-1 ms-1 mt-1' key={tree.hash}>
                        {
                            tree.children &&                
                            (
                                tree.children.map(
                                    (child) => (render_tree(child))
                                )
                            )
                        }
                    </ul>
                    </>
                ) :
                <Link className='text-slate-400 hover:text-white line-clamp-2 hover:line-clamp-none' href={"/" + tree.relativePath}>{tree.name}</Link>
            }
        </li>
    )
}