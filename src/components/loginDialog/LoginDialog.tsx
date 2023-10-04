"use client"
import { useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react'
import styles from './loginDialog.module.scss';
import Link from 'next/link'

type Props = {
    title: string,
    children: React.ReactNode,
    returnLink: string;
}

export default function LoginDialog({ title, children, returnLink}: Props) {

    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showLoginDialog = searchParams.get('showLoginDialog')

    useEffect(() => {
        if (showLoginDialog === 'y') {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [showLoginDialog])

    const clickOk = () => {
        dialogRef.current?.close()
    }

    const loginDialog: JSX.Element | null = showLoginDialog === 'y'
        ? (
            <dialog ref={dialogRef} className={styles.dialog}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.dialogContent}>
                    {children}
                    <Link href={returnLink}>
                        <button
                            onClick={clickOk}
                            className={styles.closeButton}>
                                Close
                        </button>
                    </Link>
                </div>    
            </dialog>
        ) : null

    return loginDialog
}