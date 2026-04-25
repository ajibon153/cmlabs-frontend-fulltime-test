import Link from "next/link"

type BreadcrumbItem = {
    label: string
    href?: string
}

type BreadcrumbsProps = {
    items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    console.log('items',items);
    
    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center text-sm text-gray-500">
                {items.map((item, index) => (
                    <li key={item.label} className="flex items-center">
                        {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                        {item.href && index !== items.length - 1 ? (
                            <Link href={item.href} className="hover:text-gray-900">
                                {item?.label?.replace('%20', ' ')}
                            </Link>
                        ) : (
                            <span className="font-medium text-gray-900">{item?.label?.replace('%20', ' ')}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}
