type ClockProps = {
    title: string
}

export default function Clock(props: ClockProps) {

    return (

        <div className="flex items-center text-gray-700 me-4">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className="text-sm ms-1">{props?.title}</span>
        </div>

    );

}