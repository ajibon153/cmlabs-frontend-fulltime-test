type HeadingProps = {
    title: string
}

export default function Heading(props: HeadingProps) {

    return (

        <header className="flex justify-center mb-6 w-full">
            <img src="/img/leaf.svg" className="w-8 h-8 object-cover mr-2" />
            <h1 className="text-2xl font-semibold tracking-wider text-orange-600">{props?.title}</h1>
        </header>
    );

}