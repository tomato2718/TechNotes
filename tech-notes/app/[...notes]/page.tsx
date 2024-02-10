import { tree } from "@/lib/get_notes"



export function generateStaticParams(): {[key: string]: string[]}[] {
    const notes_list: string[][] = tree.generate_list();
    
    return notes_list.map(
        (path) => {
          return {notes: path}
        }
    );
}
  

export default function Page() {
    return (
        <>
        Test
        </>
    )
  }