type SubHeadingProps = {
    title: string
}

export default function SubHeading(props: SubHeadingProps) {


    return (

        <header className="flex items-center border-b pb-1.5 mb-2">
            <img src="/img/leaf.svg" className="w-8 h-8 object-cover mr-2" />
            <h3 className="text-xl font-semibold text-orange-600 tracking-wider">{props?.title}</h3>
        </header>
        
    );

}