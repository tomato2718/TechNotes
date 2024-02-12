import { generateStaticParams } from './page';

test('generateStaticParams', () => {
    let params = generateStaticParams()
    params.forEach(param => {
        expect(param).toHaveProperty("notes")
        expect(param.notes).toBeInstanceOf(Array<String>)
    });
})

