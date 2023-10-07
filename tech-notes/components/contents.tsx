import type { ReactElement } from 'react';
import type { Dree } from 'dree';

import { get_content_tree } from '@/lib/get_notes';

export function NoteContents(): ReactElement|null {
    let tree = get_content_tree()
    return (
        <ul>
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

function render_tree(tree: Dree): ReactElement|null {
    return (
        <li key={tree.hash}>
            {
                tree.type == 'directory' ? 
                (
                    <>
                    <h5>{tree.name}</h5>
                    <ul key={tree.hash}>
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
                <a>{tree.name}</a>
            }
        </li>
    )
}