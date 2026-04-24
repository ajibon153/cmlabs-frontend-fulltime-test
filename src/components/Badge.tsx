type BadgeProps = {
    title: string
}

export default function Badge(props: BadgeProps) {

    return (
        <span className="bg-orange-100 text-orange-900 px-1 py-px rounded text-sm me-2">
            {props?.title}
        </span>

    );

}