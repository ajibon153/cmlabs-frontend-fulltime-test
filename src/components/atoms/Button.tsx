import Link from 'next/link'

type ButtonProps = {
    title: string
    href: string
}

export default function Button(props: ButtonProps) {


    return (

        <Link href={props?.href}
            className="bg-orange-600 text-white text-lg px-9 py-3 rounded-full 
            transition-shadow transition-colors duration-100 tracking-wider 
            hover:bg-orange-700 hover:shadow-sm inline-flex items-center">
            <span className="me-0.5">{props?.title}</span>

            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>

        </Link>

    );

}