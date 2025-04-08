export default function AppLogo({ className }: { className?: string }) {
    return (
        <>
            <img
                src="https://assets-cdn.signable.co.uk/images/signable.blue.png"
                alt="Signable"
                {...(className ? { className } : {})}
            />
        </>
    );
}
