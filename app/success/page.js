import Link from 'next/link'

export default function SuccessPage() {
    return (
        <div className="flex flex-col items-center space-y-4 pt-12">
            <h3 className="text-xl">Nice!</h3>
            <Link href='/' className="hover:underline">Back home</Link>
        </div>
    )
}